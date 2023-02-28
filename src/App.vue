<template>
  <div id="app">
    <Header></Header>
    <Content/>
    <Footer></Footer>
    <Notify v-if="notify.isOpen"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Notify from "./components/notify";
export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
    Notify
  },
  computed: {
    ...mapState({
      notify: (state) => state.health.notify,
    }),
  },
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