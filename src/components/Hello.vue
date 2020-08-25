<template>
  <div class="hello">
    <h2>Some Flags</h2>
    <list-widget :items="items">
      <template #icon="{ item }">
        <country-flag :item="item"></country-flag>
      </template>
    </list-widget>
  </div>
</template>

<script>
import CountryFlag from "./Flag";
import ListWidget from "./ListWidget";

export default {
  name: "hello",
  data() {
    return {
      items: [
        { id: "mt", name: "Malta" },
        { id: "gb", name: "United Kingdom" }
      ]
    };
  },
  components: { CountryFlag, ListWidget }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>