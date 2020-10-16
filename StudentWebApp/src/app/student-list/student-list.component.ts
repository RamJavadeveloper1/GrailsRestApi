import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any;
  id: number;
  name: string;
  massage: string;
  popoverTitle = 'Record Delete Confirmation';
  popoverMessage = 'Do you really want to delete ?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(
    public service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): any {
    let resp = this.service.getAllStudent();
    resp.subscribe((data) => (this.students = data));
  }

  getAllData(): any {
    let resp = this.service.getAllStudent();
    resp.subscribe((data) => (this.students = data));
  }

  /**
   * findStudentById()
   */
  public findStudentById(): any {
    let resp = this.service.getStudentById(this.id);
    return resp.subscribe((data) => {
      this.students = data;
    });
  }

  /**
   * findStudentByName()
   */
  public findStudentByName() {
    let resp = this.service.getStudentByName(this.name);
    return resp.subscribe((data) => (this.students = [data]));
  }

  /**
   * deletedoctorById()
   */
  public deleteStudentById(id: number): any {
    let resp = this.service.deletStudentById(id);
    resp.subscribe((data) => {
      this.getAllData();
      // this.students = data;
      // this.massage = data;
      // this.router.navigate(['/students']);
    });

    //  return resp.subscribe((data) => (this.students = data));
  }

  /**
   * deletedoctorById()
   */
  public updateStudent(id: number) {
    this.router.navigate(['students/edit', id]);
  }
}
