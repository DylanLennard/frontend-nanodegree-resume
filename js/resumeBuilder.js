// .append is using jquery
//# means looking for element with id of "main"
//$("#main").append("Dylan Lennard");

var email = "dylanjlennard@yahoo.com";
var newEmail = email.replace("yahoo", "google");
console.log(email);
console.log(newEmail);


var awesomeThoughts = "I am Dylan and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
