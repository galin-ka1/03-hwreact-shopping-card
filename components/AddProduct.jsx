import { useState } from "react";

const Item = ({ index, item, deleteItem, editItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(item.name);

    const handleSave = () => {
        editItem(index, editedName);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <button onClick={handleSave}>Save Item</button>
                </>
            ) : (
                <>
                    <h2>{item.name}</h2>
                    <button onClick={() => deleteItem(index)} style={{ color: "red" }}>
                        Delete item
                    </button>
                    <button onClick={() => setIsEditing(true)}>Edit item</button>
                </>
            )}
        </li>
    );
};

export default Item;
