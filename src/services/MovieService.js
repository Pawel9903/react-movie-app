import { http } from '../helpers/http'
import { apiKey } from "../apiKey";


const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&`;
const API = {
  SEARCH_BY_NAME: (name) => `${URL}s=${name}`,
  SEARCH_BY_ID: (id) => `${URL}s=${id}`
};

const movieService = {
    searchByName: (name) => {
        return http.get(API.SEARCH_BY_NAME(name))
    },
    searchById: (id) => {
        return http.get(API.SEARCH_BY_ID(id))
    },
};

export default movieService