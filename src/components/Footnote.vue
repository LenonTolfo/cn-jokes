<template>
  <footer class="row col-12 m-0 py-2">
    <div class="col-4 text-center ">
      <h6 class="font-weight-bold">About</h6>
    </div>
    <div class="col-4 text-center disclaimer">
      <h6 class="font-weight-bold">Legal disclaimer:</h6>
      <p class="text-justify">
        This website and its creators are not affiliated with Chuck Norris, any motion picture corporation, any
        television corporation, parent, or affiliate corporation. All motion pictures, products, and brands mentioned on
        this website are the respective trademarks and copyrights of their owners. All material on this website is
        intended for humorous entertainment (satire ) purposes only. The content on this website is not necessarily true
        and should not be regarded as truth.
      </p>
    </div>
    <div class="col-4">
      <h6 class="font-weight-bold text-center">Creators:</h6>
      <ul>
        <li>Ana Carolina</li>
        <li>Lenon Tolfo</li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footnote"
  }
</script>

<style scoped>
  .disclaimer {
    font-size: 10px;
  }
  footer {
    background-color: #bbcad6;
  }
</style>