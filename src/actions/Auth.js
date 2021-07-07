import {  AUTH } from '../actions/type'
import * as api from '../Apis/index'

export const signingUpData = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, payload: data })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signingIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, payload: data })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}