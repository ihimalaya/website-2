// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require fancybox
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require masonry/jquery.masonry
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .

function toggleNav(){
    var menu = $('.navigation-menu');

    $(menu).slideToggle(400);

    var icon = $('#icon');
    flag = icon.hasClass('fa-bars');

    if(flag){
        icon.removeClass('fa-bars');
        icon.addClass('fa-times');
    }else{
        icon.removeClass('fa-times');
        icon.addClass('fa-bars');
    }
}

$(document).ready(function(){

    if( window.localStorage ) {
        if( !localStorage.getItem( 'firstLoad' ) ) {
          localStorage[ 'firstLoad' ] = true;
          window.location.reload();
        }
        else
          localStorage.removeItem( 'firstLoad' );
  }

    $('.fancybox').fancybox({
        width  : 600,
        height : 900,
        type   :'iframe',
    });

    $('#btn-about').click(function(){
        $('html,body').animate({
            scrollTop: $(".about-me").offset().top
        },1000);
    });

});
