import React from 'react'
import Item from "../Item/Item";

const ItemGroup = (props) =>{

    return(
        <div className="item-group-wrapper">
            <h5 className="item-group-title"><span className="chevron"><i className="fas fa-angle-double-down"/></span>{props.itemGroup[0].groupTitle}<span className="chevron"><i className="fas fa-angle-double-down"/></span></h5>
            {
                props.itemGroup.map((item, index)=>{
                    return <Item item={item} key={index}/>
                })
            }

</div>    )
}

export default ItemGroup




