// Simple contact form alert
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for your message! I will contact you soon.");
    this.reset();
});

// Button click alert
document.getElementById("my-button").addEventListener("click", function(){
    alert("Button was clicked!");
});
