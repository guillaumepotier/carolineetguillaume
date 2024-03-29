(function($){

    // Preloader
    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
        $('#countdown').addClass('animated bounceInDown');
    });

	$(document).ready(function () {
        // Animation scroll
		$('a[href*=#]').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).length ? $(anchor.attr('href')).offset().top : 0
			}, 500);
			e.preventDefault();
		});

        // Background slideshow
        $.backstretch([
            'assets/images/tom1.jpg',
            'assets/images/tom2.jpg',
            'assets/images/tom3.jpg'
            // 'assets/images/corse1_1080p_light.jpg',
            // 'assets/images/scrabble_1080p_light.jpg',
            // 'assets/images/corse2_1080p_light.jpg',
            // 'assets/images/plage1_1080p_light.jpg',
            // 'assets/images/plage2_1080p_light.jpg'
        ], {duration: 5000, fade: 750});

        // Countdown
		$('#countdown').countdown('2014/10/04 15:30:00', function (event) {
            $(this).html(event.strftime('<div><div>%D</div><i>Jours</i></div><div><div>%H</div><i>Heures</i></div><div><div>%M</div><i>Minutes</i></div><div><div>%S</div><i>Secondes</i></div>'));
        });

        // loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize');

        initialize = function () {
            // Google Map
            var map = new GMaps({
                div: '#map',
                lat: 42.734755,
                lng: 9.390000,
                zoom: 12
            });

            map.addMarker({
                lat: 42.769303,
                lng:  9.372105,
                title: 'Mairie',
                animation: 'drop',
                icon: 'assets/images/wedding-icon-ring-32.png',
                infoWindow: {
                    content: '<p><strong>Mairie</strong><br/> 15h00</p>'
                }
            });

            map.addMarker({
                lat: 42.767106,
                lng: 9.369454,
                title: 'Église Saint Césaire',
                animation: 'drop',
                icon: 'assets/images/wedding-icon-church-32.png',
                infoWindow: {
                    content: '<p><strong>Église Saint-Césaire</strong><br/> 15h30</p>'
                }
            });

            map.addMarker({
                lat: 42.736121,
                lng: 9.345751,
                title: 'L\'Ambada',
                animation: 'drop',
                icon: 'assets/images/champagne-icon-32.png',
                infoWindow: {
                    content: '<p><strong>L\'Ambada</strong><br/> 19h00</p>'
                }
            });
        };
	});

    /*
        Top menu
    */
    var menu = false;

    $('.show-menu a, .hide-menu a').tooltip();

    // show/hide menu
    $('.show-menu a').on('click', function(e) {
        e.preventDefault();
        $('nav').slideDown(100, function() {
            $('.show-menu a').hide();
            menu = true;
        });
    });
    $('.hide-menu a').on('click', function(e) {
        e.preventDefault();
        $('nav').slideUp(function() {
            $('.show-menu a').fadeIn();
            menu = false;
        });
    });
    // hack to avoid fadein fadout glitch when clicking on a menu link
    $('.menu-link').on('click', function () {
        menu = false;
    });
    $(document).scroll(function () {
        if (!menu && $('nav').offset().top >= 700) {
            $('nav').slideDown(100, function(){$('.show-menu a').hide(); });
            menu = true;
        }

        if (menu && $('nav').offset().top <= 100) {
            $('nav').slideUp(function() {
                $('.show-menu a').fadeIn();
                menu = false;
            });
            menu = false;
        }
    });

    jQuery(function($) {
      $('div.btn-group').each(function() {
        var group   = $(this);
        var form    = group.parents('form').eq(0);
        var name    = group.attr('data-toggle-name');
        var hidden  = $('input[name="' + name + '"]', form);

        $('button', group).each(function() {
          var button = $(this);

          button.on('click', function() {
            $('button', group).each(function () {
                $(this).removeClass('active');
            });

            hidden.val($(this).val());
            $(this).addClass('active');

            if ($(this).val() === 'no') {
                $('.hideable').addClass('hidden');
            } else {
                $('.hideable').removeClass('hidden');
            }
          });
        });
      });
    });

})(jQuery);
