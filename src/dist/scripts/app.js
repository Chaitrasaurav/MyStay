!function(e,o,a){"use strict";var t={tokyo:{city:"Tokyo",id:"tokyo",hotels:[{name:"HOTEL MYSTAYS PREMIER1",address:"",img:"",id:"jptok26324"},{name:"HOTEL MYSTAYS PREMIER2",address:"",img:"",id:"jptok263242"},{name:"HOTEL MYSTAYS PREMIER3",address:"",img:"",id:"jptok263243"},{name:"HOTEL MYSTAYS PREMIER4",address:"",img:"",id:"jptok263244"}]},kyoto:{city:"Kyoto",id:"kyoto",hotels:[{name:"HOTEL MYSTAYS Kyoto",address:"",img:"",id:"jptok26324"},{name:"HOTEL MYSTAYS Kyoto1",address:"",img:"",id:"jptok26324Kyoto1"},{name:"HOTEL MYSTAYS Kyoto2",address:"",img:"",id:"jptok26324Kyoto2"},{name:"HOTEL MYSTAYS Kyoto3",address:"",img:"",id:"jptok26324Kyoto3"}]},osaka:{city:"Osaka",id:"osaka",hotels:[{name:"HOTEL MYSTAYS Osaka",address:"",img:"",id:"jptok26324Osaka"},{name:"HOTEL MYSTAYS Osaka1",address:"",img:"",id:"jptok26324Osaka1"},{name:"HOTEL MYSTAYS Osaka2",address:"",img:"",id:"jptok26324Osaka2"},{name:"HOTEL MYSTAYS Osaka3",address:"",img:"",id:"jptok26324Osaka3"}]}};e.myStays={};var i='<option value="">Please Select a Hotel</option>';myStays.init=function(){a(".js-datepicker.check-in").datepicker({dateFormat:"mm/dd/yy",minDate:new Date,onSelect:function(e,o){var t=a(".js-datepicker.check-in").datepicker("getDate");t.setDate(t.getDate()+1),a(".js-datepicker.check-out").datepicker("setDate",t),a(".js-datepicker.check-out").datepicker("option","minDate",t)}}),a(".js-datepicker.check-out").datepicker({dateFormat:"mm/dd/yy"});for(var e in t){console.log(t[e].hotels);for(var o=t[e].hotels,s=0;s<o.length;s++)i+='<option value="'+o[s].id+'">'+o[s].name+"</option>";a(".js-hotel").html(i)}a(".lazy").slick({lazyLoad:"ondemand",slidesToShow:4,slidesToScroll:1})},a("#main-form-btn").on("click",function(){var o=a(this).parents("form"),t=!0;if(o.find(":input.required").each(function(e){console.log(this.value),this.value.length?a(this).removeClass("js-is-invalid"):(t=!1,a(this).addClass("js-is-invalid"))}),t){console.log(a("#mainForm").serializeArray()),console.log(a("#mainForm").serialize());var i="s=results";o.serializeArray().forEach(function(e){console.log(e),i+="&"+e.name+"="+e.value});var s="https://www.book-secure.com/index.php?"+(i+="&children1=0&rooms=1&code=5&locale=en_GB&currency=JPY&stid=2hj7fselc&=undefined");e.open(s,"_blank").focus()}}),a(".js-city").on("change",function(e){var o=e.target.value,i=t[o].hotels,s='<option value="default">Please Select a Hotel</option>';if(i.length){for(var n=0;n<i.length;n++)s+='<option value="'+i[n].id+'">'+i[n].name+"</option>";a(".js-hotel").empty().html(s)}}),a(".js-check-box").change(function(){a(".js-main-form-btn").attr("disabled",!a(this).is(":checked"))}),a(o).ready(myStays.init)}(window,document,jQuery);