import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@/server/trpc/routers";

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Todo = RouterOutput["getTodos"][number];

export const useTodos = () => {
  // composable for managing the todos and the connection with the backend
  const { $client } = useNuxtApp();
  const { data: todos, refresh: refreshTodos } = $client.getTodos.useQuery();
  const completedTodos = computed<Todo[]>(() => {
    return todos.value?.filter((todo) => todo.completedDate) ?? [];
  });
  const openTodos = computed<Todo[]>(() => {
    return todos.value?.filter((todo) => !todo.completedDate) ?? [];
  });
  const finishTodo = async (id: Todo["id"]) => {
    await $client.finishTodo.mutate(id);
    refreshTodos();
  };
  const createTodo = async (description: string) => {
    await $client.createTodo.mutate(description);
    refreshTodos();
  };
  return { refreshTodos, completedTodos, openTodos, finishTodo, createTodo };
};
