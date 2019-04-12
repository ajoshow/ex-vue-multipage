import Vue from '@src/common/vue'
import { required } from 'vuelidate/lib/validators'
import fetchButtonComponent from '@src/component/fetchButton.vue'

new Vue({
  el: '#app',
  data : {
    greeting: 'hello world',
    email: '',
    hi : 'hi23'
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
