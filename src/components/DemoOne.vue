<template>
<div id = "demoOne">
<div class = "textHolder">
<div class = "title"><h1> {{title}}</h1></div>
<div id="content"> {{msg}}</div>
</div>
<div id = "imagesHolder">
<div class = "pictureHolder"  v-for="topic in topics">
<img class ="picture" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" v-bind:src="'https://source.unsplash.com/1600x900/?'+topic"/>

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
    name: 'demoOne',
    data () {
        return {
            topics: ['oceans', 'stars', 'mountains', 'listen', 'beyond', 'synchronize'],
            msg: "This demo is uses CSS Grid to create a responsive environment. Velocity.js is used for the animations, and Vue.js is used to create the structure and actions. ",
            title: 'Responsive Image Gallery With Hover Effect'
        }
    },
    methods: {
        nextDemo(){
            console.log('buttonWorking')
            router.push('demotwo')

        },
        mouseOver(thing, done){
            console.log(thing)
    //   Velocity(document.getElementById("imagesHolder"), { zIndex:-1 }, { duration: 300, complete:done })
      Velocity(thing.target, {
        scale: 1.3,   translateY: '+=2em',
        translateX: '-=1em', zIndex:100,
        
        }, 
        { duration: 300, complete:done })
            

        },
        mouseOut(thing, done){
            console.log('out')
            Velocity(thing.target,'reverse')
        //   Velocity(thing.target, { 
        //       scale: 1, zIndex:1,
        //       translateY: '-=2em', translateX: '+=1em',
        //        },
        //        {uration: 300, complete:done })
    //   Velocity(document.getElementById("imagesHolder"), { zIndex:1 }, { duration: 300, complete:done })

        }
    }
}
</script>

<style scoped>
#demoOne{
    display: grid;
    /* justify-content: center; */
    /* align-items: center; */
    height: 100vh;
    width: 100vw;
    grid-gap: 4vh;
    grid-template-columns: 100vw;
    grid-template-rows: 5vh 70vh 5vh;
    background: #f0f0f0;
    color:#D3F6FA;
}

#imagesHolder{
    display:grid;
    /* align-items: center; */
    width:90vw;
    margin-left:auto;
    margin-right:auto;
    /* height: 70vh; */
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    /* grid-template-rows: minmax(200px, auto);     */
    /* grid-template-rows: repeat(2, 200px);     */
    grid-gap: 3vh;
    /* background:#F8FA9D; */
    color:#0C385F;
}

.textHolder{
     width: 75%;
    color:#537780;
    margin:auto;
    /* background: #444; */
}
.picture{
    width: 350px;
    height: 200px;
    border: 9px solid #43dde6;
    box-shadow: 9px 5px 1px 1px #fc5185;
}

.pictureHolder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    margin: 1em;
    /* border: 2px solid black; */

}
#content{
   width:65%;
   margin:auto;
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
</style>