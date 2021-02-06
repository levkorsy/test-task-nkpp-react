import React, {useState, useEffect} from 'react'
import MainCatalog from "./components/Catalog/MainCatalog/MainCatalog";
import data from "./dump_db/data.json"
import names from "./dump_db/names.json"
import Cart from "./components/Cart/Cart/Cart";

function App() {

    const [itemStock, setItemStock] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [dollarRate, setDollarRate] = useState({previous: 45, current: 45})
    const updateItemStock = (id, value) => {
        itemStock.map(group => {
            group.map(item => {
                if (item.T === id && item.P > 0) {
                    item.P += value
                }
            })
        })
        // setItemStock(prevState => ({
        //     ...prevState,
        //     tempStock
        // }));

    }
    const addItemToCart = (item) => {
        if (item.amount > 0) {
            if (cartItems.hasOwnProperty(item.id)) {   // Checks if item is already in the cart adn updates amount
                let amt = cartItems[item.id]['amount'];

                setCartItems(prevState => ({
                    ...prevState,
                    [item.id]: {...prevState[item.id], amount: amt + 1}
                }));


            } else { // Adds item to cart
                setCartItems(prevState => ({
                    ...prevState,
                    [item.id]: item
                }));
            }
            updateItemStock(item.id, -1)
        }
    }
    const resetCart = () => {
        setCartItems({})
    }
    const removeFromCart = (id) => {
        console.log('removeFromCart', cartItems[id].amount)
        if (cartItems.hasOwnProperty(id)) { // Checks if item is in the cart adn updates amount
            let amt = cartItems[id]['amount'];
            console.log('yes', amt)      // If item amount bigger than 1 subtracts 1
            if (amt > 1) {
                setCartItems(prevState => ({
                    ...prevState,
                    [id]: {...prevState[id], amount: amt - 1}
                }));
            } else {
                // If item amount smaller than 1 deletes item
                console.log('no', 3)
                delete cartItems[id]
                setCartItems(Object.assign({}, cartItems));
                // setCartItems(cartItems);
            }


            updateItemStock(id, 1)   // Updates stock of items after removing

        }

    }
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
            return tempItemStock
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
        fetchData();
        setInterval(() => {
            getDollarRate(20, 80)
            fetchData();
        }, 5000)

    }, []);


    return (
        <div className="main-container">
            <MainCatalog dollarRate={dollarRate} itemStock={itemStock} addToCart={addItemToCart}/>
            <Cart dollarRate={dollarRate} cartItems={cartItems} resetCart={resetCart} removeFromCart={removeFromCart}/>
        </div>
    );
}

export default App;
