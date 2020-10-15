import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  student: Student = new Student();
  massage: any;
  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  public registrion(): any {
    let resp = this.service.doRegistration(this.student);
    resp.subscribe(
      (data) => {
        this.massage = data;
        this.router.navigate(['/students']);
    });
  }

}
