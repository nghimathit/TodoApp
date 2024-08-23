import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [selectCategory, setselectCategory] = useState("");
    return (
        <AppContext.Provider value={{ selectCategory, setselectCategory }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider