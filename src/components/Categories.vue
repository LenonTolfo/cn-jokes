<template>
  <div>
    <h2 class="text-center">Categories:</h2>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Categories",
    props: ['darkMode'],
    data() {
      return {
        error: null,
        categories: null,
      }
    },
    mounted() {
      this.loadCategories()
    },
    methods: {
      loadCategories () {


        if (localStorage.getItem('categories')){
          this.categories = JSON.parse(localStorage.categories);
        } else {
          axios.get(process.env.VUE_APP_API + '/categories')
            .then(response => {
              this.error = response;
              this.categories = response.data;
              localStorage.setItem('categories', JSON.stringify(response.data));
            }).catch(error => {
            this.error = error;
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>