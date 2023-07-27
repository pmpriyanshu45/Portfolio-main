import ChangeOverlay from "./overlay";
import changeHeader from "./changeHeader";

import { combineReducers } from "redux";

const rootRe = combineReducers({
    ChangeOverlay,
    changeHeader,
})

export default rootRe;