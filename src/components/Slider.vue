<template>
    <v-carousel-item  v-bind:src= sliders.src transition="fade" reverse-transition="fade" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs6 offset-xs1>
            <h3 class="display-1 white--text">{{sliders.title}}</h3>
            <span class="subheading white--text">{{sliders.text}}</span>
            <v-divider class="my-3"></v-divider>
            <v-btn large color="primary" class="mx-0">{{sliders.buttontext}}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
</template>

<script>
// componente para la seccion del slider
export default {
  name: 'sliders',
  props: ['sliders']
}
// fin del componente para la seccion del slider
</script>

<style>
.v-jumbotron__image {
    height: 100vh !important;
    max-width: 500%;
}
</style>
