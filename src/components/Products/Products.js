import React from 'react';
import styled from 'styled-components';
import Product from './Product';

//TODO: Center entire block

const ProductsBlock = styled.div`
    width: 87.5vw;
    margin: 0 auto;
    margin: auto;

    @media (min-width: 1280px) {
        width: 1120px;
    }
`;

const ProductsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const ProductsHeading = styled.h1`
  font-family: 'Exo', sans-serif;
  font-size: 36px;
  color: white;
  font-weight: 100;
  text-align: center;
  margin-bottom: 20px;  
`;

const data = [
    {
        taste: 'c фуа-гра',
        portions: 10,
        bonus: 1,
        mass: '0,5',
        description: 'Печень утки разварная с артишоками.', 
        disabled: false
    },
    {
        taste: 'c рыбой',
        portions: 40, 
        bonus: 2, 
        mass: '2',  
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка', 
        disabled: false
    },
    {
        taste: 'c курой',
        portions: 100, 
        bonus: 5, 
        mass: '5', 
        description: 'Филе из цыплят с трюфелями в бульоне', 
        disabled: true
    }
]

let productsArr = data.map((product,key) => {
    return <Product key={key} data = {product} />
})

const Products = () => {
    return(
        <ProductsBlock>
            <ProductsHeading> Ты сегодня покормил кота? </ProductsHeading>
            <ProductsCont>
                {productsArr}
            </ProductsCont>
        </ProductsBlock>
    )
}





export default Products;