import React from "react"
import {Link, NavLink} from "react-router-dom"
import avatarIcon from "../assets/images/avatar-icon.png"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut(){
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to="/about"style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={avatarIcon}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}X/>
            </nav>
        </header>
    )
}