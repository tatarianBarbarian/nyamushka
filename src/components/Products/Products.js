import React, {Component} from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductsBlock = styled.div`

`;

const ProductsCont = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ProductsHeading = styled.h1`
  font-family: 'Exo', sans-serif;
  font-size: 36px;
  color: white;
  font-weight: 100;
  text-align: center;  
`;


const Products = () => {
    return(
        <ProductsBlock>
            <ProductsHeading> Ты сегодня покормил кота? </ProductsHeading>
            <ProductsCont>
                <Product />
                <Product />
                <Product />
            </ProductsCont>
        </ProductsBlock>
    )
}

export default Products;