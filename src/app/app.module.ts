import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './pages/main/main.component';
import { AddEditTaskComponent } from './pages/main/add-edit-task/add-edit-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents:[AddEditTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
