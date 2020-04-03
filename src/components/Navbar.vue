<template>
  <div class="row text-center">
    <div class="col-2 my-3">
      <router-link to="/"><img alt="logo" class="logo" src="../assets/CN_Logo.png"></router-link>
    </div>
    <div class="col-8 my-4">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search text in joke" aria-describedby="button-search">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-search"><i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-2 my-4">
      <i v-if="darkMode" class="fas fa-sun fa-3x"></i>
      <i v-else class="fas fa-moon fa-3x" hidden></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        SearchText: null,
      }
    },
    computed:{
      darkMode() { return this.$store.state.darkMode },
    },
  }
</script>

<style scoped>

  .logo {
    width: 90px;
  }

</style>