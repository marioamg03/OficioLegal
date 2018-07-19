<template>
  <v-layout v-bind="binding">  <!-- Layout componente  INICIO-->
    <v-layout> <!-- Layout selectores e imagenes INICIO-->
      <v-flex>
        <v-card flat>

          <div id = "select-container">
            <v-avatar :tile = "tile" :size = "imgSize">
              <img src="../../static/img/Boton 1.png" alt = "Registro Principal">
            </v-avatar>
            <v-avatar :tile = "tile" :size = "imgSize">
              <img src="../../static/img/Boton 2.png" alt = "Registro Público">
            </v-avatar>
            <v-avatar :tile = "tile" :size = "imgSize">
              <img src="../../static/img/Boton 3.png" alt = "Registro Mercantil">
            </v-avatar>
            <v-avatar :tile = "tile" :size = "imgSize">
              <img src="../../static/img/Boton 4.png" alt = "Notaria Pública">
            </v-avatar>
            
            <v-select
              label="Tipo oficinas"
            ></v-select>
            <v-select
              label= "Estado"
            ></v-select>
            <v-select
              label = "Municipio"
            ></v-select>
            <v-select
              label = "Oficina"
            ></v-select>
          </div>
        </v-card>
      </v-flex>
    </v-layout> <!-- Layout selectores e imagenes FIN-->

    <v-layout row wrap> <!-- Layout mapa INICIO-->
      <v-flex xs8>      
        
            <gmap-map :center = "center" :zoom = "zoom" style = "width:100%; height: 100%">
              <gmap-marker :position = "center"></gmap-marker>
            </gmap-map>
          
      </v-flex>
      
    </v-layout> <!-- Layout mapa FIN -->

  </v-layout> <!-- Layout componente FIN-->
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
      zoom: 4,
      tile: true,
      imgSize: '90px'
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
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    }
  }
}
</script>

<style >

#select-container {
  width: 100%;
}

#map-container {
  width: 500px;
  height: 300px;
}



</style> 
