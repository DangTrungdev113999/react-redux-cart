import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

class CartContainer extends Component {

    render() {
        const { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showTotalAmount = cart => {
        let result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result

    }

    showCartItem = cart => {
        const {onDeleteProduct, onChangeMessage} = this.props
        let result = <tr><td> {message.MSG_CART_EMPTY} </td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeleteProduct={onDeleteProduct}
                    onChangeMessage={onChangeMessage}
                />
            })
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: product => {
            dispatch(actions.actDeleteProdct(product));
        },
        onChangeMessage: message => {
            dispatch(actions.actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
