<template>
  <n-flex>
    <n-input
      v-model:value="newTodo"
      type="text"
      placeholder="New todo"
      @keydown.enter="sumbit"
    ></n-input>
  </n-flex>
</template>

<script setup lang="ts">
const newTodo = ref("");
const { createTodo } = useTodos();
const sumbit = () => {
  createTodo(newTodo.value);
  newTodo.value = "";
};
</script>
