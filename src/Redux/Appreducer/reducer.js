import * as types from './actionTypes';

const initialState = {
    musicRecords : [],
    isloading : false,
    iserror : false,
};

const reducer = (oldstate = initialState,action) => {
    const {type , payload} = action;

    switch(type)
    {
        case types.GET_MUSIC_RECORD_REQUEST:
            return {
                ...oldstate,
                isloading: true,
                iserror : false,
            }

            case types.GET_MUSIC_RECORD_SUCCESS:
            return {
                ...oldstate,
                isloading: false,
                iserror : false,
                musicRecords : payload,
            }

            case types.GET_MUSIC_RECORD_FAILURE:
            return {
                ...oldstate,
                isloading: false,
                iserror : true,
            }

        default : 
        return oldstate
    }
}

export {reducer};