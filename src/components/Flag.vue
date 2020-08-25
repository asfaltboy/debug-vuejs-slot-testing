<template>
  <span class="flag-icon" :class="'flag-icon-' + item.id"></span>
</template>
<script>
import "flag-icon-css/css/flag-icon.css";

export default {
  name: "country-flag",
  props: ["item"]
};
</script>