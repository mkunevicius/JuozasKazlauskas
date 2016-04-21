// Change home background image every n seconds

function cycleDivs(){
    var $active = $('.home-body .active');
    var $next = ($('.home-body .active').next().length > 0) ? $('.home-body .active').next() : $('.home-body div:first');
      $next.css('z-index',2);//move the next div up the pile
	  $active.fadeOut(1000,function(){//fade out the top div
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the div
      $next.css('z-index',3).addClass('active');//make the next div the top one
      });
    }

    $(window).load(function(){
		$('.home-body').fadeIn(1000);//fade the background back in once all the images are loaded
		  // run every 5s
		  setInterval('cycleDivs()', 5000);
    })
