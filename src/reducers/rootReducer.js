import {combineReducers} from 'redux'
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import notifyReducer from './notifyReducer'
import settingsReducer from './settingsReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingsReducer
})

export default rootReducer;