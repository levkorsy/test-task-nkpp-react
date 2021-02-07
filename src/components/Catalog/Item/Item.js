import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import './Item.css'
import Context from "../../../context";

const Item = (props) => {
    //Initiating context
    const {addItemToCart, dollarRate} = useContext(Context)

    // Function returns comment (string), due to the item quantity in stick. Gets number.
    function getComment(value) {
        return value < 1 ? 'Товара нет в наличии' : value < 10 ? 'товар заканчивается' : 'в наличии';
    }

    //Styles. Dynamic classes
    const up = dollarRate.current > dollarRate.previous ? 'price-up' : ''
    const down = dollarRate.current < dollarRate.previous ? 'price-down' : ''
    const equally = dollarRate.current === dollarRate.previous ? 'equally' : ''
    const priceClass = `price ${up} ${down} ${equally}`
    const arrowUp = dollarRate.current > dollarRate.previous ? 'fa-arrow-up' : ''
    const arrowDown = dollarRate.current < dollarRate.previous ? 'fa-arrow-down' : ''
    const arrowClass = `fas ${arrowUp} ${arrowDown}`
    const btnDisabled = props.item.P === 0 ? 'disabled' : ''
    const btnClass = `btn btn-add ${btnDisabled}`

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
            <div className={priceClass}
            >
            <span><i className={arrowClass}/>
                {(props.item.C * dollarRate.current).toFixed(2)} &#8381;</span>
            </div>
            <div className="add-item">
                <button className={btnClass} onClick={() => addItemToCart({
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
    item: PropTypes.object.isRequired,
}

export default Item
