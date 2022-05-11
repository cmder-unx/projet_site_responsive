// Récupération des bouttons des époques
let btn_histoire_antiquite = document.getElementById('btn-histoire-antiquite');
let btn_histoire_moyen_age = document.getElementById('btn-histoire-moyen-age');
let btn_histoire_a_nos_jours = document.getElementById('btn-histoire-a-nos-jours');

// Récupération des sections des époques
let section_histoire_antiquite = document.getElementById('histoire-antiquite');
let section_histoire_moyen_age = document.getElementById('histoire-moyen-age');
let section_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours');

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

let page_wrapper = document.getElementById('page-wrapper');

// Selectionne chaque image par l'id
let container_image_histoire_intro = document.getElementById('histoire-intro-image-container');
let image_histoire_antiquite = document.getElementById('histoire-antiquite-image');
let image_histoire_moyen_age = document.getElementById('histoire-moyen-age-image');
let container_image1_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container1');
let container_image2_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container2');
let image_ecologie_au_bout_du_rouleau = document.getElementById('ecologie-au-bout-du-rouleau-image');
let image_alternatives_possibles = document.getElementById('alternatives-possibles-image');


// Affichage par défaut
btn_histoire_antiquite.classList.add('active-button');
section_histoire_antiquite.style.display = 'flex';
section_histoire_moyen_age.style.display = 'none';
section_histoire_a_nos_jours.style.display = 'none';

// Quand on clique sur un boutton, on affiche la section correspondante
btn_histoire_antiquite.addEventListener('click', function() {
    btn_histoire_antiquite.classList.add('active-button');
    btn_histoire_moyen_age.classList.remove('active-button');
    btn_histoire_a_nos_jours.classList.remove('active-button');
    section_histoire_antiquite.style.display = 'flex';
    section_histoire_moyen_age.style.display = 'none';
    section_histoire_a_nos_jours.style.display = 'none';
});

btn_histoire_moyen_age.addEventListener('click', function() {
    btn_histoire_antiquite.classList.remove('active-button');
    btn_histoire_moyen_age.classList.add('active-button');
    btn_histoire_a_nos_jours.classList.remove('active-button');
    section_histoire_antiquite.style.display = 'none';
    section_histoire_moyen_age.style.display = 'flex';
    section_histoire_a_nos_jours.style.display = 'none';
});

btn_histoire_a_nos_jours.addEventListener('click', function() {
    btn_histoire_antiquite.classList.remove('active-button');
    btn_histoire_moyen_age.classList.remove('active-button');
    btn_histoire_a_nos_jours.classList.add('active-button');
    section_histoire_antiquite.style.display = 'none';
    section_histoire_moyen_age.style.display = 'none';
    section_histoire_a_nos_jours.style.display = 'flex';
});

window.onresize = function() { 
    var screen_width = window.innerWidth; 
    
    // Si la largeur de l'écran est inférieure à 1000px, on déplace les images
    if(screen_width < 1000){
        
        // On déplace les images
        document.getElementById('histoire-intro-partie-texte').insertBefore(container_image_histoire_intro, document.getElementById('btn-epoques-navigations'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(container_image1_histoire_a_nos_jours, document.getElementById('p3-histoire-a-nos-jours'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(container_image2_histoire_a_nos_jours, document.getElementById('p4-histoire-a-nos-jours'));
        document.getElementById('ecologie-au-bout-du-rouleau-partie-texte').insertBefore(image_ecologie_au_bout_du_rouleau, document.getElementById('p3-ecologie-au-bout-du-rouleau'));

    }else{
        
        // On déplace les images de nouveau pour les écrans plus grands
        document.getElementById('histoire-intro').insertBefore(container_image_histoire_intro, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(container_image1_histoire_a_nos_jours, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(container_image2_histoire_a_nos_jours, null);
        document.getElementById('ecologie-au-bout-du-rouleau').insertBefore(image_ecologie_au_bout_du_rouleau, null);
    }
};

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
    }
});