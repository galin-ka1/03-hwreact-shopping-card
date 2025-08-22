const Item = ({index, itemName,deleteItem}) => {
    return (
        <li>
            <h2>{itemName}</h2>
            <button onClick={()=>deleteItem(index)} style={{color:"red"}}>X</button>
        </li>
    );
};

export default Item;