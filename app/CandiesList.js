import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
// const Candies = require('../server/db/models/Candy')


function CandiesList() {
    // const candies = Candies.findAll()
    const candies = useSelector(state => state.candies)
    console.log(candies)

    return (
        <>
            <NavBar />
            <h1 className='header'>You have {candies.length} types of  candies in your goodie-bag</h1>
            <div className='candy-container'>
                {candies.map((candy) =>
                    <div>
                        <h2 key={candy.id}>{candy.name} qty: {candy.quantity}</h2>
                        <img width="300" src={candy.imageUrl} />
                        <p>{candy.description}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CandiesList