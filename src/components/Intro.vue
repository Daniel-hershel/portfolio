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

<style>

.textHolder{
    width:68%;
    margin:auto;
    font-size: 21px;  
    /* margin-top:0; */

}
/* Mobile */
@media (max-width: 900px) {
.textHolder{
     width: 90%;
    color:#537780;
    margin:auto;
    margin-bottom: 1.1em;
    font-size: 16px;    
}
}
</style>