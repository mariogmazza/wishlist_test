import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {loadState, saveState} from './localStorage'
// we are passing the persisted state instead of initialstate
const initialState = {};
const persistedState = loadState();
const middleware = [thunk];

// console.log('persisted state',persistedState)
var store;
if (window.navigator.userAgent.includes('Chrome')) {
   store = createStore(
    rootReducer,
    persistedState,
    // initialState,
   
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    persistedState,
    // initialState,
    
    compose(
      applyMiddleware(...middleware)
      
    )
  );
}

store.subscribe(()=>{
  saveState({cart:store.getState().cart})
})

export default store;
