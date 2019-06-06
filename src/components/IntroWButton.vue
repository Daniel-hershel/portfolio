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

<style scoped>

.textHolder{
    width:68%;
    margin:auto;
    font-size: 20px;    
    margin-bottom: .8em;
    background:#f9f9f9;
    border: 2px solid #bcbab8;
    /* border: 2px solid #625757; */
}

button{
   background: none;
   width: 300px;
   height:50px;
   color: #537780;
   border: none !important;
   font-size:16px;
   font-weight:bold;
   margin-top: 1.5em;
   text-decoration:underline;
}
button:hover{
    background:#537780;
    color:white;
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