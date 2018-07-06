<template>
  <div class="grey darken-3">
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <div color="grey darken-3" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row v-bind="binding">
                <v-flex xs7n style="margin-top:15%">
                  <h1 class="display-3" style="text-align : center;">Contactanos</h1>
                  <div style="text-align : center;">Servicios legales online a la altura de tus necesidades</div>
                </v-flex>
                <v-flex xs5>
                  <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field label="Nombre" dark v-model="name" :rules="nameRules" required></v-text-field>
                    <v-text-field label="E-mail" dark v-model="email" :rules="emailRules" required></v-text-field>
                    <v-text-field label="Telefono" dark v-model="email" :rules="nameRules" required></v-text-field>
                    <v-text-field label="Mensaje" dark v-model="email" :counter="250" required textarea></v-text-field>
                    <v-btn large @click="sendMail()" :disabled="!valid" dark> ENVIAR </v-btn>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'form',
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    }
  }
}
</script>
