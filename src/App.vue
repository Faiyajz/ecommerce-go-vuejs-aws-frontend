<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <CarouselMain></CarouselMain>
      </div>
    </div>
  </div>

  <div class="container text-start">
    <div class="row border border-1">
      <div class="col-6 col-md-2 border">
        text-1
      </div>
      <div class="col-6 col-md-8 border">
        text-2
      </div>
      <div class="col-12 col-md-2">
        text-3
      </div>

    </div>

  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import CarouselMain from './components/CarouselMain.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CarouselMain,
    
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
