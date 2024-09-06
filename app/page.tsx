import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { TodoList } from "./components/todos/todoList";
export default function IndexPage() {
  // return <Counter />;
  return <TodoList />
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
