$(document).ready(function() {
    /* ------------------------ */
    /* --- STICKY NAVIGATION--- */
    /* ------------------------ */
    
    /* Wenn der der Punkt js--section-features (im Kopf von der Section "Features", siehe HTML) beim Scrollen erreicht ist, wird folgende Funktion ausgeführt: */
    $('.js--section-features').waypoint(function(direction) {
        
        /* Wenn die Scroll-Richtung nach unten ist, füge die Klasse .sticky zum nav-Element hinzu. Die Klasse .sticky wurde bereits vorher in CSS definiert und wird
        durch die Erreichung von js--section-features aktiviert, sodass die Nav-Bar die eingestellten Properties besitzt. */
        if (direction == "down") {
            $('nav').addClass('sticky');
        
        /* Wenn die Richtung nach oben geht und der Header wieder in den Viewport rückt, wird die Klasse .sticky von dem nav-Element ausgeblendet und die 
        "ursprüngliche" Navigationbar wird wieder angezeigt */
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        
        /* Blende die .sticky Klasse schon 60px vor dem Erreichen des waypoints ein */
        offset: '60px;'
      });
    
    
    
    /* ------------------------ */
    /*---SCROLL ON NAVIGATION---*/
    /* ------------------------ */
    
    /* Wenn der Button mit der Klasse .js--scroll-to-plan geklickt wird, führe folgende Funktion aus: */
    $('.js--scroll-to-plan').click(function() {
        
        /* scrolle automatisch zur Klasse .js--section-plans, die im Kopfbereich der Section: Plans ist */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /* Wenn der Button mit der Klasse .js--scroll-to-start geklickt wird, führe folgende Funktion aus: */
    $('.js--scroll-to-start').click(function() {
        
        /* scrolle automatisch zur Klasse .js--section-features, die im Kopfbereich der Section: Features ist */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    
    /* Navigation Scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    
    
    /* ------------------------ */
    /*---ANIMATION ON SCROLL ---*/
    /* ------------------------ */
    
    /* Wenn der waypoint mit der Klasse .js--wp1 erreicht ist, führe folgende Funktion aus: */
    $('.js--wp-1').waypoint(function(direction) {
        
        /* Füge die Klassen .animated und .fadeIn dem HTML-Element hinzu, welches die Klasse .jw--wp-1 besitzt */
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        
        /* Starte die Animation schon um 50% bevor der waypoint erreicht ist */
        offset: '50%;'
    }); 

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });


    /* ------------------------ */
    /*--- MOBILE NAVIGATION  ---*/
    /* ------------------------ */


    /* Wenn auf das Nav-Icon (Burger Menü) geklickt wird, führe folgende Funktion aus: */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        /* Klappe die Navigation-Bar aus und wieder ein */
        nav.slideToggle(200);

        /* Wenn das Icon das Burger Menü anzeigt, entferne es beim Klicken und zeige das Close-Icon (X) an */
        if (icon.hasClass('icon ion-md-menu')) {
            icon.addClass('icon ion-md-close');
            icon.removeClass('icon ion-md-menu');
        
        /* Wird das Close-Icon angezeigt, zeige beim Klicken das Burger Menü an */
        } else {
            icon.addClass('icon ion-md-menu');
            icon.removeClass('icon ion-md-close');
        }
    });
});
   

