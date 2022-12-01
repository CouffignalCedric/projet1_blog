// /* Sélection des éléments HTML */
// let link = document.getElementById('link')
// let burger = document.getElementById('burger')
// let ul = document.querySelector('ul')

// /* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul
//  et au span#burger */
// link.addEventListener('click', function(e) {
//   e.preventDefault()
//   burger.classList.toggle('open')
//   ul.classList.toggle('open')
// })
const imgMat= document.querySelector(".img-mat");
let toggle= true;
imgMat.addEventListener("click",function(){
  toggle= !toggle;
if(toggle){
  imgMat.src= "assets/images/img (2).jpg";
}else{
  imgMat.src = "assets/images/img (3).jpg";
  
// }if(toggle){
//   imgMat.src ="assets/images/img (4).jpg";
return imgMat
}
})
