import { eventBus } from "../../lib/eventBus";

const products = [
    { id: crypto.randomUUID(), name: "Soap" },
    { id: crypto.randomUUID(), name: "Towel" },
    { id: crypto.randomUUID(), name: "Bed" },
    { id: crypto.randomUUID(), name: "Mirror" },
    { id: crypto.randomUUID(), name: "Light" },
];

export default function AddToCartButton() {
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomIndex];
        eventBus.publish("cart:add", {
            id: selectedProduct.id,
            name: selectedProduct.name,
        });
    };

    return (
        <div className="flex space-x-2 border rounded border-gray-600 p-2 m-3">
            <h2 className="text-2xl">Publisher</h2>
            <button
                className="bg-emerald-500 rounded p-1 cursor-pointer"
                onClick={handleClick}
            >
                Add to Cart
            </button>
        </div>
    );
}
