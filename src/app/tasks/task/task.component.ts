import { Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import { Task } from '../../datamodels';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent,DatePipe]
})
export class TaskComponent {
  private taskService = inject(TaskService);
  @Input({required:true}) task!:Task;
  onCompleted(){
    this.taskService.deleteTask(this.task.id);
  }
}
