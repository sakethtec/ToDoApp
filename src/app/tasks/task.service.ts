import { Injectable } from '@angular/core';
import { Task } from '../datamodels';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: '2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: '3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks)
      this.tasks = JSON.parse(tasks);
  }

  selectedUserTask(id: string) {
    return this.tasks.filter((task) => task.userId === id);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask(); 
  }

  addNewTask(newTask: { title: string, summary: string, dueDate: string }, userId: string) {
    const newTaskObj = new Task((this.tasks.length + 1).toString(), userId, newTask.title, newTask.summary, newTask.dueDate);
    this.tasks.push(newTaskObj);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

