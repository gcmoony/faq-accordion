function expand( aSection ) {
  const descriptor = aSection.parentNode.parentNode.children[1];
  descriptor.classList.toggle("expand")
  changeButton( aSection, "./assets/images/icon-minus.svg" );
}

function collapse( aSection ) {
  const descriptor = aSection.parentNode.parentNode.children[1];
  descriptor.classList.toggle("expand")
  changeButton( aSection, "./assets/images/icon-plus.svg" );
}

function changeButton ( aSection, bgURL ) {
  const icon = aSection.parentNode.children[0].children[1];
  icon.style.backgroundImage = `url('${bgURL}')`;
  
}

function isChecked( anInput ) {
  !anInput.checked ? collapse( anInput ) : expand( anInput );
}

const inputs = document.querySelectorAll("input")

inputs.forEach(element => {
  element.addEventListener("click", (e) => {
    isChecked(e.target);
  })

  element.parentNode.children[0].addEventListener("keypress", (keyPressed) => {
    if(keyPressed.key == " " || keyPressed.key == "Enter") {
      console.log(element.checked = !element.checked);
    }
    isChecked(element);
  })
 })