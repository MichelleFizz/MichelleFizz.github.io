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
