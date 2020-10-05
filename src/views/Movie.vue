<template>
    <div class="movie">
      <h1>This is an Movie Page</h1>
      <List :items='results'/>
    </div>
</template>

<script>
  import List from '../components/List'
  const axios = require('axios')
  const TMDB_KEY = 'b7ce98ef3071243e8db32a799eae4c3c';

  export default {
      data() {
        return {
          results:[]  
        }
      },

      mounted() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-KR&page=1`, {})
        .then((response)=> {
            this.results = response.data.results
          })
          .catch((error)=> {
            console.log(error);
          })
      },
      
      components: {
        List
      }
  }
</script>
