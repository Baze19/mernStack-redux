import { AUTH, LOGOUT } from '../actions/type'

const authReducer = (state = { auth: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('Profile', JSON.stringify({ ...action?.payload }))
            return { ...state, auth: action?.payload }
            case LOGOUT:
                localStorage.clear();
                return { ...state, auth:null}
        default:
            return state;

    }
};

export default authReducer;