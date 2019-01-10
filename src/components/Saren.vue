<template>
  <v-layout row justify-space-around v-bind="binding">  <!-- Layout componente  INICIO-->
      <v-flex xs10> <!-- Layout selectores e imagenes INICIO-->
        <v-card flat >
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
              label="  Tipos de oficinas"
              v-model = 'seleccionTipoOficina'
              :items = 'oficinas'
              height = "40"
              background-color = 'grey lighten-2'
            >
             
            </v-select>
            <v-select
              label= "  Estado"
              :items = 'estado'
              v-model = 'seleccionEstado'
              height = "40"
               background-color = 'grey lighten-2'
            ></v-select>

            <v-select
              label = "  Municipios"
              v-model = 'seleccionMunicipio'
              :items = 'municipio'
              height = "40"
              background-color = 'grey lighten-2'
            ></v-select>

            <v-select
              label = "  Oficina"
              v-model = 'seleccionOficina'
              :items = 'ofi'
              height = "40"
               background-color = 'grey lighten-2'
               light
            ></v-select>

          </div>
        </v-card>
      </v-flex> <!-- Layout selectores e imagenes FIN-->
 
      <v-flex xs12> <!-- Layout mapa INICIO-->
        <v-card flat>
            <v-layout row wrap>
              <v-flex>
              <div id="map-container"> 
                  <gmap-map :center = "center" :zoom = "zoom" style="width:600px; height:400px">
                    <gmap-marker :position = "center"></gmap-marker>
                  </gmap-map> 
                  </div>
               
              </v-flex>
            </v-layout>
          

         
          
        </v-card>
      
            
          
      </v-flex> <!-- Layout mapa FIN -->
      
    

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
      municipios: [],
      oficinas: [],
      direccion: '',
      seleccionTipoOficina: '',
      seleccionEstado: '',
      seleccionOficina: '',
      seleccionMunicipio: '',
      zoom: 4,
      tile: true, // avatar
      imgSize: '90px',
      estado: [],
      municipio: [],
      ofi: []

    }
  },
  mounted () {
    this.loadData()
    console.log(this.tiposOficinas)
    console.log(Object.entries(this.tiposOficinas))
    Object.entries(this.tiposOficinas).forEach(([key]) => {
      this.oficinas.push(key)
    })
  },
  watch: {
    seleccionTipoOficina () {
      console.log('seleccionaron un tipo de oficina y fue')
      console.log(this.seleccionTipoOficina)
      this.estados = this.tiposOficinas[this.seleccionTipoOficina].estados
      console.log(this.estados)
      Object.entries(this.estados).forEach(([key]) => {
        this.estado.push(key)
      })
    },
    seleccionEstado () {
      console.log('eligieron el estado')
      console.log(this.seleccionEstado)
      //  this.oficinas = this.estados[this.seleccionEstado].oficinas
      this.municipios = this.estados[this.seleccionEstado].municipios
      console.log(this.municipios)

      Object.entries(this.municipios).forEach(([key]) => {
        this.municipio.push(key)
      })
    },
    seleccionMunicipio () {
      console.log('eligieron el municipio')
      console.log(this.seleccionMunicipio)
      this.ofi = this.municipios[this.seleccionMunicipio].oficinas
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
    },
    change: function () {
      console.log('cambiaron valor input')
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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.vue-map-container,
.vue-map-container -vue-map {
  width: 100%;
  height: 100%
}

.v-input__slot {
    margin-bottom: -10px;
    color: white;
  }

</style> 
