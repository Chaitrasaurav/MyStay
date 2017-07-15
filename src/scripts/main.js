(function(window, document, $){
	
	'use strict';

	var cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER Akasaka',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP',
					img: 'lazyfonz1.png',
					id: 'jptok26324'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Hamamatsucho',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'lazyfonz1.png',
					id: 'tokyo1'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER Omori',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'lazyfonz1.png',
					id: 'tokyo2'
				},
				{
					name: 'HOTEL MYSTAYS Asakusa bashi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo3'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo4'
				},
				{
					name: 'HOTEL MYSTAYS Gotanda Station',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo5'
				},
				{
					name: 'HOTEL MYSTAYS Hamamatsucho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo6'
				},
				{
					name: 'HOTEL MYSTAYS Haneda',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo7'
				},
				{
					name: 'HOTEL MYSTAYS Higashi Ikebukuroa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo8'
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
					id: 'kyoto1'
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
					id: 'osaka1'
				},
				{
					name: 'HOTEL MYSTAYS Otemae',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka2'
				},
				{
					name: 'HOTEL MYSTAYS Sakaisuji Honmachi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka3'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka4'
				},
				{
					name: 'HOTEL MYSTAYS Shinsaibashi East',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka5'
				},
				{
					name: 'HOTEL MYSTAYS Shin Osaka Conference Center',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka6'
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
					id: 'kanazawa1'
				},
				{
					name: 'HOTEL MYSTAYS Kanazawa Castle',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kanazawa2'
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
					id: 'maihama-urayasu1'
				},
				{
					name: 'MYSTAYS Shin Urayasu Conference Center',
					address: '',
					img: 'lazyfonz1.png',
					id: 'maihama-urayasu2'
				},
				{
					name: 'FLEXSTAY INN Shin Urayasu',
					address: '',
					img: 'lazyfonz1.png',
					id: 'maihama-urayasu3'
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
					id: 'tachikawa1'
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
					id: 'kawasaki1'
				},
				{
					name: 'FLEXSTAY INN Kawasaki Ogawacho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kawasaki2'
				},
				{
					name: 'FLEXSTAY INN Tamagawa',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kawasaki3'
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
					id: 'yokohama1'
				},
				{
					name: 'HOTEL MYSTAYS Yokohama Kannai',
					address: '',
					img: 'lazyfonz1.png',
					id: 'yokohama2'
				},
				{
					name: 'FLEXSTAY INN Sakuragicho',
					address: '',
					img: 'lazyfonz1.png',
					id: 'yokohama3'
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
					id: 'chiba1'
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
					id: 'tochigi1'
				},
				{
					name: 'Hotel Épinard Nasu',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tochigi2'
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
					id: 'hokkaido1'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Aspen',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido2'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido3'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Nakajima Park Annex',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido4'
				},
				{
					name: 'HOTEL MYSTAYS Sapporo Station',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido5'
				},
				{
					name: 'ART HOTEL ASAHIKAWA',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido6'
				},
				{
					name: 'Hotel Nord Otaru',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido7'
				},
				{
					name: 'Hotel Sonia Otaru',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido8'
				},
				{
					name: 'Hakodate Kokusai Hotel',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido9'
				},
				{
					name: 'Hotel Nets Hakodate',
					address: '',
					img: 'lazyfonz1.png',
					id: 'hokkaido10'
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
					id: 'aomori1'
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
					id: 'yamanashi1'
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
					id: 'nagoya1'
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
					id: 'niigata1'
				},
				{
					name: 'ART HOTEL JOETSU',
					address: '',
					img: 'lazyfonz1.png',
					id: 'niigata2'
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
					id: 'kagawa1'
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
					id: 'ehime1'
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
					id: 'fukuoka1'
				},
				{
					name: 'HOTEL MYSTAYS Fukuoka Tenjin',
					address: '',
					img: 'lazyfonz1.png',
					id: 'fukuoka2'
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
					id: 'oita1'
				},
				{
					name: 'Beppu Kamenoi Hotel',
					address: '',
					img: 'lazyfonz1.png',
					id: 'oita2'
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
					id: 'okinawa1'
				},
				{
					name: 'Fusaki Resort Village (Ishigaki-jima)',
					address: '',
					img: 'lazyfonz1.png',
					id: 'okinawa2'
				}
			]
		}
	};

	var LoadVideo = function(player_id){

	    var Program = {
	    
	        Init: function(){
	            this.NewPlayer();
	            this.EventHandler();
	        },

	        NewPlayer: function(){
	            var _this = this;
	            this.Player = new YT.Player(player_id, {});
	            _this.Player.$element = $('#' + player_id);
	        },

	        Play: function(){
	        	if( this.Player.getPlayerState() === 1 ) return;
	            this.Player.playVideo();
	        },

	        Pause: function(){
	        	if( this.Player.getPlayerState() === 2 ) return;
	            this.Player.pauseVideo();
	        },

	        ScrollControl: function(){
	        	if( Utils.IsElementInViewport(this.Player.$element[0]) ) this.Play();
	            else this.Pause();
	        },

	        EventHandler: function(){
	            var _this = this;
	            $(window).on('scroll', function(){
	                _this.ScrollControl();
	            });
	        }
	        
	    };
	    
	    var Utils = {
	        IsElementInViewport: function(el){
	            if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
	            var rect = el.getBoundingClientRect();
	            return (
	                rect.top >= 0 &&
	                rect.left >= 0 &&
	                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	            );
	        }
	        
	    };
	    
	    return Program.Init();

	};

	window.myStays = {};

	var options = '<option value="">Please Select a Hotel</option>';

	myStays.init = function() {

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

		function matchStart(term, text, obj) {
	      if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
		    return true;
		  }
		  return false;
	    }

		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) { 
			$( ".js-city" ).select2({
				containerCssClass: 'form-city-container',
        		dropdownCssClass: 'form-city-container-options',
				matcher: oldMatcher(matchStart)
			});
		});

		$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) { 
			$( ".js-hotel" ).select2({
				containerCssClass: 'form-city-container',
        		dropdownCssClass: 'form-city-container-options',
        		matcher: oldMatcher(matchStart)
			});
		});

		$( ".js-datepicker.check-in" ).datepicker({
			dateFormat: "mm/dd/yy",
			minDate: new Date(),
			onSelect: function(dateText, inst) {
				var date2 = $( ".js-datepicker.check-in" ).datepicker('getDate');
		            date2.setDate(date2.getDate() + 1);
		            $( ".js-datepicker.check-out" ).datepicker('setDate', date2);
		            //sets minDate to dt1 date + 1
		            $( ".js-datepicker.check-out" ).datepicker('option', 'minDate', date2);

		        //$( ".js-datepicker.check-out" ).datepicker("option","minDate", $( ".js-datepicker.check-in" ).datepicker("getDate"));
		    }
		});
		$( ".js-datepicker.check-out" ).datepicker({
			dateFormat: "mm/dd/yy",
		});

		// var hotelsSelected = cityHotelMap[selectedCity].hotels;

		for(var city in cityHotelMap) {
				var hotelsSelected = cityHotelMap[city].hotels;
				for (var i = 0; i < hotelsSelected.length; i++) {
					options += '<option value="'+ hotelsSelected[i].id +'">' + hotelsSelected[i].name + '</option>';
				}
				$('.js-hotel').html(options);
		};

		createSliderElements('tokyo');
		window.onYouTubeIframeAPIReady = function(){
			LoadVideo('playerA');
		}
	};

	$('#main-form-btn').on('click', function(){
		var $this = $(this),
			$form = $this.parents("form"),
			isValid = true;

		$form.find(':input.required').each(function(index){
		    console.log(this.value)
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
			queryParams += '&children1=0&rooms=1&code=5&locale=en_GB&currency=JPY&stid=2hj7fselc&=undefined'
			var url = 'https://www.book-secure.com/index.php?' + queryParams;
			var win = window.open(url, '_blank');
  			win.focus();
		}
		//https://www.book-secure.com/index.php?
		//s=results
		//&property=jptok26324
		//&arrival=2017-07-12
		//&departure=2017-07-13]
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
			options = '<option value="">Please Select a Hotel</option>';
		if(hotelsSelected.length){
			for (var i = 0; i < hotelsSelected.length; i++) {
				options += '<option value="'+ hotelsSelected[i].id +'">' + hotelsSelected[i].name + '</option>';
			}
			$('.js-hotel').empty().html(options);
		}
	});

	$('.js-check-box').change(function() {
        $('.js-main-form-btn').attr("disabled", !$(this).is(":checked"));
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
			item += '<li><img data-lazy="../dist/images/' + hotelData.img + '" /> <h6>'+ hotelData.name +'</h6> <p>'+ hotelData.address +'</p> <button class="js-slider-choose" data-city="' + city + '" data-hotel="' + hotelData.name + '" data-property="' + hotelData.id + '">Select Hotel</button></li>';
		};
		
		$('.js-slider').empty().append(item).slick({
		  lazyLoad: 'ondemand',
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  dots: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});	
	};

	$(document).on('click', '.js-slider-choose', function(e){
		var hotelData = $(this).data();
		$('html, body').animate({
	        scrollTop: $('#mainForm').offset().top
	    }, 2000);
		$('#mainForm').find('#city').val(hotelData.city).trigger('change');
		$('#mainForm').find('#property').val(hotelData.property);
	});

	$(document).ready(myStays.init);

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$(".campaign_link").click(function() {
	    $('html,body').animate({
	    scrollTop: $(".stage__form").offset().top},
	        'slow');
	});

	$(".select-language").click(function() {
	    $('ul.header_language').toggleClass('active');
	});

	if ($(window).width() < 767) {
	   $(".sitemap_links").click(function(e) {  
	   		$('.sitemap_links ul').removeClass('active');
		    $(this).children('ul').toggleClass('active');
		});
	}

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
