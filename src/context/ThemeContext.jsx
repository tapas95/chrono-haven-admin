import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = props => {
    const [ theme, setTheme ] = useState( 'light' );
    useEffect( () => {
        const isSystemDark = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
        const savedTheme = localStorage.getItem( 'theme' );
        const defaultTheme = savedTheme || ( isSystemDark ? 'dark' : 'light' );
        setTheme( defaultTheme );
        document.documentElement.classList.toggle( 'dark', defaultTheme === 'dark' );
    }, [] );
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme( newTheme );
        localStorage.setItem( 'theme', newTheme );
        document.documentElement.classList.toggle( 'dark', newTheme === 'dark' );
    };
    return(
        <ThemeContext.Provider value={ { theme, toggleTheme } }>
            { props.children }
        </ThemeContext.Provider>
    )
}