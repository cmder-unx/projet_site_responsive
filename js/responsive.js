// Selectionne chaque image par l'id
let container_image_histoire_intro = document.getElementById('histoire-intro-image-container');
let image_histoire_antiquite = document.getElementById('histoire-antiquite-image');
let image_histoire_moyen_age = document.getElementById('histoire-moyen-age-image');
let container_image1_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container1');
let container_image2_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container2');
let image_ecologie_au_bout_du_rouleau = document.getElementById('ecologie-au-bout-du-rouleau-image');
let image_alternatives_possibles = document.getElementById('alternatives-possibles-image');


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