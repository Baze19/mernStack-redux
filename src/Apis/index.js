import axios from 'axios'
import base from '../axios/Axios'
import { likedPost } from '../actions/posts'
//  const url = "https://bazememo.herokuapp.com/posts"
// const url =""
// const url = 'http://localhost:5000/posts';
// const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
//   });



export const fetchPost = () => base.get('/posts')
export const createPost = (newpost) => base.post('/posts', newpost)
export const updatedpost = (id, updatedPost) => base.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => base.delete(`posts/${id}`)
export const likePost = (id) => base.patch(`/posts/${id}/likePost`)

// export const signIn = (formData) => API.post('/user/signingin',formData)
// export const signUp = (formData) => API.post('/user/signingup',formData)
export const signIn = (formData) => base.post('/user/signin', formData);
export const signUp = (formData) => base.post('/user/signup', formData);