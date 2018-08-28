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

    writeBonus = (bonus = 0) => {
        if (bonus > 1 && bonus < 5) {
            return {__html: `<span class="u-fw--bold">${bonus}</span> мыши в подарок`};
        } else if (bonus >= 5) {
            return {__html: `<span class="u-fw--bold">${bonus}</span> мышей в подарок <br /> заказчик доволен`};
        } else return {__html: `мышь в подарок`};
    }

    handleProductClick = () => {
        this.setState(Object.assign(this.state,{
            clicked: !this.state.clicked
        }));
    }

    handleBuyClick = () => {
        this.setState(Object.assign(this.state, {
            clicked: !this.state.clicked,
            selected: !this.state.selected
        }));
    }

    handleMouseLeave = () => {
        this.setState(Object.assign(this.state, {
            selected: this.state.clicked
        }));
    }

    render() {
        const {taste, 
               portions, 
               bonus, 
               mass, 
               disabled,
               description} = this.props.data;
        
        const {selected, 
               clicked} = this.state;
        
        if (selected === true) {
            return(
                <div className={`product 
                                         ${disabled === true 
                                            ? "product--disabled" 
                                            : ''}`}>
                    <div className={`product__main product__main--selected`} 
                         onClick={this.handleProductClick}
                         onMouseLeave={this.handleMouseLeave}>
                        <span className="product__slogan"> Сказочное заморское яство </span>
                        <h2 className="product__title">Нямушка</h2>
                        <h3 className="product__taste">{taste}</h3>
                        <p className="u-c--grey u-mt--20 u-f--14"><span className="u-fw--bold">{portions}</span> порций</p>
                        <p className="u-c--grey u-f--14" dangerouslySetInnerHTML={this.writeBonus(bonus)}></p>
                        <span className="product__mass">{mass} <br /><span>кг</span></span>  
                    </div>
                    <p className="u-f--13 u-c--white u-ff--exo u-ta--center">{description}</p>
                </div>
            )
        } else if (disabled === true) {
            return(
                <div className="product  product--disabled">
                    <div className='product__main product__main--disabled'>
                        <span className="product__slogan"> Сказочное заморское яство </span>
                        <h2 className="product__title">Нямушка</h2>
                        <h3 className="product__taste">{taste}</h3>
                        <p className="u-c--grey u-mt--20 u-f--14"><span className="u-fw--bold">{portions}</span> порций</p>
                        <p className="u-c--grey u-f--14" dangerouslySetInnerHTML={this.writeBonus(bonus)}></p>
                        <span className="product__mass u-f--14">{mass} <br /><span>кг</span></span>  
                    </div>
                    <p className="u-f--13 u-c--yellow u-ff--exo u-ta--center">Печалька, {taste} закончился</p>
                </div>
            )
        } else {
            return(
                <div className="product">
                    <div className={`product__main ${clicked ? 'product__main--pushed' : ''}`} 
                         onClick={this.handleProductClick}
                         onMouseLeave={this.handleMouseLeave}>
                        <span className="product__slogan"> Сказочное заморское яство </span>
                        <h2 className="product__title">Нямушка</h2>
                        <h3 className="product__taste">{taste}</h3>
                        <p className="u-c--grey u-mt--20 u-f--14"><span className="u-fw--bold">{portions}</span> порций</p>
                        <p className="u-c--grey u-f--14" dangerouslySetInnerHTML={this.writeBonus(bonus)}></p>
                        <span className="product__mass">{mass} <br /><span>кг</span></span>  
                    </div>
                    {!clicked 
                       ? <p className="u-f--13 u-c--white u-ff--exo u-ta--center">Чего сидишь? Порадуй котэ, &nbsp;
                            <span className="product__buy" onClick={this.handleBuyClick}>купи</span></p>
                       : <p className="u-f--13 u-c--white u-ff--exo u-ta--center">{description}</p>
                    }
                </div>
            )
        }

        
    }
}

export default Product;