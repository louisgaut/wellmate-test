import { createContext, ReactNode, useContext } from "react";
import colors from "../theme/colors";

const ThemeContext = createContext(colors)

type Props = {children: ReactNode}

export function ThemeContextProvider({children}:Props) {
//Ici, on pourra rajouter la logique pour un light et dark mode au besoin

    return (
        <ThemeContext.Provider value={colors}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(ThemeContext)
}