<template>
  <v-app>
<!-- INICIO DEL MENU    -->
<Menu style="margin-bottom:-100vh; z-index: 1; height: 100vh;"></Menu>
<!-- INICIO DEL MENU    -->
<v-content>
<!-- Seccion Slider INICO-->
  <section>
    <v-carousel style="height: 100vh">
      <!-- template para la construccion de la seccion de slider -->
      <sliders v-for="sliders in sliders" v-bind:sliders="sliders"></sliders>
      <!-- fin del template para la construccion de la seccion de slider -->
    </v-carousel>
  </section>
<!-- Secion Slider FINAL-->

<!-- Seccion Que Ofrecemos INICO-->
  <section style="margin-bottom: 100px">
    <v-layout column wrap class="my-5" align-center>
      <div class="text-xs-center titulo">
        <div id= "grad1" class ="grad"></div>
          <h2 class="subtitle is-2 text">¿Que Ofrecemos?</h2>
        <div id= "grad2" class ="grad"></div>
      </div>
    </v-layout>
      <v-layout v-bind="binding">
      <!-- template para la construccion de la seccion de que ofrecemos -->
        <offers v-for="offers in offers" v-bind:offers="offers"></offers>
      <!-- template para la construccion de la seccion de que ofrecemos -->
      </v-layout>
  </section>
<!-- Seccion Que Ofrecemos FINAL-->

<!-- Seccion Solucion Juridica INICIO-->
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
<!-- Seccion Solucion Juridica FINAL-->

<!-- Seccion Que Ofrecemos Documentos Asesorias INICIO-->
  <section id="documentos-asesorias">
    <h1 style="display: inline-block"> Documentos Online </h1>
    <div id= "grad3" class ="grad"></div>
    <div class="columns">
     <guia v-for="paso in steps" v-bind:paso="paso" v-bind:key ="paso.number">

     </guia>
    </div>
   </section>
<!-- Seccion Que Ofrecemos Documentos Asesorias FINAL-->

<!-- Seccion Mapas INICIO -->
   <section style="margin-bottom: 50px" >
     <v-layout column wrap class="my-5" align-center>
      <div class="text-xs-center titulo">
        <div id= "grad1" class ="grad"></div>
          <h2 class="subtitle is-2 text">Oficinas Saren</h2>
        <div id= "grad2" class ="grad"></div>
      </div>
    </v-layout>

   <v-container grid-list-xl >
      <Saren></Saren>
    </v-container>
     
   </section>
<!-- Seccion Mapas FINAL-->

   <section>
     <contactf></contactf>
   </section>

 </v-content>

<!-- INICIO DEL FOOTER    -->
  <PFooter></PFooter>
<!-- FINAL DEL FOOTER    -->

  </v-content>
</v-app>
</template>

<script>
  import Saren from './components/Saren'
  import guia from './components/Guia.vue'
  import contactf from './components/ContactForm'
  import PFooter from './components/PFooter'
  import sliders from './components/Slider'
  import offers from './components/Whatweoffer'
  import Menu from './components/Menu'
  import step from './components/Steps.vue'

  export default {
    data: () => ({
      // Data Slider
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
      // Data offers
      offers: [
        { src: '/static/img/home1Documentos.jpg',
          title: 'Documentos Online',
          text: 'Realiza automaticamente tus documentos legales visados y listos desde la comodidad de tu hogar u oficina; Experimenta la innovacion tecnologica de ser un abogado.',
          buttontext: '¿Como funciona?',
          buttoncolor: 'blue',
          color: '#2196F3'},

        { src: '/static/img/home2Aseso.jpg',
          title: 'Asesorias Online',
          text: 'Asesorias en vivo a traves de una videollamada con nuestros abogados especializados en el area legal segun tu necesidad y en el horario de su comodidad.',
          buttontext: 'Ven y asesorate',
          buttoncolor: 'green',
          color: '#4CAF50'},

        { src: '/static/img/home3Registro.jpg',
          title: 'Registrate',
          text: 'Podras registrarte como Usuario(a) o Abogado(a) para disfrutar de las ventajas que ofrecemos en nuestra plataforma y puedas hacer uso de las actualizaciones.',
          buttontext: 'Registrate aqui',
          buttoncolor: 'blue',
          color: '#2196F3'}
      ],
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

      // Data documentos online guia

      steps: [
        { number: 1,
          text: 'Registrate como usuario y selecciona el tipo de documento que deseas tramitar segun tu necesidad.',
          src: '../static/img/1-guia.png'
        },
        { number: 2,
          text: 'Llena los formularios en blanco y sigue las instrucciones y recomendaciones finales.',
          src: '../static/img/2-guia.png'
        },
        { number: 3,
          text: 'Cancelar a través de tu tarjeta de crédito, deposito o transferencia.',
          src: '../static/img/3-guia.png'
        },
        { number: 4,
          text: 'Imprime el documento y presentalo ante la notaria o registro según sean el caso.',
          src: '../static/img/4-guia.png'
        }
      ],
      drawer: null
    }),
    components: {
      sliders,
      offers,
      contactf,
      Saren,
      PFooter,
      guia,
      Menu,
      step
    },
    computed: {
      binding () {
        const binding = {}
        if (this.$vuetify.breakpoint.smAndDown) binding.column = true
        return binding
      }
    },
    props: {
      source: String
    }
  }
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';

#documentos-asesorias h1{
  margin-left: 30px;
  margin-top: 40px;
}
.grad {
  height: 5px;
  width: 400px;
  background: rgb(44, 44, 44);
  display: inline-block;
  position: relative;
  bottom: 0px;
}

#grad3 {
  background: linear-gradient(to right, grey, white);
  margin-left: 10px;
}

</style>

<style>
  .grad {
    height: 5px;
    width: 400px;
    background: rgb(44, 44, 44);
    display: inline-block;
    position: relative;
    bottom: 5px;
  }  
  
  #grad1 {
    background: linear-gradient(to right, white, grey);
    margin-right: 10px;
  }

  #grad2 {
    background: linear-gradient(to right, grey, white);
    margin-left: 10px;
  }

  h2{
    display: inline-block;
  }

</style>