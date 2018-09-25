$( document ).ready(function() {
    // $('#MainBanner').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     animateOut: 'fadeOut',
    //     nav:false,
    //     autoplay:true,
    //     dotsEach: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })

    $('#check-in-datepicker,#check-out-datepicker').datepicker({format: 'dd/mm/yyyy'});

    // $('#KeyPropertyBanner').owlCarousel({
    //     loop:false,
    //     margin:25,
    //     nav:true,
    //     autoplay:true,
    //     dots: false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:2
    //         },
    //         1000:{
    //             items:3
    //         },
    //         1200:{
    //             items:4
    //         }
    //     }
    // })

    // $('#EventHightlight').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     responsiveClass:true,
    //     autoplay:true,
    //     loop:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         767:{
    //             items:1,
    //             dots:true,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:true,
    //             dots:false
    //         }
    //     }
    // })
    
    $( "#MainBanner .owl-dots" ).wrap( $( ".WerapContainer" ) );

    // Search tabs Jquery
     // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    //$(".tab_content").hide();
    //$(".tab_content:first").show();

  /* if in tab mode
    $("ul.tabs li").click(function() {
        
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();        
        
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
      
    });

    $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
      
      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
      
      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
    
    $('ul.tabs li').last().addClass("tab_last");*/
 
  /*  $('.datepicker').datepicker()



/*  $('.datepicker').datepicker()

    // checkin checkout datepicker jquery
        var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1, #dpd3').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2, #dpd4')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2, #dpd4').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');*/

    // Jquery for OffCanvas Menu
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }


      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      }); 
      $('.innerClose').click(function () {
            $('#wrapper').toggleClass('toggled');
      }); 
      
      $(".slide-down").click(function(){
            $(".box").slideToggle();
            $(".slide-down .fa-caret-down").toggleClass("fa-caret-up");
            //$(".tab_container").css("background", "white");
            $("#tab3").toggleClass('class2');
            
      });
      $(".slide-down1").click(function(){
            $(".box1").slideToggle();
            $(".slide-down1 .fa-caret-down").toggleClass("fa-caret-up");
            //$(".tab_container").css("background", "white");
            $("#tab2").toggleClass('class2');
      });
      
      $(".slide-down2").click(function(){
            $(".box2").slideToggle();
             $(".slide-down2 .fa-caret-down").toggleClass("fa-caret-up");
             //$(".tab_container").css("background", "white");
             $("#tab1").toggleClass('class2');
      });
      $('#ddlCars').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars1').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars2').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars3').multiselect({ 
         numberDisplayed: 1,
      });

      $(function() {
            var header = $('.TopSearchBar');
            var topheader = $('.innerHeader');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 250) {
                    header.addClass('fixed');
                    topheader.addClass('removeHeader');
                } else {
                    header.removeClass('fixed');
                    topheader.removeClass('removeHeader');
                }
            });
        }) 
        $(function() {
            var sidemap = $('.fullMapArea');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 250) {
                    sidemap.addClass('fixed');
                } else {
                    sidemap.removeClass('fixed');
                }
            });
        })

      // $(window).scroll(function() {
      //     var scrollTab = $(window).scrollTop();

      //     if (scrollTab >= 1) {
      //         $('.SearchTabMain').addClass('notfixed');
      //         $('.SearchTabMain').removeClass('fixedTab');
      //     } else {
      //         $('.SearchTabMain').removeClass('notfixed');
      //         $('.SearchTabMain').addClass('fixedTab');
      //     }
      // });

       $(".moreFilter").click(function () {
         $(".MoreFilterBox").stop().slideToggle();
         return false;
      });
      $(".SaleMoreFilter").click(function () {
         $(".MoreFilterBox1").stop().slideToggle();
         return false;
      });
       

      $('#SearchSelectBox').on('change', function() {
      if ( this.value == 'Forsale')
      {
        $(".MoreFilterSearch1").hide();
        $(".MoreFilterSearch2").show();
        $(".MoreFilterSearch3").hide();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide();
        // $(".MoreFiltersSelect").removeClass();
         // $(".moreFilter").removeClass("moreFilter");
         //  $(".MrFilter").addClass("moreFilter1");
      }else if(this.value == 'Longlet')
      {
        $(".MoreFilterSearch1").hide();
        $(".MoreFilterSearch2").hide();
        $(".MoreFilterSearch3").show();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide(); 
      }
      else
      {
        $(".MoreFilterSearch1").show();
        $(".MoreFilterSearch2").hide();
        $(".MoreFilterSearch3").hide();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide();

      }
    });

    // $('#listlongShort').on('change', function() {
    //   if ( this.value == 'longlet')
    //   {
    //     $(".shortInput").hide();
    //     $(".longInput").show();
    //   }
    //   else
    //   {
    //     $(".shortInput").show();
    //     $(".longInput").hide();
    //   }
    // });

    // if ($('#listlongShort').val()=='shortlet') {
    //     $(".shortInput").show();
    //     $(".longInput").hide();
    //    //alert('Alert');
    //   // e.preventDefault();
    //   }

    function setHeight() {
    windowHeight = $(window).innerHeight();
      $('.MainBanner img').css('min-height', windowHeight);
    };
    setHeight();
    
    $(window).resize(function() {
      setHeight();
    });


    $('#listlongShort').on('change', function() {
      $('.shortInput').prop('placeholder',$(this).val());
    });

      // OTP Input Box Auto move forward
      $(".inputs").keyup(function () {
          if (this.value.length == this.maxLength) {
            var $next = $(this).next('.inputs');
            if ($next.length)
                $(this).next('.inputs').focus();
            else
                $(this).blur();
          }
      });
      // OTP Input Box Auto move forward End Here


      if ($('#SearchSelectBox').val()=='Forsale') {
        $(".MoreFilterSearch1").hide();
        $(".MoreFilterSearch2").show();
        $(".MoreFilterSearch3").hide();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide();
       //alert('Alert');
      // e.preventDefault();
      }
      
       if ($('#SearchSelectBox').val()=='Shortlet') {         
        $(".MoreFilterSearch1").show();
        $(".MoreFilterSearch2").hide();
        $(".MoreFilterSearch3").hide();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide();
       //alert('Alert');
      // e.preventDefault();
      }
      
       if ($('#SearchSelectBox').val()=='Longlet') {         
        $(".MoreFilterSearch1").hide();
        $(".MoreFilterSearch2").hide();
        $(".MoreFilterSearch3").show();
        $(".MoreFilterBox").hide();
        $(".MoreFilterBox1").hide();
       //alert('Alert');
      // e.preventDefault();
      }


      $('input:radio[name="lookingfor"]').change(
        function(){
            if ($(this).is(':checked') && $(this).val() == 'TorentRadio') {
                // append goes here
                //alert('hello torent');
                $("#ex3").slider('enable');
                $("#ex2").slider('disable'); 
            }
            if ($(this).is(':checked') && $(this).val() == 'AllRadio') {
                // append goes here
                //alert('hello torent');
                $("#ex3").slider('enable');
                $("#ex2").slider('enable');   
            }
            if ($(this).is(':checked') && $(this).val() == 'ForsaleRadio') {
                // append goes here
                //alert('hello torent');
                $("#ex3").slider('disable');
                $("#ex2").slider('enable');   
            }
        });
        
        if ($('#rentPriceRange').length > 0) {
            $('#rentPriceRange').slider({
                formatter: function (value) {
                  var price = '€ ' + value;
                  if(value.length){
                    var price = '€ ' + numberWithCommas(value[0])+' : '+'€ '+numberWithCommas(value[1]);
                  }
                  return price;
                }
            });            
            //change tooltip format on initial load
            _changeTooltipFormat('#rentPriceRange','€ ');
        }
        if ($('#salePriceRange').length > 0) {
            $('#salePriceRange').slider({
                formatter: function (value) {
                  var price = '€' + value;
                  if(value.length){
                    var price = '€ ' + numberWithCommas(value[0])+' : '+'€ '+numberWithCommas(value[1]);
                  }
                  return price;
                }
            });
            _changeTooltipFormat('#salePriceRange','€ ');
        }

        if ($('#sqmPriceRange').length > 0) {
            $('#sqmPriceRange').slider({
                formatter: function (value) {
                  var range = value;
                  if(value.length){
                    var range = numberWithCommas(value[0])+' : '+numberWithCommas(value[1]);
                  }
                  return range;
                }
            });
            _changeTooltipFormat('#sqmPriceRange','');
        }

    /*
        $(".ListinNextBtn button.btn").click(function(){
          //alert('Alert');
          $('.FormTabMain .tab_last').css('pointer-events','auto');
          $('.FormTabMain ul.tabs li').toggleClass('active');
          $('.FormTabMain #tab1.tab_content').hide();
          $('.FormTabMain #tab2.tab_content').show();
        });
    */
        $("#contactForm123").submit(function(e) {
            e.preventDefault();
        });
      

      

      // range slider
      //  $("#ex5").slider({});
      // range slider
        if ($('#ex2').length > 0) {            
            $('#ex2').slider({
                formatter: function (value) {
                    var price = '€' + value;
                    if(value.length){
                      var price = '€ '+numberWithCommas(value[0])+' : '+'€ '+numberWithCommas(value[1]);
                    }
                    return price;
                }
            });                                              
            
            $("#ex6SliderVal2").text(numberWithCommas($('#ex6SliderVal2').text()));

            $("#ex2").on("slide", function (slideEvt) {                
                $("#ex6SliderVal1").text('€'+numberWithCommas(slideEvt.value[0]));
                $("#ex6SliderVal2").text('€'+numberWithCommas(slideEvt.value[1]));
            });
        }
        
        if ($('#ex3').length > 0) {
            $('#ex3').slider({
                formatter: function (value) {
                    return '€' + value;
                }
            });
        }
        if (($('#ex4').length > 0) && ($('#ex5').length > 0)) {
            $("#ex4, #ex5").slider({});
        }
      // $('#ex2').slider({
      //     formatter: function(value) {
      //       return '€' + value;
      //     }
      // });

      // $("#ex2").on("slide", function(slideEvt) {
      // $("#ex6SliderVal1").val(slideEvt.value[0]);
      // $("#ex6SliderVal2").val(slideEvt.value[1]);
      // });

      // $('#ex3').slider({
      //   formatter: function(value) {
      //     return '€' + value;
      //   }
      // });
      // $("#ex4, #ex5").slider({});



      // var slider = new Slider('#ex2', {
      // formatter: function(value) {
      //   return '€: ' + value;
      //   }
      // });
      // var slider1 = new Slider('#ex3', {
      // formatter: function(value) {
      //   return '€: ' + value;
      //   }
      // });




      
});

