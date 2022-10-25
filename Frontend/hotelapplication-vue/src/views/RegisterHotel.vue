<template>
  <div>
    <h1>Cadastrar Hotel</h1>
    <RegistrationForm />
  </div>
</template>



<script>

  import RegistrationForm from '../components/RegistrationForm.vue';

  export default {
    components: {
      RegistrationForm
    },
  }

</script>


<style scoped>

 div {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
 }

 h1 {
   color: black;
   margin-top: 50px;
   margin-bottom: 20px;
 }

</style>
