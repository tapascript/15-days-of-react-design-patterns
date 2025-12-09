# Day 11 - Your Task

## Fix Broken Memoization

Take a look into this code:

```js
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={() => console.log("Child clicked")} />
    </>
  );
}
```

Task:

- Make sure `<Child>` renders only once even after repeatedly clicking Increment.
- Explain why it was re-rendering before.
- Fix it using useCallback.

## Improve a Derived State Anti-Pattern

Code:

```js
const [filtered, setFiltered] = useState([]);

useEffect(() => {
  setFiltered(items.filter(i => i.active));
}, [items]);
```

Task: Replace it with the correct derived-state pattern.

## Build a Small Dashboard

Build a small dashboard with a mini version of real-world React app (e-commerce, dashboards, admin panels).

- A search bar with debounce
- A scroll tracker with throttle
- Render a user list(10K) filtered by search(No derived state and with performance optimizations)
- Scroll position updates smoothly

## Remove unnecessary useMemo/useCallback

```js
function ProductCard({ price }) {
  const tax = useMemo(() => price * 0.18, [price]);
  const logPrice = useCallback(() => console.log(price), [price]);

  return (
    <div>
      <h3>Price: {price}</h3>
      <button onClick={logPrice}>Log</button>
    </div>
  );
}
```

Assignment:

- Remove unnecessary memoization correctly in React 19+.
- Explain why React Compiler handles these cases.
- Identify when memoization is still required.

## Lazy-load a country dropdown

Build a form with fields like:

- Name
- Email
- Country (dropdown with 250 countries)

Assignment:

- Move the CountrySelector into a separate lazy-loaded component.
- Show a custom loader (e.g., spinner).
- Measure initial bundle size vs lazy bundle size.

## Split a large context

You have a context:

```js
const AppContext = createContext({
  user: null,
  theme: "light",
  cart: [],
  locale: "en",
});
```

Any change in cart re-renders ALL consumers.

Assignment:

- Split into 3 contexts:
  - UserContext
  - ThemeContext
  - CartContext
- Update providers and consumers.
- Show improved render patterns with logs.
