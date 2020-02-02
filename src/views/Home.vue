<template>
  <div class="container">
    <Header darkMode="true"/>
    <div class="col-4">
      <Categories dark-mode=""/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Categories from "../components/Categories";

export default {
  name: 'home',
  components: {
    Categories,
    Header,
  }
}
</script>
