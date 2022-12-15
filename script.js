
// click logo pour menu Mobile
// cible le menu et le logo a cliquer
const menuMobile = document.querySelector('.menuMobile');
const logo = document.querySelector('header');
// creé l'evenement click
  logo.addEventListener('click', function () {
    // creer class active
    menuMobile.classList.toggle('active');
    // desactive le display none du css
    
})





// MATERIEL images changent a chaque click
// cible les img
const imgMat1 = document.querySelector('.card1');

const imgMat2 = document.querySelector('.card2');

const imgMat3 = document.querySelector('.card3');

// creation de l'evenemnt click image + texte = image +texte suivant

imgMat1.addEventListener('click', function () {

  imgMat2.style.display = "flex"
  imgMat1.style.display = "none"


});
imgMat2.addEventListener('click', function () {

  imgMat3.style.display = "flex"
  imgMat1.style.display = "none"
  imgMat2.style.display = "none"


});
imgMat3.addEventListener('click', function () {
  imgMat1.style.display = "flex"
  imgMat2.style.display = "none"
  imgMat3.style.display = "none"

});

    // Formulaire

        // cible les elements
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");



         // utilise /onsubmit/ pour afficher message a l'envoi du formulaire
  form.onsubmit = function (event) {
  
    event.preventDefault(); // evite le rechargement par default de la page par le navigateur
    alert(`Hello ${firstName.value}, Merci pour votre message`) //message de remerciement 
                  // le .value pour la valeur renseigner dans le formul
    formulaire.style.display= "none"   
      //  apres l'envoi le formulaire repasse en diplay none

};
// click contact pour afficher Formulaire

        // cible le menu et le logo a cliquer
const buttonBur = document.querySelector('.buttonCont');
const buttonMob = document.querySelector('.lienMobCont')
const formulaire = document.querySelector('#form');
// const body = document.querySelector('#body')


      // // creé l'evenement click menu Bureau
    buttonBur.addEventListener('click', function () {
      formulaire.style.display= "flex"
//     // desactive le display none du css
 })
  // // creé l'evenement click boutton du menu mobile
      buttonMob.addEventListener('click', function () {
 
        formulaire.style.display= "flex";
   
     })

// contenu texte de l'intro ou article

// const texteIntro = document.querySelector('.texte-intro').textContent =` Brasseur amateur depuis 4 années,
// C’est suite à un cadeau, consistant à participer à une journée découverte  du brassage chez un brasseur artisanal local , que l'envie m’as pris de m'équiper et de tenter l'expérience en solo.
// Mes premiers brassins étant plutôt encourageants , je suis aujourd’hui à plus de 30 bières brassées.
// Toutes différentes car je modifie toujours quelque chose dans mes recettes, rien que de jouer pour une même recette sur la durée,la température d'empâtage, donne une bière différente. Alors avec le houblon et les épices les possibilités sont quasi infinies.
// Sur ce blog je partage quelques info, n’hesite pas a me contacter pour échanger sur le contenu ou autres.`


