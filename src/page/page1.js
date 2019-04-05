import '@src/common/libs'
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