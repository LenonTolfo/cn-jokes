<template>
  <div class="container">
    <Navbar darkMode="true"/>
    <div class="row">
      <div class="col-4">
        <Categories dark-mode="" :current-category="category" @update-category="updateCategory"/>
      </div>
      <div class="col-8">
        <Joke joke-id="new"/>
      </div>
    </div>
    <Footnote/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Joke from "../components/Joke";
import Footnote from "../components/Footnote";

export default {
  name: 'home',
  components: {
    Footnote,
    Joke,
    Categories,
    Navbar,
  },
  data () {
    return{
      category: 'random',
    }
  },
  methods: {
    updateCategory (newCategory) {
      this.category = newCategory
    }
  }
}
</script>
