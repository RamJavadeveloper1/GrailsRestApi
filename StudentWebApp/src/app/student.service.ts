import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private router: Router) {}

  public doRegistration(student: Student) {
    return this.http.post(
      'http://localhost:8080/college/student',
      student,
      { responseType: 'text' as 'json' }
    );
  }

  public getAllStudent() {
    return this.http.get('http://localhost:8080/college/student');
  }

  /**
   * getDoctorById
   */
  public getStudentById(StudentId) {
    return this.http.get(
      'http://localhost:8080/college/student/' + StudentId
    );
  }

  /**
   * getDoctorById
   */
  public getStudentByName(name) {
    return this.http.get(
      'http://localhost:8080/college/student/findByName/' + name
    );
  }

  /**
   * deletDoctorById
   */
  public deletStudentById(id) {
    return this.http.delete(
      'http://localhost:8080/college/student/' + id
    );
  }

  /**
   * UpdateDoctorById
   */
  public updateStudentById( id,student: Student,) {
    return this.http.put(
      'http://localhost:8080/college/student/' + id,
      student,
      { responseType: 'text' as 'json' }
    );

    }
}
