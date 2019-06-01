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
    <div class = "featured section">
        <div class ="featuredTitle">{{title}} </div>
        <div class = "featuredContent"> {{featuredContent}} </div>
    </div>
    <div id = "mainArticle" class="section">
    <div class = "articleA section">
        <div class="fakeImage"></div>{{contentA}}</div>
    <div class = "articleB section">
        <div class="fakeImage"></div>{{contentB}}</div>
    <div class = "articleC section">
        <div class="fakeImage"></div>{{contentC}}</div>
    <!-- <div class = "more section">{{more}}</div>
    <div class = "addContent section">Content</div> -->
    </div>

</div>
<!-- <div class = "EndHolder">
    <button type="submit" @click.prevent="nextDemo()"> Back Home </button>
</div> -->

</div>
</template>

<script>
import router from '../router.js'

export default {
    name: 'Demo',
    data () {
        return {
            title: 'Layout & Typography',
            msg: "This demo uses Vue.js & CSS grid to easily design an elegant responsive layout for text and images on the web. ",
            featuredContent: "We need to put these last issues to bed time vampire onward and upward, productize the deliverables and focus on the bottom line land the plane. Spinning our wheels bottleneck mice, nor those options are already baked in with this model, yet programmatically, nor let's unpack that later. Put a record on and see who dances.",
            contentA:" Thinking outside the box baseline the procedure and samepage your department.  ",
            contentB:"Level the incentivization we don't want to boil the ocean nor run it up the flag pole. ",
            contentC: "Work flows powerPointless, wiggle room, upstream selling so due diligence in this space or UI.",
            more: "More Content You Might Like",
            moreContent: ""
        }
    },
    methods: {
        nextDemo(){
            router.push('/')
            console.log('buttonWorking')
        }
    }
}
</script>

<style>
#Demo{
    display: grid;
    width: 100vw;
    grid-gap: 1.5vh;
    grid-template-columns: 100vw;
    grid-template-rows: 9vh 75vh 5vh;
    background: #f0f0f0;
    color:#537780;
    font-size: 21px;
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
    padding: 1vh;
    /* background: rgba(83, 119, 128, .7); */
    grid-template-columns: 90vw;
    grid-auto-rows: minmax(250px, auto);

    /* grid-template-rows: 15vh 40vh; */
    grid-gap: 2vh;
}

.section {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    text-align: left;
}
.featured {
    text-align: center;
}

.featuredTitle{
    font-size: 2.7em;
}

.featuredContent {
    width: 79%;
    margin:auto;
}

#mainArticle{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    /* border: 1px solid yellow; */
    width: 75vw;
    /* height: 45vh; */
    /* background: #444; */
    margin-left:auto;
    margin-right:auto;
 
}

.fakeImage{
  background-color: #e1e1e1;
  display: block;
  height: 10vh;
  margin-bottom: 1rem;
  width: 100%;
}
.articleA {
    padding: 1vw;
    margin: 1vw;    

} 
.articleB {
    padding: 1vw;
    margin: 1vw;    

}
.articleC {
    padding: 1vw;
    margin: 1vw;    
}

.more {
    
}

.addContent{
    
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
   margin-top:4vh;
}
button:hover{
    background:#537780;
    color:white;
}

/*  Mobile Settings */
@media (max-width: 900px) {
    #Demo{
        grid-template-rows: 9vh 100vh;
        /* border: 1px solid red; */
        font-size:16px;

        /* grid-auto-rows: minmax(200px, auto); */

    }
.MainContentHolder {
        grid-auto-rows: minmax(200px, auto);


}
    .introContent{
        width:95%;
    }
}
</style>