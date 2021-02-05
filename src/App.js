import React, {useState, useEffect } from 'react'
import {MainCatalog} from "./components/Catalog/MainCatalog/MainCatalog";
import data from "./dump_db/data.json"
import names from "./dump_db/names.json"
import {Cart} from "./components/Cart/Cart/Cart";

function App() {

    const [itemStock, setItemStock] = useState([])
    const [dollarRate, setDollarRate] = useState({previous: 45, current: 45})

    useEffect(() => {

        const sortItemsByGroup = (items, names) => {

            setItemStock([])
            let ids = [...new Set(items.map(id => id.G))]   // Creates array of group ids
            let tempItemStock = []
            ids.forEach(id => {
                let tempArr = []
                items.forEach(item => {         // Separates items due the category
                    if (item.G === id) {
                        item.groupTitle = names[id].G
                        item.title = names[id].B[item.T]
                        tempArr.push(item);
                    }
                })
                tempItemStock.push(tempArr)
            })
         return  tempItemStock
        }
        const getDollarRate = (min, max) => {
            let tempPrev = dollarRate.current
            setDollarRate({
                previous: tempPrev,
                current: Math.floor(Math.random() * (max - min + 1)) + min
            })
        }


        const fetchData = async () => {
           const stock = await sortItemsByGroup(data.Value.Goods, names) // Separates items due the categories
            setItemStock(stock);
        };
        setInterval(()=>{
            getDollarRate(20, 80)
            fetchData();
        }, 5000)

    }, []);

    return (
        <div className="main-container">
            <MainCatalog dollarRate={dollarRate} itemStock={itemStock}/>
            <Cart/>
        </div>
    );
}

export default App;
