import axios from 'axios'
import { likedPost } from '../actions/posts'
const url = "https://bazememo.herokuapp.com/posts"
export const fetchPost = ()=> axios.get(url)
export const createPost=(newpost)=> axios.post(url,newpost)
export const updatePost=(id,updatedPost)=> axios.patch(`${url}/${id}`,updatedPost)
export const deletePost=(id)=> axios.delete(`${url}/${id}`)
export const likePost=(id)=> axios.patch(`${url}/${id}/likePost`)

