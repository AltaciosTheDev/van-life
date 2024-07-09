import React from "react"
import Header from "./Header" 
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
    /**
     * Challenge: get the Header working again
     */
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}