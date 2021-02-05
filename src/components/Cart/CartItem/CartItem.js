import React from 'react'

export const CartItem = () =>{
    return(
        <div className="main-catalog-wrapper">mk</div>
    )
}



// <tr class="animate-tr">
//     <td class="cart-item-title">{{ cartItem.title }}
//         <div class="amount-msg" v-if="cartItem.quantity<10">Товар заканчивается</div>
//     </td>
//     <td class="cart-item-amount">{{ cartItem.amount }}
//
//     </td>
//     <td class="cart-item-price" :class="setClassByDollarRate(dollarRate)">
//     {{ (cartItem.price * dollarRate.current).toFixed(2) }} &#8381;
// </td>
// <td class="cart-item-price" :class="setClassByDollarRate(dollarRate)">
// {{ (cartItem.price * cartItem.amount * dollarRate.current).toFixed(2) }} &#8381;
// </td>
// <td class="cart-item-remove">
//     <button class="btn btn-danger" @click="removeFromCart" title="Удалить товар"><i class="far fa-trash-alt"></i>
// </button>
// </td>
// </tr>