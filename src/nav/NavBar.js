import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">HOME</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/shop">SHOP</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/saved">SAVED</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/looks">LOOKS</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/lists">LISTS</Link>
            </li>
        </ul>
    )
}