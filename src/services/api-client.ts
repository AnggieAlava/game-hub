import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '18d553bd60b1452382b14d32008b61fb',
  },
});
