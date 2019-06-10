<template>
<div id = "Demo">

<Intro v-bind:msg="msg"> </Intro>

<div class = "MainContentHolder">
    <div class ="animOne animHolder">
       <div class="wrapper ghost" v-on:mouseover="ghostMouseOver" v-on:mouseout="ghostMouseOut" > {{animationOne.text}} </div>
    </div>
    <div class ="animTwo animHolder">
       <div class="wrapper connectedText" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" > {{animationTwo.text}} </div>
    </div>
    <div class ="animThree animHolder">
        <div id="particles-js">
        </div>
       <div class="wrapper quote"> {{animationThree.text}} </div>
        
    </div>
</div>
<div class = "EndHolder">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>

</div>
</template>

<script>
import router from '../router.js'
import 'particles.js'
import Intro from './Intro'
export default {
    name: 'demoThree',
    components: {Intro},
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

        ghostMouseOver(thing, done){
            //  Velocity(thing.target, { letterSpacing: '-=.3em',rotateY: -5,  rotateZ: 10  },{ duration:300, easing:'easeInSine', complete:done} )

        },

        ghostMouseOut(thing,done){
            //  Velocity(thing.target,'reverse')

        },
      

        initParticles(){
            /* Particles */
            particlesJS("particles-js", 
            {"particles":
            {"number":

            {"value":500,"density":

            {"enable":true,"value_area":1200}},

            //node color 
            "color": {"value":"#042037"},

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
            "color":"#226666",
            // "color":"#EF6E73",
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
            router.push('dFour')
            console.log('buttonWorking')
        }
    }
}
</script>

<style scoped>
 /* eslint-disable */
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap');

#Demo{
    display: grid;
    width: 95vw;
    grid-template-columns: 95vw;
    grid-auto-rows: minmax(100px, auto);
    margin:auto;
    background: #f0f0f0;    
    color:#537780;
    font-size: 21px;   
}


.MainContentHolder {
    display: grid;
    width: 90vw;
    margin:auto;
    grid-gap: .5em;
    background: #537780;
    grid-template-columns: 44vw 1fr;
    grid-template-rows:30vh 30vh;
    grid-template-areas:
    "topLeft topRight"
    "bottom bottom";
}


.animHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height:30vh;
}
.animOne{
    grid-area: topLeft;
    background:#64868e;
    font-size: 45px;
    font-family: 'Oswald';
    font-weight:900;
    letter-spacing: .3em;
    /* box-shadow: 1px 2px 5px 5px #f3fbf1; */
    text-shadow: 0px 0px 0px rgba(243, 251, 241, 1);
    color: #64868e;
}

.animTwo{
    grid-area: topRight;
    background:#98b4a6;
    color: #d1e4d1;
    font-size: 24px;
}

.connectedText{
    text-shadow: 2px 4px 20px white;
    width: 85%;
}

.animThree {
    grid-area:bottom;
    background:#d1e4d1;

}
/* ---- particles.js container ---- */

#particles-js{
  width: 100%;
  height: 100%;

}
.quote{
    /* border: .2px solid #444; */
    position: absolute;
    font-size: 54px;
    text-shadow: 2px 1px #64868e;
}

.EndHolder {
    margin-top: 2em;
}


/* Mobile Settings */
@media (max-width: 800px) {

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