function sendEmail(){}!function($){"use strict";function portfolio_init(){var portfolio_grid=$(".portfolio-grid"),portfolio_filter=$(".portfolio-filters");portfolio_grid&&(portfolio_grid.shuffle({speed:450,itemSelector:"figure"}),portfolio_filter.on("click",".filter",(function(e){portfolio_grid.shuffle("update"),e.preventDefault(),$(".portfolio-filters .filter").parent().removeClass("active"),$(this).parent().addClass("active"),portfolio_grid.shuffle("shuffle",$(this).attr("data-group"))})))}function mobileMenuHide(){var windowWidth=$(window).width(),siteHeader=$("#site_header");windowWidth<1025?(siteHeader.addClass("mobile-menu-hide"),$(".menu-toggle").removeClass("open"),setTimeout((function(){siteHeader.addClass("animate")}),500)):siteHeader.removeClass("animate")}function customScroll(){var windowWidth;$(window).width()>1024?$(".animated-section, .single-page-content").each((function(){$(this).perfectScrollbar()})):$(".animated-section, .single-page-content").each((function(){$(this).perfectScrollbar("destroy")}))}$((function(){$("#contact_form").validator(),$("#contact_form").on("submit",(function(e){if(!e.isDefaultPrevented())return Email.send({SecureToken:"6ad6cbc1-f36b-4486-a0b1-aa742c8ebc1a",To:"ceit.engineer@gmail.com",From:"akamrani.message@gmail.com",Subject:$("#form_subject").val()+" - aKamrani Message",Body:"name: "+$("#form_name").val()+" - email: "+$("#form_email").val()+" - subject: "+$("#form_subject").val()+"<p></p>"+$("#form_message").val()}).then(message=>{$("#form_email").val(""),$("#form_subject").val(""),$("#form_name").val(""),$("#form_message").val(""),$.notify("پیام شما با موفقیت ارسال شد","success")}),!1}))})),$(window).on("load",(function(){var ptPage;$(".preloader").fadeOut(800,"linear"),$(".animated-sections")[0]&&PageTransitions.init({menu:"ul.main-menu"})})).on("resize",(function(){mobileMenuHide(),$(".animated-section").each((function(){$(this).perfectScrollbar("update")})),customScroll()})),$(document).on("ready",(function(){var movementStrength=23,height=23/$(document).height(),width=23/$(document).width(),$portfolio_container;$("body").on("mousemove",(function(e){var pageX=e.pageX-$(document).width()/2,pageY=e.pageY-$(document).height()/2,newvalueX=width*pageX*-1,newvalueY=height*pageY*-1,elements=$(".lm-animated-bg");elements.addClass("transition"),elements.css({"background-position":"calc( 50% + "+newvalueX+"px ) calc( 50% + "+newvalueY+"px )"}),setTimeout((function(){elements.removeClass("transition")}),300)})),$(".menu-toggle").on("click",(function(){$("#site_header").addClass("animate"),$("#site_header").toggleClass("mobile-menu-hide"),$(".menu-toggle").toggleClass("open")})),$(".main-menu").on("click","a",(function(e){mobileMenuHide()})),$(".sidebar-toggle").on("click",(function(){$("#blog-sidebar").toggleClass("open")})),$(".portfolio-grid").imagesLoaded((function(){portfolio_init(this)}));var $container=$(".blog-masonry");$container.imagesLoaded((function(){$container.masonry()})),customScroll(),$(".text-rotation").owlCarousel({loop:!0,dots:!1,nav:!1,margin:0,items:1,autoplay:!0,autoplayHoverPause:!1,autoplayTimeout:3800,animateOut:"animated-section-scaleDown",animateIn:"animated-section-scaleUp"}),$(".testimonials.owl-carousel").imagesLoaded((function(){$(".testimonials.owl-carousel").owlCarousel({nav:!0,items:3,loop:!1,navText:!1,autoHeight:!0,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}})})),$(".clients.owl-carousel").imagesLoaded().owlCarousel({nav:!0,items:2,loop:!1,navText:!1,margin:10,autoHeight:!0,responsive:{0:{items:2},768:{items:4},1200:{items:5}}}),$(".form-control").val("").on("focusin",(function(){$(this).parent(".form-group").addClass("form-group-focus")})).on("focusout",(function(){0===$(this).val().length&&$(this).parent(".form-group").removeClass("form-group-focus")})),$("body").magnificPopup({delegate:"a.lightbox",type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title",gallery:{enabled:!0}},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:null,src:"%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr("title")}}})}))}(jQuery);