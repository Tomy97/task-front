import axios from "axios";
import { TaskI } from "../interfaces/task.interfaces";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const getTaskRequest = async (id: number) => 
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const createTaskRequest = async (task: TaskI) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTasksRequest = async (id: number) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id: number, newFields: TaskI) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
