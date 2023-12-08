<template>
    <div class="bg" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
      <div class="container">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImageUrl: '../../../public/images/accueil.png',
      };
    },
  };
  </script>
  
  <style scoped>
  .bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>
  