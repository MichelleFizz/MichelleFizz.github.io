
feather.replace();


const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.onclick = function() {
        const icon = this.querySelector('i');
        
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
    };
}


document.querySelectorAll('.nav-link').forEach(function(link) {
    link.onclick = function() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            }
        }
    };
});


const toggleBtn = document.getElementById("toggleProfileBtn");
const profileSection = document.getElementById("profileSection");

toggleBtn.addEventListener("click", () => {
  if (profileSection.style.display === "none") {
    profileSection.style.display = "block";
    toggleBtn.textContent = "Hide Profile Picture";
  } else {
    profileSection.style.display = "none";
    toggleBtn.textContent = "Show Profile Picture";
  }
});
