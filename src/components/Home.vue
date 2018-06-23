<template>
  <v-content>
    <section>
      <v-carousel>
        <!-- template para la construccion de la seccion de slider -->
        <slider v-for="slider in sliders" v-bind:slider="slider"></slider>
        <!-- fin del template para la construccion de la seccion de slider -->
      </v-carousel>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <div class="text-xs-center titulo">
          <h2>¿Que Ofrecemos?</h2>
        </div>
      </v-layout>
    </section>
    <section>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs4 >
            <v-card color="white" flat height="300px">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media src="/static/img/home1Documentos.jpg" height="250px"/>
                  </v-flex>
                  <v-flex xs7>
                      <div class="headline text-lg-left">Documentos Online</div>
                      <p class="text-lg-left">Realiza automaticamente tus documentos legales visados y listos desde la comodidad de tu hogar u oficina; Experimenta la innovacion tecnologica de ser un abogado</p>
        <v-card-actions>
          <v-btn flat color="green right">¿Como funciona?</v-btn>
        </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>

      </v-card>
      </v-flex>
      <v-flex xs4 >
      <v-card
        color="white"
        flat="true"
        height="300px">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/img/home2Aseso.jpg"
                      height="250px"
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs7>

                      <div class="headline text-lg-left">Asesorias <br> Online</div>
                      <p class="text-lg-left">Asesorias en vivo a traves de una videollamada con nuestros abogados especializados en el area legal segun tu necesidad y en el horario de su comodida</p>
        <br>
        <v-card-actions>
          <v-btn flat color="green right">¿Ven y asesorate?</v-btn>
        </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
      </v-card>
      </v-flex>
      <v-flex xs4 >
      <v-card
        color="white"
        flat="true"
        height="300px"
        >
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/img/home3Registro.jpg"
                      height="250px"

                    ></v-card-media>
                  </v-flex>
                  <v-flex xs7>

                      <div class="headline text-lg-left">Registrate <br></div>
                      <br>
                      <p class="text-lg-left">Podras registrarte como Usuario(a) o Abogado(a) para disfrutar de las ventajas que ofrecemos en nuestra plataforma y puedas hacer uso de las actualizaciones</p>


          <v-card-actions>
            <v-btn flat color="green right">Registrate aqui</v-btn>
          </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
         </v-card>
        </v-flex>
      </v-layout>
    </v-container>
   </section>
   <section>
  <v-jumbotron src="/static/img/fondo1.png" height="600px">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Solucion Juridica Innovadora</h3>
          <p> Oficio legal es un escritorio juridico virtual, creado con la necesidad de favorecer a las personas en el aspecto juridico y economico,<br> en los asuntos legales de su dia a dia desde la comodidad de su hogar u oficina.</p>
          <p> A diferencia de escritorios juridios convencionales, la incentidumbre de confiar en un abogado y altos costos por servicios <br> profesionales, Oficio Legal te brinda la oportunidad de realizar por ti mismo los documentos legales y/o asesorarte con <br>abogados especialistas, exclusivamente seleccionados para solcionar tus dudas a costos asequibles para todos, a traves <br> de videollamas de nuestra plataforma</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
   </section>
   <section>
     <v-flex xs12>
    <v-card>
      <v-card-media src="/static/img/home3.jpg" height="500px">
      </v-card-media>
    </v-card>
</v-flex>
   </section>
      <section>
       <gmap-map
    :center="center"
    :zoom="5"
    style="width: auto; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
   </section>
   <section>
       <div

    class="grey darken-3"
  >
    <div>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <div color="grey darken-3" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7n style="margin-top:15%">

                      <h1 class="display-3" style="text-align : center;">Contactanos</h1>
                      <div style="text-align : center;">Servicios legales online a la altura de tus necesidades</div>

                  </v-flex>
                  <v-flex xs5>
<v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Nombre"
      dark
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      dark
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Telefono"
      dark
      v-model="email"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="Mensaje"
      dark
      v-model="email"
      :counter="250"
      required
      textarea
    ></v-text-field>

    <v-btn
      @click="sendMail()"
      :disabled="!valid"
      dark
    >
      ENVIAR
    </v-btn>

  </v-form>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
   </section>
  </v-content>
</template>
<script>

import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import slider from './Slider.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBCOiTGfsj8pf6jnJAUI441oTKtQb8hQaQ',
    v: 'OPTIONAL VERSION NUMBER'
  }
})
export default {
  data: () => ({
    sliders: [
      { src: '/static/img/carouselHome/1_1900x1200.jpg',
        title: 'Documentos Online',
        text: 'Genera automaticamente tus documentos, contratos, poderes y mas a travez de nuestra plataforma de firmas digitalizadas',
        buttontext: 'Ver mas' },

      { src: '/static/img/carouselHome/2_1900x1200.jpg',
        title: 'Asesorias Online',
        text: 'Resuelve tus dudas legales en cualquier area juridica en el estado y ciudad donde te encuentres seleccionando al abogado(a), de tu preferencia a traves de una videollamada',
        buttontext: 'Ver mas' },

      { src: '/static/img/carouselHome/3_1900x1200.jpg',
        title: 'Aprobación y certificado',
        text: 'Avalado por las instituciones públicas y el colegio de abogados de venezuela con la facilidad de ofrecer un servicio online juridico y expedito',
        buttontext: 'Ver mas'},

      { src: '/static/img/carouselHome/4_1900x1200.jpg',
        title: 'Registrate como usuario',
        text: 'Registrate para recibir informaciones de las actualizaciones y llevar un seguimiento de tus actividades',
        buttontext: 'Ver mas'},

      { src: '/static/img/carouselHome/5_1900x1200.jpg',
        title: 'Eres abogado(a)?',
        text: 'No importa que seas independiente o trabajes para una firma esta es tu oportunidad de brindar asesorias desde tu hogar u oficina y generear honorarios extras',
        buttontext: 'Ver mas'}
    ],
    drawer: null,
    center: {lat: 6.332021, lng: -66.698975},
    markers: [{
      position: {lat: 10.0, lng: 10.0}
    }, {
      position: {lat: 11.0, lng: 11.0}
    }]
  }),
  props: {
    source: String
  },
  components: {
    slider
  },
  methods: {
    sendMail () {
      //  TODO
    }
  }
}
</script>

<style>
  #keep main .container {
    height: 870px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }


</style>
