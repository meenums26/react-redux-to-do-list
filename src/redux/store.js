import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import notesReducer from './reducers/notesReducer'
import thunk from 'redux-thunk'
const middleware = [thunk]
export const store = createStore(notesReducer,composeWithDevTools(applyMiddleware(...middleware)))