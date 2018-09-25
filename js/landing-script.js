$(window).on('load', function() {
 templateInit();
 // Get IE or Edge browser version
  var version = detectIE();
  if (version === false) {
    //$('body').addClass('IE/Edge');

  } else if (version >= 12) {
    $('body').addClass('Edge ' + version);
  } else {
    $('body').addClass('IE ' + version);
  }

});
$(document).ready(function(){
  readMore();
  panelActive();
  incrementDecOperators();
  fileUploaderVidenBtn();
  stepsProcedure();
  tooltipInit();
  starRatingsInit();
  
});

function templateInit(){
     // Append Side Navigation / Only for demo purpose
  $.get("./template/template.html", function(data) {
    $('footer').before(data);
  });
}
function dateRangePicker(){
  $('input[name="daterange"]').daterangepicker({
      timePicker: false,
      timePickerIncrement: 0,
      autoUpdateInput: false,
      locale: {
          format: 'DD/MM/YYYY',
          cancelLabel: 'Clear'
      }
  });
  $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

}

function multiSelectFunction(){
  $('.multi-select').multiselect({
    numberDisplayed: 1,
    includeSelectAllOption: true,
    allSelectedText: 'No option left ...'
  });
}

function priceRangeInitiation(){
  /*$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 5000,
    values: [ 555, 3000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
	  $("#pr-size-min-top").val(ui.values[0]);
	  $("#pr-size-max-top").val(ui.values[1]);
    }
  });
  $("#amount").val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
      " - €" + $( "#slider-range" ).slider( "values", 1 ) );*/
}

function starRatingsInit(){
  var starClicked = false;
  $('.star').click(function() {
    $(this).children('.selected').addClass('is-animated');
    $(this).children('.selected').addClass('pulse');

    var target = this;

    setTimeout(function() {
      $(target).children('.selected').removeClass('is-animated');
      $(target).children('.selected').removeClass('pulse');
    }, 1000);

    starClicked = true;
  });
  $('.half').click(function() {
    if (starClicked == true) {
      setHalfStarState(this)
    }
    $(this).closest('.rating').find('.js-score').text($(this).data('value'));

    $(this).closest('.rating').data('vote', $(this).data('value'));
    calculateAverage()
    console.log(parseInt($(this).data('value')));
  });
  $('.full').click(function() {
    if (starClicked == true) {
      setFullStarState(this)
    }
    $(this).closest('.rating').find('.js-score').text($(this).data('value'));

    $(this).find('js-average').text(parseInt($(this).data('value')));

    $(this).closest('.rating').data('vote', $(this).data('value'));
    calculateAverage()

    console.log(parseInt($(this).data('value')));
  });
  $('.half').hover(function() {
    if (starClicked == false) {
      setHalfStarState(this)
    }
  });
  $('.full').hover(function() {
    if (starClicked == false) {
      setFullStarState(this)
    }
  });
}

function updateStarState(target) {
  $(target).parent().prevAll().addClass('animate');
  $(target).parent().prevAll().children().addClass('star-colour');

  $(target).parent().nextAll().removeClass('animate');
  $(target).parent().nextAll().children().removeClass('star-colour');
}

function setHalfStarState(target) {
  $(target).addClass('star-colour');
  $(target).siblings('.full').removeClass('star-colour');
  updateStarState(target)
}

function setFullStarState(target) {
  $(target).addClass('star-colour');
  $(target).parent().addClass('animate');
  $(target).siblings('.half').addClass('star-colour');

  updateStarState(target)
}

function calculateAverage() {
  var average = 0

  $('.rating').each(function() {
    average += $(this).data('vote')
  })

  $('.js-average').text((average/ $('.rating').length).toFixed(1))
}

function initMap() {
  var uluru = {
    lat: 28.577624,
    lng: 77.314943
  };
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 5,
    center: uluru
  });
  var image = './images/svg-icons/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
  infoWindow = new google.maps.InfoWindow();
  maxZoomService = new google.maps.MaxZoomService();
  map.setOptions({
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false
  });

  marker.addListener('click', function() {
    map.setZoom(20);
    map.setCenter(marker.getPosition());
  });
}

function owlCarouselInitiate(){
  // $("#owl-demo").owlCarousel({
  //       navigation: true,
  //       slideSpeed: 300,
  //       paginationSpeed: 400,
  //       singleItem: true,
  //       afterInit: afterOwl,
  //       afterUpdate: afterOwl
  //   });
  // $( ".owl-prev").html('<i class="iconvd-chevron-left"></i>');
  // $( ".owl-next").html('<i class="iconvd-chevron-right"></i>');
}

function readMore(){
    // Configure/customize these variables.
  var showChar = 300;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Read More <i class='fa fa-chevron-down'></i>";
  var lesstext = "Read Less <i class='fa fa-chevron-up'></i>";
  $('.more').each(function() {
      var content = $(this).html();
      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
      }
  });
  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  });
}

function panelActive(){
  $(".faqs-tab .panel, .books-panel .panel").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('current');
    }else{
      $(this).removeClass('current');
    }
  });  
}

