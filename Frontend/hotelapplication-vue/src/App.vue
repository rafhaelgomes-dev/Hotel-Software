<template>
  <Header />
  <router-view/>
</template>


<script>

  import Header from './components/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
</style>