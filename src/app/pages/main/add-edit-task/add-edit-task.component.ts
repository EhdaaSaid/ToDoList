import { Component, OnInit } from '@angular/core';
import { TaskRequestModel }from 'src/app/models/tasks-requist-model';
import { TasksService} from 'src/app/services/tasks.service';
import {BsModalRef } from 'ngx-bootstrap/modal';
import { title } from 'process';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {
  task : TaskRequestModel = {
    id : 0,
    title :'',
    desc : ''
  };

  onClose :any;

  constructor(public bsModalRef : BsModalRef,
    private taskServices : TasksService) { }

  ngOnInit(): void {
    console.log(this.task);
  }

  onAddTask(){
    let confirmAdd = confirm(' Add Task ?');
    if (confirmAdd){
      this.taskServices.addTask(this.task).subscribe(taskAdded=>{
        console.log(taskAdded);
        this.onClose(taskAdded);
        this.bsModalRef.hide();
      }, err=>{console.log(err);
      })
    }
  }

  onEditTask(){
    let confirmEdit = confirm(' Edit Task ?');
    if (confirmEdit){
      this.taskServices.editTask(this.task).subscribe(taskUpdated=>{
        console.log(taskUpdated);
        this.onClose(taskUpdated);
        this.bsModalRef.hide();
      }, err=>{console.log(err) })
     
    }
  }
}


