<template>
    <div class="card" style="width: 12rem;">
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ price }}</p>
            <p class="card-text">{{additionalInfo}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductThumbnail",
    props:{
        image: String,
        title: String,
        price: String,
        additionalInfo: String,
    }
}
</script>

<style>

</style>