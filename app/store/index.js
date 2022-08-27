import { createStore } from 'redux'
import reducer from './store'
import { addCandy } from './store'

const store = createStore(reducer)


store.subscribe(() => console.log(store.getState()))
// store.dispatch(addCandy({
//     name: 'Skittles',
//     description: 'Taste the rainbow',
//     quantity: 2,
//     imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
// }))

export default store