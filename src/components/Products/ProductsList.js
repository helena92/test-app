import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const getProducts = (products) => {
    return (
        products.map(product => <ProductCard key={product.id} product={product} />)
    );
};

const ProductsList = (props) => (
    <div className="food-block">
        {getProducts(props.products)}
    </div>
);

ProductsList.defaultProps = {
    products: []
};

ProductsList.propTypes = {
    products: PropTypes.array
};

export default ProductsList;