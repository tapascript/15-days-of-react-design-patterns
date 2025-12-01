function BetterCart({ items }) {
    const total = items.reduce((acc, item) => acc + item.price, 0);

    return <h2>Total: {total}</h2>;
}

export default BetterCart;
