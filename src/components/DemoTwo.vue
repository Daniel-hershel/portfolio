<template>
<div id = "demoTwo">
<div class = "textHolder">
<div class = "title">
<h1> {{msg}}</h1>
</div>
<div class = "content">
</div>
</div>
<div class = "contentHolder">
<div id = "input">
  <div>  {{instructionsOne}} </div>
  <div> 
  <input v-model="keyWord" placeholder="edit me">
  </div>
  <div> 
  <button class = "miniButton" type="submit" @click.prevent="createImage()">Go Forth</button>
  </div>
</div>
<div v-show:if="action" id = "output">
<div id = "keyword" v-bind:style="{fontSize: fontSize + 'px', color:color}"> {{keyWord}}</div>
<div id= "imageHolder"><img  class ="picture" v-bind:src="'https://source.unsplash.com/1600x900/?'+keyWord"/></div>
</div>
<div v-show:if="action" id="controls">
      <div>  {{instructionsTwo}} </div>
<button v-on:click="fontSize++">
  Increase font size
</button>
<button v-on:click="fontSize--">
  Decrease font size
</button>
<input v-model="color" placeholder="enter any hex code or named color for text">
</div>
</div>
<div class = "end">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
</div>
</template>

<script>
import router from '../router.js'

export default {
    name: 'demoTne',
    data () {
        return {
            fontSize: 72,
            color: "#fffff8",
            title: 'Create Your Own Poster',
            msg: "Demo Two",
            instructionsOne: "To begin enter any word or short phrase into the box below and then press 'Go Forth' to generate a poster.",
            instructionsTwo: 'You can adjust the text style with the controls below your generated image. To start a new poster, or to get a new image, simply enter a new search term in the box and watch the poster genreate in real time!',
            keyWord: 'test',
            action: false
        }
    },
    methods: {
        nextDemo(){
            console.log('buttonWorking')
        },
        createImage(){
            console.log(this.action)
            this.action = true;
            console.log(this.action)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Mrs+Sheppards|Kavoon');
#demoTwo{
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-gap: 4vh;
    grid-template-columns: 98vw;
    grid-template-rows: 5vh 70vh 5vh;
    background: #f0f0f0;
    color:#537780;
    font-size: 18px;


}

.contentHolder {
    display: grid;
    grid-gap: 2vh;
    width: 95vw;
    margin:auto;
    grid-template-columns: 25vw 60vw;
    grid-template-rows: 50vh 10vh;
}

#input{
    display:grid;
    grid-template-rows: 10vh 30vh 5vh;
    background:#DBEDF2;
    /* width: 70vw; */
    height: 50vh;
  align-items: center;

}

#output{
    width: 70vw;
    height: 50vh;
    background: #43dde6;
}

#controls{
grid-column: 2/2;
}

#imageHolder{
    display: relative;
}

.picture{
    /* position:absolute; */
    /* left: 0; */
}
img {
    width: 69vw;
    height: 49vh;
    padding: .5vw;
}

#keyword{
    position:absolute;
    transform: translate(25vw, 20vh);
    /* font-size: 7.5em; */
    /* color: #fffff8; */
    background:rgba(68, 68, 68, .4);
    /* height: 8vh; */
    /* font-family: 'Kavoon', cursive; */
    font-family: 'Mrs Sheppards', cursive;
    letter-spacing: .2em;


}
input{
    height: 2.8em;
    width: 20vw;
}
button{
   background: none;
   width: 300px;
   height:50px;
   color: #444;
   border: 2px solid #444;
   font-size:16px;
   font-weight:bold;
}
button:hover{
    background:#444;
    color:white;
}

.miniButton{
    width: 15vw;
}
</style>