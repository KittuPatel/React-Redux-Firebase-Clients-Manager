import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from './config/firebaseConfig'
import {createFirestoreInstance} from 'redux-firestore'
import { composeWithDevTools } from 'redux-devtools-extension';

//check for settings in local storage
if(localStorage.getItem('settings') == null) {
  // default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }
  localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

const initialState = {
  settings: JSON.parse(localStorage.getItem('settings'))
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
    })),
  )
)


// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
