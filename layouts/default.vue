<template>
  <n-page-header
    subtitle="An app to store your todos"
    @back="back"
    class="px-1"
  >
    <n-grid :cols="2">
      <n-gi>
        <n-statistic label="To do" :value="openTodos.length" />
      </n-gi>
      <n-gi>
        <n-statistic label="Finished" :value="completedTodos.length" />
      </n-gi>
    </n-grid>
    <template #title> Todo App </template>
    <template #header> </template>
    <template #avatar>
      <n-avatar
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
      />
    </template>
    <template #extra
      ><n-button v-if="status === 'unauthenticated'" @click="signIn('github')"
        >Login</n-button
      >
      <n-button v-else @click="signOut()">Logout</n-button>
    </template>
  </n-page-header>
  <div v-if="status === 'authenticated'">
    <slot />
  </div>
  <div v-else>You must be logged in to use this application.</div>
</template>

<script setup lang="ts">
const { back } = useRouter();
const { signIn, signOut, status } = useAuth();
const { completedTodos, openTodos } = useTodos();
</script>
