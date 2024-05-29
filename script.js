document.addEventListener("DOMContentLoaded", function () {
  const text = "BRAZILIAN, BASED IN NORTHERN IRELAND"; // Replace with your text
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed here (100ms delay)
    }
  }

  type();
});

function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Construct email body
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Send email using a service or server-side script
  // Replace 'your-email@example.com' with your actual email address
  window.location.href = `mailto:milla_luna@hotmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
    body
  )}`;
}
