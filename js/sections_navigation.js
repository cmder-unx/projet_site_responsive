// Récupération de la div contenant les boutons de navigation de section
let navigation_section = document.getElementById('navigation');
let nav_section_precedente = document.getElementById('nav-section-precedente');
let nav_section_suivante = document.getElementById('nav-section-suivante');

// Quand on clique sur un boutton de la div navigation, on affiche la section correspondante
let btn_nav_section_precedente = document.getElementById('btn-nav-section-precedente');
let btn_nav_section_suivante = document.getElementById('btn-nav-section-suivante');

// Récupération des sections
let header_section = document.getElementById('header');
let histoire_section = document.getElementById('histoire');
let ecologie_section = document.getElementById('ecologie');
let equipe_section = document.getElementById('equipe');

let page_wrapper = document.getElementById('page-wrapper');

// Quand la page est chargée on enlève la classe "hide-section" à la section "header" et on met la classe "reveal-section"
// à la section "header"
window.onload = function() {
    header_section.classList.remove('hide-section');
    header_section.classList.add('reveal-header');
    btn_nav_section_suivante.classList.remove('hide-section');
    btn_nav_section_suivante.classList.add('reveal-button');
}

// Quand on clique sur le boutton pour la section suivante, on enlève la classe "reveal-section" à la section précédente
// on met la classe "hide-section" à la section précédente 
// on enlève la classe "hide-section" à la section suivante
//  et on met la classe "reveal-section" à la section suivante
btn_nav_section_suivante.addEventListener('click', function() {
    if(header_section.classList.contains('reveal-header')){
        header_section.classList.remove('reveal-header');
        header_section.classList.add('hide-section');

        histoire_section.classList.remove('hide-section');
        histoire_section.classList.add('reveal-section');

        btn_nav_section_precedente.classList.remove('hide-section');
        btn_nav_section_precedente.classList.add('reveal-button');

    }else if(histoire_section.classList.contains('reveal-section')){
        histoire_section.classList.remove('reveal-section');
        histoire_section.classList.add('hide-section');

        ecologie_section.classList.remove('hide-section');
        ecologie_section.classList.add('reveal-section');

    }else if(ecologie_section.classList.contains('reveal-section')){
        ecologie_section.classList.remove('reveal-section');
        ecologie_section.classList.add('hide-section');

        equipe_section.classList.remove('hide-section');
        equipe_section.classList.add('reveal-section');

        btn_nav_section_suivante.classList.remove('reveal-button');
        btn_nav_section_suivante.classList.add('hide-section');
    }
});

btn_nav_section_precedente.addEventListener('click', function() {
    if(histoire_section.classList.contains('reveal-section')){
        histoire_section.classList.remove('reveal-section');
        histoire_section.classList.add('hide-section');

        header_section.classList.remove('hide-section');
        header_section.classList.add('reveal-header');

        btn_nav_section_precedente.classList.remove('reveal-button');
        btn_nav_section_precedente.classList.add('hide-section');

    }else if(ecologie_section.classList.contains('reveal-section')){
        ecologie_section.classList.remove('reveal-section');
        ecologie_section.classList.add('hide-section');

        histoire_section.classList.remove('hide-section');
        histoire_section.classList.add('reveal-section');

        btn_nav_section_suivante.classList.remove('hide-section');
        btn_nav_section_suivante.classList.add('reveal-button');

    }else if(equipe_section.classList.contains('reveal-section')){
        equipe_section.classList.remove('reveal-section');
        equipe_section.classList.add('hide-section');

        ecologie_section.classList.remove('hide-section');
        ecologie_section.classList.add('reveal-section');

        btn_nav_section_suivante.classList.remove('hide-section');
        btn_nav_section_suivante.classList.add('reveal-button');
    }
});