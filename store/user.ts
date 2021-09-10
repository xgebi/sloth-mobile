import UserState from '../models/UserState';
import {State} from "../models/state";
import moment from "moment";
import {LOG_OUT, USER_LOGGED_IN} from "./types";
import {AnyAction, Reducer} from "redux";

const initialState: UserState = {
    name: '',
    token: '',
    tokenExpires: moment(),
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
        case LOG_OUT:
            return { ...state, user: action.payload };
            break;
        default:
            return state;
    }
}

export { reducer as userReducer};

export async function logUserIn(username: string, password: string) {
    return (dispatch: any, getState: any) => {

    }
}

export const isLoggedIn = (state: State) => {
    const now = moment();
    if (state.user.name.length > 0 && state.user.token.length > 0 && moment().diff(state.user.tokenExpires) > 0) {
        return true;
    }
    return false;
};