const student = {
    name: "Maya",
    course: "Web Dev 101",
    }

function greet(person){
    return "Hi ${person.name}, welcome to" + "${person.course}!"
}

const book = {
   title: "The School of HardCocks",
   author: "James",
   pages: 300,
}

function describeBook(book){
    return "This book is called ${book.title} and it was written by ${book.author}. It has ${book.pages} pages."
}

console.log(describeBook(book))
