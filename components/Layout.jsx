import React from "react"
import Header from "./Header" 
import { Outlet } from "react-router-dom"

export default function Layout() {
    /**
     * Challenge: get the Header working again
     */
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}