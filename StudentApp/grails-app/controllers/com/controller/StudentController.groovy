package com.controller


import grails.rest.*
import grails.converters.*
import com.service.StudentService
import studentapp.Student

class StudentController {
	static responseFormats = ['json', 'xml']
     def StudentService;
	
     def index() { 
        respond StudentService.list()
    }

    def show(Long id) {
        respond StudentService.get(id)
    }

    def create() {
        respond new Student(params)
    }

    def save(Student student) {
        StudentService.save(student)
        redirect action:"index", method:"GET"
    }

    def delete(Long id) {
        StudentService.delete(id)
        redirect action:"index", method:"GET"
    }

    def update(Student student){
        StudentService.update(params.id, student)
         redirect action:"index", method:"GET"
    }

}
