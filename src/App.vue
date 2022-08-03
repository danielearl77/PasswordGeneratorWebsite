<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar></Navbar>

  <RouterView />

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>

</style>
