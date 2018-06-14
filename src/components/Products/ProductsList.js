import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const getProducts = (products) => {
    return (
        <div className="food-block">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

const ProductsList = (props) => (
    <div>
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