function lightboxOpen(){window.scrollTo(0,0),document.getElementById("light").style.display="block",document.getElementById("fade").style.display="block"}function lightboxClose(){document.getElementById("light").style.display="none",document.getElementById("fade").style.display="none"}!function(t,a,e){"use strict";function o(t){for(var a="",o=0;o<i[t].hotels.length;o++){var n=i[t].hotels[o];a+='<li><img data-lazy="../dist/images/'+n.img+'" /> <h6>'+n.name+"</h6> <p>"+n.address+'</p> <button class="js-slider-choose" data-city="'+t+'" data-hotel="'+n.name+'" data-property="'+n.id+'">Select Hotel</button></li>'}e(".js-slider").empty().append(a).slick({lazyLoad:"ondemand",slidesToShow:4,slidesToScroll:1,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}var i={tokyo:{city:"Tokyo",id:"tokyo",hotels:[{name:"HOTEL MYSTAYS PREMIER Akasaka",address:"Tokyo, Tokyo-ikebukuro/ Shinjuku, JP",img:"lazyfonz1.png",id:"jptok26324"},{name:"HOTEL MYSTAYS PREMIER Hamamatsucho",address:"Tokyo, Tokyo-ikebukuro/ Shinjuku, JP13123",img:"lazyfonz1.png",id:"tokyo1"},{name:"HOTEL MYSTAYS PREMIER Omori",address:"Tokyo, Tokyo-ikebukuro/ Shinjuku, JPsdfs",img:"lazyfonz1.png",id:"tokyo2"},{name:"HOTEL MYSTAYS Asakusa bashi",address:"",img:"lazyfonz1.png",id:"tokyo3"},{name:"HOTEL MYSTAYS Gotanda",address:"",img:"lazyfonz1.png",id:"tokyo4"},{name:"HOTEL MYSTAYS Gotanda Station",address:"",img:"lazyfonz1.png",id:"tokyo5"},{name:"HOTEL MYSTAYS Hamamatsucho",address:"",img:"lazyfonz1.png",id:"tokyo6"},{name:"HOTEL MYSTAYS Haneda",address:"",img:"lazyfonz1.png",id:"tokyo7"},{name:"HOTEL MYSTAYS Higashi Ikebukuroa",address:"",img:"lazyfonz1.png",id:"tokyo8"}]},kyoto:{city:"Kyoto",id:"kyoto",hotels:[{name:"HOTEL MYSTAYS Kyoto Shijo",address:"",img:"lazyfonz1.png",id:"kyoto1"}]},osaka:{city:"Osaka",id:"osaka",hotels:[{name:"HOTEL MYSTAYS Midosuji Honmachi",address:"",img:"lazyfonz1.png",id:"osaka1"},{name:"HOTEL MYSTAYS Otemae",address:"",img:"lazyfonz1.png",id:"osaka2"},{name:"HOTEL MYSTAYS Sakaisuji Honmachi",address:"",img:"lazyfonz1.png",id:"osaka3"},{name:"HOTEL MYSTAYS Shinsaibashi",address:"",img:"lazyfonz1.png",id:"osaka4"},{name:"HOTEL MYSTAYS Shinsaibashi East",address:"",img:"lazyfonz1.png",id:"osaka5"},{name:"HOTEL MYSTAYS Shin Osaka Conference Center",address:"",img:"lazyfonz1.png",id:"osaka6"}]},kanazawa:{city:"Kanazawa",id:"kanazawa",hotels:[{name:"HOTEL MYSTAYS PREMIER Kanazawa",address:"",img:"lazyfonz1.png",id:"kanazawa1"},{name:"HOTEL MYSTAYS Kanazawa Castle",address:"",img:"lazyfonz1.png",id:"kanazawa2"}]},"maihama-urayasu":{city:"Maihama/Urayasu",id:"maihama-urayasu",hotels:[{name:"HOTEL MYSTAYS Maihama",address:"",img:"lazyfonz1.png",id:"maihama-urayasu1"},{name:"MYSTAYS Shin Urayasu Conference Center",address:"",img:"lazyfonz1.png",id:"maihama-urayasu2"},{name:"FLEXSTAY INN Shin Urayasu",address:"",img:"lazyfonz1.png",id:"maihama-urayasu3"}]},tachikawa:{city:"Tachikawa",id:"tachikawa",hotels:[{name:"HOTEL MYSTAYS Tachikawa",address:"",img:"lazyfonz1.png",id:"tachikawa1"}]},kawasaki:{city:"Kawasaki",id:"kawasaki",hotels:[{name:"FLEXSTAY INN Kawasaki Kaizuka",address:"",img:"lazyfonz1.png",id:"kawasaki1"},{name:"FLEXSTAY INN Kawasaki Ogawacho",address:"",img:"lazyfonz1.png",id:"kawasaki2"},{name:"FLEXSTAY INN Tamagawa",address:"",img:"lazyfonz1.png",id:"kawasaki3"}]},yokohama:{city:"Yokohama",id:"yokohama",hotels:[{name:"HOTEL MYSTAYS Yokohama",address:"",img:"lazyfonz1.png",id:"yokohama1"},{name:"HOTEL MYSTAYS Yokohama Kannai",address:"",img:"lazyfonz1.png",id:"yokohama2"},{name:"FLEXSTAY INN Sakuragicho",address:"",img:"lazyfonz1.png",id:"yokohama3"}]},chiba:{city:"Chiba",id:"chiba",hotels:[{name:"Shirahama Ocean Resort",address:"",img:"lazyfonz1.png",id:"chiba1"}]},tochigi:{city:"Tochigi",id:"tochigi",hotels:[{name:"HOTEL MYSTAYS Utsunomiya",address:"",img:"lazyfonz1.png",id:"tochigi1"},{name:"Hotel Épinard Nasu",address:"",img:"lazyfonz1.png",id:"tochigi2"}]},hokkaido:{city:"Hokkaido",id:"hokkaido",hotels:[{name:"HOTEL MYSTAYS PREMIER Sapporo Park",address:"",img:"lazyfonz1.png",id:"hokkaido1"},{name:"HOTEL MYSTAYS Sapporo Aspen",address:"",img:"lazyfonz1.png",id:"hokkaido2"},{name:"HOTEL MYSTAYS Sapporo Nakajima Park",address:"",img:"lazyfonz1.png",id:"hokkaido3"},{name:"HOTEL MYSTAYS Sapporo Nakajima Park Annex",address:"",img:"lazyfonz1.png",id:"hokkaido4"},{name:"HOTEL MYSTAYS Sapporo Station",address:"",img:"lazyfonz1.png",id:"hokkaido5"},{name:"ART HOTEL ASAHIKAWA",address:"",img:"lazyfonz1.png",id:"hokkaido6"},{name:"Hotel Nord Otaru",address:"",img:"lazyfonz1.png",id:"hokkaido7"},{name:"Hotel Sonia Otaru",address:"",img:"lazyfonz1.png",id:"hokkaido8"},{name:"Hakodate Kokusai Hotel",address:"",img:"lazyfonz1.png",id:"hokkaido9"},{name:"Hotel Nets Hakodate",address:"",img:"lazyfonz1.png",id:"hokkaido10"}]},aomori:{city:"Aomori",id:"aomori",hotels:[{name:"ART HOTEL HIROSAKI CITY",address:"",img:"lazyfonz1.png",id:"aomori1"}]},yamanashi:{city:"Yamanashi",id:"yamanashi",hotels:[{name:"HOTEL MYSTAYS Fuji",address:"",img:"lazyfonz1.png",id:"yamanashi1"}]},nagoya:{city:"Nagoya",id:"nagoya",hotels:[{name:"HOTEL MYSTAYS Nagoya Sakae",address:"",img:"lazyfonz1.png",id:"nagoya1"}]},niigata:{city:"Niigata",id:"niigata",hotels:[{name:"ART HOTEL NIIGATA STATION",address:"",img:"lazyfonz1.png",id:"niigata1"},{name:"ART HOTEL JOETSU",address:"",img:"lazyfonz1.png",id:"niigata2"}]},kagawa:{city:"Kagawa",id:"kagawa",hotels:[{name:"Resort Hotel Olivean Shodoshima",address:"",img:"lazyfonz1.png",id:"kagawa1"}]},ehime:{city:"Ehime",id:"ehime",hotels:[{name:"HOTEL MYSTAYS Matsuyama",address:"",img:"lazyfonz1.png",id:"ehime1"}]},fukuoka:{city:"Fukuoka",id:"fukuoka",hotels:[{name:"HOTEL MYSTAYS Fukuoka Tenjin Minami",address:"",img:"lazyfonz1.png",id:"fukuoka1"},{name:"HOTEL MYSTAYS Fukuoka Tenjin",address:"",img:"lazyfonz1.png",id:"fukuoka2"}]},oita:{city:"Oita",id:"oita",hotels:[{name:"HOTEL MYSTAYS Oita",address:"",img:"lazyfonz1.png",id:"oita1"},{name:"Beppu Kamenoi Hotel",address:"",img:"lazyfonz1.png",id:"oita2"}]},okinawa:{city:"Okinawa",id:"okinawa",hotels:[{name:"ART HOTEL ISHIGAKIJIMA",address:"",img:"lazyfonz1.png",id:"okinawa1"},{name:"Fusaki Resort Village (Ishigaki-jima)",address:"",img:"lazyfonz1.png",id:"okinawa2"}]}},n=function(o){var i={Init:function(){this.NewPlayer(),this.EventHandler()},NewPlayer:function(){var t=this;this.Player=new YT.Player(o,{}),t.Player.$element=e("#"+o)},Play:function(){1!==this.Player.getPlayerState()&&this.Player.playVideo()},Pause:function(){2!==this.Player.getPlayerState()&&this.Player.pauseVideo()},ScrollControl:function(){n.IsElementInViewport(this.Player.$element[0])?this.Play():this.Pause()},EventHandler:function(){var a=this;e(t).on("scroll",function(){a.ScrollControl()})}},n={IsElementInViewport:function(e){"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var o=e.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(t.innerHeight||a.documentElement.clientHeight)&&o.right<=(t.innerWidth||a.documentElement.clientWidth)}};return i.Init()};t.myStays={};var s='<option value="">Please select a Hotel</option>';myStays.init=function(){function a(t){if(!t.disabled){var a="";return i[t.id].hotels.length>1?a+="<span> ("+i[t.id].hotels.length+" Hotels) </span>":a+="<span> ("+i[t.id].hotels.length+" Hotel) </span>",e('<p class="option-city">'+t.text+" "+a+"<p>")}}function l(t,a,e){if(e.id.length)return a.toUpperCase().indexOf(t.toUpperCase())>-1}function d(t){var a=m.term||"";return c(t.text,a)}function r(t){return t.text}function c(t,a){var o=t.toUpperCase().indexOf(a.toUpperCase()),i=e("<span></span>");if(o<0)return i.text(t);i.text(t.substring(0,o));var n=e('<span class="select2-rendered__match"></span>');return n.text(t.substring(o,o+a.length)),i.append(n),i.append(t.substring(o+a.length)),i}var m={};e(".js-slider-control").select2({containerCssClass:"city-container",dropdownCssClass:"city-container-options",minimumResultsForSearch:-1,templateResult:a,templateSelection:a}),e.fn.select2.amd.require(["select2/compat/matcher"],function(t){e(".js-city").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(l),templateResult:d,templateSelection:r,language:{searching:function(t){return m=t,"Searching…"}}})}),e.fn.select2.amd.require(["select2/compat/matcher"],function(t){e(".js-hotel").select2({containerCssClass:"form-city-container",dropdownCssClass:"form-city-container-options",matcher:t(l),templateResult:d,templateSelection:r,language:{searching:function(t){return m=t,"Searching…"}}})}),e(".js-datepicker.check-in").datepicker({dateFormat:"mm/dd/yy",minDate:new Date,onSelect:function(t,a){var o=e(".js-datepicker.check-in").datepicker("getDate");o.setDate(o.getDate()+1),e(".js-datepicker.check-out").datepicker("setDate",o),e(".js-datepicker.check-out").datepicker("option","minDate",o)}}),e(".js-datepicker.check-out").datepicker({dateFormat:"mm/dd/yy"});for(var g in i){for(var p=i[g].hotels,u=0;u<p.length;u++)s+='<option value="'+p[u].id+'">'+p[u].name+"</option>";e(".js-hotel").html(s)}o("tokyo"),t.onYouTubeIframeAPIReady=function(){n("playerA")}},e("#main-form-btn").on("click",function(){var a=e(this).parents("form"),o=!0;if(a.find(":input.required").each(function(t){console.log(this.value),this.value.length?e(this).removeClass("js-is-invalid"):(o=!1,e(this).addClass("js-is-invalid"))}),o){console.log(e("#mainForm").serializeArray()),console.log(e("#mainForm").serialize());var i="s=results";a.serializeArray().forEach(function(t){console.log(t),i+="&"+t.name+"="+t.value});var n="https://www.book-secure.com/index.php?"+(i+="&children1=0&rooms=1&code=5&locale=en_GB&currency=JPY&stid=2hj7fselc&=undefined");t.open(n,"_blank").focus()}}),e(".js-city").on("change",function(t){var a=t.target.value,o=i[a].hotels,n='<option value="">Please select a Hotel</option>';if(o.length){for(var s=0;s<o.length;s++)n+='<option value="'+o[s].id+'">'+o[s].name+"</option>";e(".js-hotel").empty().html(n)}}),e(".js-check-box").change(function(){e(".js-main-form-btn").attr("disabled",!e(this).is(":checked"))}),e(".js-slider-control").on("change",function(t){var a=t.target.value;e(".js-slider").slick("unslick"),o(a)}),e(".js-slider").on("click",".js-slider-choose",function(t){var a=e(this).data();e("html, body").animate({scrollTop:e("#mainForm").offset().top},2e3),e("#mainForm").find("#city").val(a.city).trigger("change"),e("#mainForm").find("#property").val(a.property)}),e("ul.tabs li").click(function(){var t=e(this).attr("data-tab");e("ul.tabs li").removeClass("current"),e(".tab-content").removeClass("current"),e(this).addClass("current"),e("#"+t).addClass("current")}),e(".campaign_link").click(function(){e("html,body").animate({scrollTop:e(".stage__form").offset().top},"slow")}),e(".select-language").click(function(){e("ul.header_language").toggleClass("active")}),e(t).width()<767&&e(".sitemap_links").click(function(t){e(".sitemap_links ul").removeClass("active"),e(this).children("ul").toggleClass("active")}),e(".js-select-guest").on("click",function(t){e(".js-select-guest-container").toggleClass("hidden")}),e(".js-add-room").on("click",function(){console.log(e(".js-room-list").find("li").length);var t=e(".js-room-list").find("li").length+1,a='<li class="js-room" data-room="'+t+'">\t\t\t\t\t\tRoom'+t+'\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t<label class="form__label">Adults</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select class="js-adult-count">\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t<label class="form__label">Children</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select class="js-child-count">\t\t\t\t\t\t\t\t\t<option value="0">0</option>\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="js-child-age-list">\t\t\t\t\t\t</div>\t\t\t\t\t\t<div>\t\t\t\t\t\t\t<a href="javascript:;" title="Delete this room" class="js-delete-room">delete</a>\t\t\t\t\t\t</div>\t\t\t\t\t</li>';e(".js-room-list").append(a)}),e(".js-room-list").on("click",".js-delete-room",function(t){e(this).parents("li").remove()}),e(".js-room-list").on("change",".js-child-count",function(t){var a=e(this),o=a.val(),i=a.parents(".js-room").find(".js-child-age-list");i.empty();for(var n=0;n<o;n++){var s='<div class="form__control js-child-age-ele">\t\t\t\t\t\t\t<label class="form__label">Child '+(n+1)+'</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select>\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t<option value="8">8</option>\t\t\t\t\t\t\t\t\t<option value="9">9</option>\t\t\t\t\t\t\t\t\t<option value="10">10</option>\t\t\t\t\t\t\t\t\t<option value="11">11</option>\t\t\t\t\t\t\t\t\t<option value="12">12</option>\t\t\t\t\t\t\t\t\t<option value="13">13</option>\t\t\t\t\t\t\t\t\t<option value="14">14</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>';i.append(s)}}),e(".js-confirm").on("click",function(){var t=e(".js-select-guest-container").find(".js-adult-count"),a=e(".js-select-guest-container").find(".js-child-count"),o=0,i=0;console.log(t,a);for(n=0;n<t.length;n++)o+=Number(t[n].value);for(var n=0;n<a.length;n++)i+=Number(a[n].value);e(".js-select-guest").val(o),e(".js-total-children").val(i),e(".js-total-room").val(e(".js-room").length),e(".js-select-guest-container").toggleClass("hidden")}),e(".js-cancel-select-guest").on("click",function(){e(".js-select-guest-container").toggleClass("hidden")}),e(a).ready(myStays.init)}(window,document,jQuery),window.document.onkeydown=function(t){t||(t=event),27==t.keyCode&&lightbox_close()};