import React, {useContext} from 'react'
import Context from "../../../context";
import ItemGroup from "../ItemGroup/ItemGroup";

 const MainCatalog = () => {
     const { itemStock } = useContext(Context)
     return(
        <div className="main-catalog-wrapper" style={{boxShadow:"rgb(0 0 0 / 24%) 0px 3px 8px"}}>
            { itemStock.map((itemGroup, index)=>{
               return <ItemGroup  itemGroup={itemGroup} key={index} />
            }) }

        </div>
    )
}

export default MainCatalog;