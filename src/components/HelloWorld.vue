<template>
<div id="Home">
  
  <div class = "hd section">
    <div id="name" class = "wrapper">{{name}}</div>
    </div>  
  <div class = "bl section">
    <div id= "blurb" class = "wrapper">{{blurb}}</div>
    <div class = "button wrapper">
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
  },
  methods: {
    nextDemo(){
      router.push('dOne')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@foreground: #ffe3b7;
 /* eslint-disable */

/* Mobile First */
#Home{
  display: grid;
  // width: 80vw;
  grid-auto-rows: minmax(100px, auto);
  margin:auto;
  /* margin-top: 10vh; */
  grid-gap: 1vh;
  grid-template-areas:
  "hd"
  "ti"
  "bl";
  color:@foreground;
  font-size: 18px;
}
#name{
  font-size: 2.8em;
  margin:auto;
  font-weight: bold;
  text-align: center;
}

#title{
  font-size: 1.9em;
  font-weight: bold;
  text-align: center;
  line-height: 1.5em;
}

#blurb {
  text-align:center;
}

.button{
  display:flex;
  align-items: center;
}
/* Desktop*/
@media (min-width: 900px) {
  #Home{
      grid-template-columns:repeat(5, 1fr);
      grid-template-rows: 15vh 1fr;
      // width:85vw;
      margin:auto;
      margin-top: 10vh;
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
    text-align: left;
    line-height: 1.1em;



  }

  #blurb{
      text-align: right;

  }
}

.section{
  /* height: auto; */
}

.wrapper{
  display: flex;
  flex-direction: column;
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

</style>
