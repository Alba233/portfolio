
 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        
        //animation links
        navLinks.forEach((links,index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });
        //burger animation
       // burger.classList.toggle('toggle');
    });
}



const carouselSlider = (function () {
    let _slideIndex = 1;
  
    const _slides = document.querySelectorAll(".image-fade");
    const _dots = document.querySelectorAll(".dot");
  
    function _sliderInitState(slides, dots) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
    }
  
    function _checkSlideIndexBoundary(slideIndex, slides) {
      if (slideIndex > slides.length) {
        _slideIndex = 1;
      }
      if (slideIndex === 0) {
        _slideIndex = slides.length;
      }
    }
  
    function _slideSelectionIndecator(dots, slideIndex) {
      dots[slideIndex - 1].classList.add("active");
    }
  
    function _activateSlide(slides, slideIndex) {
      slides[slideIndex - 1].style.display = "block";
      _slideSelectionIndecator(_dots, _slideIndex);
    }
  
    function _imageDirection(direction) {
      _sliderInitState(_slides, _dots);
      if (direction == "next") {
        _activateSlide(_slides, _slideIndex);
        _slideIndex++;
        _checkSlideIndexBoundary(_slideIndex, _slides);
      } else {
        _slideIndex--;
        _checkSlideIndexBoundary(_slideIndex, _slides);
        _activateSlide(_slides, _slideIndex);
      }
    }
  
    const _previousButton = document.querySelector(".previous");
    const _nextButton = document.querySelector(".next");
  
    _previousButton.addEventListener("click", function () {
      _imageDirection("previous");
    });
  
    _nextButton.addEventListener("click", function () {
      _imageDirection("next");
    });
  
    const slide = function () {
      _sliderInitState(_slides, _dots);
      _activateSlide(_slides, _slideIndex);
      _slideIndex++;
      _checkSlideIndexBoundary(_slideIndex, _slides);
      // Change image every 5 seconds
      setTimeout(slide, 5000);
    };
  
    return {
      slide
    };
  })();
  
  carouselSlider.slide();
navSlide();
