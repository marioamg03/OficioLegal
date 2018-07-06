<template>
  <v-footer class="grey darken-2" height="250px">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-card flat>
          <v-card-title class="grey darken-2">
            <img src="/static/img/icons/logo.png" alt="Vuetify.js" style="height: 60px" class="pl-2">
            <v-spacer></v-spacer>
            <p class="white--text"> <v-icon size="24px" dark > fa-whatsapp</v-icon> +58 4145336976</p>
            <v-spacer></v-spacer>
            <p class="white--text"><v-icon size="24px" dark > email</v-icon> info@oficiolegal.com</p>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" icon class="mx-3" dark>
            <v-icon size="24px" >{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="grey darken-1">
            <v-layout class="white--text">
              <v-flex xs2 layout column offset-xs1>
                <v-flex><span class="body-2 " >Documentos Online</span></v-flex>
                <v-flex><span class="body-2 " >Asesorias Online</span></v-flex>
                <v-flex><span class="body-2 " >Noticias Legales</span></v-flex>
                <v-flex><span class="body-2 " >Oficinas SAREN</span></v-flex>
              </v-flex>
              <v-flex xs2 layout column>
                <v-flex><span class="body-2 " >Talleres</span></v-flex>
                <v-flex><span class="body-2 " >Conferencias</span></v-flex>
                <v-flex><span class="body-2 " >Diplomados</span></v-flex>
                <v-flex><span class="body-2 " >Cursos</span></v-flex>
              </v-flex>
              <v-flex xs2 layout column>
                <v-flex><span class="body-2 " >Mision</span></v-flex>
                <v-flex><span class="body-2 " >Vision</span></v-flex>
                <v-flex><span class="body-2 " >Glosario</span></v-flex>
              </v-flex>
              <v-flex xs4 layout column>
                <v-flex><span class="body-2 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat sodales quam, blandit elementum dolor sodales eget. Integer non urna eu nibh luctus vehicula in quis nisi. Praesent molestie malesuada porttitor.</span></v-flex>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions class="grey lighten-2 justify-center">&copy;2018 — <strong>OficioLegal</strong></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'pfooter',
  data: () => ({
    icons: ['fa-facebook', 'fa-twitter', 'fa-instagram']
  })
}
</script>
