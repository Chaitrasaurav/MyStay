function lightboxOpen(){document.getElementById("light").style.display="block",document.getElementById("fade").style.display="block"}function lightboxClose(){document.getElementById("light").style.display="none",document.getElementById("fade").style.display="none"}!function(t,e,s){"use strict";function a(t){for(var e="",a=0;a<cityHotelMap[t].hotels.length;a++){var o=cityHotelMap[t].hotels[a];e+='<div><img data-lazy="../dist/images/'+o.img+'" /> <h6>'+o.name+"</h6> <p>"+o.address+'</p> <button class="js-slider-choose" data-city="'+t+'" data-hotel="'+o.name+'" data-property="'+o.id+'">Select Hotel</button></div>'}s(".js-slider").empty().append(e).slick({lazyLoad:"ondemand",slidesToShow:4,speed:2e3,slidesToScroll:4,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,dotsClass:"custom_paging",customPaging:function(t,e){return'<a class="custom-dot"><span class="string">'+(e+1)+"/"+t.slideCount+"</span></a>"}}}]}),setTimeout(function(){var t=s(".slick-track").height();s(".slick-slide").css("height",t-15+"px")},100)}t.myStays={};var o='<option value="">Please select a Hotel</option>';myStays.init=function(){function e(t){if(!t.disabled){var e="";return p[t.id].hotels.length>1?e+="<span> ("+p[t.id].hotels.length+" Hotels) </span>":e+="<span> ("+p[t.id].hotels.length+" Hotel) </span>",s('<p class="option-city">'+t.text+" "+e+"<p>")}}function i(t){if(!t.disabled){var e=s('.js-tabs li[data-tab="'+t.id+'"]').find("i")[0].outerHTML;return s('<span class="option-tab">'+e+t.text+"<span>")}}function n(t,e,s){if(s.id.length)return e.toUpperCase().indexOf(t.toUpperCase())>-1}function l(t){if(t.id&&t.id.length){var e=d.term||"";return r(t.text,e)}}function c(t){return t.text}function r(t,e){var a=t.toUpperCase().indexOf(e.toUpperCase()),o=s("<span></span>");if(a<0)return o.text(t);o.text(t.substring(0,a));var i=s('<span class="select2-rendered__match"></span>');return i.text(t.substring(a,a+e.length)),o.append(i),o.append(t.substring(a+e.length)),o}var d={},p=t.cityHotelMap;s(".js-slider-control").select2({containerCssClass:"city-container",dropdownCssClass:"city-container-options",minimumResultsForSearch:-1,templateResult:e,templateSelection:e}),s(".js-tabs-select").select2({containerCssClass:"tab-select-container",dropdownCssClass:"tab-select-container-options",minimumResultsForSearch:-1,templateResult:i,templateSelection:i}),s.fn.select2.amd.require(["select2/compat/matcher"],function(t){s(".js-city").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(n),templateResult:l,templateSelection:c,language:{searching:function(t){return d=t,"Searching…"}}})}),s.fn.select2.amd.require(["select2/compat/matcher"],function(t){s(".js-hotel").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(n),templateResult:l,templateSelection:c,language:{searching:function(t){return d=t,"Searching…"}}})});var u=!1;s.datepicker.regional[s("body").data("i18n")],s(".js-datepicker.check-in").datepicker({dateFormat:"yy-mm-dd",minDate:new Date,onSelect:function(t,e){var a=s(".js-datepicker.check-in").datepicker("getDate");if(a.setDate(a.getDate()+1),s(".js-datepicker.check-out").datepicker("setDate",a),s(".js-datepicker.check-out").datepicker("option","minDate",a),u=!0,s("body").hasClass("ja_JP")){var o=t.split("-");if(s(this).siblings('input[name="ciDateY"]').val(o[0]),s(this).siblings('input[name="ciDateM"]').val(o[1]),s(this).siblings('input[name="ciDateD"]').val(o[2]),!s(".js-datepicker.check-out").val()){var i=a.getMonth()+1;i=i<10?"0"+i:i,s(".js-datepicker.check-out").siblings('input[name="coDateY"]').val(a.getFullYear()),s(".js-datepicker.check-out").siblings('input[name="coDateM"]').val(i),s(".js-datepicker.check-out").siblings('input[name="coDateD"]').val(a.getDate())}}s(this).hasClass("required")&&s(this).hasClass("js-is-invalid")&&s(this).removeClass("js-is-invalid"),s(".js-datepicker.check-out").hasClass("required")&&s(".js-datepicker.check-out").hasClass("js-is-invalid")&&s(".js-datepicker.check-out").removeClass("js-is-invalid")},onClose:function(){u&&(setTimeout(function(){s(".js-datepicker.check-out").datepicker("show")},10),u=!1)},beforeShow:function(t,e){setTimeout(function(){e.dpDiv.css({top:s(".js-datepicker").offset().top+55})},0),s(".js-select-guest-container").hasClass("hidden")||s(".js-select-guest-container").addClass("hidden")}}),s(".js-datepicker.check-out").datepicker({dateFormat:"yy-mm-dd",beforeShow:function(t,e){setTimeout(function(){e.dpDiv.css({top:s(".js-datepicker").offset().top+55})},0),s(".js-select-guest-container").hasClass("hidden")||s(".js-select-guest-container").addClass("hidden")},onSelect:function(t,e){if(s("body").hasClass("ja_JP")){var a=t.split("-");s(this).siblings('input[name="coDateY"]').val(a[0]),s(this).siblings('input[name="coDateM"]').val(a[1]),s(this).siblings('input[name="coDateD"]').val(a[2])}}}),s(".js-datepicker").focus(function(){s("html, body").animate({scrollTop:s(this).offset().top-25},1e3)});for(var h in p){for(var m=p[h].hotels,g=0;g<m.length;g++)o+='<option value="'+m[g].id+'">'+m[g].name+"</option>";s(".js-hotel").html(o)}a("tokyo");var v=0;s(".tabs .tab-content").each(function(){v=s(this).height()>v?s(this).height():v}),s(t).width()>=768&&s(".tabs .tab-content").height(v)},s("#main-form-btn").on("click",function(){var e=s(this).parents("form"),a=!0;if(e.find(":input.required").each(function(t){this.value.length?s(this).removeClass("js-is-invalid"):(a=!1,s(this).addClass("js-is-invalid"))}),a){var o,i="";s("body").hasClass("ja_JP")?(e.serializeArray().forEach(function(t){i+="&"+t.name+"="+t.value}),o="https://mystays.rwiths.net/r-withs/tfs0020a.do?"+i):("property"===e.serializeArray()[0].name&&""===e.serializeArray()[0].value?(i="s=group&group=asiaflexstayinn&filters[region]="+t.cityHotelMap[e.find("#city").val()].city,e.serializeArray().forEach(function(t){"property"!==t.name&&(i+="&"+t.name+"="+t.value)})):(i="s=results",e.serializeArray().forEach(function(t){i+="&"+t.name+"="+t.value})),o="https://www.book-secure.com/index.php?"+i),t.open(o,"_blank").focus()}}),s(".js-city").on("change",function(t){var e=t.target.value,a=cityHotelMap[e].hotels,o='<option value="">Please select a Hotel</option>';if(a.length){for(var i=0;i<a.length;i++)o+='<option value="'+a[i].id+'">'+a[i].name+"</option>";s(".js-hotel").empty().html(o),s(".js-hotel").val("").trigger("change")}s(t.target).hasClass("required")&&s(t.target).hasClass("js-is-invalid")&&s(t.target).removeClass("js-is-invalid")}),s(".js-hotel").on("change",function(t){"jptok28108"!==t.target.value&&"151373"!==t.target.value||s(t.target).parents("form").find("#adults1").val(1),s(t.target).hasClass("required")&&s(t.target).hasClass("js-is-invalid")&&s(t.target).removeClass("js-is-invalid")}),s(".js-check-box").change(function(){s(this).is(":checked")?s(".js-main-form-btn").empty().text("Book Now with Pepper"):s(".js-main-form-btn").empty().text("Members Only"),s(".js-main-form-btn").toggleClass("disabled").attr("disabled",!s(this).is(":checked"))}),s(".js-slider-control").on("change",function(t){var e=t.target.value;s(".js-slider").slick("unslick"),a(e)}),s(".js-slider").on("click",".js-slider-choose",function(t){var e=s(this).data();s("html, body").animate({scrollTop:s("#mainForm").offset().top},1e3),s("#mainForm").find("#city").val(e.city).trigger("change"),s("#mainForm").find("#property").val(e.property).trigger("change")}),s(".js-tabs-select").on("change",function(t){var e=s(this).val();s("ul.tabs li").removeClass("current"),s(".tab-content").removeClass("current"),s('ul.js-tabs li[data-tab="'+e+'"]').addClass("current"),s("#"+e).addClass("current")}),s("ul.js-tabs li").click(function(){var t=s(this).attr("data-tab");s("ul.js-tabs li").removeClass("current"),s(".tab-content").removeClass("current"),s(".js-tabs-select").val(t).trigger("change"),s(this).addClass("current"),s("#"+t).addClass("current")}),s(".campaign_link").click(function(){s("html,body").animate({scrollTop:s(".stage__form").offset().top},1e3)}),s(".subscribe_link").click(function(){s("html,body").animate({scrollTop:s(".subscribe_container").offset().top},1e3)}),s(e).keyup(function(t){27==t.keyCode&&(s("ul.header_language").hasClass("active")&&s("ul.header_language").removeClass("active"),lightboxClose())}),s(e).click(function(t){s(t.target).hasClass("select-language")||s(t.target).parent().hasClass("select-language")||s("ul.header_language").removeClass("active")}),s(".select-language").click(function(){s("ul.header_language").toggleClass("active")}),s(".hamburger-menu").click(function(){s(".header_links").toggleClass("active")}),s(t).width()<767&&s(".sitemap_links").click(function(t){s(".sitemap_links").removeClass("current"),s(this).addClass("current"),s(".sitemap_links ul").removeClass("active"),s(this).children("ul").toggleClass("active")}),s(".js-select-guest").on("click",function(t){s(".js-select-guest-container").toggleClass("hidden"),s("html, body").animate({scrollTop:s(".js-select-guest").offset().top},1e3)}),s(".js-cancel-select-guest").on("click",function(){s(".js-select-guest-container").toggleClass("hidden"),s("html, body").animate({scrollTop:s("#mainForm").offset().top},1e3)}),s(".js-add-room").on("click",function(){var t=s(".js-room-list").find("li").length+1,e='<li class="js-room room clearfix" data-room="'+t+'">\t\t\t\t\t\t<div class="room-container clearfix">\t\t\t\t\t\t\t<p class="room__heading">Room'+t+'</p>\t\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t\t<label class="room__label form__label">Adults</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="room__field form__field js-adult-count">\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2" selected>2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t\t<label class="room__label form__label">Children</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="room__field form__field js-child-count">\t\t\t\t\t\t\t\t\t\t<option value="0">0</option>\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="room__delete">\t\t\t\t\t\t\t<a href="javascript:;" title="Delete this room" class="room__delete-btn js-delete-room"><i class="icon delete-icon"></i></a>\t\t\t\t\t\t</div>\t\t\t\t\t</li>';s(".js-room-list").append(e)}),s(".js-room-list").on("click",".js-delete-room",function(t){s(this).parents("li").remove()}),s(".js-room-list").on("change",".js-child-count",function(t){var e=s(this),a=e.val(),o=e.parents(".js-room").find(".js-child-age-list");o.empty();for(var i=0;i<a;i++){var n='<p class="room__heading">Ages</p>\t\t\t\t\t\t\t<div class="form__con js-child-age-ele">\t\t\t\t\t\t\t\t<label class="form__label">Child '+(i+1)+'</label>\t\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t\t<select class="form__field">\t\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t\t<option value="8">8</option>\t\t\t\t\t\t\t\t\t\t<option value="9">9</option>\t\t\t\t\t\t\t\t\t\t<option value="10">10</option>\t\t\t\t\t\t\t\t\t\t<option value="11">11</option>\t\t\t\t\t\t\t\t\t\t<option value="12">12</option>\t\t\t\t\t\t\t\t\t\t<option value="13">13</option>\t\t\t\t\t\t\t\t\t\t<option value="14">14</option>\t\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>';o.append(n)}}),s(".js-confirm").on("click",function(){for(var t=s(".js-select-guest-container").find(".js-adult-count"),e=s(".js-select-guest-container").find(".js-child-count"),a=0,o=0,i=0;i<t.length;i++)a+=Number(t[i].value);for(i=0;i<e.length;i++)o+=Number(e[i].value);s(".js-select-guest").val(a),s(".js-total-children").val(o),s(".js-total-room").val(s(".js-room").length),s(".js-select-guest-container").toggleClass("hidden"),s("html, body").animate({scrollTop:s("#mainForm").offset().top},1e3)}),s(e).ready(myStays.init)}(window,document,jQuery);