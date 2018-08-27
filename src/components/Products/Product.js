import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            selected: false
        }
    }
    render() {
        const {taste, portions, bonus, mass} = this.props;
        return(
            <div className="product">
                <div className="product__main">
                    <span className="product__slogan"> Сказочное заморское яство </span>
                    <h2 className="product__title">Нямушка</h2>
                    <h3 className="product__taste">{taste}</h3>
                    <span><span className="u-fw--bold">{portions}</span> порций</span><br />
                    <span className="product__mass">{mass} <br /><span>кг</span></span>  
                </div>
                <p>Чего сидишь? Порадуй котэ, <span className="product__buy">купи</span></p>
            </div>
        )
    }
}

export default Product;