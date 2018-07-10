import { combineReducers } from 'redux';
import postReducer from './postReducer';
import sessionReducer from './sessions';
import userReducer from './user';
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  posts: postReducer,
  sessionState: sessionReducer,
  userState: userReducer,
  products: productsReducer,
  cart: cartReducer
});

export default rootReducer;
