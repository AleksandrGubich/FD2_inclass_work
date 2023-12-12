import { Task } from "../modules/Task";
import { BrowserLocalStorage } from "./BrowserLocalStorage";

export const todoTasksStorage = new BrowserLocalStorage<Task, Task['id']>(
    'TODO.TASKS', 
    () => crypto.randomUUID(),
);