import React from 'react'
import {Item} from "../Item/Item";

export const ItemGroup = (props) =>{
    return(
        <div className="item-group-wrapper">
            <h5 className="item-group-title">{props.itemGroup[0].groupTitle}</h5>
            {
                props.itemGroup.map((item, index)=>{
                    return <Item dollarRate={props.dollarRate} item={item} key={index}/>
                })
            }

</div>    )
}








{/*<h5 class="item-group-title">*/}
{/*    <span class="chevron"><i class="fas fa-angle-double-down"></i>*/}
{/*</span>{{ itemGroup.length > 0 ? itemGroup[0].groupTitle : 'Group' }}*/}
{/*<span class="chevron"><i*/}
{/*          class="fas fa-angle-double-down"></i></span*/}
{/*></h5>*/}
// <Item v-for="(item, index) in itemGroup" :key="index" :item="item" :dollar-rate="dollarRate"/>