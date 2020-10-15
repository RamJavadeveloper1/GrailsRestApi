import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Student } from '../student';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: StudentService, private router: Router) { }
  ngOnInit(): void {
  }

}
