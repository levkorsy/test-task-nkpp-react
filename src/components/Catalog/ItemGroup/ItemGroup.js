import React from 'react'
import {Item} from "../Item/Item";

export const ItemGroup = () =>{
    return(
        <div className="item-group-wrapper">
<Item/>
</div>    )
}








{/*<h5 class="item-group-title">*/}
{/*    <span class="chevron"><i class="fas fa-angle-double-down"></i>*/}
{/*</span>{{ itemGroup.length > 0 ? itemGroup[0].groupTitle : 'Group' }}*/}
{/*<span class="chevron"><i*/}
{/*          class="fas fa-angle-double-down"></i></span*/}
{/*></h5>*/}
// <Item v-for="(item, index) in itemGroup" :key="index" :item="item" :dollar-rate="dollarRate"/>