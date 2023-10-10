"use client"
import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
            event.preventDefault();
            const item = {  
                name,
                quantity,
                category
            };
            console.log(item);

            alert(`There are ${quantity} ${name} in the ${category} category.`);

            setName("");
            setQuantity(1);
            setCategory("produce");

    }
    return(
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="border-solid p-2 m-1 bg-amber-100" type="text" value={name} onChange={(event => setName(event.target.value))}/>
                        <input className=" p-2 m-1 bg-amber-100" type="text" value={quantity} onChange={(event => setQuantity(event.target.value))}/>
                    </div>
                    <button className="m-3 border-width-thin border-solid " type="submit">
                        add item
                    </button>

                </form>
            </div>
            
        </main>
    )

}