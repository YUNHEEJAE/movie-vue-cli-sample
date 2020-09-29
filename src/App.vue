<template>
  <div id="app">
    <div id="nav">
      <img src="../src/assets/netflix.png">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">movie</router-link> |
      <router-link to="/TV">TV</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffffaf;
}

#nav {
  padding: 30px;
  text-align: left;
}
#nav img {
  width: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
