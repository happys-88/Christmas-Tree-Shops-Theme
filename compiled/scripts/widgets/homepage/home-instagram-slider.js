require(["modules/jquery-mozu","underscore","modules/api","modules/backbone-mozu","hyprlive","shim!vendor/jquery/instafeed","shim!vendor/jquery/owl.carousel.min"],function(e,n,i,t){var o=null,s=null,a=e("[data-widget-data]").data("widget-data"),r=t.MozuModel.extend({}),d=t.MozuView.extend({templateName:"widgets/homepage/home-instagram-tiled-view"}),u=t.View.extend({el:".carousels",initialize:function(){this.InstagramfeedFunction()},InstagramfeedFunction:function(){var n=this,i="undefined"!=typeof window.exports&&null!==window.exports?window.exports:window;s=new i.Instafeed({get:"user",userId:parseInt(a.config.UserId,0),accessToken:""+a.config.accessToken,limit:30,resolution:"standard_resolution",sortBy:"most-recent",mock:!0,success:function(i){var t=new r(i),o=new d({el:e("#instafeed-tile"),model:t});o.render(),n.slider()}}),s.run()},slider:function(){o=e(".instafeed"),o.owlCarousel({loop:!0,margin:0,responsiveClass:!0,lazyLoad:!0,responsive:{320:{items:3,nav:!1},480:{items:5,nav:!1},640:{items:6,nav:!1},768:{items:7,nav:!1},1023:{items:9,nav:!1},1280:{items:10,nav:!1},1920:{items:17,nav:!1},2560:{items:22,nav:!1},5500:{items:30,nav:!1}}}),e(".next").on("click",function(){o.trigger("next.owl")}),e(".previous").on("click",function(){o.trigger("prev.owl")})}});e(document).ready(function(){var e;setTimeout(function(){e=new u},3e3)})});