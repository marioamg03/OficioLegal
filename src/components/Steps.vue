<template>
  <v-flex xs4>
      <v-card  
        id= "card" 
        flat 
        :img="paso.src"
        >
          <v-container  grid-list-lg fluid>
            <v-layout row wrap>
              <v-flex>
                <div id="container">
                  <div id="leftThing">
                    <p>{{paso.number}}</p>
                  </div>
                  <div id="rightThing">                     
                    <p>{{paso.text}}</p>        
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
      
      </v-card> 
    </v-flex>
  
</template>

<script>
export default {
  name: 'step',
  props: ['paso'],
  data () {
    console.log(this.props)
    return {
    }
  }
}
</script>
<style scoped>
  #container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 14px;
  
  display: flex;
  align-items: center;
  }

  #card:hover{
    opacity: 1;
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9)
  }

  #card {
    height: 230px;
    color: white;
    opacity: 0.4;
    transition: all .2s ease-in-out;
  }

  #leftThing {
    width: 30%;
    float: left;
    font-size: 180px;
  }

  #rightThing {
    width: 60%;
    font-size:15px;
    margin-left: 1px;
    text-align: left;
  }

</style>
