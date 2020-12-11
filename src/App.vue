<template>
  <h2>Hola mundo</h2>
  <PfInput />
  <PfButton color="red" message="Message from props" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PfInput from './components/PfInput.vue';
import PfButton from './components/PfButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    PfInput,
    PfButton
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
