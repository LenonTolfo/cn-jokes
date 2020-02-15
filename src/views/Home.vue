<template>
  <div class="container">
    <Header darkMode="true"/>
    <div class="row">
      <div class="col-4">
        <Categories dark-mode=""/>
      </div>
      <div class="col-8">
        <Joke joke-id="new"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Categories from "../components/Categories";
import Joke from "../components/Joke";

export default {
  name: 'home',
  components: {
    Joke,
    Categories,
    Header,
  }
}
</script>
