$(window).scroll(function (evt) {
  $(window).scrollTop() <= 10 ? $("nav").addClass("at_top") : $("nav").removeClass("at_top");


  $(window).scrollTop() <= 100 ? $(".goTop, .arrow_block").addClass("at_top") : $(".goTop, .arrow_block").removeClass("at_top");
});

$('.goTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 600);

  return false;
});


$('a.nav-link, .arrow_block').click(function () {
  var $this = $(event.currentTarget),
      href = $this.attr('href'),
      nav_height = $('nav').height() + 16;

  $('html, body').animate({
    scrollTop: $(href).offset().top - nav_height
  }, 600);

  return false;
});

$('button.btn-toggler, .nav-content a.nav-link').click(function () {
  var $this = $('button.btn-toggler');

  if (!$this.hasClass('btn_active')) {
    $this.addClass('btn_active');

    $('.nav-content, .nav-content ul, nav a.navbar-brand, nav > button').addClass('open-nav');
  } else {
    $this.removeClass('btn_active');

    $('.nav-content, .nav-content ul, nav a.navbar-brand, nav > button').removeClass('open-nav');
  }
});