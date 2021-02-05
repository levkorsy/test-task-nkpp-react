import React from 'react'
import {ItemGroup} from "../ItemGroup/ItemGroup";

export const MainCatalog = (props) =>{
    return(
        <div className="main-catalog-wrapper">
            { props.itemStock.map((itemGroup, index)=>{
               return <ItemGroup  dollarRate={props.dollarRate} itemGroup={itemGroup} key={index}/>
            }) }

        </div>
    )
}