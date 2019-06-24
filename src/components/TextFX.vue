<template>
<div class = "MainContentHolder">
    <div class ="animOne animHolder">
       <div class="wrapper ghost" > {{animOneText}} </div>
    </div>
    <div class ="animTwo animHolder">
       <div class="wrapper connectedText"  v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" > {{animTwoText}} </div>
    </div>
    <div class ="animThree animHolder">
        <div id="particles-js">
        </div>
       <div class="wrapper quote"> {{animThreeText}} </div>
        
    </div>
</div>
</template>
<script>
export default {
    name: 'TextFX',
    data(){
        return {
        }

        },
        props: {
            animOneText: String,
            animTwoText: String,
            animThreeText: String
        },
        methods: {
            mouseOver(event){
                this.$emit('comeTogether',event.target)
            },
            mouseOut(event){
                this.$emit('breakApart', event.target)
            }
        }
}
</script>
<style scoped lang="less">
 /* eslint-disable */
@foreground: #ffe3b7;
@background: #0e2431; 
@highlight: #ffaf00;
@crimson: #cb0101;
@feature: #f9b248;
@edgeRed: #cb0101;

@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap&css');

.MainContentHolder {
    display: grid;
    width: 100%;
    margin:auto;
    grid-gap: .2em;
    border: .2em solid @foreground;
    background: @foreground;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:30vh 50vh;
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
}

.animOne{
    grid-area: topLeft;
    background:@background;
    font-size: 45px;
    font-family: 'Oswald';
    font-weight:900;
    letter-spacing: .3em;
    /* box-shadow: 1px 2px 5px 5px #f3fbf1; */
    text-shadow: 0px 0px 0px @highlight;
    color: @background;
}

.animTwo{
    grid-area: topRight;
    background:@background;
    color: #d1e4d1;
    font-size: 24px;
}

.connectedText{
    display: flex;
    align-items:  center;
    justify-content:center;
    text-shadow: 2px 4px 20px @highlight;
    box-shadow: 1px 1px 10px @edgeRed;
    width: 80%;
    padding: .3em;
    height: 30vh;
    // border: 2px solid yellow;
}

.animThree {
    grid-area:bottom;
    background:@background;

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
    text-shadow: 2px 1px @highlight;
}

/* Mobile Settings */
@media (max-width: 920px) {

 

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