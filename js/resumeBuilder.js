// .append is using jquery
//# means looking for element with id of "main"
//$("#main").append("Dylan Lennard");

var email = "dylanjlennard@yahoo.com";
var newEmail = email.replace("yahoo", "google");
console.log(email);
console.log(newEmail);


var awesomeThoughts = "I am Dylan and I am AWESOME";
console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);


//mixing .replace and .append() to replace
var name = "Dylan Lennard"
var role = "Associate Product Manager and Product Analyst"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

//playing with strings
//s = audacity
// s = s[1].toUpperCase + s.slice(2) will turn it to Udacity!

///arrays in js are just like lists
