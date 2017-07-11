(function(window, document, $){
	
	'use strict';

	var hoteList = [
		{
			city: 'tokyo',
			hotel: 'HOTEL MYSTAYS PREMIER',
			address: '',
			img: ''
		},
		{
			city: 'Kyoto',
			hotel: 'HOTEL MYSTAYS Kyoto',
			address: '',
			img: ''
		},
		{
			city: 'Osaka',
			hotel: 'HOTEL MYSTAYS Osaka',
			address: '',
			img: ''
		},
		{
			city: 'Kanazawa',
			hotel: 'HOTEL MYSTAYS Kanazawa',
			address: '',
			img: ''
		}
	];

	window.myStays = {};

	var options = '<option value="default">Please Select a hotel</option>';

	myStays.init = function() {
		console.log(123)
		for (var i = 0; i < hoteList.length; i++) {
			options += '<option value="'+ hoteList[i].city +'">' + hoteList[i].hotel + '</option>';
		}
		$('#hotelName').html(options);
		$( ".js-datepicker" ).datepicker();
	};

	$('#main-form-btn').on('click', function(){
		console.log($('#mainForm').serializeArray());
		console.log($('#mainForm').serialize());

	});

	$(document).ready(myStays.init);

})(window, document, jQuery);