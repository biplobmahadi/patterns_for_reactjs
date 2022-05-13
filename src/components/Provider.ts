// It is fully React Context

import { useContext } from "react";

export function useThemeContext() {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return theme;
}

// if any component not wrapped by ThemeProvider that error will raise when use this hook

// Important: Use HOC for provider
