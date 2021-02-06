import React from 'react'
import PropTypes from 'prop-types'
import Item from "../Item/Item";

const ItemGroup = (props) =>{
    return(
        <div className="item-group-wrapper">
            <h5 className="item-group-title"><span className="chevron"><i className="fas fa-angle-double-down"/></span>{props.itemGroup[0].groupTitle}<span className="chevron"><i className="fas fa-angle-double-down"/></span></h5>
            {
                props.itemGroup.map((item, index)=>{
                    return <Item dollarRate={props.dollarRate} item={item} key={index} addToCart={props.addToCart}/>
                })
            }

</div>    )
}

ItemGroup.propTypes ={
    dollarRate: PropTypes.object.isRequired,
    itemGroup: PropTypes.arrayOf(PropTypes.object.isRequired),
    addToChart: PropTypes.func

}
export default ItemGroup




