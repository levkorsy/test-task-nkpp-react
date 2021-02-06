import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

 const Item = (props) => {

    function getComment(value) {
        return value < 1 ? 'Товара нет в наличии' : value < 10 ? 'товар заканчивается' : 'в наличии';
    }
   // function addToCart() {
        // this.item.P -= 1;
        // EventBus.$emit('add_item',
       // {
       //      id: this.item.T,
       //      group: this.item.G,
       //      title: this.item.title.N,
       //      price: this.item.C,
       //      quantity: this.item.P
       //  }
       // )
    // }

    return (
        <div className="item-wrapper">
            <div className="title">
                <p className="item-title">
                    {props.item.title.N}
                </p>
            </div>
            <div className="stock">
      <span><span>({props.item.P})</span> <span className="stock-comment">{
          getComment(props.item.P)
      }</span></span>
            </div>
            <div className="price"
//            :class="setClassByDollarRate(dollarRate)"
        >
            <span><i className="fas fa-arrow-up"
//                :class="setClassByDollarRate(dollarRate)"
            ></i>{ (props.item.C * props.dollarRate.current).toFixed(2) } &#8381;</span>
</div>
            <div className="add-item">
                <button className="btn btn-add" onClick={()=> props.addToCart({
                    id: props.item.T,
                    group: props.item.G,
                    title: props.item.title.N,
                    price: props.item.C,
                    quantity: props.item.P,
                    amount: 1
                })
                } title="Добавить в корзину">
                <i className="fas fa-cart-plus"/>
            </button>
        </div>
        </div>
    )
}

Item.propTypes = {
    dollarRate: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    addToChart: PropTypes.func.isRequired
}

export  default Item

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