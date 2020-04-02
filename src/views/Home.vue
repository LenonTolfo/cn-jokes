<template>
  <div>
    <div class="container">
      <Navbar/>
      <div class="row">
        <div class="col-4">
          <Categories dark-mode="" :current-category="category"/>
        </div>
        <div class="col-8">
          <Joke :category="category"/>
        </div>
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
    }
  },
  computed: {
    category () {return this.$store.state.category}
  },
  methods: {
  }
}
</script>
