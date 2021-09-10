import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducer} from "./user";

export const store = createStore(
    combineReducers({
        user: userReducer
    })
)
