import axios from 'axios';
import env from '../../environment';
import {SET_TWITS} from './types';

export const setTwits = (twits) => ({ type: SET_TWITS, payload: twits });

export const fetchTwits = () => async (dispatch) => {
    const {data} = await axios.get(`${env.baseURL}/twits?_sort=created_at:DESC`);

    dispatch(setTwits(data));
}

export const fetchTwit = (id) => async (dispatch) => {
    const {data} = await axios.get(`${env.baseURL}/twits/${id}`);

    return data;
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

export const fetchComments = (twitId) => async () => {
    const {data} = await axios.get(`${env.baseURL}/comments?twit=${twitId}&_sort=created_at:DESC`)
    console.log(data);

    return data;
}

export const postComment = (comment, twitId) => async (dispatch, getState) => {
    const {auth} = getState();

    if (!auth.token) return;

    const commentData = {
        text: comment.text,
        twit: twitId,
        user: auth.user.id
    }

    await axios.post(`${env.baseURL}/comments`, commentData, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    });

    dispatch(fetchTwits());
}

export const postCommentLike = (commentId) => async (dispatch, getState) => {
    const {auth} = getState();

    if (!auth.token) return;

    const commentLikeData = {
        user: auth.user.id,
        comment: commentId
    }

    return await axios.post(`${env.baseURL}/comment-likes`, commentLikeData, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    });
}

export const deleteCommentLike = (commentLikeId) => async (dispatch, getState) => {
    const {auth} = getState();

    if (!auth.token) return;

    return await axios.delete(`${env.baseURL}/comment-likes/${commentLikeId}`, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    })
}

export const postLike = (twitId) => async (dispatch, getState) => {
    const {auth} = getState();

    if (!auth.token) return;

    const likeData = {
        twit: twitId,
        user: auth.user.id
    }

    await axios.post(`${env.baseURL}/likes`, likeData, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    });

    dispatch(fetchTwits());
}

export const deleteLike = (likeId) => async (dispatch, getState) => {
    const { auth } = getState();

    if (!auth.token) return;

    await axios.delete(`${env.baseURL}/likes/${likeId}`, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    });

    dispatch(fetchTwits());
}
