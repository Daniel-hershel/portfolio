<template>
  <div id="app">
    <div id="nav">
      <div id = "contact">
      contact me at: daniel.h.silber.baker@gmail.com
    </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/dOne">Demo One</router-link> |
      <router-link to="/dTwo">Demo Two</router-link> |
      <router-link to="/dThree">Demo Three</router-link>|
      <router-link to="/dFour">Demo Four</router-link>
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
  padding: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #fc5185;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
input{
    height: 3.5em;
    width: 250px;
    border: 2px solid #537780;
    text-align: center;
    background-color: #f3fbf1;
    margin-top:.8em;
}

input:focus {
    border:none;
}

textarea{
      border: 2px solid #537780;
    background-color: #f3fbf1;
    height: 100px;
    width: 250px;


}
button{
   background: none;
   width: 300px;
   height:50px;
   color: #537780;
   border: 2px solid #537780;
   font-size:16px;
   font-weight:bold;
   margin-top: 1.5em;
}
button:hover{
    background:#537780;
    color:white;
}
</style>
