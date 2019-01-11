webpackJsonp([1],Array(57).concat([
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Saren__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Guia_vue__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ContactForm__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PFooter__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Slider__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Whatweoffer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Menu__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Steps_vue__ = __webpack_require__(266);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["a"] = ({
  data: () => ({
    // Data Slider
    sliders: [{ src: '/static/img/carouselHome/1_1900x1200.jpg',
      title: 'Documentos Online',
      text: 'Genera automaticamente tus documentos, contratos, poderes y mas a travez de nuestra plataforma de firmas digitalizadas',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/2_1900x1200.jpg',
      title: 'Asesorias Online',
      text: 'Resuelve tus dudas legales en cualquier area juridica en el estado y ciudad donde te encuentres seleccionando al abogado(a), de tu preferencia a traves de una videollamada',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/3_1900x1200.jpg',
      title: 'Aprobación y certificado',
      text: 'Avalado por las instituciones públicas y el colegio de abogados de venezuela con la facilidad de ofrecer un servicio online juridico y expedito',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/4_1900x1200.jpg',
      title: 'Registrate como usuario',
      text: 'Registrate para recibir informaciones de las actualizaciones y llevar un seguimiento de tus actividades',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/5_1900x1200.jpg',
      title: 'Eres abogado(a)?',
      text: 'No importa que seas independiente o trabajes para una firma esta es tu oportunidad de brindar asesorias desde tu hogar u oficina y generear honorarios extras',
      buttontext: 'Ver mas' }],
    // Data offers
    offers: [{ src: '/static/img/home1Documentos.jpg',
      title: 'Documentos Online',
      text: 'Realiza automaticamente tus documentos legales visados y listos desde la comodidad de tu hogar u oficina; Experimenta la innovacion tecnologica de ser un abogado.',
      buttontext: '¿Como funciona?',
      buttoncolor: 'blue',
      color: '#2196F3' }, { src: '/static/img/home2Aseso.jpg',
      title: 'Asesorias Online',
      text: 'Asesorias en vivo a traves de una videollamada con nuestros abogados especializados en el area legal segun tu necesidad y en el horario de su comodidad.',
      buttontext: 'Ven y asesorate',
      buttoncolor: 'green',
      color: '#4CAF50' }, { src: '/static/img/home3Registro.jpg',
      title: 'Registrate',
      text: 'Podras registrarte como Usuario(a) o Abogado(a) para disfrutar de las ventajas que ofrecemos en nuestra plataforma y puedas hacer uso de las actualizaciones.',
      buttontext: 'Registrate aqui',
      buttoncolor: 'blue',
      color: '#2196F3' }],
    rows: [{
      title: 'Documentos Online',
      children: ['Asesorias Online', 'Noticias Legales', 'Oficinas SAREN']
    }, {
      title: 'Talleres',
      children: ['Conferencias', 'Diplomados', 'Cursos']
    }],

    // Data documentos online guia

    steps: [{ number: 1,
      text: 'Registrate como usuario y selecciona el tipo de documento que deseas tramitar segun tu necesidad.',
      src: '../static/img/1-guia.png'
    }, { number: 2,
      text: 'Llena los formularios en blanco y sigue las instrucciones y recomendaciones finales.',
      src: '../static/img/2-guia.png'
    }, { number: 3,
      text: 'Cancelar a través de tu tarjeta de crédito, deposito o transferencia.',
      src: '../static/img/3-guia.png'
    }, { number: 4,
      text: 'Imprime el documento y presentalo ante la notaria o registro según sean el caso.',
      src: '../static/img/4-guia.png'
    }],
    drawer: null
  }),
  components: {
    sliders: __WEBPACK_IMPORTED_MODULE_4__components_Slider__["a" /* default */],
    offers: __WEBPACK_IMPORTED_MODULE_5__components_Whatweoffer__["a" /* default */],
    contactf: __WEBPACK_IMPORTED_MODULE_2__components_ContactForm__["a" /* default */],
    Saren: __WEBPACK_IMPORTED_MODULE_0__components_Saren__["a" /* default */],
    PFooter: __WEBPACK_IMPORTED_MODULE_3__components_PFooter__["a" /* default */],
    guia: __WEBPACK_IMPORTED_MODULE_1__components_Guia_vue__["a" /* default */],
    Menu: __WEBPACK_IMPORTED_MODULE_6__components_Menu__["a" /* default */],
    step: __WEBPACK_IMPORTED_MODULE_7__components_Steps_vue__["a" /* default */]
  },
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  },
  props: {
    source: String
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saren_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bfb28fe_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Saren_vue__ = __webpack_require__(246);
function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saren_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bfb28fe_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Saren_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oficinas_saren_json__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oficinas_saren_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__oficinas_saren_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_0_vue2_google_maps__, {
  load: {
    key: 'AIzaSyAMlY8XSEiIhadWUSuLr5lgk7InHzoGbU8'
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Saren',
  data() {
    return {
      center: { lat: 6.4235, lng: -66.58973 },
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

    };
  },
  mounted() {
    this.loadData();
    console.log(this.tiposOficinas);
    console.log(Object.entries(this.tiposOficinas));
    Object.entries(this.tiposOficinas).forEach(([key]) => {
      this.oficinas.push(key);
    });
  },
  watch: {
    seleccionTipoOficina() {
      console.log('seleccionaron un tipo de oficina y fue');
      console.log(this.seleccionTipoOficina);
      this.estados = this.tiposOficinas[this.seleccionTipoOficina].estados;
      console.log(this.estados);
      Object.entries(this.estados).forEach(([key]) => {
        this.estado.push(key);
      });
    },
    seleccionEstado() {
      console.log('eligieron el estado');
      console.log(this.seleccionEstado);
      //  this.oficinas = this.estados[this.seleccionEstado].oficinas
      this.municipios = this.estados[this.seleccionEstado].municipios;
      console.log(this.municipios);

      Object.entries(this.municipios).forEach(([key]) => {
        this.municipio.push(key);
      });
    },
    seleccionMunicipio() {
      console.log('eligieron el municipio');
      console.log(this.seleccionMunicipio);
      this.ofi = this.municipios[this.seleccionMunicipio].oficinas;
      console.log(this.oficinas);
    },
    seleccionOficina() {
      console.log('seleccionaron una oficina');
      console.log(this.seleccionOficina);
      console.log('obtener coordenadas');
      this.direccion = this.seleccionOficina.replace(/ /g, '+');
      this.getCoordinates(this.direccion);
    }
  },
  methods: {
    getCoordinates: function (direccion) {
      console.log('voy a hacer el request usando');
      console.log(direccion);
      const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}+CA&key=AIzaSyAMlY8XSEiIhadWUSuLr5lgk7InHzoGbU8`;
      console.log(URL);
      fetch(URL).then(res => {
        return res.json();
      }).then(json => {
        if (json.status === 'OK') {
          const lat = json.results[0].geometry.location.lat;
          const lng = json.results[0].geometry.location.lng;
          console.log('se consiguio la direccion');
          console.log(`esta ubicado en ${lat} y longitud ${lng}`);
          this.center = {
            lat,
            lng
          };
          this.zoom = 12;
          this.markers.push({ position: this.center });
        } else {
          console.log('no se consiguio la direccion');
        }
      }).catch(err => {
        console.log(err);
      });
    },
    loadData: function () {
      this.tiposOficinas = __WEBPACK_IMPORTED_MODULE_2__oficinas_saren_json___default.a.tipos;
    },
    change: function () {
      console.log('cambiaron valor input');
    }
  },
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  }
});

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'guia',
  props: ['paso'],
  data() {
    return {};
  },
  mounted: function () {
    console.log('se monto el compo');
    console.log(this.paso);
  }
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'form',
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'pfooter',
  data: () => ({
    icons: ['fa-facebook', 'fa-twitter', 'fa-instagram']
  })
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c3be8f1_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__ = __webpack_require__(260);
function injectStyle (ssrContext) {
  __webpack_require__(258)
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c3be8f1_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// componente para la seccion del slider
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sliders',
  props: ['sliders']
  // fin del componente para la seccion del slider

});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Whatweoffer_vue__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_071450d4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Whatweoffer_vue__ = __webpack_require__(262);
function injectStyle (ssrContext) {
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-071450d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Whatweoffer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_071450d4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Whatweoffer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// componente para la seccion del slider
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'offers',
  props: ['offers']
  // fin del componente para la seccion del slider

});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'menu'
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'step',
  props: ['paso'],
  data() {
    return {};
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      add: '',
      e1: 0,
      valid: true,
      name: '',
      nameRules: [v => !!v || 'Name is required', v => v && v.length <= 10 || 'Name must be less than 10 characters'],
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      tiposdocumentos: ['traspaso', 'poder'],
      checkbox: false
    };
  },
  methods: {
    addDocument() {
      this.add = true;
    },
    closeCallback() {
      this.add = false;
    },
    getDocumentos() {
      if (this.$store.state.token === '') {
        __WEBPACK_IMPORTED_MODULE_0_axios___default()({
          method: 'GET',
          'url': 'http://localhost:8081/api/users',
          headers: {
            'x-access-token': this.$store.state.token
          }
        }).then(result => {
          this.message = result.data;
          console.log(result.data);
        }, error => {
          console.error(error);
        });
      }
    }
  }
});

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Saren__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slider_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Whatweoffer_vue__ = __webpack_require__(95);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: () => ({
    // Data Slider
    sliders: [{ src: '/static/img/carouselHome/1_1900x1200.jpg',
      title: 'Documentos Online',
      text: 'Genera automaticamente tus documentos, contratos, poderes y mas a travez de nuestra plataforma de firmas digitalizadas',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/2_1900x1200.jpg',
      title: 'Asesorias Online',
      text: 'Resuelve tus dudas legales en cualquier area juridica en el estado y ciudad donde te encuentres seleccionando al abogado(a), de tu preferencia a traves de una videollamada',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/3_1900x1200.jpg',
      title: 'Aprobación y certificado',
      text: 'Avalado por las instituciones públicas y el colegio de abogados de venezuela con la facilidad de ofrecer un servicio online juridico y expedito',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/4_1900x1200.jpg',
      title: 'Registrate como usuario',
      text: 'Registrate para recibir informaciones de las actualizaciones y llevar un seguimiento de tus actividades',
      buttontext: 'Ver mas' }, { src: '/static/img/carouselHome/5_1900x1200.jpg',
      title: 'Eres abogado(a)?',
      text: 'No importa que seas independiente o trabajes para una firma esta es tu oportunidad de brindar asesorias desde tu hogar u oficina y generear honorarios extras',
      buttontext: 'Ver mas' }],
    // Data offers
    offers: [{ src: '/static/img/home1Documentos.jpg',
      title: 'Documentos Online',
      text: 'Realiza automaticamente tus documentos legales visados y listos desde la comodidad de tu hogar u oficina; Experimenta la innovacion tecnologica de ser un abogado.',
      buttontext: '¿Como funciona?' }, { src: '/static/img/home2Aseso.jpg',
      title: 'Asesorias Online',
      text: 'Asesorias en vivo a traves de una videollamada con nuestros abogados especializados en el area legal segun tu necesidad y en el horario de su comodidad.',
      buttontext: 'Ven y asesorate' }, { src: '/static/img/home3Registro.jpg',
      title: 'Registrate',
      text: 'Podras registrarte como Usuario(a) o Abogado(a) para disfrutar de las ventajas que ofrecemos en nuestra plataforma y puedas hacer uso de las actualizaciones.',
      buttontext: 'Registrate aqui' }],
    drawer: null,
    center: { lat: 6.332021, lng: -66.698975 },
    markers: [{
      position: { lat: 10.0, lng: 10.0 }
    }, {
      position: { lat: 11.0, lng: 11.0 }
    }]
  }),
  props: {
    source: String
  },
  components: {
    sliders: __WEBPACK_IMPORTED_MODULE_1__Slider_vue__["a" /* default */],
    offers: __WEBPACK_IMPORTED_MODULE_2__Whatweoffer_vue__["a" /* default */],
    Saren: __WEBPACK_IMPORTED_MODULE_0__Saren__["a" /* default */]
  },
  methods: {
    sendMail() {
      //  TODO
    }
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_css__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_font_awesome_css_font_awesome_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






 // Ensure you are using css-loader



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vuetify___default.a, {
  theme: {
    primary: __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors___default.a.blue.darken1, // #E53935
    secondary: __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors___default.a.green.lighten4, // #FFCDD2
    accent: __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_util_colors___default.a.red.base // #3F51B5
  } });
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_axios___default.a);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* store */],
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53489af7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(269);
function injectStyle (ssrContext) {
  __webpack_require__(112)
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53489af7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4ea976d0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_infoWindow_vue__ = __webpack_require__(231);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_infoWindowImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4ea976d0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_infoWindow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"flyaway"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0d10bf52_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_map_vue__ = __webpack_require__(234);
function injectStyle (ssrContext) {
  __webpack_require__(233)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mapImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0d10bf52_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_map_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_c('div',{ref:"vue-map",staticClass:"vue-map"}),_vm._v(" "),_c('div',{staticClass:"vue-map-hidden"},[_vm._t("default")],2),_vm._v(" "),_vm._t("visible")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0b25d89b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_streetViewPanorama_vue__ = __webpack_require__(237);
function injectStyle (ssrContext) {
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_streetViewPanoramaImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0b25d89b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_streetViewPanorama_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_c('div',{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_08865a30_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_placeInput_vue__ = __webpack_require__(239);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_placeInputImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_08865a30_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_placeInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('span',{domProps:{"textContent":_vm._s(_vm.label)}}),_vm._v(" "),_c('input',{ref:"input",class:_vm.className,attrs:{"type":"text","placeholder":_vm.placeholder}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_43a213e1_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__ = __webpack_require__(244);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_autocompleteImpl_js___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_43a213e1_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = {"tipos":{"Registro Principal":{"name":"Registro Principal","id":"1","estados":{"apure":{"name":"apure","municipios":{"San Fernando ":{"name":"San fernando","oficinas":["Registro Principal del estado Apure","la oficina del coño de tu madre"]}}},"anzoategui":{"municipios":{"Simón Bolivar":{"oficinas":["Registro Principal de Barcelona"]}}},"merida":{"name":"merida","oficinas":["Registro principal de merida"]}}},"Registro Público":{"name":"Registro Público","id":"2","estados":{"amazonas":{"name":"amazonas","municipios":{"Alto Orinoco":{"name":"Alto Orinoco","oficinas":["Registro Público de Puerto Ayacucho"]}}},"apure":{"name":"apure","municipios":{"Achaguas":{"name":"Achaguas","oficinas":["Registro público con funciones notariales del municipio Achaguas"]},"Muñoz":{"oficinas":["Registro público con funciones notariales del municipio Muñoz"]},"Paez":{"oficinas":["Registro público del municipio Páez"]},"Pedro Camejo":{"oficinas":["Registro público con funciones notariales del Municipio Pedro Camejo"]},"Romulo Gallegos":{"oficinas":["Registro público con funciones notariales del Municipio Romulo Gallegos"]},"San Fernando":{"oficinas":["Registro público del municipio San Fernando"]}}},"anzoategui":{"name":"anzoategui","municipios":{"Juan Manuel Cajigal":{"oficinas":["Registro público con funciones notariales del municipio Juan Manuel Cajigal"]},"Independencia":{"oficinas":["Registro público con funciones notariales del municipio Independencia"]},"Libertad":{"oficinas":["Registro público con funciones notariales del municipio Libertad"]},"Anaco":{"oficinas":["Registro Público del municipio Anaco"]},"Aragua":{"oficinas":["Registro Público del Municipio Aragua"]},"Simón Bolívar":{"oficinas":["Registro Público del Municipio Simón Bolívar"]},"Manuel Ezequiel Bruzual":{"oficinas":["Registro Público con funciones notariales del municipio Manuel Ezequiel Bruzual"]},"Diego Bautista Urbaneja":{"oficinas":["Registro Público del Municipio Diego Bautista Urbaneja"]},"Pedro María Freites":{"oficinas":["Registro Público con funciones notariales del municipio Pedro María Freites"]},"San José de Guanipa":{"oficinas":["Registro Público del Municipio San José de Guanipa"]},"Francisco de Miranda":{"oficinas":["Registro Público del Municipio Francisco de Miranda"]},"Jose Gregorio Monagas":{"oficinas":["Registro Público del Municipio Jose Gregorio Monagas"]},"Fernando Peñalver":{"oficinas":["Registro Público del Municipio Fernando Peñalver"]},"Piritu":{"oficinas":["Registro Público con funciones notariales de los Municipios Píritu y San Juan de Capistrano"]},"Simón Rodríguez":{"oficinas":["Registro Público del Municipio Simón Rodríguez"]},"Juan Antonio Sotillo":{"oficinas":["Registro Público del Municipio Juan Antonio Sotillo"]}}},"lara":{"name":"lara","oficinas":["Registro público con funciones notariales del municipio crespo","Registro público del municipio Jimenez y Andres Eloy Blanco","Registro público del municipio Morán Estado Lara"]},"margarita":{"name":"margarita"}}},"Registro Mercantil":{"name":"Registro Mercantil","id":"3","estados":{"apure":{"name":"apure","municipios":{"Guasdualito":{"name":"Guasdualito ","oficinas":["Registro Mercantil Segundo de la Circunscripción Judicial del Distro del Alto Apure"]},"San Fernando":{"oficinas":["Registro Mercantil del Estado Apure"]}}},"Anzoátegui":{"municipios":{"Simon Bólivar":{"oficinas":["Registro Mercantil Primero del Estado Anzoátegui","Registro Mercantil Segundo del Estado Anzoátegui","Registro Mercantil Tercero del Estado Anzoátegui"]}}}}},"Notaria Pública":{"name":"Notaria Pública","id":"4","estados":{"amazonas":{"name":"amazonas","municipios":{"municipio Rio Negro":{"oficinas":["Notaría Pública de Puerto Ayacucho"]}}},"apure":{"name":"apure","municipios":{"San Fernando":{"name":"San fernando","oficinas":["Notaría Pública de San Fernando de Apure"]},"Guasdualito":{"oficinas":["Notaría Pública de Guasdualito estado Apure"]}}},"anzoategui":{"name":"anzoategui","municipios":{"Simon Bolivar":{"oficinas":["Notaría Pública Primera de Barcelona","Notaría Pública Segunda del Tigre"]},"Juan Antonio Sotillo":{"oficinas":["Notaría Pública Primera de Puerto La Cruz"]},"Anaco":{"oficinas":["Notaría Pública Segunda de Puerto La Cruz","Notaría Pública Tercera de Puerto La Cruz","Notaría Pública de Anaco"]},"Simón Rodrógiez":{"oficinas":["Notaría Pública El Tigre","Notaría Pública Segunda del Tigre"]},"Urbaneja":{"oficinas":["Notaría Pública de Lecherias"]},"Francisco de Miranda":{"oficinas":["Notaría Pública de Pariaguan"]}}}}}}}

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',_vm._b({attrs:{"row":"","justify-space-around":""}},'v-layout',_vm.binding,false),[_c('v-flex',{attrs:{"xs10":""}},[_c('v-card',{attrs:{"flat":""}},[_c('div',{attrs:{"id":"select-container"}},[_c('v-avatar',{attrs:{"tile":_vm.tile,"size":_vm.imgSize}},[_c('img',{attrs:{"src":__webpack_require__(247),"alt":"Registro Principal"}})]),_vm._v(" "),_c('v-avatar',{attrs:{"tile":_vm.tile,"size":_vm.imgSize}},[_c('img',{attrs:{"src":__webpack_require__(248),"alt":"Registro Público"}})]),_vm._v(" "),_c('v-avatar',{attrs:{"tile":_vm.tile,"size":_vm.imgSize}},[_c('img',{attrs:{"src":__webpack_require__(249),"alt":"Registro Mercantil"}})]),_vm._v(" "),_c('v-avatar',{attrs:{"tile":_vm.tile,"size":_vm.imgSize}},[_c('img',{attrs:{"src":__webpack_require__(250),"alt":"Notaria Pública"}})]),_vm._v(" "),_c('v-select',{attrs:{"label":"  Tipos de oficinas","items":_vm.oficinas,"height":"40","background-color":"grey lighten-2"},model:{value:(_vm.seleccionTipoOficina),callback:function ($$v) {_vm.seleccionTipoOficina=$$v},expression:"seleccionTipoOficina"}}),_vm._v(" "),_c('v-select',{attrs:{"label":"  Estado","items":_vm.estado,"height":"40","background-color":"grey lighten-2"},model:{value:(_vm.seleccionEstado),callback:function ($$v) {_vm.seleccionEstado=$$v},expression:"seleccionEstado"}}),_vm._v(" "),_c('v-select',{attrs:{"label":"  Municipios","items":_vm.municipio,"height":"40","background-color":"grey lighten-2"},model:{value:(_vm.seleccionMunicipio),callback:function ($$v) {_vm.seleccionMunicipio=$$v},expression:"seleccionMunicipio"}}),_vm._v(" "),_c('v-select',{attrs:{"label":"  Oficina","items":_vm.ofi,"height":"40","background-color":"grey lighten-2","light":""},model:{value:(_vm.seleccionOficina),callback:function ($$v) {_vm.seleccionOficina=$$v},expression:"seleccionOficina"}})],1)])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',[_c('div',{attrs:{"id":"map-container"}},[_c('gmap-map',{staticStyle:{"width":"600px","height":"400px"},attrs:{"center":_vm.center,"zoom":_vm.zoom}},[_c('gmap-marker',{attrs:{"position":_vm.center}})],1)],1)])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/Boton 1.2ac2bf5.png";

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/Boton 2.5415d60.png";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/Boton 3.0412fb6.png";

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/Boton 4.81dea3d.png";

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Guia_vue__ = __webpack_require__(90);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_025f7c40_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Guia_vue__ = __webpack_require__(253);
function injectStyle (ssrContext) {
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-025f7c40"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Guia_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_025f7c40_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Guia_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 252 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column paso",style:({'background-image': ("url('" + (_vm.paso.src) + "')")})},[_c('div',{attrs:{"id":"number-container"}},[_c('p',[_vm._v(_vm._s(_vm.paso.number))])]),_vm._v(" "),_c('div',{attrs:{"id":"text-container"}},[_c('p',[_vm._v(_vm._s(_vm.paso.text))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__ = __webpack_require__(91);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_533dff36_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__ = __webpack_require__(255);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_533dff36_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grey darken-3"},[_c('v-container',{staticStyle:{"min-height":"0"},attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"white--text",attrs:{"color":"grey darken-3"}},[_c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',_vm._b({attrs:{"row":""}},'v-layout',_vm.binding,false),[_c('v-flex',{staticStyle:{"margin-top":"15%"},attrs:{"xs7n":""}},[_c('h1',{staticClass:"display-3",staticStyle:{"text-align":"center"}},[_vm._v("Contactanos")]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("Servicios legales online a la altura de tus necesidades")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs5":""}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":""},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"label":"Nombre","dark":"","rules":_vm.nameRules,"required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"E-mail","dark":"","rules":_vm.emailRules,"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Telefono","dark":"","rules":_vm.nameRules,"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Mensaje","dark":"","counter":250,"required":"","textarea":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-btn',{attrs:{"large":"","disabled":!_vm.valid,"dark":""},on:{"click":function($event){_vm.sendMail()}}},[_vm._v(" ENVIAR ")])],1)],1)],1)],1)],1)])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PFooter_vue__ = __webpack_require__(92);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_643c7f5e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PFooter_vue__ = __webpack_require__(257);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PFooter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_643c7f5e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PFooter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-footer',{staticClass:"grey darken-2",attrs:{"height":"250px"}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-title',{staticClass:"grey darken-2"},[_c('img',{staticClass:"pl-2",staticStyle:{"height":"60px"},attrs:{"src":"/static/img/icons/logo.png","alt":"Vuetify.js"}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('p',{staticClass:"white--text"},[_c('v-icon',{attrs:{"size":"24px","dark":""}},[_vm._v(" fa-whatsapp")]),_vm._v(" +58 4145336976")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('p',{staticClass:"white--text"},[_c('v-icon',{attrs:{"size":"24px","dark":""}},[_vm._v(" email")]),_vm._v(" info@oficiolegal.com")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_vm._l((_vm.icons),function(icon){return _c('v-btn',{key:icon,staticClass:"mx-3",attrs:{"icon":"","dark":""}},[_c('v-icon',{attrs:{"size":"24px"}},[_vm._v(_vm._s(icon))])],1)})],2),_vm._v(" "),_c('v-card-text',{staticClass:"grey darken-1"},[_c('v-layout',{staticClass:"white--text"},[_c('v-flex',{attrs:{"xs2":"","layout":"","column":"","offset-xs1":""}},[_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Documentos Online")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Asesorias Online")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Noticias Legales")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Oficinas SAREN")])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","layout":"","column":""}},[_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Talleres")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Conferencias")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Diplomados")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Cursos")])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","layout":"","column":""}},[_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Mision")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Vision")])]),_vm._v(" "),_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Glosario")])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":"","layout":"","column":""}},[_c('v-flex',[_c('span',{staticClass:"body-2 "},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat sodales quam, blandit elementum dolor sodales eget. Integer non urna eu nibh luctus vehicula in quis nisi. Praesent molestie malesuada porttitor.")])])],1)],1)],1),_vm._v(" "),_c('v-card-actions',{staticClass:"grey lighten-2 justify-center"},[_vm._v("©2018 — "),_c('strong',[_vm._v("OficioLegal")])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 258 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 259 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-carousel-item',{attrs:{"src":_vm.sliders.src,"transition":"fade","reverse-transition":"fade"}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',{attrs:{"align-center":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs1":""}},[_c('h3',{staticClass:"display-1 white--text"},[_vm._v(_vm._s(_vm.sliders.title))]),_vm._v(" "),_c('span',{staticClass:"subheading white--text"},[_vm._v(_vm._s(_vm.sliders.text))]),_vm._v(" "),_c('v-divider',{staticClass:"my-3"}),_vm._v(" "),_c('v-btn',{staticClass:"mx-0",attrs:{"large":"","color":"primary"}},[_vm._v(_vm._s(_vm.sliders.buttontext))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"xs4":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',[_c('div',{attrs:{"id":"container"}},[_c('div',{attrs:{"id":"leftThing"}},[_c('v-card-media',{attrs:{"src":_vm.offers.src,"height":"260px","width":"260px"}})],1),_vm._v(" "),_c('div',{attrs:{"id":"rightThing"}},[_c('div',{staticClass:"headline",staticStyle:{"text-align":"center"},style:({ color: _vm.offers.color})},[_vm._v(_vm._s(_vm.offers.title))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.offers.text))]),_vm._v(" "),_c('div',[_c('v-btn',{attrs:{"outline":"","color":_vm.offers.buttoncolor}},[_vm._v(_vm._s(_vm.offers.buttontext))])],1)])])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__ = __webpack_require__(97);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17cb5504_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Menu_vue__ = __webpack_require__(265);
function injectStyle (ssrContext) {
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17cb5504_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"tabs group",staticStyle:{"margin-right":"200px"}},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#one"}},[_vm._v("Terminología Legal")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#two"}},[_vm._v("CONTACTO")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#three"}},[_vm._v("MISIÓN")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#three"}},[_vm._v("VISIÓN")])])]),_vm._v(" "),_c('div',{attrs:{"id":"contentm"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Steps_vue__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f25f085a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Steps_vue__ = __webpack_require__(268);
function injectStyle (ssrContext) {
  __webpack_require__(267)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f25f085a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Steps_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f25f085a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Steps_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 267 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"xs4":""}},[_c('v-card',{attrs:{"id":"card","flat":"","img":_vm.paso.src}},[_c('v-container',{attrs:{"grid-list-lg":"","fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',[_c('div',{attrs:{"id":"container"}},[_c('div',{attrs:{"id":"leftThing"}},[_c('p',[_vm._v(_vm._s(_vm.paso.number))])]),_vm._v(" "),_c('div',{attrs:{"id":"rightThing"}},[_c('p',[_vm._v(_vm._s(_vm.paso.text))])])])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('Menu',{staticStyle:{"margin-bottom":"-100vh","z-index":"1","height":"100vh"}}),_vm._v(" "),_c('v-content',[_c('section',[_c('v-carousel',{staticStyle:{"height":"100vh"}},_vm._l((_vm.sliders),function(sliders){return _c('sliders',{attrs:{"sliders":sliders}})}))],1),_vm._v(" "),_c('section',{staticStyle:{"margin-bottom":"100px"}},[_c('v-layout',{staticClass:"my-5",attrs:{"column":"","wrap":"","align-center":""}},[_c('div',{staticClass:"text-xs-center titulo"},[_c('div',{staticClass:"grad",attrs:{"id":"grad1"}}),_vm._v(" "),_c('h2',{staticClass:"subtitle is-2 text"},[_vm._v("¿Que Ofrecemos?")]),_vm._v(" "),_c('div',{staticClass:"grad",attrs:{"id":"grad2"}})])]),_vm._v(" "),_c('v-layout',_vm._b({},'v-layout',_vm.binding,false),_vm._l((_vm.offers),function(offers){return _c('offers',{attrs:{"offers":offers}})}))],1),_vm._v(" "),_c('section',[_c('v-jumbotron',{attrs:{"src":"/static/img/fondo1.png","height":"600px"}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',{attrs:{"align-center":""}},[_c('v-flex',[_c('h3',{staticClass:"display-3"},[_vm._v("Solucion Juridica Innovadora")]),_vm._v(" "),_c('p',[_vm._v(" Oficio legal es un escritorio juridico virtual, creado con la necesidad de favorecer a las personas en el aspecto juridico y economico,"),_c('br'),_vm._v(" en los asuntos legales de su dia a dia desde la comodidad de su hogar u oficina.")]),_vm._v(" "),_c('p',[_vm._v(" A diferencia de escritorios juridios convencionales, la incentidumbre de confiar en un abogado y altos costos por servicios "),_c('br'),_vm._v(" profesionales, Oficio Legal te brinda la oportunidad de realizar por ti mismo los documentos legales y/o asesorarte con "),_c('br'),_vm._v("abogados especialistas, exclusivamente seleccionados para solcionar tus dudas a costos asequibles para todos, a traves "),_c('br'),_vm._v(" de videollamas de nuestra plataforma")])])],1)],1)],1)],1),_vm._v(" "),_c('section',{attrs:{"id":"documentos-asesorias"}},[_c('h1',{staticStyle:{"display":"inline-block"}},[_vm._v(" Documentos Online ")]),_vm._v(" "),_c('div',{staticClass:"grad",attrs:{"id":"grad3"}}),_vm._v(" "),_c('div',{staticClass:"columns"},_vm._l((_vm.steps),function(paso){return _c('guia',{key:paso.number,attrs:{"paso":paso}})}))]),_vm._v(" "),_c('section',{staticStyle:{"margin-bottom":"50px"}},[_c('v-layout',{staticClass:"my-5",attrs:{"column":"","wrap":"","align-center":""}},[_c('div',{staticClass:"text-xs-center titulo"},[_c('div',{staticClass:"grad",attrs:{"id":"grad1"}}),_vm._v(" "),_c('h2',{staticClass:"subtitle is-2 text"},[_vm._v("Oficinas Saren")]),_vm._v(" "),_c('div',{staticClass:"grad",attrs:{"id":"grad2"}})])]),_vm._v(" "),_c('v-container',{attrs:{"grid-list-xl":""}},[_c('Saren')],1)],1),_vm._v(" "),_c('section',[_c('contactf')],1)]),_vm._v(" "),_c('PFooter')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Login__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Documentos__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Home__ = __webpack_require__(294);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Login__["a" /* default */]
  }, {
    path: '/documentos',
    name: 'Documentos',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Documentos__["a" /* default */]
  }, {
    path: '/home',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Home__["a" /* default */]
  }, {
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Home__["a" /* default */]
  }]
}));

/***/ }),
/* 271 */,
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(99);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ceee490_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(273);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ceee490_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"inspire"}},[_c('v-content',[_c('v-container',{attrs:{"fluid":"","fill-height":""}},[_c('v-layout',{attrs:{"align-center":"","justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","sm8":"","md4":""}},[_c('v-card',{staticClass:"elevation-12"},[_c('v-toolbar',{attrs:{"dark":"","color":"primary"}},[_c('v-toolbar-title',[_vm._v("Login form")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","href":_vm.source,"target":"_blank"},slot:"activator"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("code")])],1),_vm._v(" "),_c('span',[_vm._v("Source")])],1)],1),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"prepend-icon":"person","name":"login","label":"Login","type":"text"}}),_vm._v(" "),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"password","label":"Password","id":"password","type":"password"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"}},[_vm._v("Login")])],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Documentos_vue__ = __webpack_require__(100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d4480174_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Documentos_vue__ = __webpack_require__(293);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Documentos_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d4480174_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Documentos_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',[_c('v-card-media',{attrs:{"src":"/static/img/documentosonline.jpg","height":"500px"}})],1)],1),_vm._v(" "),_c('v-stepper',{model:{value:(_vm.e1),callback:function ($$v) {_vm.e1=$$v},expression:"e1"}},[_c('v-stepper-header',[_c('v-stepper-step',{attrs:{"step":"1","complete":_vm.e1 > 1}},[_vm._v("Registrate ")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","complete":_vm.e1 > 2}},[_vm._v("Llena el Formulario")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"3","complete":_vm.e1 > 3}},[_vm._v("Paga")]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"4"}},[_vm._v("Imprime")])],1),_vm._v(" "),_c('v-stepper-items',[_c('v-stepper-content',{attrs:{"step":"1"}},[_c('v-card',{staticClass:"mb-5",attrs:{"color":"grey lighten-1","height":"200px"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.e1 = 2}}},[_vm._v("Siguiente")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":""},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-select',{attrs:{"label":"Tipo de Documento","items":_vm.tiposdocumentos,"rules":[function (v) { return !!v || 'Item is required'; }],"required":""},model:{value:(_vm.select),callback:function ($$v) {_vm.select=$$v},expression:"select"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Name","rules":_vm.nameRules,"counter":10,"required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"E-mail","rules":_vm.emailRules,"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-select',{attrs:{"label":"Item","items":_vm.items,"rules":[function (v) { return !!v || 'Item is required'; }],"required":""},model:{value:(_vm.select),callback:function ($$v) {_vm.select=$$v},expression:"select"}}),_vm._v(" "),_c('v-checkbox',{attrs:{"label":"Do you agree?","rules":[function (v) { return !!v || 'You must agree to continue!'; }],"required":""},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}}),_vm._v(" "),_c('v-btn',{on:{"click":_vm.clear}},[_vm._v("Reset")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.e1 = 3}}},[_vm._v("Siguiente")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1)],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"3"}},[_c('v-card',{staticClass:"mb-5",attrs:{"color":"grey lighten-1","height":"200px"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.e1 = 4}}},[_vm._v("Siguiente")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"4"}},[_c('v-card',{staticClass:"mb-5",attrs:{"color":"grey lighten-1","height":"200px"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},nativeOn:{"click":function($event){_vm.e1 = 1}}},[_vm._v("Finalizar")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""}},[_vm._v("Cancel")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6b3c910_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(296);
function injectStyle (ssrContext) {
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6b3c910_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 295 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-content',[_c('section',[_c('v-carousel',{staticStyle:{"height":"770px"}},_vm._l((_vm.sliders),function(sliders){return _c('sliders',{attrs:{"sliders":sliders}})}))],1),_vm._v(" "),_c('section',[_c('v-layout',{staticClass:"my-5",attrs:{"column":"","wrap":"","align-center":""}},[_c('div',{staticClass:"text-xs-center titulo"},[_c('h2',[_vm._v("¿Que Ofrecemos?")])])]),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.offers),function(offers){return _c('offers',{attrs:{"offers":offers}})}))],1),_vm._v(" "),_c('section',[_c('v-jumbotron',{attrs:{"src":"/static/img/fondo1.png","height":"600px"}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',{attrs:{"align-center":""}},[_c('v-flex',[_c('h3',{staticClass:"display-3"},[_vm._v("Solucion Juridica Innovadora")]),_vm._v(" "),_c('p',[_vm._v(" Oficio legal es un escritorio juridico virtual, creado con la necesidad de favorecer a las personas en el aspecto juridico y economico,"),_c('br'),_vm._v(" en los asuntos legales de su dia a dia desde la comodidad de su hogar u oficina.")]),_vm._v(" "),_c('p',[_vm._v(" A diferencia de escritorios juridios convencionales, la incentidumbre de confiar en un abogado y altos costos por servicios "),_c('br'),_vm._v(" profesionales, Oficio Legal te brinda la oportunidad de realizar por ti mismo los documentos legales y/o asesorarte con "),_c('br'),_vm._v("abogados especialistas, exclusivamente seleccionados para solcionar tus dudas a costos asequibles para todos, a traves "),_c('br'),_vm._v(" de videollamas de nuestra plataforma")])])],1)],1)],1)],1),_vm._v(" "),_c('section',[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',[_c('v-card-media',{attrs:{"src":"/static/img/home3.jpg","height":"500px"}})],1)],1)],1),_vm._v(" "),_c('section',[_c('Saren')],1),_vm._v(" "),_c('section',[_c('div',{staticClass:"grey darken-3"},[_c('div',[_c('v-container',{staticStyle:{"min-height":"0"},attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"white--text",attrs:{"color":"grey darken-3"}},[_c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{staticStyle:{"margin-top":"15%"},attrs:{"xs7n":""}},[_c('h1',{staticClass:"display-3",staticStyle:{"text-align":"center"}},[_vm._v("Contactanos")]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("Servicios legales online a la altura de tus necesidades")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs5":""}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":""},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"label":"Nombre","dark":"","rules":_vm.nameRules,"required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"E-mail","dark":"","rules":_vm.emailRules,"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Telefono","dark":"","rules":_vm.nameRules,"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Mensaje","dark":"","counter":250,"required":"","textarea":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-btn',{attrs:{"disabled":!_vm.valid,"dark":""},on:{"click":function($event){_vm.sendMail()}}},[_vm._v(" ENVIAR ")])],1)],1)],1)],1)],1)])],1)],1)],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(298);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    usuario: {
      nombre: '',
      token: ''
    }
  },
  mutations: {
    login: (state, payload) => {
      state.usuario.token = payload.token;
      state.usuario.nombre = payload.username;
    },
    logout: state => {
      state.usuario.token = '';
      state.usuario.nombre = '';
    }
  }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = store;


/***/ }),
/* 298 */,
/* 299 */,
/* 300 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 301 */,
/* 302 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
]),[108]);
//# sourceMappingURL=app.d268a00fe61313493ca1.js.map