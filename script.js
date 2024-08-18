
// Q1
// let firstname = prompt('Enter your first name');
// let lastname = prompt('Enter your last name');
// alert('Hellow:' +' ' +  firstname +' ' + lastname + '!');

// Q2
// let user = prompt('What is your favorite mobile phone model.')
// document.write('My Favorite phone is:' + ' ' + user +'<br>')
// document.write('length of string:' +' ' + user.length)

// // Q3
// let word = 'Pakistani';
// let indexofn = word.indexOf('n');
// document.write('string:' + ' '+ word + '<br>' + 'index of n: ' + ' ' + indexofn + '<br>'  );

// // Q4
// let string = 'Hello world';
// let lastIndexOfL = string.lastIndexOf('l');
// document.write('String: ' + string + '<br>' + 'Last index of l: ' + lastIndexOfL + '<br>');

// // Q5
// let letter = 'Pakistani';
// let characterindex = letter.charAt(3);
// document.write('string:' + ' '+ letter + '<br>' + 'Charachter at index 3: ' + characterindex + '<br>'  );

// // Q6
// let firstname = prompt('Enter your first name');
// let lastname = prompt('Enter your last name');
// let greeting = 'Hello: '.concat(firstname, ' ', lastname, '!' + "<br>");
// alert(greeting);

// Q7
// let city = "Hyderabad";
// let afterreplace = city.replace('Hyder','Islam');
// document.write("city:" + " " + city + '<br>' + 'After replacement:'+ " " + afterreplace +  "<br>")

// // Q8 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g,'&');
// document.write(message + "<br>" + "after replacement:  " + replace )

// Q9
// var string = "472"
// document.write("Value: " + string + '<br>' + "type:"  +  "string" + '<br>')
// var number = Number(string);
// document.write("Value: " + number + '<br>' + "type:"  +  "number" + '<br>')

// Q10
// let input = prompt("enter text:");
// let upper = input.toUpperCase();
// document.write("User Input:" + input + '<br>' +  "Upper case:" + upper + '<br>')

// Q12
// var num = 35.36;
// var result = num.toString();
// var numstrng = result.replace(".","")
// document.write("Number:" + " " + num + '<br>' + "Result:"+ " " + numstrng 
// )

// Q13
function isValidUsername(username) {
    const specialChars = ['@', '.', ',', '!'];
    for (let i = 0; i < specialChars.length; i++) {
        if (username.includes(specialChars[i])) {
            return false;
        }
    }
    return true; 
}
let username = prompt("Enter your username:");
while (!isValidUsername(username)) {
    username = prompt("Invalid username. Please enter a valid username (without special characters: @ . , !):");
}
document.write("Valid Username: " + username);

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput2 = prompt("Enter an item to search:");

// let lowerCaseInput = userInput2.toLowerCase();

// let found = false;
// for (let item of A) {
//   if (item.toLowerCase() === lowerCaseInput) {
//     found = true;
//   }
// }

// if (found) {
//   document.write(userInput2 + " is available in the list.") ;
// } else {
//   document.write("We Sorry "+ userInput2 + " is not available in the list .");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = "University of Karachi";
var universityArray = university.split();

// Display the elements of the array in the browser

document.write( "<ul>")
document.write( "<li>"+universityArray +"</li>")
document.write( "<br>"+"</ul>")

// 17. Write a program to display the last character of a user input.

let user = prompt("Enter a text");
document.write("User Input : "+user+"<br>")

let  promt = user.charAt(7);

document.write("Last character of Input :"+promt+"<br>");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let str = "The quick brown fox jumps over the lazy dog.";

for (let i = 0; i < str.length; i++) {
  document.write(str[i]);
}