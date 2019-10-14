import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      "Client-ID d25fdbecef56c10e7a0b26f349f8066f133fa6db38e8394a6ccb4a8136ffb729"
  }
})