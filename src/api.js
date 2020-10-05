const axios = require('axios')
const TMDB_KEY = 'b7ce98ef3071243e8db32a799eae4c3c';

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params : {
      ...params,
      api_key : TMDB_KEY
    }
  }).then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

  export const searchAPI = query =>
  axios.get(`https://api.themoviedb.org/3/search/company?api_key=${TMDB_KEY}&page=1&query='${query}'`, {
  }).then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });