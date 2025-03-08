import { BACKEND_URL } from "./constants";
import { jwtDecode } from 'jwt-decode';
export interface Execution {
  week: string;
  completed: boolean;
  id: string;
  createdDate: string;
  updatedDate: string;
}

export interface Task {
  title: string;
  description: string;
  id: string;
  createdDate: string;
  updatedDate: string;
  executions: Execution[];
}

export interface CreateTaskDTO {
  title: string;
  description: string;
}

export async function getTasks(token: string): Promise<Task[]> {
  const payload = jwtDecode(token);
  const data = await fetch(BACKEND_URL + "tasks/user/" + payload.sub, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  return await data.json();
}

export async function getTask(id: string, token: string) {
  const data = await fetch(BACKEND_URL + "tasks/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  return await data.json();
}
export async function createTask(task: CreateTaskDTO, token: string) {
  console.log("Creating task", task);
  const payload = jwtDecode(token)
  const createTask = {
    ...task,
    userId: payload.sub,
  }
  const data = await fetch(BACKEND_URL + "tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(createTask),
  });
  return await data.json();
}