function incrementDecOperators(){
  var incrementPlus;
  var incrementMinus;

  var buttonPlus  = $(".cart-qty-plus");
  var buttonMinus = $(".cart-qty-minus");

  var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
      .parent(".button-container")
      .parent(".form-group")
      .find(".qty");
    $n.val(Number($n.val())+1 );
  });

  var incrementMinus = buttonMinus.click(function() {
      var $n = $(this)
      .parent(".button-container")
      .parent(".form-group")
      .find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount-1);
    }
  });
}

function fileUploadInitiate(){
    // invoke plugin
  $('#our-test').MultiFile({
    onFileChange: function(){
      console.log('TEST CHANGE:', this, arguments);
    }
  });
}

function fileUploaderVidenBtn(){
  $('.fileuploader-btn').on('click', function(){
    $('.fileuploader').click();
  });

  $('.fileuploader').change(function(){

      // Create new FileReader as a variable
      var reader = new FileReader();

      // Onload Function will run after video has loaded
      reader.onload = function(file){
      var fileContent = file.target.result;
      $('.video-thumb').append('<video src="' + fileContent + '" width="100%" height="100%" controls></video>');
      $('.video-thumb').find('.overlay-thumb').removeClass('hide');
      }
      // Get the selected video from Dialog
      reader.readAsDataURL(this.files[0]);
  });
}

function stepsProcedure(){
  $('.steps-wrapper [data-step="second-step"]').on('click', function(){
    $('#prs-main').addClass('hide-sections');
    $('#prs-final-main').removeClass('hide-sections').addClass('show-sections');
    /*$('.progress-list .progress-list-item').removeClass('active');
    $('.progress-list .progress-list-item:nth-child(1)').addClass('complete');
    $('.progress-list .progress-list-item:nth-child(2)').addClass('active');*/

  });
  $('.steps-wrapper [data-back-step="first-back-step"]').on('click', function(){
    $('#prs-final-main').addClass('hide-sections');
    $('#prs-main').removeClass('hide-sections').addClass('show-sections');
/*    $('.progress-list .progress-list-item:first-child').addClass('active');
    $('.progress-list .progress-list-item:nth-child(2)').removeClass('active');
    $('.progress-list .progress-list-item:nth-child(2)').removeClass('complete');*/
  });
}

function tooltipInit() {
  $('.payment-timeline [data-toggle="tooltip"]').tooltip();
}

function datepickerInit() {
  $(".datepicker-init").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
}

function verificationProcedure(){
  $('.verification-process [data-verification="final-verify-step"]').on('click', function(){
    $('#pre_verify').addClass('hide-sections');
    $('#final_verify').removeClass('hide-sections').addClass('show-sections');

  });

}

function editUserProfile(){
  $(document).on('click', '.user-edit-panel [data-user="edit-user"]', function(){
    $(this).html("<i class='fa fa-check'></i> Save").removeAttr('data-user').attr('data-save', 'save-details');
    $('.editable-wrap').removeClass('none_ditable').addClass('editable');
    $('.editable-wrap').find('.form-group').find('.edit-mode').attr('disabled', false);
    saveUserProfile();
  });
  
}

function saveUserProfile(){
  $(document).on('click', '.user-edit-panel [data-save="save-details"]', function(){   
    $(this).html("<i class='fa fa-pencil'></i> Edit").removeAttr('data-save').attr('data-user', 'edit-user');
    $('.editable-wrap').removeClass('editable').addClass('none_ditable');
    $('.editable-wrap').find('.form-group').find('.edit-mode').attr('disabled', true);
  });
}

function billInfoEdit(){
  $(document).on('click', '[data-bill-edit="bill-info-edit"]', function(){
    $(this).html("<i class='fa fa-check'></i> Save").removeAttr('data-bill-edit').attr('data-info-save', 'bill-info-save');
    $("#billingInfo").find(".panel-row").find('input').removeAttr('readonly');
    $("#billingInfo").find(".panel-row").find('.bootstrap-select').removeClass('pointer_none');
    billInfoSave();
  });
}

function billInfoSave(){
  $(document).on('click', '[data-info-save="bill-info-save"]', function(){
    $(this).html("<i class='fa fa-pencil'></i> Edit").removeAttr('data-info-save').attr('data-bill-edit', 'bill-info-edit');
    $("#billingInfo").find(".panel-row").find('input').attr('readonly', 'readonly');
    $("#billingInfo").find(".panel-row").find('.bootstrap-select').addClass('pointer_none');
  });
}


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

