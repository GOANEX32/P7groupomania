import { GET_USER, UPLOAD_PICTURE } from "../action/user.action";

const inititalState = {};

export default function userReducer(state = inititalState,action){
    switch (action.type) {
        case GET_USER :
            return action.payload
        case UPLOAD_PICTURE :
            return{
                ... state,
                picture : action.payload,
            }    
        default:
            return state;    
    }

}