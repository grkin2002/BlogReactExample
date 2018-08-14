import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=greg1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request //this is a promise object, will pass through middleware redux promise.
  };
}
