// Store all dropdown buttons and their associated elements
const dropdowns = [
  {
    button: document.querySelector(".js-product"),
    arrow: document.querySelector('.js-arrow-product'),
    nav: document.querySelector('.js-nav-product'),
    dark: document.querySelector('.js-dark-arrow-product')
  },
  {
    button: document.querySelector(".js-company"),
    arrow: document.querySelector('.js-arrow-company'),
    nav: document.querySelector('.js-nav-company'),
    dark: document.querySelector('.js-dark-arrow-company')
  },
  {
    button: document.querySelector(".js-connect"),
    arrow: document.querySelector('.js-arrow-connect'),
    nav: document.querySelector('.js-nav-connect'),
    dark: document.querySelector('.js-dark-arrow-connect')
  }
];

// Function to close all dropdowns
function closeAllDropdowns() {
  dropdowns.forEach(dropdown => {
    dropdown.button.classList.remove("clicked");
    dropdown.arrow.classList.remove("arrow-up");
    dropdown.dark.classList.remove("arrow-up");
    dropdown.nav.classList.remove("show");
  });
}

// Add click event listeners to each dropdown button
dropdowns.forEach(dropdown => {
  dropdown.button.addEventListener("click", () => {
    const isActive = dropdown.button.classList.contains("clicked");
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    // If the clicked dropdown was not active, open it
    if (!isActive) {
      dropdown.button.classList.add("clicked");
      dropdown.arrow.classList.add("arrow-up");
      dropdown.dark.classList.add("arrow-up");
      dropdown.nav.classList.add("show");
    }
  });
});

document.querySelector(".js-ham-icon").addEventListener("click",()=>{
  const hamImg = document.querySelector(".js-ham-img")
  const closeImg = document.querySelector(".js-close-img")
  const navBar = document.querySelector('.js-nav-bar')
  if (hamImg.classList.contains('hide')) {
    hamImg.classList.remove('hide')
    navBar.classList.remove('show')
    closeImg.classList.add('hide')
  } else {
    hamImg.classList.add('hide')
    closeImg.classList.remove('hide')
    navBar.classList.add('show')
  }
})