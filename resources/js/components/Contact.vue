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
        backgroundImageUrl: "./images/propos.png",
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
  
  .contact-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
  
  .header {
    text-align: center;
  }
  
  .form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .btn {
    display: block;
    margin-top: 15px;
    width: 100%;
  }
  </style>
  