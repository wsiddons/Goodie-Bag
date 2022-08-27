import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav>
                <Link to={'/candies'}>
                    <h1>Goodie Bag</h1>
                </Link>
            </nav>
            <main>
                <h1>Welcome to the Goodie Bag!</h1>
                <p>What a nice home page for your goodies!</p>
            </main>
        </div>
    )
}

export default Home