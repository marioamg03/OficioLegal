<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <div class="mdl-layout__header-row mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <div class="portfolio-logo"></div>
        <span class="mdl-layout-title">Oficio Legal</span>
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/" >Inicio</router-link>
          <router-link class="mdl-navigation__link" to="/documentos" >Documentos</router-link>
          <router-link class="mdl-navigation__link" to="/login" >Asesorias</router-link>
          <router-link class="mdl-navigation__link" to="/login" >Noticias</router-link>
          <router-link class="mdl-navigation__link" to="/login" >Iniciar Sesion</router-link>
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons">search</i>
        </label>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Oficio Legal</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/login" @click.native="hideMenu" >Iniciar Sesion</router-link>
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Inicio</router-link>
        <router-link class="mdl-navigation__link" to="/documentos" @click.native="hideMenu">Documentos</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Asesoria</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Noticias</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import Login from './components/Login.vue'

export default {

  components: {
    'login': Login
  },
  name: 'app'
}
</script>
<style>
</style>
