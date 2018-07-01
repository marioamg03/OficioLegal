<template>

    <div>
        <h1> ---- Oficinas Saren ---</h1>
        <div id ='container-img'>
            <img src= '../../static/img/Boton 1.png'>
            <img src= '../../static/img/Boton 2.png'>
            <img src= '../../static/img/Boton 3.png'>
            <img src= '../../static/img/Boton 4.png'>
        </div>
        <div class ="form-group">
            <label for = 'oficina'> Tipos de oficinas</label>
            <select id = 'oficina' v-model="seleccionTipoOficina" class="custom-select custom-select-sm">
                <option v-for="tipoOficina in tiposOficinas" v-bind:key ="tipoOficina.id"> {{tipoOficina.name}}</option>
            </select>
        </div>
        <div class ="form-group">
            <label for = 'estado'> Estado</label>
            <select id = 'estado' v-model="seleccionEstado" class="custom-select custom-select-sm">
                <option v-for = "estado in estados" v-bind:key="estado.id"> {{estado.name}}</option>
            </select>
        </div>
        <div class ="form-group">
            <label for = 'nombreOficina'> Oficina</label>
            <select id = 'nombreOficina' v-model="seleccionOficina" class="custom-select custom-select-sm">
                <option v-for = "oficina in oficinas" v-bind:key ="oficina.id">{{oficina}}</option>
            </select>
        </div>
        
        <div id = 'map-container'>
            <gmap-map :center ="center" :zoom = "zoom" style = "width:100%; height: 400px">
              <gmap-marker :position = "center">
                </gmap-marker> 
               <!-- <gmap-marker :key ="index" v-for= "(m,index) in markers" :position = "m.position">
                </gmap-marker> -->

            </gmap-map>
        </div>
    </div>

</template>


<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import info from '../oficinas-saren.json'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAMlY8XSEiIhadWUSuLr5lgk7InHzoGbU8'
  }
})
export default {
  name: 'Saren',
  data () {
    return {
      center: {lat: 6.4235, lng: -66.58973},
      markers: [],
      tiposOficinas: [],
      estados: [],
      oficinas: [],
      direccion: '',
      seleccionTipoOficina: '',
      seleccionEstado: '',
      seleccionOficina: '',
      zoom: 4
    }
  },
  mounted () {
    this.loadData()
  },
  watch: {
    seleccionTipoOficina () {
      console.log('seleccionaron un tipo de oficina y fue')
      console.log(this.seleccionTipoOficina)
      this.estados = this.tiposOficinas[this.seleccionTipoOficina].estados
      console.log(this.estados)
    },
    seleccionEstado () {
      console.log('eligieron el estado')
      console.log(this.seleccionEstado)
      this.oficinas = this.estados[this.seleccionEstado].oficinas
      console.log(this.oficinas)
    },
    seleccionOficina () {
      console.log('seleccionaron una oficina')
      console.log(this.seleccionOficina)
      console.log('obtener coordenadas')
      this.direccion = this.seleccionOficina.replace(/ /g, '+')
      this.getCoordinates(this.direccion)
    }
  },
  methods: {
    getCoordinates: function (direccion) {
      console.log('voy a hacer el request usando')
      console.log(direccion)
      const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}+CA&key=AIzaSyAMlY8XSEiIhadWUSuLr5lgk7InHzoGbU8`
      console.log(URL)
      fetch(URL)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          if (json.status === 'OK') {
            const lat = json.results[0].geometry.location.lat
            const lng = json.results[0].geometry.location.lng
            console.log('se consiguio la direccion')
            console.log(`esta ubicado en ${lat} y longitud ${lng}`)
            this.center = {
              lat,
              lng
            }
            this.zoom = 12
            this.markers.push({position: this.center})
          } else {
            console.log('no se consiguio la direccion')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadData: function () {
      this.tiposOficinas = info.tipos
    }
  }
}
</script>

<style lang="stylus" scoped>
#map-container
    width 500px
    height 400px

img 
    width 100px

</style>


