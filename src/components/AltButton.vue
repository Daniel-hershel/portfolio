<template>
  <button class = "miniButton" type="submit" @click="onClick">{{msg}}</button>

</template>

<script>
export default{
    component: 'AltButton',
    methods: {
     onClickEvent(event){
            this.$emit('clicked')
        }
    },
    props:{
      msg: String,
      onClick: Function
    }
}
</script>

<style scoped lang="less">
@foreground: #ffe3b7;
@background: #0e2431; 
@highlight: #ffaf00;
@crimson: #cb0101;

.miniButton { 
    background: @crimson;
    color:lighten(@highlight, 15%);
    border:none;
    width:150px;
    }
.miniButton:hover{ 
    color: @crimson;
    background:lighten(@highlight, 15%);
    }
</style>