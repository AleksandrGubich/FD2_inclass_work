import { TaskStatus } from "./TaskStatus";
import { WithID } from "./WithID";

export interface Task extends WithID {
    createDate: string;
    text: string;
    dueDate: string;
    status: TaskStatus;
}