var bio = {
    "name": "Dylan",
    "role": "Associate Product Manager and Product Analyst",
    "contacts": {
        "email": "dylanjlennard@gmail.com",
        "mobile": "(530)-788-8853",
        "github": "github.com/DylanLennard",
        "LinkedIn": "linkedin.com/in/DylanLennard" //optional twitter
    },
    "bioPic": "images/me.jpg ",
    "welcomeMessage": "Hello, friends, and welcome!",
    "age": 25,
    "skills": ["R", "SQL", "Python", "Data Analysis", "Being Awesome"]
};

var education = {
    "schools": [{
        "name": "University of California-Davis",
        "location": "Davis, CA",
        "major": ["Economics"],
        "minor": "Statistics",
        "degree": ["Bachelor of Arts"],
        "dates": "2015"
            //url ?
    }, {
        "name": "Udacity",
        "location": "None",
        "major": ["Data Analytics"],
        "degree": "Nanodegree",
        "dates": "2016"

    }],
    "online courses": [] //contains title, school, dates, url parameters
        //online courses include the R courses for coursera
}

var work = {
    "jobs": [{
            "employer": "Equilar",
            "title": "Associate Product Manager and Product Analyst",
            "location": "Redwood City, CA",
            "dates": "June 2016 - Present",
            "description": "I did things"
        }, {
            "employer": "Equilar",
            "title": "Research Analyst",
            "location": "Redwood City, CA",
            "dates": "August 2015 - December 2016",
            "description": "I also did things"
        }] //employer, title, location, dates worked and description
}

var projects = {
        "projects": [{
                "title": "TSR vs. Percent of Total Compensation in Equity",
                "dates": "August 2016 - Present",
                "description": "Did things"
            }, {
                "title": "Education Extraction Open Project Initiative",
                "dates": "October 2015 - Present",
                "description": "Did things"
            }, {
                "title": "Executive Stock Ownership Guidelines Report",
                "dates": "August 2016 - Present",
                "description": "Did things"
            }, {
                "title": "Effect of Vehicle Miles Traveled on SF Bay Area Basin",
                "dates": "August 2016 - Present",
                "description": "Did things"
            }] //title, dates and description strings, and an 'images' array with URL strings for project images.
    }
    //FYI, newHTML = newHTML.replace(/<|>/g, "");
    // works becasue the // breaks the characters rather than quotations.

if (bio.name !== null) { //this was necessary to get everything to show up
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
} else {
    console.log("Bio is empty.");
}