// $(window).load(function(){
//     $('#onload').modal('show');
// });

/* // Preloader //*/
     $(window).load(function(){
      $('#preloader').fadeOut('slow',function(){$(this).remove();});
     });
$(window).load(function(){
    // $( ".lSPager" ).wrap( "<div class='container'></div>" );
    // $(".lSPager").clone().insertAfter("div.caption-Text");
    $( ".Amenities .multiselect-selected-text" ).empty().append( "Select Amenities & Features" );
    $( ".Facilities .multiselect-selected-text" ).empty().append( "Select Facilities" );
    // $( ".bootstrap-select.btn-group.searchCriteria .dropdown-menu li:first-child" ).empty();
    $( ".bootstrap-select.btn-group.searchCriteria .dropdown-menu li:first-child a span.text" ).empty().append( "Reset search criteria" );
});

$(function () {
    $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'hover',
      html : true
    });
});



// bharat singh negi
jQuery(document).ready(function($) {
  $('#myCarousel').carousel({
      interval: 5000
  });
  $('#myCarouselTwo, #myCarouselThree, #myCarouselfour, #myCarouselfive, #myCarouselsix').carousel({
      interval: false
  });
  $('#carousel-text').html($('#slide-content-0').html());
  //Handles the carousel thumbnails
 $('[id^=carousel-selector-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);
      $('#myCarousel').carousel(id);
  });
 $('[id^=carousel-selector1-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);        
      $('#myCarouselTwo').carousel(id);
  });
 $('[id^=carousel-selector2-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselThree').carousel(id);
  });
 $('[id^=carousel-selector3-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselfour').carousel(id);
  });
 $('[id^=carousel-selector4-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselfive').carousel(id);
  });
 $('[id^=carousel-selector5-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselsix').carousel(id);
  });
  // When the carousel slides, auto update the text
  $('#myCarousel, #myCarouselTwo, #myCarouselThree, #myCarouselfour, #myCarouselfive, #myCarouselsix').on('slid.bs.carousel', function (e) {
      var id = $('.item.active').data('slide-number');
      $('#carousel-text').html($('#slide-content-'+id).html());
  });

  
  

});

