export const useTodos = () => {
  const { $client } = useNuxtApp();
  const { data: todos, refresh: refreshTodos } = $client.getTodos.useQuery();
  const completedTodos = computed(() => {
    return todos.value?.filter((todo) => todo.completedDate) ?? [];
  });
  const openTodos = computed(() => {
    return todos.value?.filter((todo) => !todo.completedDate) ?? [];
  });
  return { todos, refreshTodos, completedTodos, openTodos };
};
