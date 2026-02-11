document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  if (!email.includes("@")) {
    errorMsg.textContent = "Please enter a valid email!";
    return;
  }

  errorMsg.textContent = "Message sent successfully!";
  errorMsg.classList.remove("text-danger");
  errorMsg.classList.add("text-success");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.getElementById("typing-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex++);
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent =
      roles[roleIndex].substring(0, --charIndex);
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

window.onload = typeRole;
