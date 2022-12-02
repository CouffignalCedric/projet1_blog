
  // images changent a chaque click
  // cible les img +text 
const imgMat1 = document.querySelector('.img1');
const text1 = document.querySelector('.text1');

const imgMat2 = document.querySelector('.img2');
const text2 = document.querySelector('.text2');

const imgMat3 = document.querySelector('.img3');
const text3 = document.querySelector('.text3');

// creation de l'evenemnt click image = image suivante
imgMat1.addEventListener('click', function(){
  
  imgMat2.style.height = '100px';
  imgMat2.style.border = '4px solid';
  
  imgMat1.style.height = '0px';
  imgMat1.style.border = '0px';
      
  text2.style.fontSize = '25px';
      text1.style.fontSize = '0px';
      
});
imgMat2.addEventListener('click', function(){
  
  imgMat3.style.height = '100px';
  imgMat3.style.border = '4px solid';
  
  imgMat2.style.height = '0px';
  imgMat2.style.border = '0px';
      
  text3.style.fontSize = '25px';
      text2.style.fontSize = '0px';
});
imgMat3.addEventListener('click', function(){
  
  imgMat1.style.height = '250px';
  imgMat1.style.border = '4px solid';
  
  imgMat3.style.height = '0px';
  imgMat3.style.border = '0px';

  imgMat2.style.height = '0px';
  imgMat2.style.border = '0px';

      
    text1.style.fontSize = '25px';
    text3.style.fontSize = '0px';
    text2.style.fontSize = '0px';
});




