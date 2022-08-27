import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to={'/'}>
                <h1>HOME</h1>
            </Link>
        </nav>
    )
}

export default NavBar