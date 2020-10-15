package com.service

import grails.gorm.transactions.Transactional
import studentapp.Student

@Transactional
class StudentService {

    def serviceMethod() {

    }

     def list() {
        Student.list()
    }

    def save(Student student) {
        student.save()
    }

    def delete(id) {
        Student.get(id).delete()
    }

    def get(id) {
        Student.get(id)
    }

    def update(id, student) {
        Student s = Student.get(id)
        s.properties = student.properties
        s.save flush: true
    }

}
