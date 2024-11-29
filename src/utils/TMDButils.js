export const NOWPLAYINGMOVIEURL ="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
export const MovieVideoURL =`https://api.themoviedb.org/3/movie/{id}/videos?language=en-US`
export const TMDBOptions={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjg5NGEyMzMxM2QwZmYxNDE3ZDVhMmM1ZmIzNDU3NyIsIm5iZiI6MTczMjg2MjkyNC41MTAyNDcsInN1YiI6IjY3NDk2MWJjNDkxOTA5YzFiNzlkZWNhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1hC-EW8khsc0fORhgn_FtZKDKvakVG_AgMUCHIaELEc'
    }
  }