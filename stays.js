document.addEventListener("DOMContentLoaded", function() {
  const sortButton = document.querySelector(".sort-button");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  sortButton.addEventListener("click", function() {
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", function(event) {
    if (!sortButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
    function closeDropdown() {
      var dropdownMenu = document.getElementById("dropdown-menu");
      dropdownMenu.style.display = "none";
    }
  });
});

