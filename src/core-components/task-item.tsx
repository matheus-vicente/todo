import { useState, type ChangeEvent, type FormEvent } from "react";

import X from "../assets/icons/x.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import Check from "../assets/icons/check.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";

import type { Task } from "../models/task";

import { Card } from "../components/card";
import { Text } from "../components/text";
import { InputText } from "../components/input-text";
import { ButtonIcon } from "../components/button-icon";
import { InputCheckbox } from "../components/input-checkbox";
import { useTask } from "../hooks/use-task";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [isEditing, setIsEditing] = useState<boolean>(task.title.length === 0);

  const { updateTaskTitle, updateTaskStatus, deleteTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  function handleSaveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskTitle.length > 0) {
      updateTaskTitle(task.id, { title: taskTitle });
    }

    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    updateTaskStatus(task.id, e.target.checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task.concluded}
            onChange={handleUpdateTaskStatus}
          />

          <Text
            className={`
              flex-1
              ${task.concluded && "line-through"}
            `}
          >
            {task.title}
          </Text>

          <div className="flex gap-1">
            <ButtonIcon
              icon={Trash}
              variant="tertiary"
              onClick={handleDeleteTask}
            />

            <ButtonIcon
              icon={Pencil}
              variant="tertiary"
              onClick={handleEditTask}
              disabled={task.concluded}
            />
          </div>
        </div>
      ) : (
        <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
          <InputText className="flex-1" onChange={handleChangeTaskTitle} />

          <div className="flex gap-1">
            <ButtonIcon
              icon={X}
              type="button"
              variant="secondary"
              onClick={handleExitEditTask}
              disabled={task.title.length === 0}
            />

            <ButtonIcon
              icon={Check}
              type="submit"
              variant="primary"
              disabled={taskTitle.length === 0}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
