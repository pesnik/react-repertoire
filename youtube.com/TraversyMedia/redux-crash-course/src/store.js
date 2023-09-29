import { legacy_createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const initialState = {}

const middleware = [thunk]

const store = legacy_createStore(rootReducers, initialState, applyMiddleware(...middleware))

export default store