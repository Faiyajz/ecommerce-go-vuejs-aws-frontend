<template>
  <nav class="navbar bg-light fixed-top navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="Bootstrap" width="30" height="24">
            Handbook Ecommerce
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" href="#">Plushes</a>
            <a class="nav-link" href="#">Clothes</a>
            <a class="nav-link" href="#">Accessories</a>
            <a class="nav-link" href="#"><UserIcon></UserIcon></a>
            <a class="nav-link" href="#"><CartIcon></CartIcon></a>

        </div>
        </div>

    </div>
    </nav>
</template>

<script>
import UserIcon from "./icons/UserIcon.vue";
import CartIcon from "./icons/CartIcon.vue";

export default {
    name : "NavBar",
    components: {CartIcon,UserIcon}
}
</script>

<style>

</style>