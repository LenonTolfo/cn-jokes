<template>
  <div>
    <h2 class="text-center">Categories:</h2>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "Categories",
    props: ['darkMode'],
    data() {
      return {
        Categories: null,
      }
    }
    ,mounted: function() {
      this.axios.get(process.env.VUE_APP_SECRET + '/categories')
        .then(function(response){
          this.Categories = response.data;
        }.bind(this));
    }
  }
</script>

<style scoped>

</style>