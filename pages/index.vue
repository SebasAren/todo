<template>
  <n-input v-model="newTodo" type="text" placeholder="New todo"></n-input>
</template>

<script setup lang="ts">
const newTodo = ref("");
</script>
