<template>
  <n-page-header subtitle="An app to store your todos" @back="back">
    <n-grid :cols="2">
      <n-gi>
        <n-statistic label="To do" value="125" />
      </n-gi>
      <n-gi>
        <n-statistic label="Finished" value="22" />
      </n-gi>
    </n-grid>
    <template #title> Todo App </template>
    <template #header> </template>
    <template #avatar>
      <n-avatar
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
      />
    </template>
  </n-page-header>
  <slot />
</template>

<script setup lang="ts">
const { back } = useRouter();
</script>
