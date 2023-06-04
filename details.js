document.addEventListener("DOMContentLoaded", function() {
    const payWithCardCheck = document.getElementById("payWithCardCheck");
    const box4 = document.getElementById("box4");
  
    payWithCardCheck.addEventListener("change", function() {
      if (payWithCardCheck.checked) {
        box4.classList.remove("disabled");
      } else {
        box4.classList.add("disabled");
      }
    });
  });
  