debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
      var context = this,
          args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};

//menu resp anime
  $(function(){
      var count = 0
      $('.menu').click(function(){
           $('.menu-resp').toggleClass('menu-resp-anime').css('filter','blur(0px)') 
           if(count == 0){
               $('#blur').css('filter','blur(6px)')
               count++
             }else{
                 $('#blur').css('filter','blur(0px)') 
                 count = 0
             }
      }) 
   })

//menu resp anime fim

//header anime
$(function() { 

  function animateDestaques() {
      var st = $(document).scrollTop()

      if ( st > 5) {
          $('.back-header').addClass('header-anime')
      }else{
        $('.back-header').removeClass('header-anime')
      }
  }
  $(document).scroll(debounce(function() {
    animateDestaques()
  }, 0))
}());
//fim header anime

//loading
$(function(){
  
}())
//fim loading

//destaque anime
$(function() { 

  function animateDestaques() {
      var item = $('#destaques')
      var itemtop = item.offset().top
      var st = $(document).scrollTop()

      if ((itemtop - st) < 500) {
          $('.trans-destaque').addClass('destque-anime')
      }
  }
  $(document).scroll(debounce(function() {
    animateDestaques()
  }, 0))
}());
//fim destaque anime

//sobre anime
$(function() { 

  function animateAbout() {
      var item = $('#about')
      var itemtop = item.offset().top
      var st = $(document).scrollTop()

      if ((itemtop - st) < 500) {
          item.addClass('about-anime')
      }
  }
  $(document).scroll(debounce(function() {
    animateAbout()
  }, 0))

}());
//fim sobre anime

//galeria anime
$(function() { 

  function animateAbout() {
      var item = $('#galeria')
      var itemtop = item.offset().top
      var st = $(document).scrollTop()

      if ((itemtop - st) < 500) {
          item.addClass('galeria-anime')
      }
  }
  $(document).scroll(debounce(function() {
    animateAbout()
  }, 0))

}());
//galeria sobre anime