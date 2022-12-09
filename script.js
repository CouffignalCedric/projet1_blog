
// click logo pour menu Mobile
// cible le menu et le logo a cliquer
const menuMobile= document.querySelector('.menuMobile');
const logo= document.querySelector('.logoImg');

// creé l'evenement click
// formule if si ecran inf a 769
if (outerWidth < 769 ){
logo.addEventListener('click',function(){
      // creer class active
    menuMobile.classList.toggle('active');
      // supprime le display none du css
      logo.classList.toggle('fixe-logo');
    
           
})}








  // MATERIEL images changent a chaque click
  // cible les img +text 
const imgMat1 = document.querySelector('.img1');
const text1 = document.querySelector('.text1');

const imgMat2 = document.querySelector('.img2');
const text2 = document.querySelector('.text2');

const imgMat3 = document.querySelector('.img3');
const text3 = document.querySelector('.text3');

// creation de l'evenemnt click image + texte = image +texte suivant

imgMat1.addEventListener('click', function(){
  
  imgMat2.style.height = '300px';
  imgMat2.style.border = '4px solid';
  
  imgMat1.style.height = '0px';
  imgMat1.style.border = '0px';
      
  text2.style.fontSize = '25px';
  text1.style.fontSize = '0px';
      
});
imgMat2.addEventListener('click', function(){
  
  imgMat3.style.height = '300px';
  imgMat3.style.border = '4px solid';
  
  imgMat2.style.height = '0px';
  imgMat2.style.border = '0px';
      
  text3.style.fontSize = '25px';
  text2.style.fontSize = '0px';
});
imgMat3.addEventListener('click', function(){
  
  imgMat1.style.height = '300px';
  imgMat1.style.border = '4px solid';
  
  imgMat3.style.height = '0px';
  imgMat3.style.border = '0px';

  imgMat2.style.height = '0px';
  imgMat2.style.border = '0px';

      
    text1.style.fontSize = '25px';
    text3.style.fontSize = '0px';
    text2.style.fontSize = '0px';
});




