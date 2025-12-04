// CONTACT FORM (Front-end only, no backend)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formStatus").innerHTML = "Message Sent Successfully!";

    // Clear Inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
