<template>
  <n-list bordered>
    <n-list-item v-for="todo in openTodos">
      <template #suffix
        ><n-button quaternary @click="finishTodo(todo.id)"
          >x</n-button
        ></template
      >
      {{ todo.description }}
    </n-list-item>
  </n-list>
</template>

<script setup lang="ts">
import { useTodos } from "@/composables/useTodos";
const { openTodos, finishTodo } = useTodos();
</script>
