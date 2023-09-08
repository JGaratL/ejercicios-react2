import React from 'react';
import { changeOrderByPrice, getPriceColor } from './productUtils';

export default class ProductsPage extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Chachopo', price: 30 },
            { id: 3, name: 'Navajas', price: 25 },
            { id: 2, name: 'Chorizo a la sidra', price: 15 }
        ],
        filterText: ''
    }

    changeOrderByPrice = () => {
        this.setState({ products: changeOrderByPrice(this.state.products) });
    }

    handleFilterTextChange = (e) => {
        this.setState({ filterText: e.target.value });
    }

    render() {
        const filteredProducts = this.state.products.filter(product => 
            product.name.toLowerCase().includes(this.state.filterText.toLowerCase())
        );

        return (
            <>
                <h1>Products</h1>
                <input 
                    type="text" 
                    value={this.state.filterText} 
                    onChange={this.handleFilterTextChange} 
                    placeholder="Filter products..."
                />
                <button onClick={this.changeOrderByPrice}>Change order</button>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{ color: getPriceColor(product.price) }}>
                        {product.name} - {product.price}
                    </div>
                ))}
            </>
        );
    }
}
