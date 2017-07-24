(function(window, document, $){
	
	'use strict';

	window.myStays = {};

	var options = '<option value="">Please select a Hotel</option>';

	myStays.init = function() {
		var query= {},
			cityHotelMap = window.cityHotelMap;
		
	    function gotoDate(month, year) {
		    $(".js-datepicker-container").each(function (i, el) {
		        var inst = $.datepicker._getInst(el);
		        inst.drawMonth = inst.selectedMonth = month;
		        inst.drawYear = inst.selectedYear = year;
		        $.datepicker._notifyChange(inst);
		        $.datepicker._adjustDate(el);
		    });
		}		

		$.datepicker.regional[$('body').data('i18n')];

		$('input.js-datepicker').click(function(e){
			if(!$('.js-select-guest-container').hasClass('hidden')) {
		      	$('.js-select-guest-container').addClass('hidden');
		    }	
			$('.js-datepicker-modal').removeClass('hidden');
			$('.check-in').removeClass('js-is-invalid');
			$('.check-out').removeClass('js-is-invalid');
			//
			if($(e.target).hasClass('check-in')) {
				if($(e.target).val()) {
					var date = $(e.target).val();
					gotoDate(new Date(date).getMonth(), new Date(date).getFullYear());
					$('.check-out').removeClass('js-datepicker-highlight');
					$(e.target).addClass('js-datepicker-highlight');
				} else {
					$(e.target).addClass('js-datepicker-highlight');
					$(".js-datepicker-container").datepicker( "option", "gotoCurrent", true );		
				}
			} else if($(e.target).hasClass('check-out')) {
				if($(e.target).val()) {
					var date = $(e.target).val();
					gotoDate(new Date(date).getMonth(), new Date(date).getFullYear());
					$('.check-in').addClass('js-datepicker-highlight');
				}
				else {
					if(!$('.check-in').val().length) {
						$('.check-in').addClass('js-datepicker-highlight');
						$(".js-datepicker-container").datepicker( "option", "gotoCurrent", true );
					} else {
						$(e.target).addClass('js-datepicker-highlight');
						$('.check-in').removeClass('js-datepicker-highlight');
						var date = $('.check-in').val();
						gotoDate(new Date(date).getMonth(), new Date(date).getFullYear());
					}
				}
			}
		});
		var numberOfMonths = 2;
		if($(window).width() < 768) {
			numberOfMonths = 1;
		}

		$(".js-datepicker-container").datepicker({
			minDate: 0,
			numberOfMonths: numberOfMonths,
			beforeShowDay: function(date) {
				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#checkIn").val());
				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#checkOut").val());
				var className = "dp-highlight",
					booleanFlag = true;
				if((date1 && date.getTime() == date1.getTime()) || (date2 && date.getTime() == date2.getTime())) {
					className = "dp-highlighted";
				}
				if(date1 && !date2 && date > date1) {
					
					className = 'dp-highlight-hover';
				}
				//console.log(date)
				return [booleanFlag, date1 && ((date.getTime() == date1.getTime()) || (!date2 && (date > date1)) || (date2 && date >= date1 && date <= date2)) ? className : ""];
			},
			onSelect: function(dateText, inst) {
				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#checkIn").val());
				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#checkOut").val());
                var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

                
                if (!date1 || date2) {
					$("#checkIn").val(dateText).removeClass('js-datepicker-highlight');
					
					if($("#checkIn").hasClass('js-is-invalid')) {
                    	$("#checkIn").removeClass('js-is-invalid');
                    }
					$("#checkOut").val("").addClass('js-datepicker-highlight');
                    $(this).datepicker();
                } else if( selectedDate < date1 ) {
                    $("#checkIn").val( dateText );
                    if($("#checkIn").hasClass('js-is-invalid')) {
                    	$("#checkIn").removeClass('js-is-invalid');
                    }
                    if($("#checkIn").hasClass('js-datepicker-highlight')) {
                		$("#checkIn").removeClass('js-datepicker-highlight');
                		$("#checkOut").addClass('js-datepicker-highlight');
                	}
                    $(this).datepicker();
                } else {
                	if($("#checkIn").hasClass('js-datepicker-highlight')) {
                		$("#checkIn").val(dateText).removeClass('js-datepicker-highlight');
                		$("#checkOut").addClass('js-datepicker-highlight');
                	} else {
                		$("#checkOut").val(dateText).removeClass('js-datepicker-highlight');
						if(!$("#checkOut").hasClass('js-is-invalid')) {
	                    	$("#checkOut").removeClass('js-is-invalid');
	                    }
	                    if(!$('.js-datepicker-modal').hasClass('hidden')) {
					      	$('.js-datepicker-modal').addClass('hidden');
					    }
                	}
                	$(this).datepicker();
				}

				if($('body').hasClass('ja_JP')) {
	            	if($("#checkIn").val().length) {
	            		var dateArray = $("#checkIn").val().split('-');
	            		$("#checkIn").siblings('input[name="ciDateY"]').val(dateArray[0]);
		            	$("#checkIn").siblings('input[name="ciDateM"]').val(dateArray[1]);
		            	$("#checkIn").siblings('input[name="ciDateD"]').val(dateArray[2]);
	            	}
	            	if($("#checkOut").val().length) {
	            		var dateArray = $("#checkOut").val().split('-');
	            		$("#checkOut").siblings('input[name="coDateY"]').val(dateArray[0]);
		            	$("#checkOut").siblings('input[name="coDateM"]').val(dateArray[1]);
		            	$("#checkOut").siblings('input[name="coDateD"]').val(dateArray[2]);
	            	}
	            }
			}
		});

		$('.js-close-datepicker').click(function() {
            $(".js-datepicker-modal").addClass('hidden');
        });

		function formatCitySlider (d) {
			if(d.disabled) return; 
	    	var info = '';
	    	if(cityHotelMap[d.id].hotels.length > 1) {
	    		info += '<span> (' + cityHotelMap[d.id].hotels.length + ' Hotels) </span>';
	    	} else {
	    		info += '<span> (' + cityHotelMap[d.id].hotels.length + ' Hotel) </span>';
	    	}
	    	return $('<p class="option-city">' + d.text + ' ' + info +'<p>');
		};

		$( ".js-slider-control" ).select2({
			containerCssClass: 'city-container',
        	dropdownCssClass: 'city-container-options',
			minimumResultsForSearch: -1,
		    templateResult: formatCitySlider,
		    templateSelection: formatCitySlider
		});

		function formatTabSelector(d) {
			if(d.disabled) return;
			var icon = $('.js-tabs li[data-tab="'+ d.id +'"]').find('i')[0].outerHTML;
	    	return $('<span class="option-tab">' + icon + d.text +'<span>');
		};

		$( ".js-tabs-select" ).select2({
			containerCssClass: 'tab-select-container',
        	dropdownCssClass: 'tab-select-container-options',
			minimumResultsForSearch: -1,
		    templateResult: formatTabSelector,
		    templateSelection: formatTabSelector
		});


		function matchStart(term, text, obj) {
		  if(!obj.id.length) return;
		  
		  if (text.toUpperCase().indexOf(term.toUpperCase()) > -1 ) {
	          return true;
	      }
		  return false;
	    }

	    function format(d) {
	      if(!$('.js-datepicker-modal').hasClass('hidden'))	{
	      	$('.js-datepicker-modal').addClass('hidden');
	      }
	      if(!$('.js-select-guest-container').hasClass('hidden')) {
	      	$('.js-select-guest-container').addClass('hidden');
	      }	
	      if(d.id && d.id.length) {
	      	var term	= query.term || '';
		    var result = highlightMatch(d.text, term);
		    return result;
	      }
	    }

	    function formatSelection(d) {
	      return d.text;
	    }

	    function highlightMatch (text, term) {
	      var match = text.toUpperCase().indexOf(term.toUpperCase());
	      var $result = $('<span></span>');
	      
	      if (match < 0) {
	        return $result.text(text);
	      }
	      $result.text(text.substring(0, match));
	      var $match = $('<span class="select2-rendered__match"></span>');
	      $match.text(text.substring(match, match + term.length));
	      $result.append($match);
	      $result.append(text.substring(match + term.length));
	      return $result;
	    }

		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) { 
			$( ".js-city" ).select2({
				containerCssClass: 'form-city-container',
        		dropdownCssClass: 'form-city-container-options',
				matcher: oldMatcher(matchStart),
				templateResult: format,
		    	templateSelection: formatSelection,
		    	language: {
	          		searching: function (params) {
	            		query = params;
	            		return 'Searching…';
	          		}
	        	}
			});
		});

		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) { 
			$( ".js-hotel" ).select2({
				containerCssClass: 'form-city-container',
        		dropdownCssClass: 'form-city-container-options',
        		matcher: oldMatcher(matchStart),
				templateResult: format,
		    	templateSelection: formatSelection,
		    	language: {
	          		searching: function (params) {
	            		query = params;
	            		return 'Searching…';
	          		}
	        	}
			});
		});

		var checkinFlag = false;

		//$.datepicker.regional[$('body').data('i18n')];
		// $( ".js-datepicker.check-in" ).datepicker({
		// 	dateFormat: "yy-mm-dd",
		// 	minDate: new Date(),
		// 	onSelect: function(dateText, inst) {
		// 		var date2 = $( ".js-datepicker.check-in" ).datepicker('getDate');
		//             date2.setDate(date2.getDate() + 1);
		//             $( ".js-datepicker.check-out" ).datepicker('setDate', date2);
		//             $( ".js-datepicker.check-out" ).datepicker('option', 'minDate', date2);
		//             checkinFlag = true;
		            
		//             if($('body').hasClass('ja_JP')) {
		//             	var dateArray = dateText.split('-');
		//             	$(this).siblings('input[name="ciDateY"]').val(dateArray[0]);
		//             	$(this).siblings('input[name="ciDateM"]').val(dateArray[1]);
		//             	$(this).siblings('input[name="ciDateD"]').val(dateArray[2]);
		//             	if(!$( ".js-datepicker.check-out" ).val()) {
		//             		var month = date2.getMonth() + 1;
		// 	            		month = month < 10 ? '0' + month : month;
		// 	            	$( ".js-datepicker.check-out" ).siblings('input[name="coDateY"]').val(date2.getFullYear());
		// 	            	$( ".js-datepicker.check-out" ).siblings('input[name="coDateM"]').val(month);
		// 	            	$( ".js-datepicker.check-out" ).siblings('input[name="coDateD"]').val(date2.getDate());
		//             	}
		//             }

		//             if($(this).hasClass('required') && $(this).hasClass('js-is-invalid')) {
		// 				$(this).removeClass('js-is-invalid');
		// 			}
		// 			if($( ".js-datepicker.check-out" ).hasClass('required') && $( ".js-datepicker.check-out" ).hasClass('js-is-invalid')) {
		// 				$( ".js-datepicker.check-out" ).removeClass('js-is-invalid');
		// 			}
		//     },
		//     onClose: function() {
		//     	if(checkinFlag) {
		//     		setTimeout(function(){
		//     		 $( ".js-datepicker.check-out" ).datepicker("show");
		//     		}, 10);
		//     		checkinFlag = false;
		//     	}
	 //        },
	 //        beforeShow: function (input, inst) {
		//         setTimeout(function () {
		//             inst.dpDiv.css({
		//                 top: $(".js-datepicker").offset().top + 55
		//             });
		//         }, 0);
		//         if(!$('.js-select-guest-container').hasClass('hidden')) {
		//         	$('.js-select-guest-container').addClass('hidden');
		//         }
		//     }
		// });
		// $( ".js-datepicker.check-out" ).datepicker({
		// 	dateFormat: "yy-mm-dd",
	 //        beforeShow: function (input, inst) {
		//         setTimeout(function () {
		//             inst.dpDiv.css({
		//                 top: $(".js-datepicker").offset().top + 55
		//             });
		//         }, 0);
		//         if(!$('.js-select-guest-container').hasClass('hidden')) {
		//         	$('.js-select-guest-container').addClass('hidden');
		//         }
		//     },
		//     onSelect: function(dateText, inst) {
	 //            if($('body').hasClass('ja_JP')) {
	 //            	//console.log(dateText)
		//             var dateArray = dateText.split('-');
	 //            	$(this).siblings('input[name="coDateY"]').val(dateArray[0]);
	 //            	$(this).siblings('input[name="coDateM"]').val(dateArray[1]);
	 //            	$(this).siblings('input[name="coDateD"]').val(dateArray[2]);
	 //            }
		//     }
		// })
		$(".js-datepicker").focus(function () {
	        $('html, body').animate({ scrollTop: $(this).offset().top - 25 }, 1000);
	    });

		for(var city in cityHotelMap) {
				var hotelsSelected = cityHotelMap[city].hotels;
				for (var i = 0; i < hotelsSelected.length; i++) {
					options += '<option value="'+ hotelsSelected[i].id +'">' + hotelsSelected[i].name + '</option>';
				}
				$('.js-hotel').html(options);
		};
		createSliderElements('tokyo');
	};

	$(document).on('mouseover', '.ui-datepicker-calendar td a', function(e){
		if($('.check-out').hasClass('js-datepicker-highlight')) {
			$(this).parents('.ui-datepicker-group').prevAll().find('td.dp-highlight-hover').removeClass('last-cell').addClass('new-cell');
			$(this).parents('tr').prevAll().find('td.dp-highlight-hover').removeClass('last-cell').addClass('new-cell');
			$(this).parent('td').prevAll('td.dp-highlight-hover').removeClass('last-cell').addClass('new-cell');
	    	$(this).parent('td.dp-highlight-hover').addClass('last-cell');
	    	$(this).parent('td').nextAll('td.dp-highlight-hover').removeClass('last-cell').removeClass('new-cell');
	    	$(this).parents('tr').nextAll().find('td.dp-highlight-hover').removeClass('last-cell').removeClass('new-cell');
	    	$(this).parents('.ui-datepicker-group').nextAll().find('td.dp-highlight-hover').removeClass('last-cell').removeClass('new-cell');
		}
    });

	$('#main-form-btn').on('click', function(){
		var $this = $(this),
			$form = $this.parents("form"),
			isValid = true;

		$form.find(':input.required').each(function(index){
		    // console.log(this.value)
		    if(!this.value.length) {
		    	if(!$('body').hasClass('ja_JP') && $(this).hasClass('js-city') && $(this).parents('form').find('.js-hotel').val().length) {
		    		$(this).removeClass('js-is-invalid');
		    	}else {
		    		isValid = false;
		    		$(this).addClass('js-is-invalid');	
		    	}
		    	
		    }else {
		    	$(this).removeClass('js-is-invalid');
		    }
		});

		if(isValid) {
			// console.log($('#mainForm').serializeArray());
			// console.log($('#mainForm').serialize());
			var queryParams = '',
				url;
			if($('body').hasClass('ja_JP')) {
				//queryParams = "";
				$form.serializeArray().forEach(function(value){
					//console.log(value)
					queryParams +=  '&' + value.name + '=' + value.value;
				});

				url = 'https://mystays.rwiths.net/r-withs/tfs0020a.do?' + queryParams;
			} else {
				if($form.serializeArray()[0].name === 'property' && $form.serializeArray()[0].value === ''){
					queryParams = 's=group&group=asiaflexstayinn&filters[region]='+ window.cityHotelMap[$form.find('#city').val()].city;
					$form.serializeArray().forEach(function(value){
						if(value.name !== 'property') {
							//console.log(value)
							queryParams +=  '&' + value.name + '=' + value.value;
						}
					});
				} else {
					queryParams = "s=results";
					$form.serializeArray().forEach(function(value){
						//console.log(value)
						queryParams +=  '&' + value.name + '=' + value.value;
					});
				}
				
				url = 'https://www.book-secure.com/index.php?' + queryParams;
			}
			
			var win = window.open(url, '_blank');
  			win.focus();
		}
		//https://www.book-secure.com/index.php?
		//s=results
		//&property=jptok26324
		//&arrival=2017-07-12
		//&departure=2017-07-13
		//&adults1=2
		//&children1=0
		//&rooms=1
		//&code=5
		//&locale=en_GB
		//&currency=JPY
		//&stid=2hj7fselc
		//&=undefined
	});

	$( ".js-city" ).on('change', function(e) {
		var selectedCity = e.target.value,
			hotelsSelected = cityHotelMap[selectedCity].hotels,
			options = '<option value="">Please select a Hotel</option>';
		if(hotelsSelected.length){
			for (var i = 0; i < hotelsSelected.length; i++) {
				options += '<option value="'+ hotelsSelected[i].id +'">' + hotelsSelected[i].name + '</option>';
			}
			$('.js-hotel').empty().html(options);
			$('.js-hotel').val('').trigger('change')
		}
		if($(e.target).hasClass('required') && $(e.target).hasClass('js-is-invalid')) {
			$(e.target).removeClass('js-is-invalid');
		}
	});

	$( ".js-hotel" ).on('change', function(e) {
		//console.log(e.target.value)
		if(e.target.value === 'jptok28108' || e.target.value === '151373') {
			$(e.target).parents('form').find('.js-select-guest').val(1);
			$(e.target).parents('form').find('.js-total-adult').val(1);
		}
		if($(e.target).hasClass('required') && $(e.target).hasClass('js-is-invalid')) {
			$(e.target).removeClass('js-is-invalid');
		}
		if(!$('body').hasClass('ja_JP') && $(e.target).parents('form').find('.js-city').hasClass('required') && $(e.target).parents('form').find('.js-city').hasClass('js-is-invalid')) {
			$(e.target).parents('form').find('.js-city').removeClass('js-is-invalid');
		}
	});

	$('.js-check-box').change(function() {
		if(!$(this).is(":checked")) {
			$('.js-main-form-btn').empty().text('Members Only');	
		} else {
			$('.js-main-form-btn').empty().text('Book Now with Pepper');
		}
		$('.js-main-form-btn').toggleClass('disabled').attr("disabled", !$(this).is(":checked"));
    });

    $( ".js-slider-control" ).on('change', function(e) {
		var city = e.target.value; 
		$('.js-slider').slick("unslick");	
		createSliderElements(city);
	});

	function createSliderElements(city) {
		var item = '';
		for (var i = 0; i < cityHotelMap[city].hotels.length; i++) {
			var hotelData =  cityHotelMap[city].hotels[i];
			item += '<div><img data-lazy="../dist/images/' + hotelData.img + '" /> <h6>'+ hotelData.name +'</h6> <p>'+ hotelData.address +'</p> <button class="js-slider-choose" data-city="' + city + '" data-hotel="' + hotelData.name + '" data-property="' + hotelData.id + '">Select Hotel</button></div>';
		};
		
		$('.js-slider').empty().append(item).slick({
		  lazyLoad: 'ondemand',
		  slidesToShow: 4,
		  speed: 2000,
		  slidesToScroll: 4,
		  dots: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true,
		        dotsClass: 'custom_paging',
			    customPaging: function (slider, i) {
			        //console.log(slider);
			        var slideNumber   = (i + 1),
			            totalSlides = slider.slideCount;
			        return '<a class="custom-dot"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
			    }
		      }
		    }
		  ]
		});

		setTimeout(function() {
			var stHeight = $('.slick-track').height();
			$('.slick-slide').css('height', (stHeight - 15) + 'px' );	
		}, 100);
	};

	$('.js-slider').on('click', '.js-slider-choose', function(e){
		var hotelData = $(this).data();
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 1000);
		$('#mainForm').find('#city').val(hotelData.city).trigger('change');
		$('#mainForm').find('#property').val(hotelData.property).trigger('change');
	});

	$('.js-tabs-select').on('change', function(e) {
		var tabId = $(this).val();

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$('ul.js-tabs li[data-tab="'+ tabId +'"]').addClass('current');
		$("#"+tabId).addClass('current');
	});

	$('ul.js-tabs li').click(function(){
		var tabId = $(this).attr('data-tab');

		$('ul.js-tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$('.js-tabs-select').val(tabId).trigger('change');
		$(this).addClass('current');
		$("#"+tabId).addClass('current');
	});

	$(".campaign_link").click(function() {
	    $('html,body').animate({
	    scrollTop: $(".stage__form").offset().top},
	        1000);
	});
	$(".subscribe_link").click(function() {
	    $('html,body').animate({
	    scrollTop: $(".subscribe_container").offset().top},
	        1000);
	});
	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
	     	if($('ul.header_language').hasClass('active')) {
	     		$('ul.header_language').removeClass('active');	
	     	}

	     	if(!$('.js-datepicker-modal').hasClass('hidden')) {
	     		$('.js-datepicker-modal').addClass('hidden');
        		$("#checkIn").removeClass('js-datepicker-highlight');
        		$("#checkOut").removeClass('js-datepicker-highlight');
	     	}
	     	
	     	lightboxClose();
	     }
	});

	$(document).click(function(e) {                    
	   if(!$(e.target).hasClass('select-language') && !$(e.target).parent().hasClass('select-language')) {
	     	$('ul.header_language').removeClass('active');	
	   }

	   if(!$(e.target).hasClass('js-datepicker-modal') && !$(e.target).parents().hasClass('js-datepicker-modal') && !$(e.target).parents().hasClass('ui-datepicker-header') && !$(e.target).hasClass('js-datepicker')) {
	     	$('.js-datepicker-modal').addClass('hidden');
	     	$("#checkIn").removeClass('js-datepicker-highlight');
        	$("#checkOut").removeClass('js-datepicker-highlight');	
	   }
	}); 

	$(".select-language").click(function() {

	    $('ul.header_language').toggleClass('active');
	});

	$(".hamburger-menu").click(function() {
	    $('.header_links').toggleClass('active');
	});
	
	if ($(window).width() < 767) {
	   $(".sitemap_links").click(function(e) {  
	   		$('.sitemap_links').removeClass('current');
	   		$(this).addClass('current');
	   		$('.sitemap_links ul').removeClass('active');
		    $(this).children('ul').toggleClass('active');
		});
	}

	$('.js-select-guest').on('click', function(e) {
		$('.js-select-guest-container').toggleClass('hidden');
		$('html, body').animate({
	        scrollTop: $('.js-select-guest').offset().top
	    }, 1000);
	});

	$('.js-cancel-select-guest').on('click', function() {
		$('.js-select-guest-container').toggleClass('hidden');
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 1000);
	});

	$('.js-add-room').on('click', function(){
		//console.log($('.js-room-list').find('li').length)
		var index = $('.js-room-list').find('li').length + 1;
		var list = '<li class="js-room room clearfix" data-room="'+ index +'">\
						<div class="room-container clearfix">\
							<p class="room__heading">Room' + index +'</p>\
							<div class="form__control">\
								<label class="room__label form__label">Adults</label>\
								<div class="input-wrap">\
									<select class="room__field form__field js-adult-count">\
										<option value="1">1</option>\
										<option value="2" selected>2</option>\
										<option value="3">3</option>\
										<option value="4">4</option>\
										<option value="5">5</option>\
										<option value="6">6</option>\
										<option value="7">7</option>\
									</select>\
								</div>\
							</div>\
							<div class="form__control">\
								<label class="room__label form__label">Children</label>\
								<div class="input-wrap">\
									<select class="room__field form__field js-child-count">\
										<option value="0">0</option>\
										<option value="1">1</option>\
										<option value="2">2</option>\
										<option value="3">3</option>\
										<option value="4">4</option>\
										<option value="5">5</option>\
										<option value="6">6</option>\
										<option value="7">7</option>\
									</select>\
								</div>\
							</div>\
						</div>\
						<div class="room__delete">\
							<a href="javascript:;" title="Delete this room" class="room__delete-btn js-delete-room"><i class="icon delete-icon"></i></a>\
						</div>\
					</li>';
		$('.js-room-list').append(list);
	});

	$('.js-room-list').on('click', '.js-delete-room', function(e){
		var $this = $(this);
		$this.parents('li').remove();
	});

	$('.js-room-list').on('change', '.js-child-count', function(e){
		var $this = $(this),
			value = $this.val(),
			$ageList = $this.parents('.js-room').find('.js-child-age-list');

		$ageList.empty();				
		for (var i = 0; i < value; i++) {
			var index = i + 1;
			var $ageField = '<p class="room__heading">Ages</p>\
							<div class="form__con js-child-age-ele">\
								<label class="form__label">Child '+ index + '</label>\
								<div class="input-wrap">\
									<select class="form__field">\
										<option value="1">1</option>\
										<option value="2">2</option>\
										<option value="3">3</option>\
										<option value="4">4</option>\
										<option value="5">5</option>\
										<option value="6">6</option>\
										<option value="7">7</option>\
										<option value="8">8</option>\
										<option value="9">9</option>\
										<option value="10">10</option>\
										<option value="11">11</option>\
										<option value="12">12</option>\
										<option value="13">13</option>\
										<option value="14">14</option>\
									</select>\
								</div>\
							</div>';
			$ageList.append($ageField);
		}
	});

	$('.js-confirm').on('click', function() {
		var adultFields = $('.js-select-guest-container').find('.js-adult-count'),
			childFields = $('.js-select-guest-container').find('.js-child-count'),
			adultCount = 0,
			childCount = 0;

			//console.log(adultFields, childFields);
			for (var i = 0; i < adultFields.length; i++) {
				adultCount += Number(adultFields[i].value);
			}
			for (var i = 0; i < childFields.length; i++) {
				childCount += Number(childFields[i].value);
			}
		$('.js-select-guest').val(adultCount + childCount);	
		$('.js-total-adult').val(adultCount);
		$('.js-total-children').val(childCount);
		$('.js-total-room').val($('.js-room').length);
		$('.js-select-guest-container').toggleClass('hidden');
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 1000);
	});

	$(document).ready(myStays.init);

})(window, document, jQuery);

// window.document.onkeydown = function (e) {
//     if (!e){
//         e = event;
//     }
//     if (e.keyCode == 27){
//         lightbox_close();
//     }
// }
function lightboxOpen(){
    window.scrollTo(0,0);
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
}
function lightboxClose(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
}