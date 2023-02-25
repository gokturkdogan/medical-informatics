<template>
  <div id="app">
    <Header></Header>
    <Home/>
  </div>
</template>

<script>
import Header from "./components/header";
import Home from "./components/home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
  #app {
    font-family: sans-serif;
  }
</style>