import React from 'react'

export const CartItem = (props) =>{
    return(
        <tr className="animate-tr">
            <td className="cart-item-title">{ props.cartItem.title }
                <div className="amount-msg" v-if="cartItem.quantity<10">Товар заканчивается</div>
            </td>
            <td className="cart-item-amount">{ props.cartItem.amount }
            </td>
            <td className="cart-item-price">
            {(props.cartItem.price * props.dollarRate.current).toFixed(2) } &#8381;
        </td>
    <td className="cart-item-price">
{(props.cartItem.price * props.cartItem.amount * props.dollarRate.current).toFixed(2) } &#8381;
</td>
    <td className="cart-item-remove">
        <button className="btn btn-danger" onClick={()=>{props.removeFromCart(props.cartItem.id)}} title="Удалить товар"><i className="far fa-trash-alt"/>
    </button>
</td>
</tr>    )
}



// <tr className="animate-tr">
//     <td className="cart-item-title">{{ cartItem.title }}
//         <div className="amount-msg" v-if="cartItem.quantity<10">Товар заканчивается</div>
//     </td>
//     <td className="cart-item-amount">{{ cartItem.amount }}
//
//     </td>
//     <td className="cart-item-price" :className="setClassByDollarRate(dollarRate)">
//     {{ (cartItem.price * dollarRate.current).toFixed(2) }} &#8381;
// </td>
// <td className="cart-item-price" :className="setClassByDollarRate(dollarRate)">
// {{ (cartItem.price * cartItem.amount * dollarRate.current).toFixed(2) }} &#8381;
// </td>
// <td className="cart-item-remove">
//     <button className="btn btn-danger" @click="removeFromCart" title="Удалить товар"><i className="far fa-trash-alt"></i>
// </button>
// </td>
// </tr>