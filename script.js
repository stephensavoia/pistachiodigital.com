document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#menuToggle input[type="checkbox"]').addEventListener('change', function() {
        let header = document.querySelector('header');
        if (this.checked) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    document.addEventListener('click', function(event) {
        let menu = document.querySelector('#menu');
        let menuToggle = document.querySelector('#menuToggle input[type="checkbox"]');
        if (menuToggle.checked && !menu.contains(event.target) && event.target !== menuToggle) {
            menuToggle.checked = false;
        }
    });

    console.log('DOM loaded');
    document.querySelector('span.year').textContent = "© Pistachio Digital " + new Date().getFullYear();
    
});

let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        document.querySelector("header").style.top = "0";
      } else {
        //if menuToggle isn't checked
        if (!document.querySelector('#menuToggle input[type="checkbox"]').checked) {
            document.querySelector("header").style.top = "-81px";
        }
      }
      prevScrollpos = currentScrollPos;
}