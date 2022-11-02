$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
        header.addClass('header_fixed');
      } else {
        header.removeClass('header_fixed');
      }
    });

    $(".testimonials__slider").owlCarousel({
      margin: 10,
      items: 2,
      nav: false,
      smartSpeed: 500,
      responsive:{
        0:{
          items: 1,
          center: true
        },
        1100:{
          items:2
        }
      }
    })

    $(".atmosphere__card").click(function(e) {
      e.preventDefault();
      $.swipebox([
        { href:'./images/content/atmos1.jpg', title:'Classic Haircut' }, 
        { href:'./images/content/atmos2.jpg', title:'Facial & Massage' },
        { href:'./images/content/atmos3.jpg', title:'Clipper Cut' }, 
        { href:'./images/content/atmos4.jpg', title:"\"The Ranger\" haircut" },
        { href:'./images/content/atmos5.jpg', title:'Moustache and Beard Trim' }, 
        { href:'./images/content/atmos6.jpg', title:'Simple Moustache Trim' }
      ]);
    });

    $(".gallery__photo").click(function(e) {
      e.preventDefault();
      $.swipebox([
        { href:'./images/content/Artwork_cheater_1.jpg', title:'vintage bike' }, 
        { href:'./images/content/Artwork_faraday_1.jpg', title:'mecha-astrologer' },
        { href:'./images/content/Artwork_fred_1.jpg', title:'mecha-human' }, 
        { href:'./images/content/Artwork_hourglass_tall_table_1.jpg', title:"art table" },
        { href:'./images/content/Artwork_simon_1.jpg', title:'giraffe' }, 
        { href:'./images/content/Artwork_tall-side-table_1.jpg', title:'art table' }
      ]);
    });

    var allcards = $(".card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8");

    $(".all, .beard, .haircut, .mustache").click(function (e) { 
      e.preventDefault();
    })

    $(".all").click(function() {
      $(allcards).fadeIn(0);
    });

    $(".beard").click(function() {
      $(".card3, .card4, .card6, .card7, .card8").fadeOut(0);
      $(".card1, .card2, .card5").fadeIn(0);
    });

    $(".haircut").click(function() {
      $(".card1, .card2, .card4, .card5, .card7").fadeOut(0);
      $(".card3, .card6, .card8").fadeIn(0);
    });

    $(".mustache").click(function() {
      $(".card1, .card2, .card3, .card5, .card6, .card8").fadeOut(0);
      $(".card4, .card7").fadeIn(0);
    });

    Tu.tScroll({
      't-element': '.fadeUp',
      't-duration': 1,
      't-function': 'ease-in-out'
    })

    Tu.tScroll({
      't-element': '.fadeRight',
      't-duration': 1
    })

    Tu.tScroll({
      't-element': '.fadeLeft',
      't-duration': 1
    })

    Tu.tScroll({
      't-element': '.zoomOut',
      't-duration': 1
    })

    $('.to-top').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
      e.preventDefault();
    });

    $('.to-serv').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#services').offset().top }, 1000);
      e.preventDefault();
    });

    $('.to-about').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
      e.preventDefault();
    });

    $('.to-works').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#works').offset().top }, 1000);
      e.preventDefault();
    });

    $('.to-process').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#process').offset().top }, 1000);
      e.preventDefault();
    });

    $('.to-testimonials').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#testimonials').offset().top }, 1000);
      e.preventDefault();
    });    

  });