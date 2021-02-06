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
        itemStock.forEach(group => {
            group.forEach(item => {
                // if (item.T === id && item.P > 0) {
                if (item.T === id ) {
                    console.log(item)
                    item.P += value
                }
            })
        })
        setItemStock(itemStock);

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
        Object.keys(cartItems).forEach((cartItem, index) => {
            console.log(cartItems[cartItem].id, cartItems[cartItem].amount)
            updateItemStock(cartItems[cartItem].id, cartItems[cartItem].amount)
        })
        setCartItems({})
    }
    const removeFromCart = (id) => {
        if (cartItems.hasOwnProperty(id)) { // Checks if item is in the cart adn updates amount
            let amt = cartItems[id]['amount'];
            console.log(id, amt, "amount")
            // If item amount bigger than 1 subtracts 1
            if (amt > 1) {
                setCartItems(prevState => ({
                    ...prevState,
                    [id]: {...prevState[id], amount: amt - 1}
                }));
            } else {
                // If item amount smaller than 1 deletes item
                delete cartItems[id]
                setCartItems(Object.assign({}, cartItems));
                // setCartItems(cartItems);
            }


            updateItemStock(id, 1)   // Updates stock of items after removing

        }

    }
    const getDollarRate = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
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

        const fetchData = async () => {
            const stock = await sortItemsByGroup(data.Value.Goods, names) // Separates items due the categories
            setItemStock(stock);
        };
        fetchData();
        setInterval(() => {
            setDollarRate(prevState => ({
                ...prevState,
                previous: prevState.current,
                current: getDollarRate(20, 80)
            }));
            fetchData();
        }, 15000)

    }, []);


    return (
        <div className="main-container">
            <MainCatalog dollarRate={dollarRate} itemStock={itemStock} addToCart={addItemToCart}/>
            <Cart dollarRate={dollarRate} cartItems={cartItems} resetCart={resetCart} removeFromCart={removeFromCart}/>
        </div>
    );
}

export default App;
