import { FETCH_POSTS, NEW_POST , AUTH_USER_SET , USERS_SET ,NEW_CHAT_CLIENT, BROWSE_NEW_CAR, FETCH_NEW_ITEMS} from './types';

import API from "../utils/API";



export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const fetchChatClient = (newClient) => dispatch => {
      dispatch({
        type: NEW_CHAT_CLIENT,
        payload: newClient
      })
    
};

export const fetchNewCar = (newCar) => dispatch => {
  dispatch({
    type: BROWSE_NEW_CAR,
    payload: newCar
  })
};


export const ReduxfetchItems = (newItemCat) => dispatch => {
   API.getSubCatItems(newItemCat).then((res)=>{
    dispatch({
      type: FETCH_NEW_ITEMS,
      payload: res.data
    })
            //  this.setState({catTreeItems:res.data})
         })

};
