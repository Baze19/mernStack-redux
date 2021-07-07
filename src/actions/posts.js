import {FETCH_ALL,CREATE,DELETE,UPDATE,LIKE} from '../actions/type'
//import all the functions in the api folder
import * as api from '../Apis/index'


export const getPost =  ()=> async (dispatch) =>{
    try {
        const {data } = await api.fetchPost();
        dispatch({
            type:FETCH_ALL,
            payload:data
        }) 
    } catch (error) {
        console.log(error)
    }
}


export const createPost = (post)=> async (dispatch) => {
    try {
     const  {data} = await api.createPost(post) ;
     dispatch({
         type:CREATE,
         payload:data
     })
    } catch (error) {
        console.log(error)
    }
}

export const updatedPost  = (id,post) => async (dispatch) => {
    try {
        const {data} = await api.updatedpost(id,post);
        dispatch({
            type:UPDATE,
            payload:data
        })

    } catch (error) {
        console.log(error)
    }
}

export const deletedPost  = (id,history) => async (dispatch) =>{
    try {
         await api.deletePost(id)
        dispatch({
            type:DELETE,
            payload:id
        })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


export const likedPost  = (id) => async (dispatch) =>{
    
    try {
        const {data} = await api.likePost(id)
        dispatch({
            type:LIKE,
            payload:data
        })

    } catch (error) {
        console.log(error)
    }
}