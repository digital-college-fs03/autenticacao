import { Navigate, useLocation } from "react-router-dom"
import { useApp } from "../../hooks"

export function ProtectPage ({ children }: { children: JSX.Element }) {
    const app = useApp()
    const from = useLocation()
    if (app.user) {
        return children
    }
    return <Navigate
        to="/login"
        state={{ from }}
        replace
    />
}