// booking tab section under third tab
$(document).ready(function() {
  $('.panel-body #credit').click(function() {
    /* Act on the event */
    $('.panel-body').find('#paypaltab').hide();
    $('.panel-body').find('#creditDebit').show();
    $(this).addClass('tabact');
    $('.panel-body').find('#paypal').removeClass('tabact');
  });
  $('.panel-body #paypal').click(function() {
    /* Act on the event */
    $('.panel-body').find('#creditDebit').hide();
    $('.panel-body').find('#paypaltab').show();
    $(this).addClass('tabact');
    $('.panel-body').find('#credit').removeClass('tabact');
  });

  // My Profile section
  /*$('.myprofile-right .panel .mProBtn .btn').on('click', function() {
    //Act on the event
    var bEdit = $(this).text();
    var textchange = $(this).text('Update Profile');

    if (bEdit == 'Update Profile') {
      // statement
      $(this).text('Edit').removeClass('savebtn');
      $('.fieldName .form-control').attr('disabled', true);
      //$('.changePass').removeClass('passblock');

    } else {
      // statement
      $(this).addClass('savebtn');
      $('.fieldName .form-control').removeAttr("disabled");
      //$('.changePass').addClass('passblock');
    }
  });*/

  // my profile form section
  $('.myprofile-right .lastdiv a#changepass').on('click', function() {
    $('.changePass').toggleClass('passblock');
  });

  // my profile light box section
  /*$('.modOne button.btn').on('click', function() {
    $(this).closest('.modal-dialog').find('.modTwo').slideDown('slow/400/fast');
    $(this).closest('.modal-dialog').find('.modOne').slideUp('slow/400/fast');
  });
  $('.modTwo button.btn').on('click', function() {
    $(this).closest('.modal-dialog').find('.modThree').slideDown('slow/400/fast');
    $(this).closest('.modal-dialog').find('.modTwo').slideUp('slow/400/fast');
  });*/

  //booking tab step js

  $('.manage-section #tab4 .counter_view').on('click', function() {
    var viewPro = $(this).attr('title');

     if (viewPro == 'view1') {
       // statement
       $(this).closest('.gridArea').find('hr').toggle();
       $(this).closest('.gridArea').find('.viewProper').toggle();

     } else if (viewPro == 'view2'){
       // statement
       $(this).closest('.gridArea').find('hr').toggle();
       $(this).closest('.gridArea').find('.viewProper').toggle();

     } else {

     }

  });

  $('.manage-section #tab4-collapse .counter_view').on('click', function() {
    var viewPro = $(this).attr('title');

     if (viewPro == 'view1') {
       // statement
       $(this).closest('.gridArea').find('hr').toggle();
       $(this).closest('.gridArea').find('.viewProper').toggle();

     } else if (viewPro == 'view2'){
       // statement
       $(this).closest('.gridArea').find('hr').toggle();
       $(this).closest('.gridArea').find('.viewProper').toggle();

     } else {

     }

  });

});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//function to change the tooltip value to required format
function _changeTooltipFormat(sliderTooltip, sign){  
  var string  = $(sliderTooltip).prev().find('.tooltip-inner').html();    
  var value = string.split(' : ');
  string = sign + numberWithCommas($.trim(value[0])) +' : '+ sign + numberWithCommas($.trim(value[1]));
  $(sliderTooltip).prev().find('.tooltip-inner').html(string); 
}