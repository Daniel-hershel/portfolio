<template>
<div id = "Demo">
<div class = "textHolder">
<!-- <div id="title" class = "title"> 
    {{title}}
    </div> -->
<div id="content"> {{msg}}</div>
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
<div id = "imagesHolder">
<div class = "pictureHolder"  v-for="topic in topics">
<img class ="picture" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" v-bind:src="'https://source.unsplash.com/1600x900/?'+topic"/>
</div>
</div>
<!-- <div class = "End">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div> -->
</div>
</template>

<script>
import router from '../router.js'
import fitty from 'fitty'
export default {
    name: 'DemoOne',
    data () {
        return {
            topics: ['oceans', 'stars', 'mountains', 'listen', 'beyond', 'synchronize'],
            msg: "This demo uses Vue.js, the Unsplash photo API, CSS Grid, and Velocity.js to create a responsive photo gallery with hover animation. ",
            title: 'Responsive Image Gallery With Hover Effect'
        }
    },
    mounted() {
        console.log('mounted working');
        // fitty('#content',{
        // minSize: 14,
        // maxSize: 30
        // });
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
        scale: 1.1,   translateZ: '-=2em',
        zIndex:100,
        
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
 /* eslint-disable */

#Demo{
    display: grid;
    width: 100vw;
    grid-gap: 4vh;
    grid-template-columns: 100vw;
    grid-template-rows: 20vh 1fr;
    background: #f0f0f0;
    color:#D3F6FA;
    font-size:16px;
}

/*  Mobile First  */
#imagesHolder{
    display:grid;
    width:90vw;
    margin-left:auto;
    margin-right:auto;
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 5vw;
    color:#0C385F;
}


.textHolder{
     width: 100%;
    color:#537780;
    margin:auto;
    margin-bottom: 1.1em;
    /* background: #444; */
}
.picture{
    width: 250px;
    height: 137px;
    border: 9px solid #43dde6;
    box-shadow: 9px 5px 1px 1px #fc5185;
}

/* Desktop Settings */
@media (min-width: 900px) {
#Demo{
    grid-template-rows: 10vh 1fr;

}
.picture{
    width: 350px;
    height: 200px;
    border: 9px solid #43dde6;

}

.textHolder{
    width:68%;
    font-size:21px;

}
}

.pictureHolder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    margin: 2em;
    /* border: 2px solid black; */

}
#content{
   width:65%;
   margin:auto;
}

.End{
    margin-top: 1em;
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
</style>