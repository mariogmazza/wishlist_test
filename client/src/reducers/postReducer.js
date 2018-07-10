import {
  FETCH_POSTS,
  NEW_POST,
  NEW_CHAT_CLIENT,
  BROWSE_NEW_CAR,
  FETCH_NEW_ITEMS
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  chatClient: null,
  browseCar: [],
  newItemsCatTree: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case BROWSE_NEW_CAR:
      return {
        ...state,
        browseCar: action.payload
      };

    case NEW_CHAT_CLIENT:
      return {
        ...state,
        chatClient: action.payload
      };

    case FETCH_NEW_ITEMS:
      return {
        ...state,
        newItemsCatTree: action.payload
      };
    default:
      return state;
  }
}