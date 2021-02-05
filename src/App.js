import React, {useState} from 'react'
import {MainCatalog} from "./components/Catalog/MainCatalog/MainCatalog";
import data from "./dump_db/data.json"
import names from "./dump_db/names.json"
import {Cart} from "./components/Cart/Cart/Cart";

function App() {

    const [itemStock, setItemStock] = React.useState([])
    const [dollarRate, setDollarRate] = React.useState({previous: 45, current: 45})

    // itemTitles: {},
    // itemStock: [],
    // dollarRate: {
    //     previous: 45,
    //     current: 45
    // },
    // cartItems: {},
    //


    const fetchData = async () => {
        await getDollarRate(20, 80)  // Simulates API request for dollar rate. Gets min and max numbers
        await sortItemsByGroup(data.Value.Goods, names) // Separates items due the categories

    }

    const getDollarRate = (min, max) => {
        setDollarRate({
            previous: dollarRate.current,
            current: Math.floor(Math.random() * (max - min + 1)) + min
        })
    }
    // Simulates fetching data request
    const fetchDataWithInterval = () => {
            sortItemsByGroup(data.Value.Goods, names)  // Separates items due the categories
            setInterval(() => {
                fetchData()// Simulates API request
            }, 15000)
        }
    //Function sorts all items by group. Gets items(array of objects) and names(object)
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
        setItemStock(tempItemStock)
    }

    fetchDataWithInterval();
    return (
        <div className="main-container">
            <MainCatalog dollarRate={dollarRate} itemStock={itemStock}/>
            <Cart/>
        </div>
    );
}

export default App;
