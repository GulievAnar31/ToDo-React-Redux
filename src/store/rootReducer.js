import { combineReducers } from "redux";
import appReducer from '../components/appReducer'

const rootReducer = combineReducers({
    app: appReducer
});

export default rootReducer;
