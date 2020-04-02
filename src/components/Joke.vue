<template>
  <div class="container-fluid joke mt-2">
    <div class="row my-3">
      <div class="col-2">
        <button class="btn btn-success">prev</button>
      </div>
      <div class="col-8 text-center">
        <h2 class="text-capitalize">{{category}}</h2>
      </div>
      <div class="col-2">
        <button class="btn btn-success float-right" @click="loadNewJoke">next</button>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-8 offset-2 text-capitalize">
        <h5>
          {{ joke.value }}
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-warning float-right">favorite</button>
      </div>
    </div>
  </div>
  
</template>

<script>
  import axios from "axios";

  export default {
    name: "Joke",
    props: ['category'],
    data () {
      return {
        joke: null,
        error: null,
      }
    },
    mounted() {
      this.loadNewJoke();
    },
    methods: {
      loadNewJoke() {
        axios.get(process.env.VUE_APP_API + '/random', this.category === 'random' ? null : {
          category: this.category
        })
          .then(response => {
            this.joke = response.data;
            //todo create an array of previews loaded jokes sorted by category
          }).catch(error => {
          this.error = error;
        });
      }
    },
    watch: {
      category() {
        this.loadNewJoke();
      }
    }
  }
</script>

<style scoped>


</style>