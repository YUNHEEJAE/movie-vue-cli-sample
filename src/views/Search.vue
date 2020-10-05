<template>
    <div class='search'>
      <li v-for="result in items" :key="result.id">
        <Poster :propsPath='result.poster_path'/>
      </li> 
    </div>
</template>


<script>
import Poster from '../components/Poster'
    export default {
        props:{
            items:{
                type : Array,
                required : true
            }
        },
        
        components:{
            Poster
        }
    }
</script>