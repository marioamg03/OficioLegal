<template>
    <v-carousel-item v-bind:sliders="sliders" v-bind:src= sliders.src transition="fade" reverse-transition="fade" dark height="500px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs4 offset-xs1>
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
    ]
  })
}
// fin del componente para la seccion del slider
</script>
