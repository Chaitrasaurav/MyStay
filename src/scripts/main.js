(function(window, document, $){
	
	'use strict';

	var cityHotelMap = {
		'tokyo': {
			city: 'Tokyo',
			id: 'tokyo',
			hotels: [
				{
					name: 'HOTEL MYSTAYS PREMIER1',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP',
					img: 'lazyfonz1.png',
					id: 'jptok26324'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER2',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123',
					img: 'lazyfonz1.png',
					id: 'tokyo1'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER3',
					address: 'Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs',
					img: 'lazyfonz1.png',
					id: 'tokyo2'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER4',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo3'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER1',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo4'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER2',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo5'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER3',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo6'
				},
				{
					name: 'HOTEL MYSTAYS PREMIER4',
					address: '',
					img: 'lazyfonz1.png',
					id: 'tokyo7'
				}
			]
		},
		'kyoto':{
			city: 'Kyoto',
			id: 'kyoto',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Kyoto',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto1'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto1',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto2'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto2',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto3'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto3',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto4'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto5'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto1',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto6'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto2',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto7'
				},
				{
					name: 'HOTEL MYSTAYS Kyoto3',
					address: '',
					img: 'lazyfonz1.png',
					id: 'kyoto8'
				}
			]
		},
		'osaka':{
			city: 'Osaka',
			id: 'osaka',
			hotels: [
				{
					name: 'HOTEL MYSTAYS Osaka',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka1'
				},
				{
					name: 'HOTEL MYSTAYS Osaka1',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka2'
				},
				{
					name: 'HOTEL MYSTAYS Osaka2',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka3'
				},
				{
					name: 'HOTEL MYSTAYS Osaka3',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka4'
				},
				{
					name: 'HOTEL MYSTAYS Osaka',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka5'
				},
				{
					name: 'HOTEL MYSTAYS Osaka1',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka6'
				},
				{
					name: 'HOTEL MYSTAYS Osaka2',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka7'
				},
				{
					name: 'HOTEL MYSTAYS Osaka3',
					address: '',
					img: 'lazyfonz1.png',
					id: 'osaka8'
				}
			]
		}
	};

	window.myStays = {};

	var options = '<option value="">Please Select a Hotel</option>';

	myStays.init = function() {
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
			console.log(cityHotelMap[city].hotels);
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
			options = '<option value="default">Please Select a Hotel</option>';
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
		  slidesToScroll: 1
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

	$('select[name=country]').on("change", function(e){
      if($(this).val() == 'EN'){
        window.location.assign("../views/english.html");
      }else if($(this).val() == 'JP'){
      	window.location.assign("../views/japanese.html");
      }
      else if($(this).val() == 'KR'){
      	window.location.assign("../views/korean.html");
      }
      else if($(this).val() == 'CNS'){
      	window.location.assign("../views/simplified-chinese.html");
      }
      else if($(this).val() == 'CNT'){
      	window.location.assign("../views/traditional-chinese.html");
      }
   });
	$(".campaign_link").click(function() {
	    $('html,body').animate({
	    scrollTop: $(".stage__form").offset().top},
	        'slow');
	});

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