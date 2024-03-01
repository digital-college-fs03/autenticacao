import React from "react";
import { AppContext } from "../components/App/AppContext";
import { AppContextType } from "../types";

export function AppProvider ({ children }: { children: React.ReactNode }) {
    const value: AppContextType = {
        user: null,
        signIn (username: string, password: string) {
            return Promise.resolve({ username, password })
        }
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
