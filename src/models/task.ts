export const TASKS_KEY = "tasks";

export const taskState = {
  Creating: "creating",
  Created: "created",
} as const;

export type TaskStateType = (typeof taskState)[keyof typeof taskState];

export type Task = {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskStateType;
};
