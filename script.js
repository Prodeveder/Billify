const option = document.querySelectorAll(".option");
const businessReg = document.querySelector('.businessReg')

option.forEach((Element) => {
  Element.addEventListener("click", () => {
    option.forEach((Element) => { 
        Element.classList.remove("active");
      });

    Element.classList.add("active");

    if (Element.classList[1] == 'yes') {
        businessReg.style.display = 'block'
    } else if (Element.classList[1] == 'no') {
        businessReg.style.display = 'none';

    }
  });
});
