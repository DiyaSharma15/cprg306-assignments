import React from "react";
import ItemList from "./item-list";
import Link from "next/link";

export default function page() {
    return(
        <main>
            <h1>Shopping List</h1>
            <ItemList />
        </main>
    );
}