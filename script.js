document.addEventListener("DOMContentLoaded", function() {
  var navbarToggle = document.querySelector(".navbar-toggle");
  var navbarMenu = document.querySelector(".navbar-menu");

  navbarToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Close the menu when clicking outside the menu or on the menu button
  document.addEventListener("click", function(event) {
    var target = event.target;
    if (
      !target.closest(".navbar") && // Clicked outside the navbar
      navbarMenu.classList.contains("active") &&
      !target.classList.contains("navbar-toggle") // Clicked on the menu button itself
    ) {
      navbarMenu.classList.remove("active");
      navbarToggle.classList.remove("active");
    }
  });
});
