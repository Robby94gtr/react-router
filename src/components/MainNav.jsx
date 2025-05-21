import React from 'react'
import { NavLink } from 'react-router-dom'


const MainNav = () => {
    const links = [
        {
            path: "/",
            page: "Homepage",
        },
        {
            path: "/Chi siamo",
            page: "Chi siamo",
        },
        {
            path: "/Prodotti",
            page: "Prodotti",
        }
    ]
    return (
        <header>
            <nav>
                <ul>
                    {links.map((link, index) => {
                        return <li key={index}>
                            <NavLink to={link.path}>{link.page}</NavLink>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default MainNav