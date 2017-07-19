(function(window, document, $){
	
	'use strict';

	var cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER Akasaka',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'lazyfonz1.png',
					id: 'jptok26324'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Hamamatsucho',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'lazyfonz1.png',
					id: 'jptok28530'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Omori',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'lazyfonz1.png',
					id: 'jptok28531'
				},
				{
					name: 'HOTEL MYSTAYS Asakusa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26318'
				},
				{
					name: 'HOTEL MYSTAYS Asakusa bashi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26316'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26323'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda Station',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26951'
				},
				{
					name: 'HOTEL MYSTAYS Hamamatsucho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26322'
				},
				{
					name: 'HOTEL MYSTAYS Haneda',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26798'
				},
				{
					name: 'HOTEL MYSTAYS Higashi Ikebukuroa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26319'
				},
				{
					name: 'HOTEL MYSTAYS Kamata',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'lazyfonz1.png',
					id: 'jptok26325'
				},
				{
					name: 'HOTEL MYSTAYS Kameido',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'lazyfonz1.png',
					id: 'jptok26311'
				},
				{
					name: 'HOTEL MYSTAYS Kanda',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'lazyfonz1.png',
					id: 'jptok26313'
				},
				{
					name: 'HOTEL MYSTAYS Nippori',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26329'
				},
				{
					name: 'HOTEL MYSTAYS Nishi Shinjuku',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26320'
				},
				{
					name: 'HOTEL MYSTAYS Ochanomizu Conference Center',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26310'
				},
				{
					name: 'HOTEL MYSTAYS Ueno East',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok28305'
				},
				{
					name: 'HOTEL MYSTAYS Ueno Inaricho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26312'
				},
				{
					name: 'HOTEL MYSTAYS Ueno Iriyaguchi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26350'
				},
				{
					name: 'FLEXSTAY INN Ekoda',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26345'
				},
				{
					name: 'FLEXSTAY INN Higashi Jujo',
					address: '2-17-54 Akasaka, Minato-ku, Tokyo 107-0052 Japan',
					img: 'lazyfonz1.png',
					id: 'jptok26339'
				},
				{
					name: 'FLEXSTAY INN Iidabashi',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'lazyfonz1.png',
					id: 'jptok26340'
				},
				{
					name: 'FLEXSTAY INN Kiyosumi Shirakawa',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'lazyfonz1.png',
					id: 'jptok26348'
				},
				{
					name: 'FLEXSTAY INN Nakanobu',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26346'
				},
				{
					name: 'FLEXSTAY INN Shinagawa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26341'
				},
				{
					name: 'FLEXSTAY INN Shirogane',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26336'
				},
				{
					name: 'FLEXSTAY INN Sugamo',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26333'
				},
				{
					name: 'FLEXSTAY INN Tokiwadai',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok26344'
				},
				{
					name: 'MyCUBE by MYSTAYS Asakusa Kuramae',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok28108'
				}
			]
		},
		'kyoto':{
			city: 'Kyoto',
			id: 'kyoto',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Kyoto Shijo',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkyo26330'
				}
			]
		},
		'osaka':{
			city: 'Osaka',
			id: 'osaka',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Midosuji Honmachi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa31260'
				},
				{
					name: 'HOTEL MYSTAYS Otemae',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa26328'
				},
				{
					name: 'HOTEL MYSTAYS Sakaisuji Honmachi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa26315'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa26338'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi East',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa28306'
				},
				{
					name: 'HOTEL MYSTAYS Shin Osaka Conference Center',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jposa28304'
				}
			]
		},
		'kanazawa':{
			city: 'Kanazawa',
			id: 'kanazawa',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER Kanazawa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkan26799'
				},
				{
					name: 'HOTEL MYSTAYS Kanazawa Castle',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkan27429'
				}
			]
		},
		'maihama-urayasu':{
			city: 'Maihama/Urayasu',
			id: 'maihama-urayasu',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Maihama',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpura26317'
				},
				{
					name: 'MYSTAYS Shin Urayasu Conference Center',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpura26309'
				},
				{
					name: 'FLEXSTAY INN Shin Urayasu',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpura26342'
				}
			]
		},
		'tachikawa':{
			city: 'Tachikawa',
			id: 'tachikawa',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Tachikawa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jptok27899'
				}
			]
		},
		'kawasaki':{
			city: 'Kawasaki',
			id: 'kawasaki',
			hotels: [
				{
					name: 'FLEXSTAY INN Kawasaki Kaizuka',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkaw26347'
				},
				{
					name: 'FLEXSTAY INN Kawasaki Ogawacho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkaw26337'
				},
				{
					name: 'FLEXSTAY INN Tamagawa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpkaw26335'
				}
			]
		},
		'yokohama':{
			city: 'Yokohama',
			id: 'yokohama',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Yokohama',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpyok26332'
				},
				{
					name: 'HOTEL MYSTAYS Yokohama Kannai',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpyok29010'
				},
				{
					name: 'FLEXSTAY INN Sakuragicho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpyok26343'
				}
			]
		},
		'chiba':{
			city: 'Chiba',
			id: 'chiba',
			hotels: [
				{
					name: 'Shirahama Ocean Resort',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpchi28828'
				}
			]
		},
		'tochigi':{
			city: 'Tochigi',
			id: 'tochigi',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Utsunomiya',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jputs26331'
				},
				{
					name: 'Hotel Épinard Nasu',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpnas28830'
				}
			]
		},
		'hokkaido':{
			city: 'Hokkaido',
			id: 'hokkaido',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER Sapporo Park',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jphok28823'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Aspen',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpsap29702'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpsap27590'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park Annex',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jphok30695'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Station',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpsap29772'
				},
				{
					name: 'ART HOTEL ASAHIKAWA',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jphok28822'
				},
				{
					name: 'Hotel Nord Otaru',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpota28373'
				},
				{
					name: 'Hotel Sonia Otaru',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpota29771'
				},
				{
					name: 'Hakodate Kokusai Hotel',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jphok29664'
				}
			]
		},
		'aomori':{
			city: 'Aomori',
			id: 'aomori',
			hotels: [
				{
					name: 'ART HOTEL HIROSAKI CITY',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpaom28827'
				}
			]
		},
		'yamanashi':{
			city: 'Yamanashi',
			id: 'yamanashi',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Fuji',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpyam29701'
				}
			]
		},
		'nagoya':{
			city: 'Nagoya',
			id: 'nagoya',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Nagoya Sakae',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpnag26321'
				}
			]
		},
		'niigata':{
			city: 'Niigata',
			id: 'niigata',
			hotels: [
				{
					name: 'ART HOTEL NIIGATA STATION',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpchu29824'
				},
				{
					name: 'ART HOTEL JOETSU',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpjoe29825'
				}
			]
		},
		'kagawa':{
			city: 'Kagawa',
			id: 'kagawa',
			hotels: [
				{
					name: 'Resort Hotel Olivean Shodoshima',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpton28829'
				}
			]
		},
		'ehime':{
			city: 'Ehime',
			id: 'ehime',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Matsuyama',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpehi31183'
				}
			]
		},
		'fukuoka':{
			city: 'Fukuoka',
			id: 'fukuoka',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Fukuoka Tenjin Minami',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpfuk26314'
				},
				{
					name: 'HOTEL MYSTAYS Fukuoka Tenjin',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpfuk26326'
				}
			]
		},
		'oita':{
			city: 'Oita',
			id: 'oita',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Oita',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpoit29773'
				},
				{
					name: 'Beppu Kamenoi Hotel',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpbep27802'
				}
			]
		},
		'okinawa':{
			city: 'Okinawa',
			id: 'okinawa',
			hotels: [
				{
					name: 'ART HOTEL ISHIGAKIJIMA',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpoki29665'
				},
				{
					name: 'Fusaki Resort Village (Ishigaki-jima)',
					address: '',
					img: 'lazyfonz1.png',
					id: 'jpoki28825'
				}
			]
		}
	};

	window.myStays = {};

	var options = '<option value="">Please select a Hotel</option>';

	myStays.init = function() {
		var query= {};

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
        	dropdownCssClass: 'city-select-container-options',
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
	      var term	= query.term || '';
	      var result = highlightMatch(d.text, term);
	      return result;
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

		$( ".js-datepicker.check-in" ).datepicker({
			dateFormat: "yy-mm-dd",
			minDate: new Date(),
			onSelect: function(dateText, inst) {
				var date2 = $( ".js-datepicker.check-in" ).datepicker('getDate');
		            date2.setDate(date2.getDate() + 1);
		            $( ".js-datepicker.check-out" ).datepicker('setDate', date2);
		            $( ".js-datepicker.check-out" ).datepicker('option', 'minDate', date2);
		    },
		    onClose: function() {
		    	setTimeout(function(){
		    		 $( ".js-datepicker.check-out" ).datepicker("show");
		    		}, 10);
	        }
		});
		
		$( ".js-datepicker.check-out" ).datepicker({
			dateFormat: "yy-mm-dd",
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

	$('#main-form-btn').on('click', function(){
		var $this = $(this),
			$form = $this.parents("form"),
			isValid = true;

		$form.find(':input.required').each(function(index){
		    // console.log(this.value)
		    if(!this.value.length) {
		    	isValid = false;
		    	$(this).addClass('js-is-invalid');
		    }else {
		    	$(this).removeClass('js-is-invalid');
		    }
		});

		if(isValid) {
			console.log($('#mainForm').serializeArray());
			console.log($('#mainForm').serialize());
			var queryParams = "s=results";
			$form.serializeArray().forEach(function(value){
				console.log(value)
				queryParams +=  '&' + value.name + '=' + value.value;
			});
			queryParams += '&stid=2hj7fselc&=undefined'
			var url = 'https://www.book-secure.com/index.php?' + queryParams;
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
		  speed: 1000,
		  slidesToScroll: 1,
		  dots: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true
		      }
		    }
		  ]
		});	
	};

	$('.js-slider').on('click', '.js-slider-choose', function(e){
		var hotelData = $(this).data();
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 2000);
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
	        3000);
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
	        scrollTop: $('.js-select-guest-container').offset().top
	    }, 1000);
	});

	$('.js-cancel-select-guest').on('click', function() {
		$('.js-select-guest-container').toggleClass('hidden');
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 1000);
	});

	$('.js-add-room').on('click', function(){
		console.log($('.js-room-list').find('li').length)
		var index = $('.js-room-list').find('li').length + 1;
		var list = '<li class="js-room room clearfix" data-room="'+ index +'">\
						<div class="room-container clearfix">\
							<p class="room__heading">Room' + index +'</p>\
							<div class="form__control">\
								<label class="room__label form__label">Adults</label>\
								<div class="input-wrap">\
									<select class="room__field form__field js-adult-count">\
										<option value="1">1</option>\
										<option value="2">2</option>\
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
									</select>\
								</div>\
							</div>\
						</div>\
						<div class="room__age-container js-child-age-list">\
							\
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

			console.log(adultFields, childFields);
			for (var i = 0; i < adultFields.length; i++) {
				adultCount += Number(adultFields[i].value);
			}
			for (var i = 0; i < childFields.length; i++) {
				childCount += Number(childFields[i].value);
			}
		$('.js-select-guest').val(adultCount);
		$('.js-total-children').val(childCount);
		$('.js-total-room').val($('.js-room').length);
		$('.js-select-guest-container').toggleClass('hidden');
	});

	$(document).ready(myStays.init);

})(window, document, jQuery);

window.document.onkeydown = function (e) {
    if (!e){
        e = event;
    }
    if (e.keyCode == 27){
        lightbox_close();
    }
}
function lightboxOpen(){
    window.scrollTo(0,0);
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';  
}
function lightboxClose(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
}
