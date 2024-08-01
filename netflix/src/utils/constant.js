export  const API_END_POINT = "http://localhost:8080/api/v1"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhmYzc4OTBjYjc5OWFkZjg1ODBlZDllNDE5YmE5NSIsIm5iZiI6MTcyMTkzMDk5NS4xNzA0MDksInN1YiI6IjY2YTI5MzQ5MTFkNjc3ZDkzMDI2NjIxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VK5rATRswM54u_rFrQMhnIdWWtIXYfeTvLS10vHpe-0'
  }
};
export const NowPlaying = "https://api.themoviedb.org/3/movie/now_playing"
export const Popularo = "https://api.themoviedb.org/3/movie/popular"
export const TopRated = "https://api.themoviedb.org/3/movie/top_rated"
export const UpComing = "https://api.themoviedb.org/3/movie/upcoming"