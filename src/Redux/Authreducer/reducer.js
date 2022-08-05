import * as types from './actionTypes';

const initialstate = {
    isAuth : false,
    token : '',
    isloading : false,
    iserror : false,
}

const reducer = (oldstate = initialstate,action) => {
    const { type, payload } = action;

    switch(type)
    {
        case types.USER_LOGIN_REQUEST:
           return {
                ...oldstate,
                isloading : true,
            };

            case types.USER_LOGIN_SUCCESS:
           return {
                ...oldstate,
                isloading : false,
                isAuth : true,
                token : payload,
            };

            case types.USER_LOGIN_FAILURE:
           return {
                ...oldstate,
                iserror : true,
            };

            default : 
            return oldstate;
    }

}

export {reducer};