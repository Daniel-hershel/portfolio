<template>
<div class = "textHolder">
    <div id = "content">{{msg}}</div>
    <a href = "https://github.com/Daniel-hershel/portfolio/tree/master/src" target="_blank"> See The Code Here </a>
</div>

</template>

<script>
export default {
    component: "Intro",
    props:{
        msg: String,
    }
}
</script>


<style scoped lang="less">
@foreground: #ffe3b7;
@background: #0e2431; 


.textHolder{
    width:68%;
    position: relative;
    margin:auto;
    font-size: 18px;
    margin-bottom: 1.5em;
    padding: 1.1em;
    /* background:#ffaf00; */
    
    background:#f9b248; 
    /* color:#537780; */
    color:#0e2431;
    -moz-box-shadow: 3px 3px 5px 6px lighten(@background,20%);
    -webkit-box-shadow: 3px 3px 5px 6px lighten(@background,20%);
    box-shadow: 3px 3px 5px 6px lighten(@background,20%);
}

a{

    margin: 1em;
    color: lighten(@background, 10%);
    // position: absolute;
    // bottom: 0;
    // right: 1em;
}

a:hover{
    background: @background;
    color: @foreground;
    text-decoration: none;
}
/* Mobile */
@media (max-width: 700px) {
.textHolder{
    width: 85%;
    color:#537780;
    margin:auto;
    margin-bottom: 1.1em;
    font-size: 16px;    
}

}
</style>