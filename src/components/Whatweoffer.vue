<template>
  <v-flex xs4 >
    <v-card color="white" flat height="300px">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs6>
            <v-card-media v-bind:src= offers.src height="260px" width="260px"/>
          </v-flex>
          <v-flex xs6>
            <div class="headline text-lg-left">{{offers.title}}</div>
            <p></p>
            <p class="text-lg-left">{{offers.text}}</p>
            <v-card-actions>
              <v-btn flat color="green right">{{offers.buttontext}}</v-btn>
            </v-card-actions>
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
