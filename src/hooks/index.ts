import React from "react";
import { AppContext } from "../components/App/AppContext";

export function useApp () {
    return React.useContext(AppContext)
}