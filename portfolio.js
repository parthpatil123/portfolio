//darklight mode
function myFunction() {
    var color = document.body;
    color.classList.toggle("dark-mode");


 }
// about me 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        var tablink;
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        var tabcontent;
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// multiple-text
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer ", "Backend Developer", "Fullstack Developer"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true,
})

// nav click
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
} 
