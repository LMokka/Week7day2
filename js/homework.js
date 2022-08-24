/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

let F = 32
//??How can I define F inside the function??
function toCelsius(F){
    let C = (F - 32)*(5/9) 
    return C;
};

console.log(toCelsius(F))
F = 212
console.log(toCelsius(F))
F = 50
console.log(toCelsius(F))

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/
class User{
    constructor(username, password){
     this.username = username;
     this.password = password;   
    }

    changepassword(username){}

}

let User1 = new User("Name1","password1")
let User2 = new User("Name2","password2")
let User3 = new User("Name3","password3")
let User4 = new User("Name3","password4")

console.log(User1);








/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []

    
*/
let arr = [-10, -3, 4, -2, 8, 9, -3]

function squarenegatives(arr){let arr1 = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] <= 0){
            arr1.push(arr[i]*arr[i])
        }
    }
    return arr1
};
console.log(squarenegatives(arr))
arr = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
console.log(squarenegatives(arr))
arr = [2, 4, 6, 8, 10]
console.log(squarenegatives(arr))