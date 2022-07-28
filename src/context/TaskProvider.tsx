import { useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  getTasksRequest
} from "../services/task.service";
import { TaskI } from "../interfaces/task.interfaces";

import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContext");
  }
  return context;
};

export const TaskContextProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<TaskI[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const { data } = await getTasksRequest();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const createTask = async (task: TaskI) => {
    setLoading(true);
    try {
      const { data } = await createTaskRequest(task);
      setTasks([...tasks, data]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const updateTask = async (id: number, newFields: TaskI) => {
    setLoading(true);
    try {
      const { data } = await updateTaskRequest(id, newFields);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const deleteTask = async (id: number) => {
    setLoading(true);
    try {
      await deleteTasksRequest(id);
      setTasks(tasks.filter(({ id }) => id !== id));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const getTask = async (id: number) => {
    setLoading(true);
    try {
      const { data } = await getTaskRequest(id);
      await setTasks(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        loadTasks,
        createTask,
        updateTask,
        deleteTask,
        getTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
