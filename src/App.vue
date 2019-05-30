<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demoone">Demo One</router-link> |
      <router-link to="/demotwo">Demo Two</router-link> |
      <router-link to="/demothree">Demo Three</router-link>|
      <router-link to="/demofour">Demo Four</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body{
  background:#f0f0f0;

}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#f0f0f0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #fc5185;
}
</style>
