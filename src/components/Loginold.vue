<template>
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--4-col">
      <div class="login" v-if="usuario.token === ''">
        <div class="mdl-card mdl-shadow--4dp">
          <div class="mdl-card__title mdl-color--primary mdl-color-text--white relative">
            <h2 class="mdl-card__title-text">Login</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" v-model="input.username" id="login"/>
              <label class="mdl-textfield__label" for="login">Login</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" v-model="input.password" type="password" id="password"/>
              <label class="mdl-textfield__label" for="password">Password</label>
            </div>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <div class="mdl-grid">
              <button v-on:click="sendData()" class="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">Login</button>
            </div>
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--1-col">
                <a onClick='flip("show-left")' class="mdl-color-text--primary">Registrar!</a>
              </div>
              <div class="mdl-cell mdl-cell--11-col">
                <a onClick='flip("show-bottom")' class="mdl-color-text--primary" style="float: right">Olvidaste tu clave?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login" v-else-if="usuario.token != ''">
        <div class="demo-card-wide mdl-card mdl-shadow--4dp">
          <div class="mdl-card__title mdl-color--primary mdl-color-text--white relative">
            <h2 class="mdl-card__title-text">Bienvenido {{usuario.nombre}}</h2>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <div class="mdl-grid">
              <button v-on:click="logOut()" class="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">Salir</button>
            </div>
            <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--1-col">
                <a onClick='flip("show-left")' class="mdl-color-text--primary">Modificar Datos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login" v-else-if="usuario.token === ''">



        
      </div>
    </div>
    <div class="mdl-layout-spacer"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
var querystring = require('querystring')
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: '',
        nombre: '',
        cedula: ''
      },
      message: ''
    }
  },
  props: ['template'],
  computed: {
    usuario () {
      return this.$store.state.usuario
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'http://localhost:8081/' }).then(result => {
      this.message = result.data
    }, error => {
      console.error(error)
    })
  },
  methods: {
    sendData () {
      axios({
        method: 'POST',
        url: 'http://localhost:8081/api/authenticate',
        data: querystring.stringify({
          username: this.input.username,
          password: this.input.password
        }),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(result => {
        this.response = result.data.message
        this.$store.commit('login', {token: result.data.token, username: this.input.username})
      }, error => {
        console.error(error)
      })
    },
    logOut () {
      this.$store.commit('logout')
      this.input.password = ''
    },
    registrar () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
}
</style>
