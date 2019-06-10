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
    font-size: 18px;
    margin-bottom: 1.5em;
    padding: 1.1em;
    background:#f3fbf1;
    color:#537780;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
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