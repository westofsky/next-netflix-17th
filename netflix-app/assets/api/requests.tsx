import instance from './axios';
const API_KEY = '4a87076c7a6bfe146f57401604176096';

// export const fetchNowPlaying = () => { //이건 무시해도 돼
//   return instance
//     .get(`movie/now_playing?api_key=${API_KEY}`)
//     .then((res) => res.data);
// };
export async function fetchUpComing() {
  const upComing = await instance.get('upcoming?');
  return upComing;
}
