import { useState } from "react";
import Item from "./item";
import itemData from "./item.json";

export default function ItemList(){
    const [sort, setSortby] = useState("name");
    const [sortedItems, setSortedItems] = useState([]);
    
    const handleSort = () => {
        const sortedList = [...sortedItems].sort((a, b) => a.propertyToSortBy - b.propertyToSortBy);
        setSortedItems(sortedList);
    };

    

    return(
    <main>
        <h1>Shopping List</h1>
        <div>
            <button onClick={ () => setSortby("name")} > sort by Name </button>
        </div>
        <div>
            <button onClick={ () => setSortby("name")} >sort by category</button>
        </div>
        <div>
            {sortedItems.map ((item) => (
                <Item
                name = {item.name}
                quantity = {item.quantity}
                category = {item.category}
                />
            ))}
        </div>
    </main>
    );
    
}