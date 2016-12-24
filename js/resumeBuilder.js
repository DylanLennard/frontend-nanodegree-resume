// .append is using jquery
//# means looking for element with id of "main"
//$("#main").append("Dylan Lennard");
//note, the $ has no real meaning, it just comes out of uniformity

//var email = "dylanjlennard@yahoo.com";
//var newEmail = email.replace("yahoo", "google");
//console.log(email);
//console.log(newEmail);


//var awesomeThoughts = "I am Dylan and I am AWESOME";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);


//mixing .replace and .append() to replace
//var name = "Dylan Lennard"
//var role = "Associate Product Manager and Product Analyst"
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

// prepend name and role into the page
//$("#header").prepend(formattedName);
//$("#header").prepend(formattedRole);

//playing with strings
//s = audacity;
// s = s[1].toUpperCase + s.slice(2); will turn it to Udacity!

///arrays in js are just like lists
// var skills = ["R", "SQL", "Python", "Data Analysis", "Being Awesome"];
// $("#main").append(skills);
// $("#main").append(skills[0]);

// slice, pop, push, (un)shift, and split() are all good methods for arrays

//objects
//weirdly, there are no classes in js! only objects
//object literal notation:
var bio = {
    "name": "Dylan",
    "role": "Associate Product Manager and Product Analyst",
    "contact": {
        "email": "dylanjlennard@gmail.com",
        "mobile": "(530)-788-8853",
        "github": "github.com/DylanLennard",
        "LinkedIn": "linkedin.com/in/DylanLennard"
    },
    "bioPic": "images/me.jpg ",
    "welcomeMessage": "Hello, friends, and welcome!",
    "age": 25,
    "skills": ["R", "SQL", "Python", "Data Analysis", "Being Awesome"]
};

// can then define new methods/attributes outside of curly braces
// we also have no need to use var
// ex: bio.city = "Redwood City" or bio['city'] = "Redwoood City"

$("#main").append(bio.welcomeMessage)
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


var work = {} //list out work info using dot notation

var education = {} // list out education info using bracket notation
