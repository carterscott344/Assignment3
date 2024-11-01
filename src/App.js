import React, { useState } from 'react';
import './style.css'; 

const App = () => {
    const [cartCount, setCartCount] = useState(0);
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', count: 0 },
        { id: 2, name: 'Item 2', count: 0 },
        { id: 3, name: 'Item 3', count: 0 },
        { id: 4, name: 'Item 4', count: 0 },
        { id: 5, name: 'Item 5', count: 0 },
        { id: 6, name: 'Item 6', count: 0 },
        { id: 7, name: 'Item 7', count: 0 },
        { id: 8, name: 'Item 8', count: 0 },
        { id: 9, name: 'Item 9', count: 0 },
    ]);

    // Update item count
    const updateCount = (id, amount) => {
        setItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    const newCount = Math.max(0, item.count + amount);
                    return { ...item, count: newCount };
                }
                return item;
            });
        });
    };

    // Update cart count display
    const updateCartDisplay = (id) => {
        const currentItem = items.find(item => item.id === id);
        if (currentItem) {
            setCartCount(prevCount => prevCount + currentItem.count);
        }
    };

    // Navbar component
    const Navbar = () => (
        <nav className="navbar">
            <div className="search-box">
                <input type="text" placeholder="Search..." />
            </div>
            <button className="cart-button" onClick={() => console.log('Cart clicked!')}>
                <p>Cart</p>
                <img src="./images/cart.png" alt="Cart Icon" />
                <div id="cartCountDisplay">{cartCount > 0 ? cartCount : ''}</div>
            </button>
        </nav>
    );


    const Item = ({ item }) => (
        <div className="item">
            <img className={`img${item.id}`} src="./images/placeholder square.png" alt={item.name} />
            <p>{item.name}</p>
            <div class="itemCount" id={`item${item.id}Count`}>{item.count > 0 ? item.count : <br />}</div>
            <button className="minus" onClick={() => updateCount(item.id, -1)}>-</button>
            <button className="plus" onClick={() => updateCount(item.id, 1)}>+</button>
            <button className="addToCart" onClick={() => updateCartDisplay(item.id)}>Add to Cart</button>
        </div>
    );


    // Item list component
    const ItemList = () => (
        <div className="item-container">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );

    return (
        <div>
            <Navbar />
            <ItemList />
        </div>
    );
};

export default App;
