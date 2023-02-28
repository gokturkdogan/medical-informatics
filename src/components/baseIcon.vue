<template>
    <div>
      <svg :width="width" :height="height" :fill="iconColor">
        <use :xlink:href="'#' + iconName"></use>
      </svg>
    </div>
  </template>
  <script>
  export default {
    props: {
      iconName: { type: String, default: "" },
      width: { type: [Number, String], default: 20 },
      height: { type: [Number, String], default: 20 },
      iconColor: {type: String, default: 'currentColor'}
    }
  };
  </script>