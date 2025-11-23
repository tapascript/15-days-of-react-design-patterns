
import { useState } from "react";
import { useEvent } from "../../hooks/useEvent";

export default function CartBadge() {
  const [items, setItems] = useState([]);

  useEvent("cart:add", (data) => {
    console.log(data)
    setItems([...items, data]);
  });

  return (<div className="flex flex-col text-center">
    <h2 className="text-2xl">Subscriber</h2>
    <p className="text-4xl text-center">🛒 {items.length}</p>
    <ui className="list-none">
        {items.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ui>
    </div>);
}