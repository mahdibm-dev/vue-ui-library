<script setup lang="ts">
import '@/style/main.scss'
import { RouterView } from 'vue-router'
import VToasterVue from './components/toast/v-toaster.vue'
import VToast from '@/components/v-toaster.vue'
</script>

<template>
  <RouterView />
  <VToasterVue />
  <VToast />
</template>
