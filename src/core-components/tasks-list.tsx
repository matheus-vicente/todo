import Plus from "../assets/icons/plus.svg?react";

import { taskState } from "../models/task";
import { useTask } from "../hooks/use-task";
import { useTasks } from "../hooks/use-tasks";

import { TaskItem } from "./task-item";
import { Button } from "../components/button";

export function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  function handleCreateTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={Plus}
          type="button"
          className="w-full"
          onClick={handleCreateTask}
          disabled={tasks.some((task) => task.state === taskState.Creating)}
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
