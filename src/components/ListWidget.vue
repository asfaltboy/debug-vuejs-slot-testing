<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.id" :id="item.id">
      <span class="text-truncate">{{ item.name }}</span>
      <slot name="icon" :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list-widget",
  props: ["items"]
};
</script>

<style scoped>
span{
  margin-right: 5px;
}
</style>
