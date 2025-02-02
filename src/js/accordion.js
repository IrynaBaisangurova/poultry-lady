

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const content = this.nextElementSibling; 
//   const itemToggle = this.getAttribute("aria-expanded");

//   items.forEach((item) => {
//     item.setAttribute("aria-expanded", "false");
//     item.nextElementSibling.style.maxHeight = null; 
//   });

//   if (itemToggle === "false") {
//     this.setAttribute("aria-expanded", "true");
//     content.style.maxHeight = content.scrollHeight + "px"; 
//   }
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));
