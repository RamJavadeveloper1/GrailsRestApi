import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { StudentService } from './student.service';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StudentListComponent,
    LoginComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'}),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
