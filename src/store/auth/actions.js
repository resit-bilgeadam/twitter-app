import axios from 'axios';
import { SET_TOKEN, SET_USER } from "./types";
import env from '../../environment';

export const setToken = (token) => ({type: SET_TOKEN, payload: token});
export const setUser = (user) => ({type: SET_USER, payload: user});

export const registerAction = (registerForm) => async (dispatch) => {
    const {data} = await axios.post(`${env.baseURL}/auth/local/register`, registerForm);

    localStorage.setItem('token', data.jwt);
    dispatch(setToken(data.jwt));
    dispatch(setUser(data.user));
}

export const loginAction = (loginForm) => async (dispatch) => {
    const {data} = await axios.post(`${env.baseURL}/auth/local`, loginForm);

    localStorage.setItem('token', data.jwt);
    dispatch(setToken(data.jwt));
    dispatch(setUser(data.user));
}

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('token');

    dispatch(setToken(null));
    dispatch(setUser(null));
}

export const fetchUserDetails = () => async (dispatch) => {
    const token = localStorage.getItem('token');

    if (!token) return;

    const {data} = await axios.get(`${env.baseURL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch(setUser(data));
    dispatch(setToken(token));
}