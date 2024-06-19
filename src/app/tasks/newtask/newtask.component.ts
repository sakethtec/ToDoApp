import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../../datamodels';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  private taskService=inject(TaskService);
  @Input({required:true}) userId!:string;
  @Output() cancel=new EventEmitter<boolean>();
  @Output() taskAdd=new EventEmitter();
  newTask: {
    title: string;
    summary: string;
    dueDate: string;
  } = {
    title: '',
    summary: '',
    dueDate: ''
  };

  cancelTask(){
    this.cancel.emit();
  }
  newTaskCreation(){
    if(this.newTask.title!="" && this.newTask.dueDate!="" && this.newTask.summary!=""){
      this.taskService.addNewTask(this.newTask,this.userId);
      this.taskAdd.emit();
    }
  }
}
