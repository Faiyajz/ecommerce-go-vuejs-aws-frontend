<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <CarouselMain></CarouselMain>
      </div>
    </div>
    <h3 class="mt-3">Popular Products</h3>
    <div class="row">
      <div v-for="product in products" v-bind:key="product.id" class="col-12 col-md-3 d-flex justify-content-center mt-3">
          <ProductThumbnail
            :image="product.image"
            :title="product.name"
            :price="product.totalPrice.display"
            :additionalInfo="product.shortDescription">
          </ProductThumbnail>
      </div>
     
    </div>
  

  </div>



</template>

<script>
import NavBar from './components/NavBar.vue'
import CarouselMain from './components/CarouselMain.vue'
import ProductThumbnail from './components/ProductThumbnail.vue'
import Webservice from "@/webservice"

export default {
  name: 'App',
  components: {
    NavBar,
    CarouselMain,
    ProductThumbnail,
  },
  data(){
    return{
      products:null
    }
  },
  created(){
    
    Webservice.getProducts().then((res)=>{
      this.products = res.data
    }).catch((err)=>{
      alert(err)
    }),

    Webservice.getCategories().then((res)=>{
      alert(res.data)
    }).catch((err)=>{
      alert(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
