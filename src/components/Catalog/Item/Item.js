import React from 'react'
import './Item.css'
export const Item = () =>{
    return(
        <div className="item-wrapper">mk</div>
    )
}




// <div class="item-wrapper">
//     <div class="title">
//         <p class="item-title">
//             {{ item.title.N }}
//         </p>
//     </div>
//     <div class="stock">
//       <span><span v-if="item.P > 0">({{ item.P }})</span> <span class="stock-comment">{{
//           getComment(item.P)
//       }}</span></span>
//     </div>
//     <div class="price"
//     :class="setClassByDollarRate(dollarRate)"
// >
//             <span><i class="fas fa-arrow-up"
//                 :class="setClassByDollarRate(dollarRate)"
//             ></i>{{ (item.C * dollarRate.current).toFixed(2) }} &#8381;</span>
// </div>
// <div class="add-item">
//     <button class="btn btn-add" @click="addToCart" :disabled="item.P < 1" title="Добавить в корзину">
//     <i class="fas fa-cart-plus"></i>
// </button>
// </div>
// </div>