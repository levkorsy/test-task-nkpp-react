import React, {useState, useEffect} from 'react'
import MainCatalog from "./components/Catalog/MainCatalog/MainCatalog";
import data from "./dump_db/data.json"
import names from "./dump_db/names.json"
import Cart from "./components/Cart/Cart/Cart";
import Context from "./context";

function App() {
    //Initiating state
    const [itemStock, setItemStock] = useState([])      //Stock
    const [cartItems, setCartItems] = useState({})      //Cart
    const [dollarRate, setDollarRate] = useState({previous: 45, current: 45})
    //Updating items stock. Gets item id(number) and amount items to add(number)
    const updateItemStock = (id, value) => {
        itemStock.forEach(group => {
            group.forEach(item => {
                if (item.T === id) {
                    item.P += value
                }
            })
        })
        setItemStock(itemStock);

    }
    //Adds item to cart. Gets object of item.
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
            updateItemStock(item.id, -1)  //Updating items stock.
        }
    }
    //Resets all items in cart
    const resetCart = () => {
        Object.keys(cartItems).forEach((cartItem) => { //Iterates through cart items object and updates item stock
            updateItemStock(cartItems[cartItem].id, cartItems[cartItem].amount)
        })
        setCartItems({})
    }
    // Removes item from cart. Gets item id(number)
    const removeFromCart = (id) => {
        if (cartItems.hasOwnProperty(id)) { // Checks if item is in the cart adn updates amount
            let amt = cartItems[id]['amount'];
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
            }
            updateItemStock(id, 1)   // Updates stock of items after removing
        }
    }
    // Simulates updating dollar rate via API. Gets min(number) and max(number) values. Returns random number
    const getDollarRate = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    //Initiating context
    const contextObject = {
        addItemToCart,
        dollarRate,
        itemStock
    }
    // Simulates fetching data via API request
    useEffect(() => {
        //Function sorts all items by group. Gets items(array of objects) and names(object). Returns array of group arrays
        const sortItemsByGroup = (items, names) => {
            setItemStock([])        //Reset previous stock
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
        // Simulates fetching data via API request
        const fetchData = async () => {
            const stock = await sortItemsByGroup(data.Value.Goods, names) // Separates items due the categories
            setItemStock(stock);
        };
        fetchData(); // Fetching data fist time

        //Initiating fetching data and dollar rate every 15 seconds
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
        <Context.Provider value={contextObject}>
            <div className="main-container">
                <MainCatalog/>
                <Cart dollarRate={dollarRate} cartItems={cartItems} resetCart={resetCart}
                      removeFromCart={removeFromCart}/>
            </div>
        </Context.Provider>
    );
}

export default App;
