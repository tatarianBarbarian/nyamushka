import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            clicked: false
        }
    }

    handleProductClick = () => {
        this.setState(Object.assign(this.state,{
            clicked: !this.state.clicked
        }));
    }

    handleBuyClick = () => {
        this.setState(Object.assign(this.state, {
            selected: !this.state.selected
        }));
    }

    handleMouseLeave = () => {
        this.setState(Object.assign(this.state, {
            selected: this.state.clicked
        }));
    }

    render() {
        const {taste, portions, bonus, mass, disabled} = this.props.data;
        const {selected} = this.state;
        
        return(
            <div className={`product 
                                     ${disabled === true 
                                        ? "product--disabled" 
                                        : ''}`}>
                <div className={`product__main ${selected === true ? 'product__main--selected' : ''}`} 
                     onClick={this.handleProductClick}
                     onMouseLeave={this.handleMouseLeave}>
                    <span className="product__slogan"> Сказочное заморское яство </span>
                    <h2 className="product__title">Нямушка</h2>
                    <h3 className="product__taste">{taste}</h3>
                    <p className="u-c--grey u-mt--20"><span className="u-fw--bold">{portions}</span> порций</p><br />
                    <span className="product__mass">{mass} <br /><span>кг</span></span>  
                </div>
                {disabled === false  
                   ? <p className="u-f--13 u-c--white u-ff--exo u-ta--center">Чего сидишь? Порадуй котэ, 
                        <span className="product__buy" onClick={this.handleBuyClick}>купи</span></p>
                   : <p className="u-f--13 u-c--yellow u-ff--exo u-ta--center">Печалька, с курой закончился</p>
                }
            </div>
        )
    }
}

export default Product;