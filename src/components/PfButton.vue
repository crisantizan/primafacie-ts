<template>
  <button :style="styles" @click="onClick">{{ message }}</button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    color: String,
    message: {
      type: String,
      default: 'A default message'
    }
  },

  setup(props) {
    const styles = computed(() => ({ color: props.color }));

    const onClick = () => {
      console.log('On click button');
    };

    return { styles, onClick };
  }
});
</script>
