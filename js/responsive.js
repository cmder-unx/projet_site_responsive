/*

FICHIER POUR DÉPLACER LES IMAGES QUAND ON REDIMENSIONNE LA FENÊTRE (RESPONSIVE)

*/

// Selectionne chaque image par l'id
let container_image_histoire_intro = document.getElementById('histoire-intro-image-container');
let container_image1_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container1');
let container_image2_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours-partie-image-container2');
let image_ecologie_au_bout_du_rouleau = document.getElementById('ecologie-au-bout-du-rouleau-image');


window.onresize = function() { 
    var screen_width = window.innerWidth; 
    
    // Si la largeur de l'écran est inférieure à 1000px, on déplace les images
    if(screen_width < 1000){
        
        // On déplace les images quand la largeur de l'écran est inférieure à 1000px
        document.getElementById('histoire-intro-partie-texte').insertBefore(container_image_histoire_intro, document.getElementById('btn-epoques-navigations'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(container_image1_histoire_a_nos_jours, document.getElementById('p3-histoire-a-nos-jours'));
        document.getElementById('histoire-a-nos-jours-partie-texte').insertBefore(container_image2_histoire_a_nos_jours, document.getElementById('p4-histoire-a-nos-jours'));
        document.getElementById('ecologie-au-bout-du-rouleau-partie-texte').insertBefore(image_ecologie_au_bout_du_rouleau, document.getElementById('p3-ecologie-au-bout-du-rouleau'));

    }else{
        
        // On déplace les images de nouveau quand la largeur de l'écran est supérieure à 1000px
        document.getElementById('histoire-intro').insertBefore(container_image_histoire_intro, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(container_image1_histoire_a_nos_jours, null);
        document.getElementById('histoire-a-nos-jours-partie-image').insertBefore(container_image2_histoire_a_nos_jours, null);
        document.getElementById('ecologie-au-bout-du-rouleau').insertBefore(image_ecologie_au_bout_du_rouleau, null);
    }
};