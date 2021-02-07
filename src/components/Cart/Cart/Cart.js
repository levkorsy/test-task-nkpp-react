import React from 'react'
import PropTypes from 'prop-types'
import './Cart.scss'
import CartItem from "../CartItem/CartItem";


const Cart = (props) => {
    const getTotalPrice = (cartItems) => {
        let sum = 0;
        if (cartItems) {
            for (const item in cartItems) {  // Iterate through items
                sum += cartItems[item]['price'] * cartItems[item]['amount']
            }
        }
        return (sum * props.dollarRate.current).toFixed(2)
    }
    return (
        <div className='main-catalog-wrapper' style={{boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px"}}>
            <h5 className="item-group-title">Корзина</h5>
            <button className="btn reset-btn" onClick={props.resetCart} title="Очистить корзину"><i
                className="far fa-times-circle"/></button>
            <table className="table table-bordered table-responsive">
                <thead>
                <tr className="text-center">
                    <th style={{width: "80%"}}>Наименование товара</th>
                    <th style={{width: "10%"}}>Шт.</th>
                    <th style={{width: "10%"}}>Цена</th>
                    <th style={{width: "20%"}} colSpan="2">Стоимость</th>
                </tr>
                </thead>
                <tbody>{Object.keys(props.cartItems).map((cartItem, index) => {
                    return (
                        <CartItem cartItem={props.cartItems[cartItem]} key={index} removeFromCart={props.removeFromCart}
                                  dollarRate={props.dollarRate}/>)
                })}</tbody>
                <tfoot>
                <tr>
                    <td colSpan="3">Итого:</td>
                    <td colSpan="2">{getTotalPrice(props.cartItems)} &#8381;
                    </td>
                </tr>
                </tfoot>
            </table>

        </div>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.object.isRequired,
    resetCart: PropTypes.func
}


export default Cart
// <div className="main-catalog-wrapper" style="box-shadow:rgb(0 0 0 / 24%) 0px 3px 8px;
// ">
//     <h5 className="item-group-title">Корзина</h5>
//     <button className="btn reset-btn" @click="$emit('resetCart')" title="Очистить корзину"><i className="far fa-times-circle"></i></button>
// <table className="table table-bordered table-responsive">
//     <thead>
//     <tr className="text-center">
//         <th style="width: 80%">Наименование товара</th>
//         <th style="width: 10%">Шт.</th>
//         <th style="width: 10%">Цена</th>
//         <th style="width: 20%" colspan="2">Стоимость</th>
//     </tr>
//     </thead>
//     <tbody>
//     <CartItem v-for="(cItem, index) in cartItems" :key="index" :cart-item="cItem" :dollar-rate="dollarRate"/>
// </tbody>
// <tfoot>
// <tr>
//     <td colspan="3">Итого:</td>
//     <td :className="getTotalPrice(cartItems) >0 ?setClassByDollarRate(dollarRate): ''" colspan="2">
//     {{ getTotalPrice(cartItems) }} &#8381;
// </td>
// </tr>
// </tfoot>
// </table>
// </div>