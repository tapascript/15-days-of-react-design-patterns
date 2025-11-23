import AddToCartButton from "./components/publisher/AddToCartButton";
import CartBadge from "./components/subscriber/CartBadge";

function App() {
    return (
        <div className="flex flex-col items-center m-2">
            <AddToCartButton />
            <CartBadge />
        </div>
    );
}

export default App;
