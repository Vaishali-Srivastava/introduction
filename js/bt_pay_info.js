	(function() {
    
		var BTFn = {};
	
		BTFn.sendJSON = function($obj) {
	
			$.ajax({
				dataType: "text",
				type: "POST",
				data: { action: "generateclienttoken"},
				url: "bt_cust_field.php",
				success: function (req) {
					BTFn.initBT(req, $obj);
				},
				error: function() {
				}
			});
		};
	
		BTFn.initBT = function(req, $obj) {
	
			// we're on the custom fields tab
			braintree.setup(req, 'custom', {
				id: 'bt_custom_form',
				onReady: function() {
					BTFn.showBtForm();
				},
				onError: function(error) {
					BTFn.showFormErrors(error);
					$obj.show().closest('.btn_container').find('.loader_img').hide();
				},
				paypal:{
					container:'bt_paypal_container',
				}
			});
		};
	
		BTFn.showBtForm = function() {
	
			var eAnimation = this.detectAnimationEvent();
			$('.loader_container').addClass('fadeOut');
	
			$('.loader_container').one(eAnimation, function(event) {
				$('.loader_container').remove();
				$('.bt_form_wrap').removeClass('hide');
				$('.bt_form_wrap').addClass('fadeIn').removeClass('invisible');
			});
		};
	
		BTFn.detectAnimationEvent = function() {
			var t, el = document.createElement("fakeelement");
	
			var animations = {
				"animation"      : "animationend",
				"OAnimation"     : "oAnimationEnd",
				"MozAnimation"   : "animationend",
				"WebkitAnimation": "webkitAnimationEnd"
			}
	
			for (t in animations){
				if (el.style[t] !== undefined){
					return animations[t];
				}
			}
		};
	
		BTFn.showFormErrors = function(error) {
			alert('showFormErrors');
			var inputMap = {
				'number' : '#bt_card_number',
				'cvv' : '#bt_cvv',
				'expirationDate' : '#bt_exp_date'
			};
			if(!error.details) {
				$('.inputFields').addClass('inputError');
			}else{
				var i, errorLength = error.details.invalidFieldKeys.length;
				$('.inputFields').removeClass('inputError');
				for(var i=0; i < errorLength; i++) {
					$(inputMap[error.details.invalidFieldKeys[i]]).addClass('inputError');
				}
			}
		};
	
		$(document).ready(function() {
	
			var $pay_btn = $('.pay-btn');
			BTFn.sendJSON($pay_btn);
			$pay_btn.on('click', function() {
				$(this).hide().closest('.btn_container').find('.loader_img').css('display', 'inline-block');
			});
		});
	})();