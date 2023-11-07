export default function Item({ name, quantity, category }) {
    return(
        <div>
            <ul className="flex-1 p-3 bg-green-100 ">
                <li className="mx-2">{name}</li>
                <li>order {quantity}  in {category} </li>
            </ul>
        </div>
    )
}