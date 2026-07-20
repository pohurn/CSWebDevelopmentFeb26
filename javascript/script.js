const student = {
    name: "Maya",
    course: "Web Dev 101",
    }

function greet(person){
    return "Hi ${person.name}, welcome to" + "${person.course}!"
}

console.log(greet(student));