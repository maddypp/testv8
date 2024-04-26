console.log("script loaded");
console.log("CodeHaven V1.2.5 (mobile version V1.2)");

//RESPONSIVE DISPLAY

width = window.innerWidth;

if (width <= 890) {
  console.log("small screen initialized:", width);
  document.getElementById("review").innerHTML = "<div class='rtext'><h2>Daniela Plassard</h2><div class='rimg'><img src='daniela.jpeg' alt='Daniela Plassard Review'/></div><p>Currently working as a contractor, I’m also looking for permanent job opportunities and, working every day, my job search time is limited. My personal website,<a target='_blank' href='https://danielaplassard.com/'>danielaplassard.com</a>, really is a game changer. The professional image it conveys really fits my professional profile and my goals, Codehaven made it quickly and there always available for changes and upgrades. Thank you!</p></div>";
  document.getElementById("company").removeAttribute('id');
} 

//FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//REVEAL

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('activer');
      }
      else {
          reveals[i].classList.remove('activer');
      }
  }
}