<template>
  <div class="row text-center">
    <div class="col-2 my-3">
      <router-link to="/"><img alt="logo" class="logo" src="../assets/logo.png"></router-link>
    </div>
    <div class="col-8 my-4">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
    <div class="col-2 my-4">
      <i v-if="mode == 'dark'" class="fas sun fa-3x"></i>
      <i v-else class="fas fa-moon fa-3x"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        prop: ['mode'],
        SearchText: null,
      }
    },
  }
</script>

<style scoped>

  .logo {
    width: 90px;
  }

</style>