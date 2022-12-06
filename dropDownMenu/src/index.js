import './style.css'

export default function initializeDropdown () {
  const dropdownMenus = document.querySelectorAll('.dropdown-menu')
  const dropdownButtons = document.querySelectorAll('.dropdown-button')

  dropdownButtons.forEach(element => {
    element.addEventListener('click', function() {
      closeDropdownsMenu(element)

      element.parentElement.children[1].classList.toggle('show')
    })
  })

  window.onclick = function(event) {
    if(!event.target.matches('.dropdown-button')) {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove('show')
      })
    }
  }

  function closeDropdownsMenu (el) {
    dropdownMenus.forEach((menu) => {
      if(el.parentElement.children[1] !== menu) {
        menu.classList.remove('show')
      }
    })
  }
}

initializeDropdown()