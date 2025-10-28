import ThemeSwitcher from "./components/ThemeSwitcher";
import MoviesList from "./components/MovieList";
import AuthPanel from "./components/AuthPanel";

function App() {
  return (
    <div className="flex flex-col items-center">
      <ThemeSwitcher />
      <MoviesList />
      <AuthPanel />
    </div>
  );
}

export default App;
