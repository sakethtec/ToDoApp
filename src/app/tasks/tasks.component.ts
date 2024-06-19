import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Task, User } from '../datamodels';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewtaskComponent]
})
export class TasksComponent{
  constructor(private taskService:TaskService){}
  @Input() user!: User;
  tasks!: Task[];
  addingTask=false;
  get selectedUserTask(){
    this.tasks=this.taskService.selectedUserTask(this.user.id);
    return this.tasks;
  }
  addingNewTask(){
    this.addingTask=true;
  }
  cancelTask(){
    this.addingTask=false;
  }
}
