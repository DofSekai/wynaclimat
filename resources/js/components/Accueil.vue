<template>
    <div
        class="bg d-flex align-items-center justify-content-center"
        :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
    >
        <div class="container text-center text-white">
            <h1 class="title-container"><strong>Bienvenue sur WynaClimat !</strong></h1>
            <h3 class="text-container">
                Prêt à jouer un rôle crucial dans la création d'une fresque
                climatique inspirante ? 🌍 Cliquez ci-dessous pour démarrer
                l'aventure vers un avenir plus durable ! 🌱🎨
            </h3>
            <button class="btn btn-danger btn-lg">Cliquez ici</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundImageUrl: "./images/accueil.png",
        };
    },
};
</script>

<style scoped>
.bg {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

/* .bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(
        0,
        0,
        0,
        0.5
    );
} */
.text-container {
  max-width: 600px;
  margin: 0 auto; 
}

.title-container {
  font-size: 90px;
  margin-bottom: 20px;
}

.btn-danger {
    color: white;
    margin-top: 50px;
}
</style>
