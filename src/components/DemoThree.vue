<template>
<div id = "demoOne">
<div class = "title">
<h1> {{msg}}</h1>
</div>
<div class = "imageHolder">

</div>
<div class = "end">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
</div>
</template>

<script>
import router from '../main.js'

export default {
    name: 'demoOne',
    data () {
        return {
            msg: "Demo One"
        }
    },
    methods: {
        nextDemo(){
            console.log('buttonWorking')
        }
    }
}
</script>

<style>
#demoOne{
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-gap: 4vh;
    grid-template-columns: 100vw;
    grid-template-rows: 10vh 60vh 10vh;
    background: #273149;
    color:#D3F6FA;
}
</style>