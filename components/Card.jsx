import {useState} from "react";
import AddProduct from "./AddProduct.jsx";


const Card = () => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem("");
    }

    const deleteItem = (index) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems);
    }

    return (
        <div>
            <label>New Item:
                <input
                    type='text'
                       placeholder={"Please enter new item"}
                       value={newItem}
                       onChange={(element) => setNewItem(element.target.value)}
                />
                <button onClick={addItem}>Add Product</button>
                <ul>
                    {items.map((item, index) => (
                        <AddProduct
                            key={index}
                            index={index}
                            itemName={item}
                            deleteItem={deleteItem}
                        />
                    ))}
                </ul>
            </label>
        </div>
    );
};

export default Card;