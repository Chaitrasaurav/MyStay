function lightboxOpen(){document.getElementById("light").style.display="block",document.getElementById("fade").style.display="block"}function lightboxClose(){document.getElementById("light").style.display="none",document.getElementById("fade").style.display="none"}!function(t,e,a){"use strict";function s(t){for(var e="",s=0;s<cityHotelMap[t].hotels.length;s++){var i=cityHotelMap[t].hotels[s];e+='<div><img data-lazy="../dist/images/'+i.img+'" /> <h6>'+i.name+"</h6> <p>"+i.address+'</p> <button class="js-slider-choose" data-city="'+t+'" data-hotel="'+i.name+'" data-property="'+i.id+'">Select Hotel</button></div>'}a(".js-slider").empty().append(e).slick({lazyLoad:"ondemand",slidesToShow:4,speed:2e3,slidesToScroll:4,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,dotsClass:"custom_paging",customPaging:function(t,e){return'<a class="custom-dot"><span class="string">'+(e+1)+"/"+t.slideCount+"</span></a>"}}}]}),setTimeout(function(){var t=a(".slick-track").height();a(".slick-slide").css("height",t-15+"px")},100)}t.myStays={};var i='<option value="">Please select a Hotel</option>';myStays.init=function(){function e(t){if(!t.disabled){var e="";return p[t.id].hotels.length>1?e+="<span> ("+p[t.id].hotels.length+" Hotels) </span>":e+="<span> ("+p[t.id].hotels.length+" Hotel) </span>",a('<p class="option-city">'+t.text+" "+e+"<p>")}}function o(t){if(!t.disabled){var e=a('.js-tabs li[data-tab="'+t.id+'"]').find("i")[0].outerHTML;return a('<span class="option-tab">'+e+t.text+"<span>")}}function n(t,e,a){if(a.id.length)return e.toUpperCase().indexOf(t.toUpperCase())>-1}function l(t){if(t.id&&t.id.length){var e=d.term||"";return r(t.text,e)}}function c(t){return t.text}function r(t,e){var s=t.toUpperCase().indexOf(e.toUpperCase()),i=a("<span></span>");if(s<0)return i.text(t);i.text(t.substring(0,s));var o=a('<span class="select2-rendered__match"></span>');return o.text(t.substring(s,s+e.length)),i.append(o),i.append(t.substring(s+e.length)),i}var d={},p=t.cityHotelMap;a.datepicker.regional[a("body").data("i18n")],a("input.js-datepicker").click(function(t){a(".js-datepicker-modal").removeClass("hidden"),a(".js-datepicker-container").datepicker("option","gotoCurrent",!0)}),a(".js-datepicker-container").datepicker({minDate:0,numberOfMonths:2,beforeShowDay:function(t){var e=a.datepicker.parseDate(a.datepicker._defaults.dateFormat,a("#checkIn").val()),s=a.datepicker.parseDate(a.datepicker._defaults.dateFormat,a("#checkOut").val()),i="dp-highlight",o=!0;return(e&&t.getTime()==e.getTime()||s&&t.getTime()==s.getTime())&&(i="dp-highlighted"),t||(o=!1),[o,e&&(t.getTime()==e.getTime()||s&&t>=e&&t<=s)?i:""]},onSelect:function(t,e){var s=a.datepicker.parseDate(a.datepicker._defaults.dateFormat,a("#checkIn").val()),i=a.datepicker.parseDate(a.datepicker._defaults.dateFormat,a("#checkOut").val()),o=a.datepicker.parseDate(a.datepicker._defaults.dateFormat,t);if(!s||i?(a("#checkIn").val(t),a("#checkIn").hasClass("js-is-invalid")&&a("#checkIn").removeClass("js-is-invalid"),a("#checkOut").val(""),a(this).datepicker()):o<s?(a("#checkIn").val(t),a("#checkIn").hasClass("js-is-invalid")&&a("#checkIn").removeClass("js-is-invalid"),a(this).datepicker()):(a("#checkOut").val(t),a("#checkOut").hasClass("js-is-invalid")&&a("#checkOut").removeClass("js-is-invalid"),a(this).datepicker()),a("body").hasClass("ja_JP")){if(a("#checkIn").val().length){n=a("#checkIn").val().split("-");a("#checkIn").siblings('input[name="ciDateY"]').val(n[0]),a("#checkIn").siblings('input[name="ciDateM"]').val(n[1]),a("#checkIn").siblings('input[name="ciDateD"]').val(n[2])}if(a("#checkOut").val().length){var n=a("#checkOut").val().split("-");a("#checkOut").siblings('input[name="coDateY"]').val(n[0]),a("#checkOut").siblings('input[name="coDateM"]').val(n[1]),a("#checkOut").siblings('input[name="coDateD"]').val(n[2])}}}}),a(".js-close-datepicker").click(function(){a(".js-datepicker-modal").addClass("hidden")}),a(".js-slider-control").select2({containerCssClass:"city-container",dropdownCssClass:"city-container-options",minimumResultsForSearch:-1,templateResult:e,templateSelection:e}),a(".js-tabs-select").select2({containerCssClass:"tab-select-container",dropdownCssClass:"tab-select-container-options",minimumResultsForSearch:-1,templateResult:o,templateSelection:o}),a.fn.select2.amd.require(["select2/compat/matcher"],function(t){a(".js-city").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(n),templateResult:l,templateSelection:c,language:{searching:function(t){return d=t,"Searching…"}}})}),a.fn.select2.amd.require(["select2/compat/matcher"],function(t){a(".js-hotel").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(n),templateResult:l,templateSelection:c,language:{searching:function(t){return d=t,"Searching…"}}})});for(var u in p){for(var h=p[u].hotels,m=0;m<h.length;m++)i+='<option value="'+h[m].id+'">'+h[m].name+"</option>";a(".js-hotel").html(i)}s("tokyo");var v=0;a(".tabs .tab-content").each(function(){v=a(this).height()>v?a(this).height():v}),a(t).width()>=768&&a(".tabs .tab-content").height(v)},a("#main-form-btn").on("click",function(){var e=a(this).parents("form"),s=!0;if(e.find(":input.required").each(function(t){this.value.length?a(this).removeClass("js-is-invalid"):(s=!1,a(this).addClass("js-is-invalid"))}),s){var i,o="";a("body").hasClass("ja_JP")?(e.serializeArray().forEach(function(t){o+="&"+t.name+"="+t.value}),i="https://mystays.rwiths.net/r-withs/tfs0020a.do?"+o):("property"===e.serializeArray()[0].name&&""===e.serializeArray()[0].value?(o="s=group&group=asiaflexstayinn&filters[region]="+t.cityHotelMap[e.find("#city").val()].city,e.serializeArray().forEach(function(t){"property"!==t.name&&(o+="&"+t.name+"="+t.value)})):(o="s=results",e.serializeArray().forEach(function(t){o+="&"+t.name+"="+t.value})),i="https://www.book-secure.com/index.php?"+o),t.open(i,"_blank").focus()}}),a(".js-city").on("change",function(t){var e=t.target.value,s=cityHotelMap[e].hotels,i='<option value="">Please select a Hotel</option>';if(s.length){for(var o=0;o<s.length;o++)i+='<option value="'+s[o].id+'">'+s[o].name+"</option>";a(".js-hotel").empty().html(i),a(".js-hotel").val("").trigger("change")}a(t.target).hasClass("required")&&a(t.target).hasClass("js-is-invalid")&&a(t.target).removeClass("js-is-invalid")}),a(".js-hotel").on("change",function(t){"jptok28108"!==t.target.value&&"151373"!==t.target.value||a(t.target).parents("form").find("#adults1").val(1),a(t.target).hasClass("required")&&a(t.target).hasClass("js-is-invalid")&&a(t.target).removeClass("js-is-invalid")}),a(".js-check-box").change(function(){a(this).is(":checked")?a(".js-main-form-btn").empty().text("Book Now with Pepper"):a(".js-main-form-btn").empty().text("Members Only"),a(".js-main-form-btn").toggleClass("disabled").attr("disabled",!a(this).is(":checked"))}),a(".js-slider-control").on("change",function(t){var e=t.target.value;a(".js-slider").slick("unslick"),s(e)}),a(".js-slider").on("click",".js-slider-choose",function(t){var e=a(this).data();a("html, body").animate({scrollTop:a("#mainForm").offset().top},1e3),a("#mainForm").find("#city").val(e.city).trigger("change"),a("#mainForm").find("#property").val(e.property).trigger("change")}),a(".js-tabs-select").on("change",function(t){var e=a(this).val();a("ul.tabs li").removeClass("current"),a(".tab-content").removeClass("current"),a('ul.js-tabs li[data-tab="'+e+'"]').addClass("current"),a("#"+e).addClass("current")}),a("ul.js-tabs li").click(function(){var t=a(this).attr("data-tab");a("ul.js-tabs li").removeClass("current"),a(".tab-content").removeClass("current"),a(".js-tabs-select").val(t).trigger("change"),a(this).addClass("current"),a("#"+t).addClass("current")}),a(".campaign_link").click(function(){a("html,body").animate({scrollTop:a(".stage__form").offset().top},1e3)}),a(".subscribe_link").click(function(){a("html,body").animate({scrollTop:a(".subscribe_container").offset().top},1e3)}),a(e).keyup(function(t){27==t.keyCode&&(a("ul.header_language").hasClass("active")&&a("ul.header_language").removeClass("active"),lightboxClose())}),a(e).click(function(t){a(t.target).hasClass("select-language")||a(t.target).parent().hasClass("select-language")||a("ul.header_language").removeClass("active")}),a(".select-language").click(function(){a("ul.header_language").toggleClass("active")}),a(".hamburger-menu").click(function(){a(".header_links").toggleClass("active")}),a(t).width()<767&&a(".sitemap_links").click(function(t){a(".sitemap_links").removeClass("current"),a(this).addClass("current"),a(".sitemap_links ul").removeClass("active"),a(this).children("ul").toggleClass("active")}),a(".js-select-guest").on("click",function(t){a(".js-select-guest-container").toggleClass("hidden"),a("html, body").animate({scrollTop:a(".js-select-guest").offset().top},1e3)}),a(".js-cancel-select-guest").on("click",function(){a(".js-select-guest-container").toggleClass("hidden"),a("html, body").animate({scrollTop:a("#mainForm").offset().top},1e3)}),a(".js-add-room").on("click",function(){var t=a(".js-room-list").find("li").length+1,e='<li class="js-room room clearfix" data-room="'+t+'">\t\t\t\t\t\t<div class="room-container clearfix">\t\t\t\t\t\t\t<p class="room__heading">Room'+t+'</p>\t\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t\t<label class="room__label form__label">Adults</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="room__field form__field js-adult-count">\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2" selected>2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t\t<label class="room__label form__label">Children</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="room__field form__field js-child-count">\t\t\t\t\t\t\t\t\t\t<option value="0">0</option>\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="room__delete">\t\t\t\t\t\t\t<a href="javascript:;" title="Delete this room" class="room__delete-btn js-delete-room"><i class="icon delete-icon"></i></a>\t\t\t\t\t\t</div>\t\t\t\t\t</li>';a(".js-room-list").append(e)}),a(".js-room-list").on("click",".js-delete-room",function(t){a(this).parents("li").remove()}),a(".js-room-list").on("change",".js-child-count",function(t){var e=a(this),s=e.val(),i=e.parents(".js-room").find(".js-child-age-list");i.empty();for(var o=0;o<s;o++){var n='<p class="room__heading">Ages</p>\t\t\t\t\t\t\t<div class="form__con js-child-age-ele">\t\t\t\t\t\t\t\t<label class="form__label">Child '+(o+1)+'</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="form__field">\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t\t<option value="8">8</option>\t\t\t\t\t\t\t\t\t\t<option value="9">9</option>\t\t\t\t\t\t\t\t\t\t<option value="10">10</option>\t\t\t\t\t\t\t\t\t\t<option value="11">11</option>\t\t\t\t\t\t\t\t\t\t<option value="12">12</option>\t\t\t\t\t\t\t\t\t\t<option value="13">13</option>\t\t\t\t\t\t\t\t\t\t<option value="14">14</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>';i.append(n)}}),a(".js-confirm").on("click",function(){for(var t=a(".js-select-guest-container").find(".js-adult-count"),e=a(".js-select-guest-container").find(".js-child-count"),s=0,i=0,o=0;o<t.length;o++)s+=Number(t[o].value);for(o=0;o<e.length;o++)i+=Number(e[o].value);a(".js-select-guest").val(s),a(".js-total-children").val(i),a(".js-total-room").val(a(".js-room").length),a(".js-select-guest-container").toggleClass("hidden"),a("html, body").animate({scrollTop:a("#mainForm").offset().top},1e3)}),a(e).ready(myStays.init)}(window,document,jQuery);