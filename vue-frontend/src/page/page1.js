import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
import { required } from 'vuelidate/lib/validators'
import fetchButtonComponent from '@src/component/fetchButton.vue'

new Vue({
  el: '#app',
  data : {
    greeting: 'hello world',
    email: '',

  },
  components: {
    fetchButton : fetchButtonComponent
  },
  validations : {
    email : {
      required
    }
  }
});