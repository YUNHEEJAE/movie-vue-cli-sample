<template>
  <div id="app">
    <div id="nav">
      <img src="../src/assets/netflix.png">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">movie</router-link> |
      <router-link to="/TV">TV</router-link> 
        <div id="searchBar">
          <input
          id="search-bar"
          type="text"
          placeholder="검색어를 입력해 주세요."
          v-model="value"
          v-on:keyup.enter="search()" />
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { searchAPI } from "@/api";
  export default {
    data(){
      return {
        value : []
      }
    },

    methods : {
      search(keyword) {
        searchAPI(this.value)
      }
    }
  }
</script>

<style>
body {
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
  text-align: left;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}


#nav img {
  width: 100px;
}


#nav a.router-link-exact-active {
  color: #42b983;
}

#searchBar{
  float: right;
  border: 1px solid white;
  text-align: center;
  background: transparent;
  border-radius: 5px;
  height: 25px;
  width: 200px;
  border-right: transparent;
  color: white;
}
</style>
