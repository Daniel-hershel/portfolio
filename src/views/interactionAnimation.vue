<template>
<div id = "Demo">

<Intro v-bind:msg="msg"> </Intro>

<TextFX
v-bind:animOneText="animationOne.text"
v-bind:animTwoText="animationTwo.text"
v-bind:animThreeText="animationThree.text"
>

</TextFX

<div class = "EndHolder">
<button type="submit" @click.prevent="nextDemo()"> Back Home </button>
</div>

</div>
</template>

<script>
import router from '../router.js'
import 'particles.js'
import Intro from '../components/Intro'
import TextFX from '../components/TextFX'
export default {
    name: 'demoThree',
    components: {Intro, TextFX},
    data () {
        return {
            msg: "This demo uses Velocity.js to create interactive text animations and Particles.js to generate the interactive particles. Layout with Vue.js and CSS Grid.",
            title: "Demo Three",
            animationOne: {
                text: "Ghost Text"
            },
            animationTwo: {
                text: "It All Comes Together"
            },
             animationThree: {
                text: "The Web Connects Us"
            }
        }
    },
    mounted (){
        // Animation One
        let aOne = document.querySelector('.ghost')
        Velocity(aOne,{textShadowX:'-=3.8px',textShadowBlur:'+=10px',  letterSpacing: '-=.2em'}, {duration: 8200, delay:800, easing:'easeInQuad', loop:true})
        // Animation Two
        let connectedText = document.querySelector(".connectedText")
        
        Velocity(connectedText,{letterSpacing:'+=1.2em', lineHeight: '+=500px',rotateY: 5, rotateX: 80, rotateZ: 1  }, {duration: 200, easing:'easeInQuart'})
        // Animation Three
        let quote = document.querySelector(".quote")        
        Velocity(quote,{textShadowY:'-=3.8px'}, {duration: 8200, easing:'easeOutCirc', loop:true})


        // Initiate Particle Systems For Animation 3
        this.initParticles()
    },
    methods: {
        mouseOver(thing,done){
               Velocity(thing.target, { letterSpacing: 0, lineHeight:0,rotateY: 0, rotateX: 0, rotateZ: 0  },{ delay:0,duration: 600, easing:'easeInSine', complete:done}
            )

        },

        mouseOut(thing,done){
                //mouse off the item
            Velocity(thing.target,'reverse')
        },

      

        initParticles(){
            /* Particles */
            particlesJS("particles-js", 
            {"particles":
            {"number":

            {"value":800,"density":

            {"enable":true,"value_area":1200}},

            //node color 
            "color": {"value":"#ffaf00"},

            "shape":
            {"type":"circle","stroke":
            {"width":.1,"color":"#6B0062"},"polygon":
            {"nb_sides":5},

            "image":
            {"src":"img/github.svg","width":100,"height":100}},

            "opacity":
            {"value":0.5,"random":false,"anim":
            {"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},

            "size":
            {"value":2.5,"random":false,"anim":
            {"enable":false,"speed":20,"size_min":0.1,"sync":false}},

            //'edges' connectors between two nodes
            "line_linked":
            {"enable":true,"distance":150,
            // "color":"#226666",
            "color":"#cb0101",
            "opacity":0.4,"width":1},

            "move":
            {"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":
            {"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":
            {"detect_on":"canvas","events":
            {"onhover":
            {"enable":true,"mode":"repulse"},"onclick":
            {"enable":true,"mode":"push"},"resize":true},"modes":
            {"grab":
            {"distance":400,"line_linked":
            {"opacity":1}},"bubble":
            {"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":
            {"distance":200,"duration":0.4},"push":
            {"particles_nb":4},"remove":


            {"particles_nb":2}}},"retina_detect":true});
        },
        nextDemo(){
            router.push('/')
            console.log('buttonWorking')
        }
    }
}
</script>

<style scoped lang="less">
@foreground: #ffe3b7;
@background: #0e2431; 
@highlight: #ffaf00;
@crimson: #cb0101;
 /* eslint-disable */
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap&css');

#Demo{
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    margin:auto;
    font-size: 21px;   
}



.EndHolder {
    margin-top: 2em;
}


/* Mobile Settings */
@media (max-width: 920px) {

    #Demo{
    font-size: 16px;
    grid-gap:1.5em;
    /* grid-auto-rows: minmax(250px, auto); */
    width:95vw;
    grid-template-columns: 95vw;
    margin:auto; 
    /* border: 2px solid yellow; */

    }

    .quote{
        font-size:36px;
        width: 85%;
        margin:auto;
    }
    .MainContentHolder {
        width:95vw;
        margin:auto;
        grid-template-columns:95vw;
        grid-template-areas:
        "topLeft"
        "topRight"
        "bottom";
    }


}
</style>