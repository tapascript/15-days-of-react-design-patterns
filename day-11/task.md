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
