import ItemList from "./item-list.js"

export default function page() {
    return(
        <main>
            <h1 className= "font-bold text-center text-blue-800">Shopping List</h1>
            <ItemList className= "font-bold text-center text-blue-800"/>
        </main>
    );
}