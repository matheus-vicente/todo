import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY } from "../models/task";

export function useTasks() {
  const [tasks] = useLocalStorage<Array<Task>>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
