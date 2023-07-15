import { applyMiddleware,combineReducers, legacy_createStore, Store } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { actionType, dataType, DispatchType, stateType } from "../constraints/type";



let middleware = [thunk]
// let rootReducer = combineReducers({reducer})


export const store: Store<stateType, actionType> & {dispatch: DispatchType} = legacy_createStore(reducer, applyMiddleware(...middleware))