export const API_KEY = 'aabc3819d83a10eaef1f257417370ab0'
const BASE_URL = 'https://api.themoviedb.org/3'

export const MOVIE_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export const THUMBNAIL_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const BACKEND_BASE_URL = "https://web-production-de75.up.railway.app/"
// export const BACKEND_BASE_URL = "http://127.0.0.1:8000/"

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests;

