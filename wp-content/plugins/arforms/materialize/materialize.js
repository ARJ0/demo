if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}!function(t){t.Package?Materialize={}:t.Materialize={}}(window),function(t){for(var e=0,a=["webkit","moz"],i=t.requestAnimationFrame,n=t.cancelAnimationFrame,r=a.length;--r>=0&&!i;)i=t[a[r]+"RequestAnimationFrame"],n=t[a[r]+"CancelRequestAnimationFrame"];i&&n||(i=function(t){var a=+Date.now(),i=Math.max(e+16,a);return setTimeout(function(){t(e=i)},i-a)},n=clearTimeout),t.requestAnimationFrame=i,t.cancelAnimationFrame=n}(window),Materialize.objectSelectorString=function(t){var e=t.prop("tagName")||"",a=t.attr("id")||"",i=t.attr("class")||"";return(e+a+i).replace(/\s/g,"")},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(t){var e=$(t),a=e.add(e.parents()),i=!1;return a.each(function(){return"fixed"===$(this).css("position")?(i=!0,!1):void 0}),i};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(t,e,a){var i,n,r,o=null,s=0;a||(a={});var l=function(){s=a.leading===!1?0:getTime(),o=null,r=t.apply(i,n),i=n=null};return function(){var u=getTime();s||a.leading!==!1||(s=u);var c=e-(u-s);return i=this,n=arguments,0>=c?(clearTimeout(o),o=null,s=u,r=t.apply(i,n),i=n=null):o||a.trailing===!1||(o=setTimeout(l,c)),r}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,function(t){t(document).ready(function(){function e(e){var a=e.css("font-family"),i=e.css("font-size"),r=e.css("line-height");i&&n.css("font-size",i),a&&n.css("font-family",a),r&&n.css("line-height",r),e.data("original-height")||e.data("original-height",e.height()),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var o=n.html().replace(/\n/g,"<br>");n.html(o),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.data("original-height")<=n.height()?e.css("height",n.height()):e.val().length<e.data("previous-length")&&e.css("height",e.data("original-height")),e.data("previous-length",e.val().length)}Materialize.updateTextFields=function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea",e=document.querySelectorAll(t),a=e.length;if(a>0)for(var i=0;a>i;i++){var n=e[i],r=jQuery(n);n.value.length>0||jQuery(n).autofocus||null!=n.getAttribute("placeholder")?r.siblings("label").addClass("active"):r.siblings("label").removeClass("active")}};var a="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",a,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active")}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var i=t(e.target);i.is("form")&&(i.find(a).removeClass("valid").removeClass("invalid"),i.find(a).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),i.find("select.initialized").each(function(){var t=i.find("option[selected]").text();i.siblings("input.arf-select-dropdown").val(t)}))}),t(document).on("focus",a,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",a,function(){var e=t(this),a=".prefix";setTimeout(function(){0===e.val().length&&void 0===e.attr("placeholder")&&(a+=", label"),e.siblings(a).removeClass("active")},10)}),window.validate_field=function(t){var e=void 0!==t.attr("data-length"),a=parseInt(t.attr("data-length")),i=t.val().length;0===t.val().length&&t[0].validity.badInput===!1?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&a>=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};var i="input[type=radio], input[type=checkbox]";t(document).on("keyup.radio",i,function(e){if(9===e.which){t(this).addClass("tabbed");var a=t(this);return void a.one("blur",function(){t(this).removeClass("tabbed")})}});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));var r=".materialize-textarea";t(r).each(function(){var e=t(this);e.data("original-height",e.height()),e.data("previous-length",e.val().length)}),t("body").on("keyup keydown autoresize",r,function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field"),a=e.find("input.file-path"),i=t(this)[0].files,n=[],r=0;r<i.length;r++)n.push(i[r].name);a.val(n.join(", ")),a.trigger("change")});var o="input[type=range]",s=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var l=function(t){var e=parseInt(t.parent().css("padding-left")),a=-7+e+"px";t.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:a},{duration:300,easing:"easeOutExpo"})},u=function(t){var e=t.width()-15,a=parseFloat(t.attr("max")),i=parseFloat(t.attr("min")),n=(parseFloat(t.val())-i)/(a-i);return n*e},c=".range-field";t(document).on("change",o,function(){var e=t(this).siblings(".thumb");e.find(".value").html(t(this).val()),e.hasClass("active")||l(e);var a=u(t(this));e.addClass("active").css("left",a)}),t(document).on("mousedown touchstart",o,function(e){var a=t(this).siblings(".thumb");if(a.length<=0&&(a=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(a)),a.find(".value").html(t(this).val()),s=!0,t(this).addClass("active"),a.hasClass("active")||l(a),"input"!==e.type){var i=u(t(this));a.addClass("active").css("left",i)}}),t(document).on("mouseup touchend",c,function(){s=!1,t(this).removeClass("active")}),t(document).on("input mousemove touchmove",c,function(){var e=t(this).children(".thumb"),a=t(this).find(o);if(s){e.hasClass("active")||l(e);var i=u(a);e.addClass("active").css("left",i),e.find(".value").html(e.siblings(o).val())}}),t(document).on("mouseout touchleave",c,function(){if(!s){var e=t(this).children(".thumb"),a=parseInt(t(this).css("padding-left")),i=7+a+"px";e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:i},{duration:100}),e.removeClass("active")}}),t.fn.arf_material_autocomplete=function(e){var a={data:{},limit:1/0,onAutocomplete:null,minLength:1};return e=t.extend(a,e),this.each(function(){var a,i=t(this),n=e.data,r=0,o=-1,s=i.closest(".controls");if(!t.isEmptyObject(n)){var l,u=t('<ul class="autocomplete-content dropdown-content"></ul>');s.length?(l=s.children(".autocomplete-content.dropdown-content").first(),l.length||s.append(u)):(l=i.next(".autocomplete-content.dropdown-content"),l.length||i.after(u)),l.length&&(u=l);var c=function(t,e){var a,i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),r=n+t.length-1,o=e.text().slice(0,n),s=e.text().slice(n,r+1),l=e.text().slice(r+1),u=e.find("span").attr("data-value");"undefined"!=typeof u&&(a="data-value='"+u+"'"),e.html("<span "+a+">"+o+s+l+"</span>"),i.length&&e.prepend(i)},d=function(){o=-1,u.find(".active").removeClass("active")},f=function(){u.empty(),d(),a=void 0,u.removeClass("arfactive")};i.off("blur.autocomplete").on("blur.autocomplete",function(){}),i.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(o){r=0;var s=i.val().toLowerCase();if(13!==o.which&&38!==o.which&&40!==o.which){if(a!==s&&(f(),s.length>=e.minLength)){for(var l in n)if(n.hasOwnProperty(l)&&-1!==l.toLowerCase().indexOf(s)&&l.toLowerCase()!==s){if(r>=e.limit)break;var d=t("<li></li>");n[l]?d.append("<span data-value='"+n[l]+"'>"+l+"</span>"):d.append("<span>"+l+"</span>"),u.append(d),c(s,d),r++}var p=i,h=u,v=p.offset(),m=v.top,g=m+p.outerHeight();m=Math.round(m),g=Math.round(g);var w=h.offset(),b=h.outerHeight(),y=w.top,C=p.parents(".arf_form_outer_wrapper"),x=C.offset(),M=x.top,_=C.outerHeight(),I=Math.round(M)+Math.round(_),O=(Math.round(y)+Math.round(b),h.find("li").first().outerHeight()?h.find("li").first().outerHeight():40);max_height=I-(g+O),max_height+="px",u.css({"max-height":max_height,overflow:"auto"}),u.find("li").length>0?u.addClass("arfactive"):u.removeClass("arfactive")}a=s}}),i.off("keydown.autocomplete").on("keydown.autocomplete",function(t){var e,a=t.which,i=u.children("li").length,n=u.children(".active").first();return 13===a&&o>=0?(e=u.children("li").eq(o),void(e.length&&(e.trigger("mousedown.autocomplete"),t.preventDefault()))):void(38!==a&&40!==a||(t.preventDefault(),38===a&&o>0&&o--,40===a&&i-1>o&&o++,n.removeClass("active"),o>=0&&u.children("li").eq(o).addClass("active")))}),u.on("mousedown.autocomplete touchstart.autocomplete","li",function(){var a=t(this).text().trim();i.val(a),i.trigger("change");var n=i.attr("data-field-id"),r=t("#"+n),o=t(this).find("span").first().attr("data-value");"undefined"!=typeof o?r.val(o):r.val(a),f(),"function"==typeof e.onAutocomplete&&e.onAutocomplete.call(this,a)})}})}}),t.fn.material_select=function(e){function a(t,e,a){var n=t.indexOf(e),r=-1===n;return r?t.push(e):t.splice(n,1),a.siblings("ul.arf-dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),a.find("option").eq(e).prop("selected",r),i(t,a),r}function i(t,e){for(var a="",i=0,n=t.length;n>i;i++){var r=e.find("option").eq(t[i]).text();a+=0===i?r:", "+r}""===a&&(a=e.find("option:disabled").eq(0).text()),e.siblings("input.arf-select-dropdown").val(a)}t(this).each(function(){var i=t(this);if(!i.hasClass("browser-default")){var n=!!i.attr("multiple"),r=i.data("select-id");if(r&&(i.parent().find("span.caret").remove(),i.parent().find("input").remove(),i.unwrap(),t("ul#select-options-"+r).remove()),"destroy"===e)return void i.data("select-id",null).removeClass("initialized");var o=Materialize.guid();i.data("select-id",o);var s=t('<div class="select-wrapper"></div>');s.addClass(i.attr("class"));var l=t('<ul id="select-options-'+o+'" class="dropdown-content arf-select-dropdown '+(n?"arf-multiple-select-dropdown":"")+'"></ul>'),u=i.children("option, optgroup"),c=[],d=!1,f=i.find("option:selected").html()||i.find("option:first").html()||"",p=function(e,a,i){var r=a.is(":disabled")?"disabled ":"",o="optgroup-option"===i?"optgroup-option ":"",s=n?'<input type="checkbox"'+r+"/><label></label>":"",u=a.data("icon"),c=a.attr("class");if(u){var d="";return c&&(d=' class="'+c+'"'),l.append(t('<li class="'+r+o+'"><img alt="" src="'+u+'"'+d+"><span>"+s+a.html()+"</span></li>")),!0}l.append(t('<li class="'+r+o+'"><span>'+s+a.html()+"</span></li>"))};u.length&&u.each(function(){if(t(this).is("option"))n?p(i,t(this),"multiple"):p(i,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){p(i,t(this),"optgroup-option")})}}),l.find("li:not(.optgroup)").each(function(r){t(this).click(function(o){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;if(n)t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=a(c,r,i),M.trigger("focus");else{l.find("li").removeClass("active"),t(this).toggleClass("active");var u=i.find('option[data-content="'+t(this).text()+'"]').attr("value");(i.hasClass("arffieldrequired")||i.hasClass("arf_required"))&&""==u?(M.attr("aria-invalid","false"),M.attr("placeholder",t(this).text()),M.val("")):M.val(t(this).text())}_(l,t(this)),i.find("option").eq(r).prop("selected",s),i.trigger("change"),"undefined"!=typeof e&&e()}jQuery(".arf_editor_wrapper").length>0?M.trigger("focusout").trigger("blur"):o.stopPropagation()})}),i.wrap(s);var h=t('<span class="caret">&#9660;</span>');i.is(":disabled")&&h.addClass("disabled");var v=f.replace(/"/g,"&quot;"),m=i.val(),g="",w=!1;""==m?(w=!0,g=' placeholder=" '+v+'" '):(w=!1,g=' value=" '+v+'" ');var b="",y=!1;i.hasClass("arf_required")&&(b="arf_required",y=!0),i.hasClass("arffieldrequired")&&(b="arffieldrequired",y=!0),1==w&&1==y&&(g+=' aria-required="false" ');var C="";"undefined"!=typeof i.attr("data-validation-required-message")&&(C=i.attr("data-validation-required-message"),g+=' data-validation-required-message="'+C+'" ');var x=i.attr("id")+"_select";i.attr("name");g+=b+'" id="'+x+'" ',i.removeAttr("data-validation-required-message");var M=t('<input type="text" readonly="true" class="arf-select-dropdown" '+(i.is(":disabled")?"disabled":"")+' data-activates="select-options-'+o+'" '+g+" />");i.before(M),M.before(h),M.after(l),i.is(":disabled")||M.arf_dropdown({hover:!1}),i.attr("tabindex")&&t(M[0]).attr("tabindex",i.attr("tabindex")),i.addClass("initialized"),M.on({focus:function(e){if(e.stopPropagation(),t("ul.arf-select-dropdown").not(l[0]).is(":visible")&&t("input.arf-select-dropdown").trigger("arf_material_close"),!l.is(":visible")){t(this).trigger("arf_material_open",["focus"]);var a=t(this).val();n&&a.indexOf(",")>=0&&(a=a.split(",")[0]);var i=l.find("li").filter(function(){return t(this).text().toLowerCase()===a.toLowerCase()})[0];_(l,i,!0)}},click:function(t){t.stopPropagation(),t.preventDefault()}}),M.parents(".sortable_inner_wrapper").length||M.on("blur",function(){n||t(this).trigger("arf_material_close"),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),t(window).on({click:function(){n&&(d||M.trigger("arf_material_close"))}}),n&&i.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();a(c,e,i),l.find("li").eq(e).find(":checkbox").prop("checked",!0)});var _=function(e,a,i){if(a){e.find("li.selected").removeClass("selected");var r=t(a);r.addClass("selected"),n&&!i||l.scrollTo(r)}},I=[],O=function(e){if(9==e.which)return void M.trigger("arf_material_close");if(40==e.which&&!l.is(":visible"))return void M.trigger("arf_material_open");if(13!=e.which||l.is(":visible")){e.preventDefault();var a=String.fromCharCode(e.which).toLowerCase(),i=[9,13,27,38,40];if(a&&-1===i.indexOf(e.which)){I.push(a);var r=I.join(""),o=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(r)})[0];o&&_(l,o)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),n||M.trigger("arf_material_close"))}40==e.which&&(o=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],_(l,o)),27==e.which&&M.trigger("arf_material_close"),38==e.which&&(o=l.find("li.selected").prev("li:not(.disabled)")[0],o&&_(l,o)),setTimeout(function(){I=[]},1e3)}};M.on("keydown",O)}})}}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.arf_dropdown=function(e){var a={inDuration:300,outDuration:225,constrainWidth:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"arf_material_open"===e?(this.each(function(){t(this).trigger("arf_material_open")}),!1):"arf_material_close"===e?(this.each(function(){t(this).trigger("arf_material_close")}),!1):void this.each(function(){function i(){void 0!==o.data("induration")&&(s.inDuration=o.data("induration")),void 0!==o.data("outduration")&&(s.outDuration=o.data("outduration")),void 0!==o.data("constrainwidth")&&(s.constrainWidth=o.data("constrainwidth")),void 0!==o.data("hover")&&(s.hover=o.data("hover")),void 0!==o.data("gutter")&&(s.gutter=o.data("gutter")),void 0!==o.data("beloworigin")&&(s.belowOrigin=o.data("beloworigin")),void 0!==o.data("alignment")&&(s.alignment=o.data("alignment")),void 0!==o.data("stoppropagation")&&(s.stopPropagation=o.data("stoppropagation"))}function n(e){"focus"===e&&(l=!0),i(),u.addClass("active"),o.addClass("active"),s.constrainWidth===!0?u.css("width",o.outerWidth()):u.css("white-space","nowrap");var a=(window.innerHeight,o.innerHeight()),n=o.offset().left,c=(o.offset().top-t(window).scrollTop(),s.alignment),d=0,f=0,p=0;s.belowOrigin===!0&&(p=a);var h=0,v=0,m=o.parent();m.is("body")||(m[0].scrollHeight>m[0].clientHeight&&(h=m[0].scrollTop),m[0].scrollWidth>m[0].clientWidth&&(v=m[0].scrollLeft)),n+u.innerWidth()>t(window).width()?c="right":n-u.innerWidth()+o.innerWidth()<0&&(c="left");var g=o,w=g.parents(".allfields"),b=w.offset().top,y=g.offset().top,C=w.outerHeight(),x=u.outerHeight(),M=parseInt(b)+parseInt(C),_=parseInt(y)+parseInt(x);if(_>M){var I=parseInt(M)-parseInt(y),O=parseInt(I)-30;u.css("max-height",O+"px")}if("left"===c)d=s.gutter,f=o.position().left+d;else if("right"===c){var k=o.position().left+o.outerWidth()-u.outerWidth();d=-s.gutter,f=k+d}u.css({position:"absolute",top:o.position().top+p+h,left:f+v}),u.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic"}).animate({opacity:1}),setTimeout(function(){t(document).bind("click."+u.attr("id"),function(){r(),t(document).unbind("click."+u.attr("id"))})},0)}function r(){l=!1,u.fadeOut(s.outDuration),u.removeClass("active"),o.removeClass("active"),t(document).unbind("click."+u.attr("id")),setTimeout(function(){u.css("max-height","")},s.outDuration)}var o=t(this),s=t.extend({},a,e),l=!1,u=t("#"+o.attr("data-activates"));if(i(),o.after(u),s.hover){var c=!1;o.unbind("click."+o.attr("id")),o.on("mouseenter",function(){c===!1&&(n(),c=!0)}),o.on("mouseleave",function(e){var a=e.toElement||e.relatedTarget;t(a).closest(".dropdown-content").is(u)||(u.stop(!0,!0),r(),c=!1)}),u.on("mouseleave",function(e){var a=e.toElement||e.relatedTarget;t(a).closest(".dropdown-button").is(o)||(u.stop(!0,!0),r(),c=!1)})}else o.unbind("click."+o.attr("id")),o.bind("click."+o.attr("id"),function(e){l||(o[0]!=e.currentTarget||o.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?o.hasClass("active")&&(r(),t(document).unbind("click."+u.attr("id"))):(e.preventDefault(),s.stopPropagation&&e.stopPropagation(),n("click")))});o.on("arf_material_open",function(t,e){n(e)}),o.on("arf_material_close",r)})},t(document).ready(function(){t(".dropdown-button").arf_dropdown()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function a(t){return e(t)?t:9===t.nodeType&&t.defaultView}function i(t){var e,i,n={top:0,left:0},r=t&&t.ownerDocument;return e=r.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(n=t.getBoundingClientRect()),i=a(r),{top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft}}function n(t){var e="";for(var a in t)t.hasOwnProperty(a)&&(e+=a+":"+t[a]+";");return e}function r(t){if(c.allowEvent(t)===!1)return null;for(var e=null,a=t.target||t.srcElement;null!==a.parentElement&&!(a instanceof SVGElement);){if(-1!==a.className.indexOf("waves-effect")){e=a;break}if(-1!==a.className.indexOf("waves-effect")){e=a;break}a=a.parentElement}return e}function o(e){var a=r(e);null!==a&&(u.show(e,a),"ontouchstart"in t&&(a.addEventListener("touchend",u.hide,!1),a.addEventListener("touchcancel",u.hide,!1)),a.addEventListener("mouseup",u.hide,!1),a.addEventListener("mouseleave",u.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),u={duration:750,show:function(t,e){if(2===t.button)return!1;var a=e||this,r=document.createElement("div");r.className="waves-ripple",a.appendChild(r);var o=i(a),s=t.pageY-o.top,l=t.pageX-o.left,c="scale("+a.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-o.top,l=t.touches[0].pageX-o.left),r.setAttribute("data-hold",Date.now()),r.setAttribute("data-scale",c),r.setAttribute("data-x",l),r.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};r.className=r.className+" waves-notransition",r.setAttribute("style",n(d)),r.className=r.className.replace("waves-notransition",""),d["-webkit-transform"]=c,d["-moz-transform"]=c,d["-ms-transform"]=c,d["-o-transform"]=c,d.transform=c,d.opacity="1",d["-webkit-transition-duration"]=u.duration+"ms",d["-moz-transition-duration"]=u.duration+"ms",d["-o-transition-duration"]=u.duration+"ms",d["transition-duration"]=u.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",r.setAttribute("style",n(d))},hide:function(t){c.touchup(t);var e=this,a=(1.4*e.clientWidth,null),i=e.getElementsByClassName("waves-ripple");if(!(i.length>0))return!1;a=i[i.length-1];var r=a.getAttribute("data-x"),o=a.getAttribute("data-y"),s=a.getAttribute("data-scale"),l=Date.now()-Number(a.getAttribute("data-hold")),d=350-l;0>d&&(d=0),setTimeout(function(){var t={top:o+"px",left:r+"px",opacity:"0","-webkit-transition-duration":u.duration+"ms","-moz-transition-duration":u.duration+"ms","-o-transition-duration":u.duration+"ms","transition-duration":u.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};a.setAttribute("style",n(t)),setTimeout(function(){try{e.removeChild(a)}catch(t){return!1}},u.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var a=t[e];if("input"===a.tagName.toLowerCase()){var i=a.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))continue;var n=document.createElement("i");n.className=a.className+" waves-input-wrapper";var r=a.getAttribute("style");r||(r=""),n.setAttribute("style",r),a.className="waves-button-input",a.removeAttribute("style"),i.replaceChild(n,a),n.appendChild(a)}}}},c={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?c.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){c.touches>0&&(c.touches-=1)},500):"mousedown"===t.type&&c.touches>0&&(e=!1),e},touchup:function(t){c.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(u.duration=e.duration),u.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",o,!1),document.body.addEventListener("mousedown",o,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(u.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",o,!1),e.addEventListener("mousedown",o,!1)},t.Waves=s}(window),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,a,i,n){return jQuery.easing[jQuery.easing.def](t,e,a,i,n)},easeInQuad:function(t,e,a,i,n){return i*(e/=n)*e+a},easeOutQuad:function(t,e,a,i,n){return-i*(e/=n)*(e-2)+a},easeInOutQuad:function(t,e,a,i,n){return(e/=n/2)<1?i/2*e*e+a:-i/2*(--e*(e-2)-1)+a},easeInCubic:function(t,e,a,i,n){return i*(e/=n)*e*e+a},easeOutCubic:function(t,e,a,i,n){return i*((e=e/n-1)*e*e+1)+a},easeInOutCubic:function(t,e,a,i,n){return(e/=n/2)<1?i/2*e*e*e+a:i/2*((e-=2)*e*e+2)+a},easeInQuart:function(t,e,a,i,n){return i*(e/=n)*e*e*e+a},easeOutQuart:function(t,e,a,i,n){return-i*((e=e/n-1)*e*e*e-1)+a},easeInOutQuart:function(t,e,a,i,n){return(e/=n/2)<1?i/2*e*e*e*e+a:-i/2*((e-=2)*e*e*e-2)+a},easeInQuint:function(t,e,a,i,n){return i*(e/=n)*e*e*e*e+a},easeOutQuint:function(t,e,a,i,n){return i*((e=e/n-1)*e*e*e*e+1)+a},easeInOutQuint:function(t,e,a,i,n){return(e/=n/2)<1?i/2*e*e*e*e*e+a:i/2*((e-=2)*e*e*e*e+2)+a},easeInSine:function(t,e,a,i,n){return-i*Math.cos(e/n*(Math.PI/2))+i+a},easeOutSine:function(t,e,a,i,n){return i*Math.sin(e/n*(Math.PI/2))+a},easeInOutSine:function(t,e,a,i,n){return-i/2*(Math.cos(Math.PI*e/n)-1)+a},easeInExpo:function(t,e,a,i,n){return 0==e?a:i*Math.pow(2,10*(e/n-1))+a},easeOutExpo:function(t,e,a,i,n){return e==n?a+i:i*(-Math.pow(2,-10*e/n)+1)+a},easeInOutExpo:function(t,e,a,i,n){return 0==e?a:e==n?a+i:(e/=n/2)<1?i/2*Math.pow(2,10*(e-1))+a:i/2*(-Math.pow(2,-10*--e)+2)+a},easeInCirc:function(t,e,a,i,n){return-i*(Math.sqrt(1-(e/=n)*e)-1)+a},easeOutCirc:function(t,e,a,i,n){return i*Math.sqrt(1-(e=e/n-1)*e)+a},easeInOutCirc:function(t,e,a,i,n){return(e/=n/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+a:i/2*(Math.sqrt(1-(e-=2)*e)+1)+a},easeInElastic:function(t,e,a,i,n){var r=1.70158,o=0,s=i;if(0==e)return a;if(1==(e/=n))return a+i;if(o||(o=.3*n),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/o))+a},easeOutElastic:function(t,e,a,i,n){var r=1.70158,o=0,s=i;if(0==e)return a;if(1==(e/=n))return a+i;if(o||(o=.3*n),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*e)*Math.sin((e*n-r)*(2*Math.PI)/o)+i+a},easeInOutElastic:function(t,e,a,i,n){var r=1.70158,o=0,s=i;if(0==e)return a;if(2==(e/=n/2))return a+i;if(o||(o=n*(.3*1.5)),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/o))+a:s*Math.pow(2,-10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/o)*.5+i+a},easeInBack:function(t,e,a,i,n,r){return void 0==r&&(r=1.70158),i*(e/=n)*e*((r+1)*e-r)+a},easeOutBack:function(t,e,a,i,n,r){return void 0==r&&(r=1.70158),i*((e=e/n-1)*e*((r+1)*e+r)+1)+a},easeInOutBack:function(t,e,a,i,n,r){return void 0==r&&(r=1.70158),(e/=n/2)<1?i/2*(e*e*(((r*=1.525)+1)*e-r))+a:i/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+a},easeInBounce:function(t,e,a,i,n){return i-jQuery.easing.easeOutBounce(t,n-e,0,i,n)+a},easeOutBounce:function(t,e,a,i,n){return(e/=n)<1/2.75?i*(7.5625*e*e)+a:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+a:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+a:i*(7.5625*(e-=2.625/2.75)*e+.984375)+a},easeInOutBounce:function(t,e,a,i,n){return n/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,n)+a:.5*jQuery.easing.easeOutBounce(t,2*e-n,0,i,n)+.5*i+a}});