import { GET_USER } from "../action/user.action";

const inititalState = {};

export default function userReducer(state = inititalState,action){
    switch (action.type) {
        case GET_USER :
            return action.payload
        default:
            return state;    
    }

}