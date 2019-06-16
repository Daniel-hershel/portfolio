<template>
<div id = "Demo">
<Intro v-bind:msg="msg"> </Intro>

<ImageGallery
v-bind:topics="topics"
v-bind:activeIndex="activeIndex"
@clicked="featureImage"
>
</ImageGallery>
<div class = "EndHolder">
<button type="submit" @click.prevent="nextDemo()"> Next Demo </button>
</div>
</div>
</template>

<script>
import router from '../router.js'
import Intro from './Intro.vue'
import ImageGallery from './ImageGallery.vue'
export default {
    name: 'DemoOne',
    components:{Intro, ImageGallery},
    data () {
        return {
            topics: ['oceans', 'stars', 'mountains', 'listen', 'beyond', 'synchronize'],
            msg: "This demo uses Vue.js, the Unsplash photo API, & CSS Grid,to create a responsive photo gallery. Click on any of the thumbnail images to feature image. ",
            title: 'Responsive Image Gallery With Hover Effect',
            activeIndex: 2,
            hover: false
        }
    },
    mounted() {
        console.log('mounted working A');

    },
    methods: {
        nextDemo(){
            router.push('dTwo')
        },
        featureImage (e){

            this.activeIndex = this.topics.indexOf(e);
            
            console.log(this.activeIndex)

        },
       
    }
}
</script>

<style scoped>
 /* eslint-disable */
/*  Mobile First  */

#Demo{
    display: grid;
    width: 100vw;
    grid-template-columns: 100vw;
    grid-auto-rows: minmax(100px, auto);
    background: #f0f0f0;
    color:#537780;
    font-size:16px;
}

/* Desktop Settings */
@media (min-width: 900px) {
#Demo{
    grid-auto-rows: minmax(100px, auto);
    font-size: 21px;  
}


}
</style>