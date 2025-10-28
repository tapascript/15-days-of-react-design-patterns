import { useTheme } from "./hook/useTheme";
import { useBrand } from "./hook/useBrand";

function App() {
    const { theme, toggleTheme } = useTheme();
    const brand = useBrand();

    console.log(brand);

    return (
        <div
            style={{
                backgroundColor: theme ? "#fff" : "#222",
                color: theme ? "#000" : "#fff",
                height: "100vh",
            }}
        >
            <nav className="flex justify-between bg-slate-500 p-1">
                <h1 className="text-3xl">My App</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </nav>
            <main className="p-4 text-center">
                <p className="text-xl m-3">
                    {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </p>
                <div>
                  {brand && <p>{brand.name}</p>}
                </div>
            </main>
        </div>
    );
}

export default App;
