import { saveTasks } from './storageUtils';
import { renderTasks } from './renderTasks';
import { Task } from './modules/Task';
import { TasksModel } from './modules/TasksModel';
import { todoTasksStorage } from './storage/todoTasksStorage';
import { TaskStatus } from './modules/TaskStatus';

const resultsElement = document.getElementById('results')!;
const todoForm = document.forms.namedItem('todo')!;
const tasksModel = new TasksModel(todoTasksStorage);

tasksModel.addEventListener('change', () => {
    renderTasks(resultsElement, tasksModel.tasks);
});

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = String(new FormData(todoForm).get('taskText') ?? '');
    const dueDate = String(new FormData(todoForm).get('date') ?? '');

    tasksModel.createTasks({
        text,
        dueDate: new Date(dueDate).toISOString(),
        createDate: new Date().toISOString(),
        status: TaskStatus.NEW,
    });
    todoForm.reset();
});

renderTasks(resultsElement, tasksModel.tasks);