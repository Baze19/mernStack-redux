import axios from 'axios'
import react from 'react'
let Token = JSON.parse(localStorage.getItem('Profile'))?.token


var myAxios = axios.create({
    baseURL: 'https://memo-auth.herokuapp.com/',
//   timeout: 10000000000,
   headers: {Authorization: `Bearer ${Token}`}
});


export default myAxios;