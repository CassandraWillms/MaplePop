/* MAPLE POP DESIGNS
================================================================== */



// SLIDESHOW VARIABLES
let slideshowDes = document.querySelector('.design-slideshow') || ''
let slideshowIll = document.querySelector('.illustration-slideshow') || ''
let selectorDes = document.querySelector('.slideshow-selector-design') || ''
let selectorIll = document.querySelector('.slideshow-selector-illustration') || ''
let linkDes = document.querySelector('.design-link') || ''
let linkIll = document.querySelector('.illustration-link') || ''

// ACTIVE DESIGN SLIDESHOW
function activateDesign() {
  if (selectorDes && slideshowDes) {
    if (selectorDes.classList.contains('selected')) {
      return
    } else {
      selectorIll.classList.remove('selected')
      slideshowIll.classList.remove('active-slideshow')
      selectorDes.classList.add('selected')
      slideshowDes.classList.add('active-slideshow')
    }
  }
}

// ACTIVE ILLUSTRATION SLIDESHOW
function activateIllustration() {
  if (selectorIll && slideshowIll) {
    if (selectorIll.classList.contains('selected')) {
      return
    } else {
      selectorDes.classList.remove('selected')
      slideshowDes.classList.remove('active-slideshow')
      selectorIll.classList.add('selected')
      slideshowIll.classList.add('active-slideshow')
    }
  }
}

// SET UP CLICK EVENT LISTENERS TO ACTIVE SLIDESHOWS
selectorDes ? selectorDes.addEventListener('click', activateDesign) : ''
selectorIll ? selectorIll.addEventListener('click', activateIllustration) : ''
linkDes ? linkDes.addEventListener('click', activateDesign) : ''
linkIll ? linkIll.addEventListener('click', activateIllustration) : ''

// DESIGN SLIDES
let designSlides = slideshowDes.querySelectorAll('.slide')
let designTotal = designSlides.length - 1
let designNext = slideshowDes.querySelector('.next-slide')
let designCurr = 0

designNext.addEventListener('click', function() {
  designSlides[designCurr].classList.remove('active-slide')
  if (designCurr < designTotal) {
    designCurr++
  } else {
    designCurr = 0
  }
  designSlides[designCurr].classList.add('active-slide')
})

// ILLUSTRATION SLIDES
let illustrationSlides = slideshowIll.querySelectorAll('.slide')
let illustrationTotal = illustrationSlides.length - 1
let illustrationNext = slideshowIll.querySelector('.next-slide')
let illustrationCurr = 0

illustrationNext.addEventListener('click', function() {
  illustrationSlides[illustrationCurr].classList.remove('active-slide')
  if (illustrationCurr < illustrationTotal) {
    illustrationCurr++
  } else {
    illustrationCurr = 0
  }
  illustrationSlides[illustrationCurr].classList.add('active-slide')
})
