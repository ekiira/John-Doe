const elem = document.querySelector('#isotope-container');
const filt = document.querySelectorAll('#isotope-filters button')
const category = document.querySelectorAll('.link')
  
function openNav() {
  document.getElementById("side-nav").style.width = "200px";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0";
}

// Initialize bootstrap scrollpsy
$('body').scrollspy({ target: '#idea' });

window.addEventListener('load',  () => {
  // initialize isotope
  const iso = new Isotope( elem, {});

  for (let i = 0; i < filt.length; i++) {
    filt[i].addEventListener('click', () => {
      const filterLink = filt[i].getAttribute('data-filter')
      
      // filter portfolio items
      iso.arrange({
        filter: filterLink
      });
  
    })
  }

}); 

// Changing Portfolio Menu active state
const links = [...category]

links.map((link, i) => {
  link.addEventListener('click', (event) => {
    const inactiveLinks = links.filter((linkData, i) => linkData.innerHTML !== event.target.innerHTML);
   
    inactiveLinks.map(inaactive => {
      inaactive.classList.remove("selected")
    })

    link.classList.add("selected")
  }) 
});




