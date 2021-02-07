import React from 'react'
import './CartItem.css'

const CartItem = (props) => {

    //Styles. Dynamic classes
    const up = props.dollarRate.current > props.dollarRate.previous ? 'price-up' : ''
    const down = props.dollarRate.current < props.dollarRate.previous ? 'price-down' : ''
    const equally = props.dollarRate.current === props.dollarRate.previous ? 'equally' : ''
    const priceClass = `cart-item-price ${up} ${down} ${equally}`

    // Function returns comment (string), due to the item quantity in stick. Gets number.
    function getComment(value) {
        return value < 10 ? 'Товара заканчивается' : 'Товар в наличии';
    }

    return (
        <tr className="animate-tr">
            <td className="cart-item-title">{props.cartItem.title}
                <div className="amount-msg">{getComment(props.cartItem.quantity)}</div>
            </td>
            <td className="cart-item-amount">{props.cartItem.amount}
            </td>
            <td className={priceClass}>
                {(props.cartItem.price * props.dollarRate.current).toFixed(2)} &#8381;
            </td>
            <td className={priceClass}>
                {(props.cartItem.price * props.cartItem.amount * props.dollarRate.current).toFixed(2)} &#8381;
            </td>
            <td className="cart-item-remove">
                <button className="btn btn-danger" onClick={() => {
                    props.removeFromCart(props.cartItem.id)
                }} title="Удалить товар"><i className="far fa-trash-alt"/>
                </button>
            </td>
        </tr>)
}
export default CartItem;
