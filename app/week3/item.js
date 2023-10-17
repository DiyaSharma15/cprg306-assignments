export default function Item({ name, quantity, category }) {
    return(
        <div>
            <ul className="p-3">
                <li>{name}</li>
                <li>order {quantity}  in {category} </li>
            </ul>
        </div>
    )
}