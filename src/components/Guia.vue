<template>
    <div class = "column paso" v-bind:style="{'background-image': `url('${paso.src}')`}">
        
        <div id= "number-container">
          <p>{{paso.number}}</p>
        </div>
        <div id= "text-container">
          <p>{{paso.text}}</p>
        </div>  
       
    </div> 
</template>
<script>
export default {
  name: 'guia',
  props: ['paso'],
  data () {
    return {
    }
  },
  mounted: function () {
    console.log('se monto el compo')
    console.log(this.paso)
  }
}
</script>
<style scoped>
.paso {
    margin-top: 20px;
    background-size: cover;
    color: white !important;
    opacity: 0.2;
    transition: all .2s ease-in-out;
    height: 230px;
    padding-top: 6px;
  

}

.paso:hover {
  opacity: 1;
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
  /* border-radius: 0%; */
}

#number-container {
  float: left;
  font-size: 150px;
}

#text-container {
  text-align: center;
  font-size: 17px;

}

</style>

