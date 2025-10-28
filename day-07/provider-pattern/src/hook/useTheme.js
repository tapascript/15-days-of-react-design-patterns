import { useContext } from "react";
import { ThemeContext } from "../context";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return { theme, toggleTheme };
};

export { useTheme };
