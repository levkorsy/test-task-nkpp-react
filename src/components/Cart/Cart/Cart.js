import React from 'react'
import './Cart.scss'
import {CartItem} from "../CartItem/CartItem";
export const Cart = () =>{
    return(
       <div className='main-catalog-wrapper'>
<CartItem/>
       </div>
)
}


// <div class="main-catalog-wrapper" style="box-shadow:rgb(0 0 0 / 24%) 0px 3px 8px;
// ">
//     <h5 class="item-group-title">Корзина</h5>
//     <button class="btn reset-btn" @click="$emit('resetCart')" title="Очистить корзину"><i class="far fa-times-circle"></i></button>
// <table class="table table-bordered table-responsive">
//     <thead>
//     <tr class="text-center">
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
//     <td :class="getTotalPrice(cartItems) >0 ?setClassByDollarRate(dollarRate): ''" colspan="2">
//     {{ getTotalPrice(cartItems) }} &#8381;
// </td>
// </tr>
// </tfoot>
// </table>
// </div>