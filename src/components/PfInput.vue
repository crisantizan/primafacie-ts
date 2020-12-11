<template>
  <input type="text" v-model="input" />
  <h2 style="color: red;">{{ input }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    input: ''
  })
});
</script>
