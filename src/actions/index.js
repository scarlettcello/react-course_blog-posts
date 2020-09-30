import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tumbler1234'

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

  dispatch({ type: FETCH_POSTS, payload: response });
};

export const createPost = (values, callback) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback());

  dispatch({ type: CREATE_POST, payload: response });
}

export const fetchPost = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({ type: FETCH_POST, payload: response });
}

export const deletePost = (id, callback) => async dispatch => {
  await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());

  dispatch({ type: DELETE_POST, payload: id });
}