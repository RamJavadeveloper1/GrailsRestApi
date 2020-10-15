package studentapp

class Student {

String firstName
String lastName
String email
Integer age
String city

    static constraints = {
        firstName blank: false , nullable: false
        lastName blank: false , nullable: false
        email blank: false , nullable: false
        age blank: false , nullable: false
    }

}