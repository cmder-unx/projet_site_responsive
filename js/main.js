// Récupération des bouttons des époques
let btn_histoire_antiquite = document.getElementById('btn-histoire-antiquite');
let btn_histoire_moyen_age = document.getElementById('btn-histoire-moyen-age');
let btn_histoire_a_nos_jours = document.getElementById('btn-histoire-a-nos-jours');

// Récupération des sections des époques
let section_histoire_antiquite = document.getElementById('histoire-antiquite');
let section_histoire_moyen_age = document.getElementById('histoire-moyen-age');
let section_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours');

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
    let page_wrapper = document.getElementById('page-wrapper');

    // Selectionne chaque image par l'id
    let image_histoire_intro = document.getElementById('histoire-intro-image');
    let image_histoire_antiquite = document.getElementById('histoire-antiquite-image');
    let image_histoire_moyen_age = document.getElementById('histoire-moyen-age-image');
    let image1_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-image1');
    let image2_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-image2');
    let image_ecologie_au_bout_du_rouleau = document.getElementById('ecologie-au-bout-du-rouleau-image');
    let image_alternatives_possibles = document.getElementById('alternatives-possibles-image');

    // Si la largeur de l'écran est inférieure à 1000px, on déplace les images
    if(screen_width < 1000){
        
        // On déplace l'image de l'intro dans la div avec l'id "histoire-intro-partie-texte" avant les bouttons
        document.getElementById('histoire-intro-partie-texte').insertBefore(image_histoire_intro, document.getElementById('btn-epoques-navigations'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(image1_histoire_a_nos_jours, document.getElementById('p3-histoire-a-nos-jours'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(image2_histoire_a_nos_jours, document.getElementById('p4-histoire-a-nos-jours'));
        document.getElementById('ecologie-au-bout-du-rouleau-partie-texte').insertBefore(image_ecologie_au_bout_du_rouleau, document.getElementById('p3-ecologie-au-bout-du-rouleau'));

    }else{
        
        document.getElementById('histoire-intro').insertBefore(image_histoire_intro, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(image1_histoire_a_nos_jours, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(image2_histoire_a_nos_jours, null);
        document.getElementById('ecologie-au-bout-du-rouleau').insertBefore(image_ecologie_au_bout_du_rouleau, null);
    }

};