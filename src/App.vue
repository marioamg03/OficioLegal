<template>
<v-app>
    <v-toolbar fixed="true" >
      <v-toolbar-side-icon ></v-toolbar-side-icon>
      <img src="/static/img/icons/logo.png" alt="Vuetify.js" height="60">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/home" >INICIO</v-btn>
        <v-btn flat to="/documentos">Documentos online</v-btn>
        <v-btn flat>Asesorias online</v-btn>
        <v-btn flat>Noticias Legales</v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
      <v-footer class="grey darken-2" height="250px">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <v-card flat>
      <v-card-title class="grey darken-2">
        <img src="/static/img/icons/logo.png" alt="Vuetify.js" height="60"class="pl-2">
        <v-spacer></v-spacer>
         <p class="white--text"> <v-icon size="24px" dark > fa-whatsapp</v-icon> +58 4145336976</p>
        <v-spacer></v-spacer>
          <p class="white--text"><v-icon size="24px" dark > email</v-icon> info@oficiolegal.com</p>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3"
          dark
        >
          <v-icon size="24px" >{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey darken-1"  >
        <v-layout class="white--text" >
          <v-flex xs4 layout column offset-xs2 >
            <span class="body-2 " >Documentos Online</span>
            <span class="body-2 " >Asesorias Online</span>
            <span class="body-2 " >Noticias Legales</span>
            <span class="body-2 " >Oficinas SAREN</span>
          </v-flex>
          <v-flex xs4 layout column>
            <span class="body-2 " >Talleres</span>
            <span class="body-2 " >Conferencias</span>
            <span class="body-2 " >Diplomados</span>
            <span class="body-2 " >Cursos</span>
          </v-flex>
          <v-flex xs4 layout column>
            <span class="body-2 " >Mision</span>
            <span class="body-2 " >Vision</span>
            <span class="body-2 " >Glosario</span>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;2018 — <strong>OficioLegal</strong>
      </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
      rows: [
        {
          title: 'Documentos Online',
          children: ['Asesorias Online', 'Noticias Legales', 'Oficinas SAREN']
        },
        {
          title: 'Talleres',
          children: ['Conferencias', 'Diplomados', 'Cursos']
        }
      ],
      drawer: null,
      items: [
        { src: '/static/img/carouselHome/1_1900x1200.jpg' },
        { src: '/static/img/carouselHome/2_1900x1200.jpg' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
<style>
nav.toolbar {
  background-color: rgba(250,250,250, 0.8) !important;
}
@font-face{
            font-family: "Denmark";
            src:url("/static/img/icons/DENMARK.eot?") format("eot"),url("/static/img/icons/DENMARK.woff") format("woff"),url("/static/img/icons/DENMARK.ttf") format("truetype"),url("/static/img/icons/DENMARK.svg#Denmark") format("svg");
            }
body{
  font-style: "Denmark";
}
</style>
<<style lang="stylus">
$body-font-family = 'Open Sans'
</style>