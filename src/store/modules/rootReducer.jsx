import { combineReducers } from "redux"

import selects from "./selects/reducer"
import countys from "./countys/reducers"

export default combineReducers({
    selects,
    countys
})