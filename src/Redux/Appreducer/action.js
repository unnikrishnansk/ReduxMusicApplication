import * as types from './actionTypes';

import axios from 'axios';

const getmusicrecords = (params) => (dispatch) => {
    dispatch(({type : types.GET_MUSIC_RECORD_REQUEST}));
    return axios 
    .get("http://localhost:8080/albums",params)
    .then((r) => {
        return dispatch({
            type : types.GET_MUSIC_RECORD_SUCCESS,
            payload : r.data,
        });
    })
    .catch((e) => {
        return dispatch({type : types.GET_MUSIC_RECORD_FAILURE});
    });
};

export {getmusicrecords};