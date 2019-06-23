<template>
<div class = "textHolder">
    <div id = "content">{{msg}}</div>
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