const accordion = document.getElementById('accordion-container');
//const accordionAnswer = [...document.querySelectorAll('.accordion__answer')];

accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;
    //cambio clases css
    if(targetClass.contains('accordion__question')) {
      e.target.nextElementSibling.classList.toggle('accordion__answer--active'); //despliego la respuesta 
      e.target.classList.toggle('accordion__question--active'); //roto flecha y negrita al button
    }
});


document.getElementById("accordion-container").addEventListener("mouseover", () => {
  document.querySelector(".img__desktop-box").classList.add("img__desktop-box--active");
})

document.getElementById("accordion-container").addEventListener("mouseout", () => {
  document.querySelector(".img__desktop-box").classList.remove("img__desktop-box--active");     
});