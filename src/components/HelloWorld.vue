<template>
<div id="Home">
  
  <div id="name" class = "hd section">
    <div class = "wrapper">{{name}}</div>
    </div>  
  <div class = "bl section">
    <div id= "blurb" class = "wrapper">{{blurb}}</div>
    <div class = "wrapper">
    <button type="submit" @click.prevent="nextDemo()"> First Demo </button>
    </div>  
  </div>  
  <div class = "ti section">
    <div id="title" class = "wrapper">{{title}}</div>
  </div>  

</div>
</template>

<script>
import router from '../router.js'
import fitty from 'fitty'
export default {
  name: "HelloWorld",
  data() {
    return{
      name: "Daniel Silber-Baker",
      title:"Designer & Developer Full Stack Interactive Web Experiences",
      blurb:"Impassioned designer and developer experienced in building content-rich interactive web experiences that communicate complex ideas. Adept at transforming a myriad of information including words, pictures and data, into compelling, easy to follow interactive experiences that capture attention and engage audiences."
    }
  },
  mounted() {
    console.log('mounted working');
    // fitty('#name',{
    // minSize: 45,
    // maxSize: 300
    // });

    // fitty('#title',{
    //   minSize:64,
    //   maxSize: 100
    // })

    // fitty('#blurb', {
    //   minSize: 20,
    //   maxSize: 38
    // })
  },
  methods: {
    nextDemo(){
      router.push('demoone')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Home{
  display: grid;
  width: 95vw;
  grid-auto-rows: minmax(100px, auto);
  margin:auto;
  /* margin-top: 10vh; */
  grid-gap: 1vh;
  padding: 2vh;
  grid-template-areas:
  "hd"
  "ti"
  "bl";
  background: #f0f0f0;
  color:#537780;
  font-size: 18px;
}
#name{
  font-size: 3em;
  font-weight: bold;
  text-align: center;
}

#title{
  font-size: 1.9em;
  font-weight: bold;
}

@media (min-width: 700px) {
  #Home{
      margin-top: 10vh;
      grid-template-columns:repeat(5, 1fr);
      grid-template-rows: 15vh 1fr;
      height: 100vh;
      grid-template-areas:
      "hd hd hd hd hd hd hd"
      "ti ti ti bl bl bl bl";
  }

  #name{
    font-size: 4em;
    text-align: left;

  }

  #title{
  font-size: 2.9em;

  }
}

.section{
  /* height: auto; */
}

.wrapper{
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  /* height: 35vh; */
  /* background: rgba(43, 54, 59, .3); */
}

.hd{
  grid-area: hd;
}


.bl{
  grid-area:bl;
}

.ti{
  grid-area:ti;
  /* line-height:4em; */
}
button{
   background: none;
   width: 300px;
   height:50px;
   color: #537780;
   border: 2px solid #537780;
   font-size:16px;
   font-weight:bold;
   margin-top: 1vh;
}
button:hover{
    background:#537780;
    color:white;
}
</style>
