<template>
    <div class="bg" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
      <div class="container">
        <div class="contact-container">
          <div class="header">
            <h1>CONTACTEZ-NOUS</h1>
          </div>
          <div class="form">
            <div class="form-group">
              <label for="email">Adresse Email:</label>
              <input type="email" id="email" name="email" class="form-control" placeholder="Votre adresse email" />
            </div>
            <div class="form-group">
              <label for="message">Contenu du Message:</label>
              <textarea id="message" name="message" class="form-control" rows="5" placeholder="Écrivez votre message ici"></textarea>
            </div>
            <button class="btn btn-primary">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImageUrl: "./images/contact.png",
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
  