<template>

    <div id = "Saren-Component">
      <div id= "grad1" class ="grad"></div>
        <h2 class="subtitle is-2 text"> Oficinas SAREN </h2>
      <div id= "grad2" class ="grad"></div>   
        <div class = "columns">
          <div class="column is-two-fifths">
          <div id ='container-img'>
            <img src= '../../static/img/Boton 1.png'>
            <img src= '../../static/img/Boton 2.png'>
            <img src= '../../static/img/Boton 3.png'>
            <img src= '../../static/img/Boton 4.png'>
        </div>
          <div class =" select-container">
              <label for = 'oficina'> Tipos de oficinas</label>
              <select id = 'oficina' v-model="seleccionTipoOficina" class="select-input">
                  <option v-for="tipoOficina in tiposOficinas" v-bind:key ="tipoOficina.id"> {{tipoOficina.name}}</option>
              </select>
          </div>
          <div class ="select-container">
              <label for = 'estado'> Estado</label>
              <select id = 'estado' v-model="seleccionEstado" class="select-input">
                  <option v-for = "estado in estados" v-bind:key="estado.id"> {{estado.name}}</option>
              </select>
          </div>
          <div class =" select-container">
              <label for = 'nombreOficina'> Oficina</label>
              <select id = 'nombreOficina' v-model="seleccionOficina" class="select-input">
                  <option v-for = "oficina in oficinas" v-bind:key ="oficina.id">{{oficina}}</option>
              </select>
          </div>
          <h3 ></h3>
          </div>
          <div id = 'map-container' class="column">
              <gmap-map :center ="center" :zoom = "zoom" style = "width:100%; height: 100%">
                <gmap-marker :position = "center">
                  </gmap-marker> 
                <!-- <gmap-marker :key ="index" v-for= "(m,index) in markers" :position = "m.position">
                  </gmap-marker> -->

              </gmap-map>
          </div>
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

<style>
@import '../../node_modules/bulma/css/bulma.css';

.grad {
  height: 5px;
  width: 400px;
  background: rgb(44, 44, 44);
  display: inline-block;
  position: relative;
  bottom: 12px;
}

#grad1 {
  background: linear-gradient(to right, white, grey);
  margin-right: 10px;
}

#grad2 {
  background: linear-gradient(to right, grey, white);
  margin-left: 10px;
}
.text {
  display: inline-block;
  margin-bottom: 40px;
  text-align: center;
}
#map-container {
    width: 500px;
    height: 400px;
}
img {
    width: 90px
  }

#Saren-Component {
  margin: 40px 80px 40px 80px; /*  top right bottom left */
}  

#Saren-Component h2 {
  text-align: center;
}

.select-container {
  background: rgb(175, 174, 174);
  color: white;
  height: 35px;
  width: 370px;
  margin: 10px 0px; /*  top and botton right and left */
  border-radius: 10px;
  padding-left: 30px;
  padding-top: 5px;

}

.select-input {
  background: white;
  width: 175px;
  margin-left: 30px;  
  border-radius: 5px;
  position: absolute;
  float: right;
  color: rgb(46, 46, 46);
} 


</style>

