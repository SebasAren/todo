<template>
  <n-input
    v-model:value="newTodo"
    type="text"
    placeholder="New todo"
    @keydown.enter="sumbit"
  ></n-input>
</template>

<script setup lang="ts">
const newTodo = ref("");
const { createTodo } = useTodos();
const sumbit = () => {
  createTodo(newTodo.value);
  newTodo.value = "";
};
</script>
