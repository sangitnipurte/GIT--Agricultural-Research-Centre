function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
    this.reset();
});