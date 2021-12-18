import axios from 'axios';
import env from '../../environment';
import {SET_TWITS} from './types';

export const setTwits = (twits) => ({ type: SET_TWITS, payload: twits });

export const fetchTwits = () => async (dispatch) => {
    const {data} = await axios.get(`${env.baseURL}/twits?_sort=created_at:DESC`);

    dispatch(setTwits(data));
}

export const postTwit = (twit) => async (dispatch, getState) => {
    const {auth} = getState();

    if (!auth.token) return;

    const twitData = {
        text: twit.text,
        user: auth.user.id
    }

    await axios.post(`${env.baseURL}/twits`, twitData, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    })

    dispatch(fetchTwits());
}

