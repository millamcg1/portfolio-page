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

// Wait for the page to load completely
window.addEventListener('load', function() {
  // Get the loader element
  var loader = document.querySelector('.loader');
  
  // Set timeout to hide the loader after 5 seconds
  setTimeout(function() {
    // Hide the loader smoothly
    loader.classList.add('loader-hidden');
  }, 5000); // 5000 milliseconds = 5 seconds
});

