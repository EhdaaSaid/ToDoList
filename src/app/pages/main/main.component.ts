import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bsModalRef: BsModalRef;
  tasks:any= [];
  

  constructor(private tasksService : TasksService ,
    private modalService : BsModalService
    ) { }

  ngOnInit(): void {
    
    this.onGetAllTasks();
  }
  onGetAllTasks(){
    this.tasksService.getTasks().subscribe(allTasks => {
      this.tasks= allTasks;
      console.log(this.tasks);
    });
  }

  onAddNewTask(){
    this.bsModalRef = this.modalService.show(AddEditTaskComponent);
    this.bsModalRef.content.onClose =(added)=>{
      if(added){
        this.onGetAllTasks();

      }
    }
    console.log('Clicked!');

  }

  onEditTask(task){
    console.log('Edit Clicked');
    this.bsModalRef = this.modalService.show(AddEditTaskComponent , {initialState : {task}});
    this.bsModalRef.content.onClose = (updated )=> {
      if(updated){
        this.onGetAllTasks();
      }
    }
    console.log('Edit Clicked');

  }

  onDeletTask(taskId){
    console.log('Deleted');
    let confirmDelete= confirm('Are You Sure?');

    if(confirmDelete){
      console.log(confirmDelete);
      this.tasksService.deleteTask(taskId).subscribe(deleted =>{
        this.onGetAllTasks();
      }, err => console.log(err));
    }
    else{
      console.log(confirmDelete);
    }

  }

  




 

  }
 
  



