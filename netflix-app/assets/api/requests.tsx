export async function fetchBanner() {
  const nowPlayingRes = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const nowPlayingData = nowPlayingRes.results;
  const nowPlayingDataBackDrop =
    nowPlayingData[Math.floor(Math.random() * nowPlayingData.length)];
  return nowPlayingDataBackDrop;
}

export async function fetchUpComing() {
  const upComingRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'no-store' }
    )
  ).json();
  const upComingData = upComingRes.results;
  return upComingData;
}

export async function fetchNowPlaying() {
  const nowPlayingRes = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const nowPlayingData = nowPlayingRes.results;
  return nowPlayingData;
}

export async function fetchTopRated() {
  const topRatedRes = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const topRatedData = topRatedRes.results;
  return topRatedData;
}

export async function fetchPopular() {
  const popularRes = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const popularData = popularRes.results;
  return popularData;
}
