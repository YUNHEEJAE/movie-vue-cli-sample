<template>
    <ul>
      <li v-for="result in items" :key="result.id">
        {{ result }}
        <Poster :propsPath='result.poster_path'/>
      </li> 
    </ul>
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