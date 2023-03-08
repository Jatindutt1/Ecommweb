import { createReducer } from "@reduxjs/toolkit";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/Userconstant"



export const loginReducer = createReducer({}, {

    LOGIN_REQUEST: () => {
        return {
            loading: true,
            isAuthenticate: false,
        }

    },
    LOGIN_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticate: true,
            user: action.payload,
        }

    },
    LOGIN_FAIL: (state, action) => {
        return {
            ...state,
            loading: false,

            isAuthenticate: false,
            user: null,
            error: action.payload,
        }


    }


})
