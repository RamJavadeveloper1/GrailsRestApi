import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student: any = new Student();
  confirmClicked = false;
  cancelClicked = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.getStudentById(this.id);
    resp.subscribe(
      (data) => {
        this.student = data;
      },
      (error) => console.log(error)
    );
  }

  public update(): any {
    let resp = this.service.updateStudent(this.id, this.student);
    resp.subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }

  updateEmployee() {
    this.service.updateStudent(this.id, this.student).subscribe(
      (data) => {
        alert("Update SuccessFully");
        this.student = new Student();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}
