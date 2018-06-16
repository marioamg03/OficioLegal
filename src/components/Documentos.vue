<template>
<section>
<v-flex xs12>
    <v-card>
      <v-card-media src="/static/img/documentosonline.jpg" height="500px">
      </v-card-media>
    </v-card>
</v-flex>
<v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1">Registrate </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2">Llena el Formulario</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="e1 > 3">Paga</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">Imprime</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 2">Siguiente</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-select
          label="Tipo de Documento"
          v-model="select"
          :items="tiposdocumentos"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-select>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-select
          label="Item"
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-select>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
        ></v-checkbox>  
        <v-btn @click="clear">Reset</v-btn>
        <v-btn color="primary" @click.native="e1 = 3">Siguiente</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-form>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 4">Siguiente</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 1">Finalizar</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      add: '',
      e1: 0,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      tiposdocumentos: [
        'traspaso',
        'poder'
      ],
      checkbox: false
    }
  },
  methods: {
    addDocument () {
      this.add = true
    },
    closeCallback () {
      this.add = false
    },
    getDocumentos () {
      if (this.$store.state.token === '') {
        axios({
          method: 'GET',
          'url': 'http://localhost:8081/api/users',
          headers: {
            'x-access-token': this.$store.state.token
          }
        }).then(result => {
          this.message = result.data
          console.log(result.data)
        }, error => {
          console.error(error)
        })
      }
    }
  }
}
</script>

