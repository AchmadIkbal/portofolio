const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})

function Darkmode() {
    const mode = document.getElementById("mode");
    const body = document.body;

    body.classList.toggle("Darkmode");

    if (body.classList.contains("Darkmode")) {
        mode.innerHTML = "Black";
    } else {
        mode.innerHTML = "White";
    }
}

const texts = [
    "Hallo Im Front End Web Developer",
    "Software Engineering",
    "Fullstack web"
];
const typingSpeed = 100; // Kecepatan ketik (dalam milidetik)
const textElement = document.getElementById('typing-effect');
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, 1500); // Tampilkan selama 1.5 detik sebelum dihapus
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Ganti ke teks berikutnya
        setTimeout(typeText, typingSpeed / 2);
    }
}

typeText();