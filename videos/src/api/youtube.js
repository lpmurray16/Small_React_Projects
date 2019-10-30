import axios from 'axios';
const KEY = 'AIzaSyASAY5n42l4tvAY2mztFz283_oq07R4GeA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
})