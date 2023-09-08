import { changeOrderByPrice, getPriceColor } from './productUtils';

test('changeOrderByPrice should order products by price in descending order', () => {
    const products = [
        { id: 1, name: 'A', price: 30 },
        { id: 2, name: 'B', price: 15 },
        { id: 3, name: 'C', price: 25 },
    ];

    const orderedProducts = changeOrderByPrice(products);
    expect(orderedProducts).toEqual([
        { id: 1, name: 'A', price: 30 },
        { id: 3, name: 'C', price: 25 },
        { id: 2, name: 'B', price: 15 },
    ]);
});

test('getPriceColor should return the correct color based on the price', () => {
    expect(getPriceColor(30)).toBe('red');
    expect(getPriceColor(20)).toBe('orange');
    expect(getPriceColor(10)).toBe('green');
});
