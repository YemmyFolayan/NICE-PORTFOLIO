const people = document.querySelectorAll(".people img");
//const reviewText = document.querySelector(".review__text");
const reviewerName = document.querySelector(".review__card .name");
const reviewerWho = document.querySelector(".review__card .who");

function handleReview(e) {
  people.forEach(function(person) {
    person.classList.remove("active");
    e.currentTarget.classList.add("active");
    reviewText.textContent = e.currentTarget.dataset.review;
    reviewerName.textContent = e.currentTarget.dataset.name;
    reviewerWho.textContent = e.currentTarget.dataset.who;
  });
}


people.forEach(person => person.addEventListener("click", handleReview));

function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}