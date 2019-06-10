<template>
<div id = "Demo">

<IntroWB :onClick="nextDemo" v-bind:msg="msg"></IntroWB>

<div id = "imagesHolder">
    <div class = "pictureHolder"  v-for="topic in topics">
    <img class ="picture" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" v-bind:src="'https://source.unsplash.com/1600x900/?'+topic"/>
     </div>
</div>

</div>
</template>

<script>
import router from '../router.js'
import IntroWB from './IntroWButton.vue'
export default {
    name: 'DemoOne',
    components:{IntroWB},
    data () {
        return {
            topics: ['oceans', 'stars', 'mountains', 'listen', 'beyond', 'synchronize'],
            msg: "This demo uses Vue.js, the Unsplash photo API, CSS Grid, and Velocity.js to create a responsive photo gallery with hover animation. ",
            title: 'Responsive Image Gallery With Hover Effect',
        }
    },
    mounted() {
        console.log('mounted working A');

    },
    methods: {
        nextDemo(){
            router.push('dTwo')
        },
        mouseOver(thing, done){
            console.log(thing)
            Velocity(thing.target, {
                scale: 1.4,   translateZ: '-=2em',
                zIndex:100, skewX: .5, boxShadowBlur: '+=2em'
            },{ duration: 300, complete:done })
        },
        mouseOut(thing, done){
            Velocity(thing.target,'reverse')
        }
    }
}
</script>

<style scoped>
 /* eslint-disable */
/*  Mobile First  */

#Demo{
    display: grid;
    width: 100vw;
    grid-gap: 4vh;
    grid-template-columns: 100vw;
    grid-template-rows: 25vh 1fr;
    background: #f0f0f0;
    color:#537780;
    font-size:16px;
}

#imagesHolder{
    display:grid;
    width:95vw;
    margin-left:auto;
    margin-right:auto;
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    color:#0C385F;
    grid-gap:3.5em;
}

.picture{
    width: 250px;
    height: 137px;
    border: 5px solid #43dde6;
    box-shadow: 1px 1px 1px 1px #fc5185;
}

.pictureHolder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    margin: .5em;
    /* border: 2px solid black; */
}
/* Desktop Settings */
@media (min-width: 900px) {
#Demo{
    grid-auto-rows: minmax(200px, auto);
    font-size: 21px;  
}
#imagesHolder{
    width:80vw;
    margin-left:auto;
    margin-right:auto;
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}

.picture{
    width: 275px;
    height: 160px;
}


}
</style>