// ======= SHOW ACTIVE NAV LINK ON SCROLL =======
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // ======= HEADER BACKGROUND CHANGE =======
    let header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = "#14182b";  
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "var(--bg-color)";
        header.style.boxShadow = "none";
    }
};
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
