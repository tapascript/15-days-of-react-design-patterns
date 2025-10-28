import { useToggle } from "../hooks/useToggle";

function ThemeSwitcher() {
  const [isDark, toggleTheme] = useToggle();
  return (
    <button onClick={toggleTheme}>
      {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeSwitcher;