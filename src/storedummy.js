import { createStore, combineReducers, compose } from 'redux'
import firebase from 'firebase'
import 'firebase/firestore' // add this to use Firestore
import 'firebase/auth'
import { ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, reduxFirestore, firestoreReducer } from 'redux-firestore'
//import { Provider } from 'react-redux'

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVPWCnNE7-bXMhvy8hMaNlRocWvQUDJ08",
  authDomain: "reactclientpanel-b1352.firebaseapp.com",
  databaseURL: "https://reactclientpanel-b1352.firebaseio.com",
  projectId: "reactclientpanel-b1352",
  storageBucket: "reactclientpanel-b1352.appspot.com",
  messagingSenderId: "91172901618",
  appId: "1:91172901618:web:4e6bc097b903f268d5366b",
  measurementId: "G-THRBM2YT7L"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  }
  
// initialize firebase instance
firebase.initializeApp(firebaseConfig);

//initialize Firestore
firebase.firestore()

// Add Firebase to reducers
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
    reduxFirestore(firebase) // <- needed if using firestore
    //  applyMiddleware(...middleware) // to add other middleware
  )
)


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

  // Add reduxReduxFirebase enhancer when making store creator
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )(createStore)



// Create store
// const store = createStoreWithFirebase(
//     rootReducer, 
//     initialState, 
//     compose(
//         reactReduxFirebase(firebase),
//         window.__REDUX_DEVTOOLS_EXTENSION__ & window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

export default store;


