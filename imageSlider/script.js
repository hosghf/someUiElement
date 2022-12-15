slides = (() => {
  const slidesElements = document.querySelectorAll('.slide')
  const navigationDot = () => document.querySelectorAll('.navigation-dot')

  const activeIndex = () => [...slidesElements].findIndex((el) => el.classList.value.includes('active-slide'))
  
  const removeActive = () => {
    const active = activeIndex()
    slidesElements[active].classList.remove('active-slide')

    navigationDot()[active].classList.remove('active-dot')
  }

  const addActive = (index) => {
    slidesElements[index].classList.add('active-slide')

    navigationDot()[index].classList.add('active-dot')
  }

  const addDotElement = () => {
    const dotContainer = document.querySelector('.navigation-dot-container')

    slidesElements.forEach((_, index) => {
      const i = document.createElement('i')
      i.classList.add('fa-solid', 'fa-circle', 'fa-2xs', 'navigation-dot')
      i.addEventListener('click', function () {
        slides.removeActive()
        slides.addActive(index)
        this.classList.add('active-dot')
      })
    
      dotContainer.appendChild(i)
    })

    dotContainer.children[0].classList.add('active-dot')
  }
  
  return { slidesElements, activeIndex, removeActive, addActive, addDotElement}
})()

const leftArrowButton = document.querySelector('.left-arrow')
const rightArrowButton = document.querySelector('.right-arrow')

leftArrowButton.addEventListener('click', slide.bind(this, 'left'))

rightArrowButton.addEventListener('click', slide)

function slide(direction = 'right') {
  const activSlide = slides.activeIndex()
  slides.removeActive()
  
  if(direction === 'left') {
    if(activSlide === 0) {
      slides.addActive(slides.slidesElements.length - 1)
    } else {
      slides.addActive(activSlide - 1)
    }

    return
  }
  
  if(activSlide === slides.slidesElements.length - 1) {

    slides.addActive(0)
    return
  }
  
  slides.addActive(activSlide + 1)
}

slides.addDotElement()

setInterval(slide, 2000)