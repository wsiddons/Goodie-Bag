// import { createStore, combineReducers } from 'redux'



// const rootReducer = combineReducers({
//   candies: candiesReducer
// })

// export default createStore(rootReducer)


let initialState = {
  candies: [{
    name: 'Skittles',
    description: 'Taste the rainbow',
    quantity: 2,
    imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
  }, {
    name: 'KitKat',
    description: 'Make the most of your break',
    quantity: 5,
    imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg'
  }, {
    name: 'M&M',
    description: 'Melts in your mouth, not in your hand',
    quantity: 4,
    imageUrl: 'https://images.heb.com/is/image/HEBGrocery/000121396'
  }]
}

const ADD_CANDY = 'ADD_CANDY'

export const addCandy = (candy) => {
  return {
    type: ADD_CANDY,
    candy
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case (ADD_CANDY):
      return [...state, action.candy]
    default:
      return state
  }
}










// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });
