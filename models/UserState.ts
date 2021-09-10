import moment from "moment";

interface UserState {
    name: string;
    token: string;
    tokenExpires: moment.Moment;
}

export default UserState;