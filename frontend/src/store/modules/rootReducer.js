import {combineReducers} from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";
import firmware from "./firmware/reducer";

export default combineReducers({auth, user, firmware});