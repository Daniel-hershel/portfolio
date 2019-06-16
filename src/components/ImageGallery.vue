<template>
<div id = "imagesHolder">
<div class = "featured">
<img class = "active" v-bind:src="'https://source.unsplash.com/1600x900/?'+topics[activeIndex]"/>

 </div>
<div class = "thumbnailsWrapper"> 
    <div class = "thumbnails" v-for="(topic, index) in topics">
    <img :id="topic" class ="picture" @click="onClick" v-bind:src="'https://source.unsplash.com/1600x900/?'+topic"/>
     </div>
     </div>
</div>
</template>

<script>
export default {
    component: "ImageGallery",
    methods:{
        onClick(event){
            this.$emit('clicked', event.target.id)
        }
    },
    props: {
        topics:{
            type: Array,
            required: true
        },
        activeIndex: {
            type:Number
        },
        bar:{
            type: String
        }
        
        
    }
}
</script>

<style scoped>


#imagesHolder{
    width:90vw;
    margin-left:auto;
    margin-right:auto;
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: 90vw;
    color:#0C385F;
    grid-gap:.05em;
    border:6px solid #537780;

}

.active{
    width: 320px;
    height: 188px;
}
.featured{
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.thumbnailsWrapper{
    display: grid;
}
.picture{
    width: 250px;
    height: 137px;
}

.thumbnails{
 /*   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    */
    padding: .2em;
}

img {
    max-width: 900px;
}
/* Desktop Settings */
@media (min-width: 500px) {

#imagesHolder{
    max-width: 900px;

}

.active{
    width: 100%;
    height: 390px;

}
.thumbnailsWrapper{
    display: grid;
    max-width: 900px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));  
    grid-auto-rows: minmax(160px, auto);
    width: 90vw;
    margin:auto;

}

.picture{
    width: 100%;
    height: 150px;
}


}

</style>