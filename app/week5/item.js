export default function Item({ name, quantity, category }) {
    return(
        <div>
            <ul className="p-4">
                <li>{name}</li>
                <li>order {quantity}  in {category} </li>
            </ul>
        </div>
    )
}