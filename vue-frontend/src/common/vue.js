import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);

export default Vue;