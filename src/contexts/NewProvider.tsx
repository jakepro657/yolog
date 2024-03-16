"use client";
import { createContext, useContext, useState } from "react";

export interface NewContextType {
    selectedIndex: number
    setSelectedIndex: (index: number) => void
}


export const NewContext = createContext<NewContextType>({} as NewContextType)

export function NewProvider({ children }: { children: React.ReactNode }) {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <NewContext.Provider value={{ selectedIndex, setSelectedIndex }}>
            {children}
        </NewContext.Provider>
    )
}

export const useNewContext = () => {
    const context = useContext(NewContext);
    
    if (!context) {
        throw new Error("useMainContext must be used within MainProvider");
    }
    
    return context;
};