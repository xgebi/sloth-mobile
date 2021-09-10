import UserState from '../models/UserState';

const initialState: UserState = {
    name: '',
    token: '',
    tokenExpires: undefined,
};

export function userReducer(
    state: UserState = initialState,
    action: any // TODO change any
) {

}