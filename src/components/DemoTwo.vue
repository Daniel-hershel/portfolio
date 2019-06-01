<template>
<div id = "demoTwo">
<div class = "textHolder">
<!-- <div class = "title">
<h1> {{title}}</h1>
</div> -->
    <div class = "instruction" v-if="action">  {{msg}} <br> <br> {{instructionsTwo}} </div>
    <div class = "instruction"  v-else> {{msg}} <br><br> {{instructionsOne}} </div>
</div>
<div class = "contentHolder">
<div id = "input">
  <!-- <div>  -->
  <input id="keyInput" v-model="keyWord" placeholder="edit me">
  <button class = "miniButton" type="submit" @click.prevent="createImage()">Create</button>
  <!-- </div> -->
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
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>

</div>
</div>

</div>

<div v-show:if="!action"class = "end">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
</div>
</template>

<script>
import router from '../router.js'

export default {
    name: 'demoTwo',
    data () {
        return {
            fontSize: 72,
            color: "#fffff8",
            title: 'Create Your Own Poster',
            title: "Demo Two",
            msg: "This demo uses conditional rendering, text binding, and style control for an interactive poster making environment.",
            instructionsOne: 'To begin enter any word or short phrase into the box below and press "Create" to create an interactive poster with your word.',
            instructionsTwo:'To start a new poster, or to get a new image, simply start typing in the box and watch the poster genreate in real time!',
            instructionsThree: 'You can adjust the text style with the controls below your generated image.',
            keyWord: '',
            action: false
        }
    },
    methods: {
        nextDemo(){
            console.log('buttonWorking')
            router.push('dThree')

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
 /* eslint-disable */

@import url('https://fonts.googleapis.com/css?family=Istok+Web:700|Marck+Script|Maven+Pro:700&display=swap');

#demoTwo{
    display: grid;
    /* height: 100vh; */
    width: 95vw;
    grid-gap: .5em;
    grid-template-columns: 95vw;
    margin:auto;
    grid-template-rows: 15vh 75vh 5vh;
    background: #f0f0f0;
    color:#537780;
    font-size: 21px;
}

.textHolder{
    width:68%;
    margin:auto;
    font-size: 21px;    
}
.contentHolder {
    display: grid;
    /* width: 100vw; */
    margin:auto;
    grid-template-columns: 95vw;
    grid-template-rows: 18vh 60vh;
    grid-gap: 2vh;
    /* border: 2px solid #64868e; */
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
    grid-template-rows: 55vh 25vh;
    width: 75vw;
    margin:auto;
    grid-gap:.5em;
    /* height: 75vh; */
}

#controlCenter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top:.8em;

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
    width: 73vw;
    height: 49vh;
    padding: .5vw;
    border: 9px solid #43dde6;
    box-shadow: 9px 5px 1px 1px #fc5185;
}

#keyword{
    position:absolute;
    transform: translate(25vw, 20vh);
    background:rgba(68, 68, 68, .4);
    font-family: 'Maven Pro', sans-serif;
    /* font-family: 'Istok Web', sans-serif; */
    /* font-family: 'Marck Script', cursive; */
    /* font-family: 'Oswald', sans-serif; */
    letter-spacing: .07em;
    font-weight: 900;
    box-shadow: 6px 3px 1px 1px rgba(252, 81, 133, 1);



}
input{
    height: 2.8em;
    width: 20vw;
    border: 2px solid #537780;
    text-align: center;
    background-color: #f3fbf1;
    margin-top:.8em;
}


input:focus {
    border:none;
}


#keyInput{
    height:3vh;
    font-size: 1.5em;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
button{
   background: none;
   width: 300px;
   height:50px;
   color: #537780;
   border: 2px solid #537780;
   font-size:16px;
   font-weight:bold;
}
button:hover{
    background:#537780;
    color:white;
}

.miniButton{
    /* width: 15vw; */
    
}

/* Mobile Settings */
@media (max-width: 900px) {

    .textHolder{
        width: 90%;
        color:#537780;
        margin:auto;
        margin-bottom: 1.1em;
        font-size: 16px;
    }

    #demoTwo{
        grid-template-rows: 20vh 80vh;
        font-size: 16px;
    }
    #input{
    }
    #output{
        width: 100vw;
        grid-template-rows: 65vh 35vh;
        
    }
    input{
        height: 3.8em;
        width: 40vw;
    }   

    #keyInput{
        font-size: 1.2em;
    }
    .miniButton{
        width: 25vw;
    }

}
</style>