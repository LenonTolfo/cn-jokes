<template>
  <div>
    <h2 class="text-center">Categories:</h2>
    <div class="col-12">
      <button class="btn btn-primary btn-block my-1 text-capitalize" :class="{active: currentCategory === 'random'}" @click="selectCategory('random')">
        random
      </button>
    </div>
    <div class="col-12" v-for="category in categories" :key="category">
      <button class="btn btn-primary btn-block my-1 text-capitalize" :class="currentCategory === category ? 'active':''" @click="selectCategory(category)">
        {{category}}
      </button>
    </div>
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
    computed: {
      currentCategory () {return this.$store.state.category}
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
      },
      selectCategory (newCategory) {
        this.$store.commit('setCategory', newCategory)
      }
    }
  }
</script>

<style scoped>

</style>