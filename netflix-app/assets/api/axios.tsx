import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/movie/',
  params: {
    api_key: '4a87076c7a6bfe146f57401604176096',
    language: 'ko-KR',
  },
});

export default instance;
