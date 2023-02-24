<template>
  <div id="app">
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {

  },
  computed: {
    ...mapState({
      notify: (state) => state.cart.notify,
    }),
  },
};
</script>