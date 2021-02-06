import React from 'react'
import PropTypes from 'prop-types'
import ItemGroup from "../ItemGroup/ItemGroup";

 const MainCatalog = (props) => {
    return(
        <div className="main-catalog-wrapper" style={{boxShadow:"rgb(0 0 0 / 24%) 0px 3px 8px"}}>
            { props.itemStock.map((itemGroup, index)=>{
               return <ItemGroup  dollarRate={props.dollarRate} itemGroup={itemGroup} key={index} addToCart={props.addToCart}/>
            }) }

        </div>
    )
}

MainCatalog.propTypes ={
    itemStock: PropTypes.arrayOf(PropTypes.array.isRequired),
    dollarRate: PropTypes.object.isRequired,
    addToChart: PropTypes.func

}

export default MainCatalog;