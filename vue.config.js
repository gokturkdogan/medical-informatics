module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: ` 
        @import '~@/assets/scss/variables/_colors.scss';
        @import '~@/assets/scss/mixins/_items.scss';
        @import '~@/assets/scss/mixins/_shadows.scss';
        `
      }
    }
  }
};