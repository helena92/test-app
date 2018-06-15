import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => (
    <div >
        {
            props.product.id & 1 ?
                <div className="food-section-flex">
                    {ProductDescription(props.product.name, props.product.description)}
                    {ProductPhoto(props.product.id, props.product.backgroundURL)}
                </div>
                :
                <div className="food-section-flex">
                    {ProductPhoto(props.product.id, props.product.backgroundURL)}
                    {ProductDescription(props.product.name, props.product.description)}
                </div>
        }
    </div>
);

const ProductDescription = (name, descr) => (
    <div className="food-description">
        <h3 className="food-title">{name}</h3>
        <figcaption className="food-qoute">{descr}</figcaption>
    </div>
)

const ProductPhoto = (id, url) => (
    <div className="food-section-images-container">
        <img id={id} src={url} alt="" />
    </div>
)

ProductCard.defaultProps = {
    product: {}
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;