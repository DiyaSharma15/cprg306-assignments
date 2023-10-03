import Item from "app\week3\item.js"

export default function ItemList(){

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
    
    return(
        <div> 
            <h1>Shopping List</h1>
            <ul>
                <li>
                    {item1.name}
                    {item1.quantity}
                    {item1.category}
                </li>
                <li>
                    {item2.name}
                    {item2.quantity}
                    {item2.category}
                </li>
                <li>
                    {item3.name}
                    {item3.quantity}
                    {item3.category}
                </li>
                <li>
                    {item4.name}
                    {item4.quantity}
                    {item4.category}
                </li>
                <li>
                    {item5.name}
                    {item5.quantity}
                    {item5.category}
                </li>
                <li>
                    {item6.name}
                    {item6.quantity}
                    {item6.category}
                </li>
                <li>
                    {item7.name}
                    {item7.quantity}
                    {item7.category}
                </li>
                <li>
                    {item8.name}
                    {item8.quantity}
                    {item8.category}
                </li>
                <li>
                    {item9.name}
                    {item9.quantity}
                    {item9.category}
                </li>
                <li>
                    {item10.name}
                    {item10.quantity}
                    {item10.category}
                </li>
                <li>
                    {item11.name}
                    {item11.quantity}
                    {item11.category}
                </li>
                <li>
                    {item12.name}
                    {item12.quantity}
                    {item12.category}
                </li>
            </ul>
            
        </div>
    );
}