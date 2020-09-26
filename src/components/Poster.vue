<template>
    <img :src='imgPoster(propsPath)' style="width:200px"/>
</template>

<script>
export default {
    methods : {
        imgPoster(imgPath){
            return `https://image.tmdb.org/t/p/original${imgPath}`; 
        }
    },
    props : {
        propsPath :{
            type : String,
            required : true
        }
    }
}
</script>