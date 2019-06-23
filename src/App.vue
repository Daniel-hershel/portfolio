<template>
  <div id="app">
    <div id="nav">
      <div id = "contact">
      contact me at: daniel.h.silber.baker@gmail.com
    </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/dOne">Demo One</router-link> |
      <router-link to="/dTwo">Demo Two</router-link> |
      <router-link to="/dThree">Demo Three</router-link> |
      <router-link to="/dFour">Demo Four</router-link>
    </div>
    <router-view />
  
  </div>
</template>

<style lang="less">

@foreground: #ffe3b7;
@background: #0e2431; 
@highlight: #ffaf00;

body{
  background:@background;


}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:@foreground;
  max-width: 1150px;
  margin:auto;
  /*background:#f0f0f0;*/
}
#nav {
  padding: 25px;
}

#nav a {
  font-weight: bold;
  color:#537780;
}

#nav a.router-link-exact-active {
  color: @highlight;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    background-color: #f3fbf1;

}
input{
    height: 3.5em;
    width: 250px;
    border: 2px solid #537780;
    text-align: center;
    background-color: #f3fbf1;
    margin-top:.8em;
    font-size:1.2em;
}

input:focus {
    border:none;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size:1.3em;
}
::-moz-placeholder { /* Firefox 19+ */
  font-size:1.3em;
}
:-ms-input-placeholder { /* IE 10+ */
  font-size:1.3em;
}
:-moz-placeholder { /* Firefox 18- */
  font-size:1.3em;
}
textarea{
      border: 2px solid #537780;
    background-color: #f3fbf1;
    height: 100px;
    width: 250px;
    font-size:1.2em;

}
button{
   background: none;
   width: 300px;
   height:50px;
   color: @highlight;
   border: 2px solid @highlight;
   font-size:16px;
   font-weight:bold;
   margin-top: 1.5em;
}
button:hover{
    background:@highlight;
    color:@background;
}
</style>
