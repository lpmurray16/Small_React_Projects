import axios from 'axios';
const KEY = 'AIzaSyC_u9g_FXgezZd7t1u5P9Mu9HeJ8C4-WVQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
})