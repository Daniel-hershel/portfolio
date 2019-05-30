<template>
<div id = "Demo">

<div class = "IntroHolder">
    <!-- <div class = "introTitle">
    <h1> {{title}}</h1>
    </div> -->
    <div class = "introContent">
    {{msg}}
    </div>
</div>
<div class = "MainContentHolder">
    <div class ="animOne animHolder">
       <div class="wrapper"> {{animationOne.text}} </div>
    </div>
    <div class ="animTwo animHolder">
       <div class="wrapper connectedText"> {{animationTwo.text}} </div>
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
// import 'blast-text'
export default {
    name: 'demoOne',
    data () {
        return {
            msg: "This demo uses Velocity.js to create interactive text animations. Particles.js is used to generate the interactive particle field. Vue.js and CSS Grid are used for the layout.",
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

        let aOne = document.querySelector('.animOne')
        Velocity(aOne,{textShadowX:'-=3.8px'}, {duration: 8200, easing:'easeOutCirc', loop:true})

        let connectedText = document.querySelector(".connectedText")
        
        Velocity(connectedText,{letterSpacing:'+=1.2em', lineHeight: '+=600px',rotateY: 5, rotateX: 80, rotateZ: 1  }, {duration: 200, easing:'easeOutCirc'})

        let quote = document.querySelector(".quote")        
        Velocity(quote,{textShadowY:'-=3.8px'}, {duration: 8200, easing:'easeOutCirc', loop:true})

        this.initParticles()
        this.connectedText()




    },
    methods: {
        connectedText(){
            let connectedText = document.querySelector(".connectedText")
            connectedText.addEventListener("mouseover", 
            function() {
                console.log(this)
                // $element = this;
                // console.log($element)
            Velocity(connectedText, { letterSpacing: 0, lineHeight:0,rotateY: 0, rotateX: 0, rotateZ: 0  },{ duration: 500}
            )
            })
            connectedText.addEventListener("mouseout", function() {
                //mouse off the item
            Velocity(connectedText, { letterSpacing:'+=1.3em', lineHeight: '+=500px',rotateY: 5, rotateX: 80, rotateZ: 1  },{ duration: 800}
            );
            })

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
            router.push('demofour')
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
    width: 100vw;
    grid-gap: 3vh;
    grid-template-columns: 97vw;
    margin:auto;
    grid-template-rows: 5vh 70vh 10vh;
    background: #f0f0f0;    
    color:#537780;
    font-size: 21px;    
    /* justify-content: center; */
    /* border: 2px solid #64868e; */
}

.IntroHolder {

}
.introContent{ 
    width:61%;
    margin:auto;
}
.MainContentHolder {
    display: grid;
    width: 90vw;
    margin:auto;
    padding: 1vw;
    grid-gap: 1vw;
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
    /* position:relative; */
}
.animOne{
    grid-area: topLeft;
    background:#64868e;
    font-size: 54px;
    font-family: 'Oswald';
    font-weight:900;
    letter-spacing: .5em;
    text-shadow:0px 0px #f3fbf1;
    color: #64868e;
}

.animTwo{
    grid-area: topRight;
    background:#98b4a6;
    color: #d1e4d1;
    font-size: 27px;
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
/* Mobile Settings */
@media (max-width: 900px) {

    #Demo{
    grid-template-rows: 20vh 85vh 10vh;

    }
    .MainContentHolder {
        width:100vw;
        grid-template-columns:100vw;
        grid-template-areas:
        "topLeft"
        "topRight"
        "bottom";
    }

    .introContent{
        width: 95%;
    }
}
</style>