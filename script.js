function reveal() {
    var reveals = document.querySelectorAll(".animate-me");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

function checkRating() {
    var rating;

    // Checking which radio button is selected using simple If/Else
    if (document.getElementById('r5').checked) {
        rating = 5;
    } else if (document.getElementById('r4').checked) {
        rating = 4;
    } else if (document.getElementById('r3').checked) {
        rating = 3;
    } else {
        rating = 1; // Default for low ratings
    }

    // Giving a professional response based on the score
    if (rating >= 4) {
        alert("Wow! We are so glad you loved Perla Verde! ");
    } else if (rating == 3) {
        alert("Thank you! We will work harder to improve your experience. ");
    } else {
        alert("Thank you for your honest feedback. We hope to serve you better next time. ");
    }
}
