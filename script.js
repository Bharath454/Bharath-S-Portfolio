function redirectToProject(url) {
   window.open(url, '_blank'); // Opens the URL in a new tab
}

function handleimg(){
   var nave=document.querySelector(".nave2")
   
}


const roles = ["Frontend Developer </>", " Velammal College Student", "Cybersecurity Enthusiast *"];
let index = 0;

function changeRole() {
  const roleElement = document.getElementById("role");
  roleElement.textContent = `I am a ${roles[index]}`;
  index = (index + 1) % roles.length;
}

setInterval(changeRole, 1100); // Change every 1 second



