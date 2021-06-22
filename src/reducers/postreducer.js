import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from '../actions/type'

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            console.log('payis',action.payload._id)
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post._id === !action.payload._id);
        default:
            return posts


    }
}