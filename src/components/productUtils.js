export const changeOrderByPrice = (products) => {
    return products.sort((a, b) => b.price - a.price);
};

export const getPriceColor = (price) => {
    if (price > 25) return 'red';
    if (price > 15 && price <= 25) return 'orange';
    return 'green';
};
