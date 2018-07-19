<template>
  <v-flex xs4>
    <v-card flat>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex>
            <div id="container">
              <div id="leftThing">
                <v-card-media v-bind:src= offers.src height="260px" width="260px"/>
              </div>
              <div id="rightThing">
                <div class="headline" style="text-align: center" v-bind:style="{ color: offers.color}">{{offers.title}}</div>
                <div>{{offers.text}}</div>
                <div><v-btn outline :color=offers.buttoncolor >{{offers.buttontext}}</v-btn></div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
// componente para la seccion del slider
export default {
  name: 'offers',
  props: ['offers']
}
// fin del componente para la seccion del slider
</script>
<style scoped>
  .v-card__media__background {
    border-radius: 8%;
  }

  #container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  }

  #leftThing {
    width: 50%;
  }

  #rightThing {
    width: 50%;
    padding-left:10px;
    align-items: center;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #contenido{
    flex: 1;
    width: 100%;
  }

</style>
