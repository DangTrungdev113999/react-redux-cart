import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductContainer extends Component {

    render() {
        const { products } = this.props
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = products => {
        const { onAddToCart } = this.props
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            })
        }
        return result;
    }

}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: product => {
            dispatch(actions.addToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);