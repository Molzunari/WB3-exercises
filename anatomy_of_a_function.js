
// A function is like a recipe.
// Defining it is seperate from doing it
//To do it you must call it by name one or more times,
// after defining it.

// it can have be defined to receive one or more input parameters (also known as arguments)

function do_it(name, phrase){ // Define the function and its parameters/arguments like a let with no value
     return phrase + name; //Sending back a result - not printing/logging
}

const dew = "Do the dew! ";
console.log(do_it("Kevin", dew)) // Call the function by name, and pass in argument values
console.log(do_it("Nina", dew)) // immediately print

let result = do_it("Bob", dew) //Capture in a variable - best if you want to do more than just print it
console.log(result) // Then print
console.log(result) // Then print