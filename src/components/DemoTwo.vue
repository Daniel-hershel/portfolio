<template>
<div id = "DemoTwo">
<Intro v-bind:msg="msg"> </Intro>

<div class = "contentHolder">

<div id = "input">
  <div class = "instructions">  
    <div class = "instruction"> {{instructionsOne}} </div>
    </div>
  <input id="keyInput" v-model="keyWord" placeholder="edit me">
  <button class = "miniButton" type="submit" @click.prevent="createImage()">Create</button>
</div>

<div v-show:if="action" id = "output">
<div id="poster">
<div id = "keyword" v-bind:style="{fontSize: fontSize + 'px', color:color}"> {{keyWord}}</div>
<div id= "imageHolder"><img  class ="picture" v-bind:src="'https://source.unsplash.com/1600x900/?'+keyWord"/></div>
</div>
<div id = "controlCenter">
<!-- <div id = "controlInstructions">  {{instructionsThree}} </div> -->
<div v-show:if="action" id="controls">
<div>
<label for="colorPicker">Font Color: </label>
<input v-model="color" id="colorPicker" placeholder="enter any hex code or named color for text">
</div>
<div class ="fontSizing">
    <button v-on:click="fontSize++">
  Increase font size
</button>
<button v-on:click="fontSize--">
  Decrease font size
</button>
</div>
</div>
<!-- <button type="submit" @click.prevent="nextDemo()"> Next Demo </button> -->

</div>
</div>

</div>

<div class = "end">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
</div>
</template>

<script>
import router from '../router.js'
import Intro from './Intro.vue'
export default {
    name: 'DemoTwo',
    components: {Intro},
    data () {
        return {
            fontSize: 52,
            color: "white",
            title: 'Create Your Own Poster',
            title: "Demo Two",
            msg: "This demo uses conditional rendering, text binding, and style control for an interactive poster making environment.",
            instructionsOne: 'To begin enter any word or short phrase into the box below and press "Create" to generate an interactive poster with your word.',
            // instructionsTwo:'To start a new poster, or to get a new image, simply start typing in the box and watch the poster genreate in real time!',
            instructionsThree: 'You can adjust the text style with the controls below your generated image.',
            keyWord: '',
            action: false
        }
    },
    methods: {
        nextDemo(){
            router.push('dThree')
        },
        createImage(){
            this.action = true;
        }
    }
}
</script>

<style scoped>
 /* eslint-disable */

@import url('https://fonts.googleapis.com/css?family=Istok+Web:700|Marck+Script|Maven+Pro:700&display=swap');

#DemoTwo{
    grid-template-columns: 375px;
    margin:auto;
    grid-auto-rows: minmax(200px, auto);
    font-size: 16px;
    color:#537780;
    margin-bottom: 2.5em;
}

.contentHolder {
    display: grid;
    margin:auto;
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 2vh;    
}

.instructions{
    width: 65%;
}
#input{
    display:flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin:auto;
}

#output{
    display: grid;
    grid-auto-rows: minmax(200px, auto);
    margin:auto;
    grid-gap:.5em;
}

#controlCenter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top:.8em;
}

.miniButton { 
    background: #43dde6;
    color:#fc5185;
    border:none;
    width:150px;
    }
.miniButton:hover{ 
    color: #43dde6;
    background:#fc5185;
    }
.fontSizing{
    margin: 1.5vh;
}

#imageHolder{
    display: relative;
}

.picture{
}
img {
 
    width: 332px;
    height: 190px;
    padding: .5vw;
    border: 9px solid #43dde6;
    box-shadow: 9px 5px 1px 1px #fc5185;
}

#keyword{
    position:absolute;
    transform: translate(100px, 70px);
    background:rgba(68, 68, 68, .4);
    font-family: 'Maven Pro', sans-serif;
    /* font-family: 'Istok Web', sans-serif; */
    /* font-family: 'Marck Script', cursive; */
    /* font-family: 'Oswald', sans-serif; */
    letter-spacing: .07em;
    font-weight: 900;
    box-shadow: 6px 3px 1px 1px rgba(252, 81, 133, 1);
}


#keyInput{
    font-size: 1.1em;
}

/* Desktop Settings */

@media (min-width: 700px) {

    img{
        width: 550px;
        height: 320px;
    }

}
@media (min-width: 900px) {
#DemoTwo{
    grid-auto-rows: minmax(200px, auto);
    font-size: 20px;    
}
#output{
    width: 900px;
}
img {
    width: 750px;
    height: 420px;
  
}
#keyword{
    position:absolute;
    transform: translate(25vw, 20vh);

}
}
</style>