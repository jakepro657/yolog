"use client";
import { createContext, useContext, useState } from "react";

export interface MainContextType {
    selectedIndex: number
    setSelectedIndex: (index: number) => void
    selectedCounselor: string
    setSelectedCounselor: (counsel: string) => void
}


export const MainContext = createContext<MainContextType>({} as MainContextType)

export function MainProvider({ children }: { children: React.ReactNode }) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedCounselor, setSelectedCounselor] = useState('')

    return (
        <MainContext.Provider value={{ selectedIndex, setSelectedIndex, selectedCounselor, setSelectedCounselor }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    const context = useContext(MainContext);
    
    if (!context) {
        throw new Error("useMainContext must be used within MainProvider");
    }
    
    return context;
};