<template>
    <div
        class="bg d-flex align-items-center justify-content-center"
        :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }"
    >
        <div class="container text-center text-white">
            <h1 class="title-container">
                <strong>Bienvenue sur WynaClimat !</strong>
            </h1>
            <h3 class="text-container">
                Prêt à jouer un rôle crucial dans la création d'une fresque
                climatique inspirante ? 🌍 Cliquez ci-dessous pour démarrer
                l'aventure vers un avenir plus durable ! 🌱🎨
            </h3>
            <router-link to="/button">
                <button class="btn btn-danger btn-lg">Cliquez ici</button>
            </router-link>
        </div>
        <div class="footer fixed-bottom mb-3">
            <ul class="list-unstyled d-flex justify-content-center">
                <li style="margin-right: 20px; font-size: 20px">
                    <router-link to="/contact" class="text-white"
                        >CONTACT</router-link
                    >
                </li>
                <li style="margin-left: 20px; font-size: 20px">
                    <router-link to="/a_propos" class="text-white"
                        >À PROPOS</router-link
                    >
                </li>
            </ul>
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

.footer {
    text-align: center;
    margin-bottom: 10px;
}

.footer a {
    text-decoration: none;
    color: white;
}
</style>
