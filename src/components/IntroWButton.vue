<template>
<div class = "textHolder">
    <div id = "content">{{msg}}</div>
    <button @click="onClick"> Next Demo </button>

</div>

</template>

<script>
export default {
    component: "Intro",
    props:{
        msg: String,
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>

<style>

.textHolder{
    width:68%;
    margin:auto;
    font-size: 21px;    
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