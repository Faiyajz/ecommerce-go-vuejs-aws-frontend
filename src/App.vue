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
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
          <ProductThumbnail
            title="Handbook Hardcover"
            price="$100 USD"
            additionalInfo="New">
          </ProductThumbnail>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
          <ProductThumbnail 
            title="Handbook Hardcover" 
            price="$100 USD" 
            additionalInfo="New">
          </ProductThumbnail>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
          <ProductThumbnail 
            title="Handbook Hardcover" 
            price="$100 USD" 
            additionalInfo="New">
          </ProductThumbnail>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
          <ProductThumbnail 
            title="Handbook Hardcover" 
            price="$100 USD" 
            additionalInfo="New">
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
  },created(){
    
    Webservice.getProducts().then((res)=>{
      alert(res.data)
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
