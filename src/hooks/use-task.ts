import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, taskState } from "../models/task";

type UpdateTitlePayload = {
  title: Task["title"];
};

// type UpdateStatusPayload = {
//   status: Task["concluded"]
// }

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: taskState.Creating,
      },
    ]);
  }

  function updateTaskTitle(id: Task["id"], payload: UpdateTitlePayload) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: payload.title,
            state: taskState.Created,
          };
        }

        return task;
      })
    );
  }

  function updateTaskStatus(id: Task["id"], concluded: boolean) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            concluded,
          };
        }

        return task;
      })
    );
  }

  function deleteTask(id: Task["id"]) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return {
    prepareTask,
    updateTaskTitle,
    updateTaskStatus,
    deleteTask,
  };
}
