import { type App } from 'vue'
import Button from './v-button.vue'
import Input from './v-input.vue'
import Modal from './v-modal.vue'
import Toast from './v-toaster.vue'
export function registerComponents(app: App) {
  app.component('VButton', Button)
  app.component('VInput', Input)
  app.component('VModal', Modal)
  app.component('VToast', Toast)
}
