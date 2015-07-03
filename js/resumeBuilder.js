//bio object contains the biodata information
var bio = {
    "name" : "Raghunath Nedumpurath",
    "role"  : "Web Developer",
    "contacts" : {
                    "mobile" : "+91 988 404 8007", 
                    "email" : "raghu.ned@gmail.com",
                    "github" : "https://github.com/kukkuraghu",
                    "twitter" :"@Raghunathn",
                    "location" :"Chennai, India"
                },
    "welcomeMessage" : "Hi, Welocome to Raghunath's profie page",
    "skills"    : ["JavaScript", "jQuery", "AngularJS", "Java", "C"],
    "biopic"    : "images/Raghu12.bmp",
    "display"   : displayBio
};

//work object contains the work expereince information. To add experience, add a new entry to the array "jobs".
var work = {
            "jobs" : [
                {
                    "employer" : "Comorin Technologies",
                    "title"  :"Director - Technical Services",
                    "location" : "Chennai, India",
                    "dates" : "Jan 2011 - Current",
                    "description" : "Developing mobile apps"
                },
                {
                    "employer" : "IBS Software Services",
                    "title"  :"Senior Manager",
                    "location" : "Trivandrum, India",
                    "dates" : "Apr 2008 - Dec 2010",
                    "description" : "Was heading the engineering team for an enterprise product"
                },
               {
                    "employer" : "EDS",
                    "title"  :"Delivery Manager",
                    "location" : "Chennai, India",
                    "dates" : "Nov 1998 - Mar 2008",
                    "description" : "Almost 10 years -  Multiple Projects, Clients, Domains, Technologies and Geographies"
                }        
            ],
            "display" : displayWork
};

//obj education contains the information about schools and online courses attended.
//to add a degree, add an entry to the array "schools".
//to add a online course, add an entry to the array "onlineCourses".
var education = {
            "schools" : [
                {
                    "name" : "Kerala University",
                    "location" : "Kollam, Kerala, India",
                    "degree"  :"Engineering",
                    "majors" : "CS",
                    "dates" : 1991,
                    "url"   : "",
                    
                },
                {
                    "name" : "Project Managment Institute",
                    "location" : "Philadelphia, US",
                    "degree"  :"PMP",
                    "majors" : "Project Management",
                    "dates" : "2001 - 2003",
                    "url"   : "url"
                }
            ],
            "onlineCourses" : [
                {
                    "title" : "Startup Engineering" ,
                    "school"    : "Stanford University" ,
                    "date"  : "September 2013",
                    "url"   : "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=970374"
                },
                {
                    "title" : "Introduction to Systematic Program Design - Part 1" ,
                    "school"    : "The University of British Columbia" ,
                    "date"  : "November 2013",
                    "url"   : "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=971286"
                },
                {
                    "title" : "Creative, Serious and Playful Science of Android Apps" ,
                    "school"    : "University of Illinois at Urbana-Champaign" ,
                    "date"  : "February 2014",
                    "url"   : "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=402"
                },
                {
                    "title" : "Programming Mobile Applications for Android Handheld Systems" ,
                    "school"    : "University of Maryland, College Park" ,
                    "date"  : "February 2014",
                    "url"   : "https://www.coursera.org/account/accomplishments"
                }
            ],
            "display" : displayEducation
};

//obj project contain the information about projects
//to add a project, add an entry to the array "projects"
var projects = {
    "projects"  : [
        {
            "title" : "POApproval APP",
            "dates" : "2014 Jun - 2015 Dec",
            "description"   : "Mobile hybrid app for reviewing and approving SAP purchase requisitions and purchase orders",
            "images"    : ["images/project1/PO Detail Screen.png", "images/project1/PO List.png"]
        },
        {
            "title" : "RSPC Remote",
            "dates" : "2013 Jan - 2013 Jun",
            "description"   : "Mobile hybrid app for viewing the status of SAP RSPC",
            "images"    : []
        },
    ],
    "display"   : displayProjects
};

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedImageSrc = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkill = "";

    $("#main").prepend(formattedRole);
    $("#main").prepend(formattedName);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);

    $("#header").append(formattedImageSrc);
    $("#header").append(formattedWelcomeMsg);

//check how many skills are mentioned. 
//loop through the skills array, only if the skills mentioned (length > 0)
    var skillCount = bio.skills.length;
    if (skillCount > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < skillCount; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skillsH3").append(formattedSkill);
        }
    }
};

function displayWork() {
    var formattedWorkEmployerTitle = "";
    var formattedWorkDates = "";
    var formattedWorkLocation = "";
    var formattedWorkDescription = "";

//loop through the work.jobs array to display the work experience
//loop only if atleast one job is mentioned - length > 0
    var experienceCount = work.jobs.length;
    if (experienceCount > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < experienceCount; i++) {
            formattedWorkEmployerTitle = HTMLworkEmployer.replace("%data%", work.jobs[i].employer)
                                            + HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(formattedWorkEmployerTitle);
            formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedWorkDates);
            formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedWorkLocation);
            formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDescription);

        }
    }
}


//loop through the schools array to display each college information
//also loops through onlineCourses array
function displayEducation() {
    var formattedSchoolNameDegree = "";
    var formattedSchoolDates = "";
    var formattedSchoolLocation = "";
    var formattedSchoolMajor = "";

    var formattedOnlineTitle = "";
    var formattedOnlineDates = "";
    var formattedOnlineURL = "";

    var educationCount = education.schools.length;
    var onlineCoursesCount = education.onlineCourses.length;
    if (educationCount > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < educationCount; i++) {
            formattedSchoolNameDegree = HTMLschoolName.replace("%data%", education.schools[i].name)
                                            + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolNameDegree);
            formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        };
    };
    if (onlineCoursesCount > 0) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < onlineCoursesCount; i++) {
            formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
                                        HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedOnlineTitle);
            formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            $(".education-entry:last").append(formattedOnlineDates);
            formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);
        };
    };
}


//loops through the projets array to display the project information
function displayProjects(){
    var projectCount = projects.projects.length;
    var formattedProjectTitle = "";
    var formattedProjectDates = "";
    var formattedProjectDescription = "";
    var formattedProjectImage = "";
    var imageCount;
    if (projectCount > 0) {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projectCount; i++) {
            formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);
            formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);
            formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            //if project related images are available, display it
            imageCount = projects.projects[i].images.length;
            for (var j = 0; j < imageCount; j++) {
                formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedProjectImage);
            };
        };
    };
}

bio.display();
work.display();
education.display();
projects.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

//$("#main").append(internationalizeButton);

function inName (localName) {
    var names = [];
    names = localName.split(" ");
    names[0] = names[0][0].toUpperCase() + names[0].slice(1);
    names[1] = names[1].toUpperCase();
    return (names.join(" "));
}

$("#mapDiv").append(googleMap);
