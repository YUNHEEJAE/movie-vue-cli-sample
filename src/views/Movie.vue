<template>
    <div class="movie">
      <h1>This is an movie page</h1>
      <List :items='results'/>
    </div>
</template>

<script>
import Poster from '../components/Poster'
import List from '../components/List'
const axios = require('axios')
//const TMDB_KEY = 'b7ce98ef3071243e8db32a799eae4c3c';



export default {
    data() {
      return {
        results:[]  
      }
    },
    mounted(){
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b7ce98ef3071243e8db32a799eae4c3c&language=en-US&page=1`, {
        }).then((response)=> {
          this.results = response.data.results
        })
        .catch((error)=> {
          console.log(error);
        })
    },
    components:{
      Poster,
      List
    }
}
</script>
