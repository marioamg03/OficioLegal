<template>
  <v-content>
      <section>
        <v-carousel >                         
    <v-carousel-item v-bind:src=items[0].src
              transition="fade"
              reverse-transition="fade"
              dark
              height="500px"
              >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs4 offset-xs1>
          <h3 class="display-1 white--text">Documentos Online</h3>
          <span class="subheading white--text">Genera automaticamente tus documentos, contratos, poderes y mas a travez de nuestra plataforma de firmas digitalizadas</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 white--text">Ver mas</div>
          <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
        </v-flex>
      </v-layout>
    </v-container>            
  </v-carousel-item>
  <v-carousel-item v-bind:src=items[1].src
              transition="fade"
              reverse-transition="fade"
              dark
              height="500px"
              >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs4 offset-xs6>
          <h3 class="display-1 white--text">Asesorias Online</h3>
          <span class="subheading white--text" >Resuelve tus dudas legales en cualquier area juridica en el estado y ciudad donde te encuentres seleccionando al abogado(a), de tu preferencia a traves de una videollamada</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 white--text">Ver mas</div>
          <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
        </v-flex>
      </v-layout>
    </v-container>            
  </v-carousel-item>
      <v-carousel-item v-bind:src=items[2].src
              transition="fade"
              reverse-transition="fade"
              dark
              height="500px"
              >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs4 offset-xs1>
          <h3 class="display-1 white--text">Aprobación y certificado</h3>
          <span class="subheading white--text">Avalado por las instituciones públicas y el colegio de abogados de venezuela con la facilidad de ofrecer un servicio online juridico y expedito</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 white--text">Ver mas</div>
          <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
        </v-flex>
      </v-layout>
    </v-container>            
  </v-carousel-item>
  <v-carousel-item v-bind:src=items[3].src
              transition="fade"
              reverse-transition="fade"
              dark
              height="500px"
              >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs4 offset-xs6>
          <h3 class="display-1 white--text">Registrate como usuario</h3>
          <span class="subheading white--text" >Crea un usuario y podras disfrutar de las ventajas innovadoras de nuestra plataforma, asi como también recibir informaciones de las actualizaciones y llevar un registro de tus actividades</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 white--text">Ver mas</div>
          <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
        </v-flex>
      </v-layout>
    </v-container>            
  </v-carousel-item>
  <v-carousel-item v-bind:src=items[4].src
              transition="fade"
              reverse-transition="fade"
              dark
              height="500px"
              >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs4 offset-xs1>
          <h3 class="display-1 white--text">Eres abogado(a)?</h3>
          <span class="subheading white--text">No importa que seas independiente o trabajes para una firma esta es tu oportunidad de brindar asesorias desde tu hogar u oficina y generear honorarios extras</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3 white--text">Ver mas</div>
          <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
        </v-flex>
      </v-layout>
    </v-container>            
  </v-carousel-item>
</v-carousel>
    </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          
            <div class="text-xs-center titulo">
              <h2>¿Que Ofrecemos?</h2>
            </div>
          
        </v-layout>
      </section>
      <section>
        <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4 >
      <v-card 
        color="white"
        flat
        height="300px"
        >
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/img/home1Documentos.jpg"
                      height="250px" 
                    ></v-card-media>
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
        height="300px"
        >
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
        <Saren></Saren>
       
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

import Saren from './Saren'

export default {
  data: () => ({
    drawer: null,
    items: [
      { src: '/static/img/carouselHome/1_1900x1200.jpg' },
      { src: '/static/img/carouselHome/2_1900x1200.jpg' },
      { src: '/static/img/carouselHome/3_1900x1200.jpg' },
      { src: '/static/img/carouselHome/4_1900x1200.jpg' },
      { src: '/static/img/carouselHome/5_1900x1200.jpg' }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    sendMail () {
      //  TODO
    }
  },
  components: {
    Saren
  }
}
</script>

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }


</style>