/************ User-Tabs-Map ***********/
function tabMyPropertiesinitMap() {
  var uluru = {
    lat: 28.577624,
    lng: 77.314943
  };
  var map = new google.maps.Map(document.getElementById('tab2-map'),{
    zoom: 5,
    center: uluru
  });
  var image = './images/svg-icons/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
  infoWindow = new google.maps.InfoWindow();
  maxZoomService = new google.maps.MaxZoomService();
  map.setOptions({
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false
  });

  marker.addListener('click', function() {
    map.setZoom(20);
    map.setCenter(marker.getPosition());
  });
}
function tabFavPropertiesinitMap() {
  var uluru = {
    lat: 28.577624,
    lng: 77.314943
  };
  var map = new google.maps.Map(document.getElementById('tab3-map'),{
    zoom: 5,
    center: uluru
  });
  var image = './images/svg-icons/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
  infoWindow = new google.maps.InfoWindow();
  maxZoomService = new google.maps.MaxZoomService();
  map.setOptions({
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false
  });

  marker.addListener('click', function() {
    map.setZoom(20);
    map.setCenter(marker.getPosition());
  });
}
function tabViewedPropertiesinitMap() {
  var uluru = {
    lat: 28.577624,
    lng: 77.314943
  };
  var map = new google.maps.Map(document.getElementById('tab4-map'), {
    zoom: 5,
    center: uluru
  });
  var image = './images/svg-icons/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
  infoWindow = new google.maps.InfoWindow();
  maxZoomService = new google.maps.MaxZoomService();
  map.setOptions({
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false
  });

  marker.addListener('click', function() {
    map.setZoom(20);
    map.setCenter(marker.getPosition());
  });
}
/************ User-Tabs-Map ***********/

function initSelectPicker(){
  $('.selectpicker-init').selectpicker('render');
}

function togglePasswordBlock(){
  $('#changepass').on('click', function(){
    $(this).closest('.form-group').next('.changepassblock').find('.passblock').toggle();
  });
}

function closePasswordBlock(){
  $('.changepassblock .close-icon').on('click', function(){
    $(this).closest('.passblock').hide();
  });
}

function imageUploaderInit(){
  var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
}

function fixedMapInit(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $(".main-right-wrap .ibox").addClass('fix-map');
      } else {
          $(".main-right-wrap .ibox").removeClass('fix-map');
      }
  });
}

function customDropdownInit(){
  jQuery(document).ready(function (e) {
    function t(t) {
      e(t).bind("click", function (t) {
        t.preventDefault();
        e(this).parent().fadeOut();
      })
    }
    e("._menu_btn").click(function () {
      var t = e(this).parents(".button-dropdown").children(".menuItemComponent-guest_picker").is(":hidden");
      e(".button-dropdown .menuItemComponent-guest_picker").hide();
      e('.overlay-bg').hide();
      //e(".button-dropdown ._menu_btn").removeClass("active");
      if (t) {
        e(this).parents(".button-dropdown").children(".menuItemComponent-guest_picker").toggle().parents(".button-dropdown").children("._menu_btn").addClass("active");
        e('.overlay-bg').show();
      }
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown") ) {
        e(".button-dropdown .menuItemComponent-guest_picker").hide();
        e('.overlay-bg').hide();
      }
      
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
    })
  });
}


function productOwlCarouselInit(){
  $('.more-explore-wrapper .owl-carousel').owlCarousel({
      margin:30,
      nav:true,
      navText: ['<i class="iconvd-chevron-left"></i>', '<i class="iconvd-chevron-right"></i>'],
      responsiveClass:true, 
      loop:false,
      navRewind: false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1280:{
              items:2
          },
          1400:{
              items:3
          },
          1900:{
              items:4
          }
      }
  });
}

function classificationOwlCarouselInit(){
  $('.classification-carousel-wrap .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      navigation : false,
      dots: false,
      navText: ['<i class="iconvd-chevron-left"></i>', '<i class="iconvd-chevron-right"></i>'],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1280:{
              items:3
          },
          1400:{
              items:4
          },
          1900:{
              items:5
          }
      }
  });
}

function homesOwlCarouselInit(){
  $('.homes-carousel-wrap .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      navigation : false,
      dots: false,
      navText: ['<i class="iconvd-chevron-left"></i>', '<i class="iconvd-chevron-right"></i>'],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1280:{
              items:3
          },
          1400:{
              items:4
          },
          1900:{
              items:5
          }
      }
  });
}
function topCategoriesOwlCarouselInit(){
  $('.top-category-wrap .owl-carousel').owlCarousel({
      margin:30,
      nav:true,
      navText: ['<i class="iconvd-chevron-left"></i>', '<i class="iconvd-chevron-right"></i>'],
      responsiveClass:true, 
      loop:false,
      navRewind: false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:4
          },
          1200:{
              items:3
          },
          1400:{
              items:4
          }
      }
  });
  //movingAllItems();
}

function movingAllItems(){
  $('.top-category-wrap .owl-next').on('click', function(event){
    var $this = $(this);
    if($this.hasClass('clicked')){
      //$this.removeAttr('style').removeClass('clicked');
    
    } else{
      $this.addClass('clicked');
      $this.closest('.owl-nav').closest('.col-md-6').addClass('full-width');
    }
  });
}

function similarPropOwlCarouselInit(){
  $('.similar-prop-carousel-wrap .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      navigation : false,
      dots: false,
      navText: ['<i class="iconvd-chevron-left"></i>', '<i class="iconvd-chevron-right"></i>'],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:2
          },
          1200:{
              items:3
          },
          1400:{
              items:3
          }
      }
  });
}