import {
    createContext,
    useContext,
    useState,
    type ReactNode,
    useEffect
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getPreferredScheme = (): Theme => {
    if (typeof window !== "undefined" && window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        } else {
            return "light";
        }
    }
    return "dark"; // Default if media queries are not supported or in SSR
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getPreferredScheme());

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
