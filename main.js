function resumeExamplePage() {
  const resumeExampleContainer = document.querySelector('.resume-example')

  if (!resumeExampleContainer) {
    return null
  }

  function resumeSticky() {
    const stickyElement = document.getElementById('resume-sticky');
  
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
  
      if (scrollDistance >= 100 && scrollDistance) {
        stickyElement.style.display = 'flex'
      } else {
        stickyElement.style.display = 'none'
      }
    })
  }
  
  resumeSticky()
  
  
  function elem_in_visible_area(selector) {
    let elem_p = $(selector),
        elem_p_height = elem_p.height(),
        offset_top_el = elem_p.offset().top,
        offset_bottom_el = offset_top_el + elem_p.height(),
        scrolled = $(window).scrollTop(),
        scrolled_bottom = scrolled + $(window).height();
    if (scrolled_bottom > offset_top_el && offset_bottom_el > scrolled) {
        return true;
    }
    return false;
  }
  
  $(window).scroll(function() {
  if (elem_in_visible_area('.resume-example__sticky--absolute')) {
    console.log('Элемент в зоне видимости');
    $('#resume-sticky').attr('style', 'display:none;');
  } 
  })
  
  $(window).scroll(function() {
    if (elem_in_visible_area('.added-comment')) {
      console.log('Элемент в зоне видимости');
      $('#resume-sticky').attr('style', 'display:none;');
    } 
    })
  
  $(window).scroll(function() {
    if (elem_in_visible_area('.footer')) {
      console.log('Элемент в зоне видимости');
      $('#resume-sticky').attr('style', 'display:none;');
    } 
    })
}

resumeExamplePage()

function navigationResumes() {
  const navigationResumesContainer = document.querySelector('.navigation-resumes')
  const navigationResumesBtn = document.querySelector('.navigation-resumes__see')
  const navigationResumesClosedBtn = document.querySelector('.navigation-resumes__see-closed')

  if (!navigationResumesContainer) {
    return null
  }

  navigationResumesBtn.addEventListener('click', () => {
    navigationResumesContainer.classList.add('disclosed')
  })

  navigationResumesClosedBtn.addEventListener('click', () => {
    navigationResumesContainer.classList.remove('disclosed')
  })
}

navigationResumes()

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

function instruction() {
  const instructionContainer = document.querySelector('.creation-resume')
  const instructionBtn = document.querySelector('.steps-instruction__collapse')
  const instructionBlock = document.querySelector('.steps-instruction__content')

  if (!instructionContainer) {
    return null
  }

  instructionBtn.addEventListener('click', () => {
    instructionBlock.classList.toggle('closed')
  })


}
instruction()