import { createContext } from "react";
import { TaskI } from "../interfaces/task.interfaces";

type TaskContextType = {
  tasks: TaskI[];
  loading: boolean;
  loadTasks: () => void;
  getTask: (id: number) => TaskI;
  createTask: (task: TaskI) => void;
  updateTask: (id: number, newFields: TaskI) => void;
  deleteTask: (id: number) => void;
};
export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  loading: false,
  loadTasks: () => {},
  createTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  getTask: (id: number) => {
    return {
      title: "",
      description: ""
    };
  }
});
