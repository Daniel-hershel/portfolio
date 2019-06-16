<template>
<div id = "Demo">

<Intro v-bind:msg="msg"> </Intro>
<div class = "wrapper">
    <div class = "instruction"> {{zipInstruction}}</div>
    <input id = "zip" v-model="zip" placeholder="enter zip">
</div>
<div class = "wrapper">
<div class = "instruction"> {{feelInstruction}}</div>
<textarea id = "feel" v-model="feelings" placeholder="how are you feeling?"></textarea>
</div>
<div class = "wrapper">
<button id= "go" @click="createEntry">Generate </button>
</div>
<div class="wrapper stage" v-if="action">
<div id = "title"> {{title}} </div>
<div id = "entryHolder">
<div id = "temp" class = "hold">
<div>{{temp}} degrees</div>

</div>
<div id="date" class = "hold">
{{date}}
</div>
<div id="response" class = "hold">
{{feelings}}
</div>
</div>
</div> 
</div>
</template>

<script>
import router from '../router.js'
import Intro from './Intro'
export default {
    name: 'Demo',
    components:{Intro},
    data () {
        return {
            msg: "This demo uses the OpenWeatherMap Web API and Vue.js to create an interactive weather journal.",
            zipInstruction: "Enter your zip code below:",
            feelInstruction: "How are you feeling today?",
            title: 'Weather Journal',
            zip: [],
            feelings: '',
            temp: '',
            date: [],
            date: [],
            action: false
        }
    },
    mounted(){
        console.log('mounted')
        let d = new Date();
        let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
        this.date = newDate;
    },
    methods: {
        nextDemo(){
            router.push('/')
            console.log('buttonWorking')
        },
        createEntry(){
            console.log(this);
            // Personal API Key for OpenWeatherMap API
            const apiKey = '&appid=9f15e45060210ec849a698b3298f0bed&units=imperial';
            // get weather from zip with api
            fetch('http://api.openweathermap.org/data/2.5/weather?zip='+ this.zip+apiKey)
            .then((resp) => resp.json())

            .then(washedData=>{
                this.temp = Math.round(washedData.main.temp);
                this.action = true;
                })
          
        }
    }
}
</script>

<style scoped>
<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,600,700&display=swap" rel="stylesheet">

/*  Mobile First  */

#Demo{
    grid-template-columns: 980px;
    margin:auto;
    grid-auto-rows: minmax(200px, auto);
    font-size: 16px;
    color:#537780;

}

.stage{
    background:#f9f6d8;
    min-height: 300px;
    font-family: 'Oswald', sans-serif;
}
#entryHolder{
    display:grid;
    width: 450px;
    margin:auto;
    margin:auto;
    grid-gap:0;
    text-align:center;
    grid-template-areas:
    'topLeft topRight'
    'bottom bottom';
}

.hold{
    background: rgba(255, 213, 70, 0.2);
    border: 1px solid rgba(236, 198, 48, 0.5);
}
#title{
    font-size: 2.5em; 
}

#subTitle{
    font-size:1.8em;
}

#date{
    grid-area:topLeft;
}


#temp{
    grid-area: topRight;
}

#response{
    grid-area: bottom;
    font-size: 1.3em;

}

.wrapper{
    margin:1em;
}
/* Desktop Settings */
@media (min-width: 900px) {
#Demo{
    grid-auto-rows: minmax(200px, auto);
    font-size: 20px;    
}
}
</style>