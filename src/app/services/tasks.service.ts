import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskRequestModel}from '../models/tasks-requist-model';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private http : HttpClient) { }

  getTasks(){

    return this.http.get(environment.apiURL + '/tasks');
  }
   addTask(body:TaskRequestModel){
    return this.http.post(environment.apiURL + '/tasks/', body);
   }

   editTask(body:TaskRequestModel){
    return this.http.put(environment.apiURL + '/tasks/'+ body.id, body);

   }

   deleteTask(id){
    return this.http.delete(environment.apiURL + `/tasks/${id}`);
   }

}
