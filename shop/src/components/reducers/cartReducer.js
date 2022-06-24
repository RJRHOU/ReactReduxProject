import { useState, useEffect } from "react";

export default function Items() {
    const[ item, setItems] = useState('');

}

    useEffect(() => {
        setItems();
    },[]);

    const setItem = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then((data) => {
                 console.log(data.value);
                 setItems(data.value)
            });
    

    return (
        <div>
            <p>{item}</p>
            <button onClick={setItems}></button>
        </div>
    )
    }