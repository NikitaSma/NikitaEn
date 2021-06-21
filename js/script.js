let configuration = {
    totalPrice: 0,
    products: {
        product1: { price: 10, isSelected: false },
        product2: { price: 15, isSelected: false },
        product3: { price: 100, isSelected: false },
        product4: { price: 5, isSelected: false },
        product5: { price: 25, isSelected: false },
        product6: { price: 50, isSelected: false },
    },
};

const updateTotal = () => {
    document.getElementById("totalPrice").innerHTML = configuration.totalPrice;
};

const init = () => {
    updateTotal();
    for(const property in configuration.products) {
        document.getElementById(`${property}Price`).innerHTML = configuration.products[property].price;
    }
};

const isAllSelected = () => {
    for(const property in configuration.products) {
        if (!configuration.products[property].isSelected) {
            return false;
        }
    }
    return true;
}

const onProductClick = (product) => {
    const price = configuration.products[product].price;
    const isSelected = configuration.products[product].isSelected;

    isSelected
        ? document.getElementById(`${product}Layer`).style.display = 'none'
        : document.getElementById(`${product}Layer`).style.display = 'inline';

    isSelected
        ? usePulse(product)
        : useNoPulse(product);

    configuration.totalPrice = isSelected
      ? configuration.totalPrice - price
      : configuration.totalPrice + price;

    configuration.products[product].isSelected = !isSelected;

    const isAllSelectedBool = isAllSelected();

    isAllSelectedBool
        ? document.getElementById(`thanks`).style.display = 'inline'
        : document.getElementById(`thanks`).style.display = 'none';

    updateTotal();
};

function usePulse(product) {
    document.getElementById(`img_${product}`).classList.add('pulse');
    document.getElementById(`img_${product}`).classList.remove('no_pulse');
}

function useNoPulse(product) {
    document.getElementById(`img_${product}`).classList.add('no_pulse');
    document.getElementById(`img_${product}`).classList.remove('pulse');
}

const getPrivatBankUrl = () => {
    const totalPrise = configuration.totalPrice;
    return `https://www.gofundme.com/f/The-cost-of-Nikitas-life-2300000?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1`;
};

const onDonateClick = () => {
    const url = getPrivatBankUrl();
    window.location.href = url;
};

init();
