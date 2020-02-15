<template>
  <div class="container-fluid joke mt-2">
    <div class="row my-2">
      <div class="col-2">
        <button class="btn btn-success">prev</button>
      </div>
      <div class="col-8 text-center">
        Category
      </div>
      <div class="col-2">
        <button class="btn btn-success float-right">next</button>
      </div>
    </div>
    <div class="row">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed suscipit nisi, eu mattis purus. Praesent sit
        amet pretium turpis. Phasellus pharetra metus ac ipsum placerat faucibus. Aliquam et libero commodo diam sollicitudin
        tincidunt. Suspendisse elementum libero vel risus gravida, et tincidunt arcu sodales. Sed vel nibh ac lectus tristique
        facilisis. Vestibulum tempus hendrerit turpis vel rutrum.
      </p>
      <p>
        Nullam tempor metus ut nisl scelerisque bibendum. Phasellus neque enim, condimentum porta dignissim nec, gravida
        eu enim. Maecenas laoreet magna quis massa accumsan ultricies. Proin hendrerit dui tellus, id ornare dolor
        pharetra vitae. Sed vitae urna odio. Nam interdum molestie est. a mollis leo odio eget
        lacus.
      </p>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-warning float-right">favorite</button>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Joke",
    props: ['jokeId'],
    data () {
      return {

      }
    },
  }
</script>

<style scoped>


</style>