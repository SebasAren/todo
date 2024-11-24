<template>
  <n-flex>
    <n-input
      v-model:value="newTodo"
      type="text"
      placeholder="New todo"
      @keydown.enter="createTodo"
    ></n-input>
  </n-flex>
  <ul>
    <li v-for="todo in todos">{{ todo }}</li>
  </ul>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();
const newTodo = ref("");
const { todos, refreshTodos } = useTodos();
const createTodo = () => {
  $client.createTodo.mutate(newTodo.value);
  refreshTodos();
};
</script>
