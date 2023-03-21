const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

let image = document.getElementById("image");
let nameUser = document.getElementById("name");
let job = document.getElementById("job");
let info = document.getElementById("info");


let count = 0;
let users = [
    {
        "img":"https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
        "name":"Dannie Boddy",
        "job": "Web Developer",
        "info": "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that work."
    },
    {
        "img":"https://xsgames.co/randomusers/assets/avatars/male/23.jpg",
        "name":"Wade Cossitt",
        "job": "Cloud Engineer",
        "info": "Cloud engineers should have knowledge of open standards, such as XML (Extensible Markup Language), SOAP (Simple Object Access Protocol), WSDL (Web Services Description Language) and UDDI (Universal Description."
    },
    {
        "img": "https://xsgames.co/randomusers/assets/avatars/female/56.jpg",
        "name": "Benita Navarra",
        "job": "Frontend Developer",
        "info": "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly tredemark volution.",
    },
    {
        "img": "https://xsgames.co/randomusers/assets/avatars/female/22.jpg",
        "name": "Norma Verbout",
        "job": "Backend Developer",
        "info": "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are.",
    },
    {
        "img": "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
        "name": "Emile Kreimer",
        "job": "Tech Leader",
        "info": "A Tech Lead is a talented Engineer who has an interest in honing their communication, project management, and coaching skills. As many of these skills are essential for management, trying out a Tech Lead role is often an.",
    },
    {
        "img": "https://xsgames.co/randomusers/assets/avatars/female/25.jpg",
        "name": "Reta Vardiman",
        "job": "Angular Developer",
        "info": "Angular is a client-side web application framework primarily designed to build Single Page Applications (SPAs) using HTML and TypeScript - a superset of JavaScript. Used for developing web, mobile and desktop applications, the go.",
    }
];

nextBtn.addEventListener('click',function() {
    count ++;
    if(count > 5){
        count = 0;
    }
    image.src = users[count].img;
    nameUser.innerText = users[count].name;
    job.innerText = users[count].job;
    info.innerText = users[count].info;
});


prevBtn.addEventListener('click',function() {
    count --;
    if(count < 0){
        count = 5;
    }
    image.src = users[count].img;
    nameUser.innerText = users[count].name;
    job.innerText = users[count].job;
    info.innerText = users[count].info;
});

randomBtn.addEventListener('click',function() {
    let randomCount = Math.floor(Math.random()*users.length);
    image.src = users[randomCount].img;
    nameUser.innerText = users[randomCount].name;
    job.innerText = users[randomCount].job;
    info.innerText = users[randomCount].info;
});



