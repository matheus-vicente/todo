import Plus from "../assets/icons/plus.svg?react";

import { TaskItem } from "./task-item";
import { Button } from "../components/button";

export function TasksList() {
  return (
    <>
      <section>
        <Button icon={Plus} className="w-full">
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
