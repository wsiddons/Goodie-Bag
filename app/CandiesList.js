import React from 'react'
import { useSelector } from 'react-redux'
// const Candies = require('../server/db/models/Candy')


function CandiesList() {
    // const candies = Candies.findAll()
    const candies = useSelector(state => state.candies)
    console.log(candies)

    return (
        <div>
            hello
        </div>
    )
}

export default CandiesList