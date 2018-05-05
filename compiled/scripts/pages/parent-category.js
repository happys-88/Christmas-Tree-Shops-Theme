require(["modules/jquery-mozu","hyprlive","underscore","modules/backbone-mozu","modules/models-product","modules/models-cart","modules/cart-monitor","modules/api","hyprlivecontext","shim!vendor/jquery/owl.carousel.min","bootstrap"],function(t,e,i,a,s,o,n,r){var l=require.mozuData("pagecontext"),d=0,c=(t("[data-ig-new-arrivals]").data("ig-new-arrivals"),a.MozuModel.extend({mozuType:"products"})),u=a.View.extend({el:"body",events:{"click [data-mz-swatch]":"colorSwatching","click a.wishlist-button":"addToWishlist","touchstart a.wishlist-button":"addToWishlist"},initialize:function(){this.render()},colorSelected:function(){var e=t(".ig-new-arrivals #owl-example .owl-stage-outer .owl-stage .owl-item");t(e).each(function(){var e,a=this,s=[],o=t(this).find("[data-main-image-src]").attr("alt");o&&(e=o.toString().toLowerCase()),t(this).find("[data-mz-swatch]").each(function(){var e=t(this).val();if(e){var i=e.toString().toLowerCase();s.push(i)}}),i.each(s,function(i){e===i&&t(a).find("[data-mz-swatch]").each(function(){var i=this;t(this).hasClass(e)&&t(i).css({border:"2px solid #4a4a4a"})})})})},addedToWishlist:function(){var e=[],i=[],a=0;t(".owl-item").each(function(){var s=t(this).find("a.wishlist-button"),o=t(s).data("listing-prod-code");e[a]=o,i[a]=s,a++});var s=require.mozuData("user").isAnonymous;if(s===!1){r.createSync("wishlist").getOrCreate(require.mozuData("user").accountId).then(function(t){return t.data}).then(function(a){for(var s=0;s<e.length;s++)for(var o=0;o<a.items.length;o++)a.items[o].product.productCode==e[s]&&(t(i[s]).prop("disabled","disabled"),t(i[s]).addClass("addedToWishlist"))})}},sliderFunction:function(){var e=1;e=l.isDesktop?6:l.isTablet?3:1;var i=t(".ig-new-arrivals #owl-example").owlCarousel({loop:!1,responsiveClass:!0,responsive:{0:{items:e,stagePadding:57,nav:!1},600:{items:e,stagePadding:57,nav:!1},768:{items:e,nav:!1},1024:{items:e,nav:!1}}});i.on("changed.owl.carousel",function(i){i.item.index>=1?t(".ig-new-arrivals").find(".previous").show():t(".ig-new-arrivals").find(".previous").hide(),i.item.index===i.item.count-e?t(".ig-new-arrivals").find(".next").hide():t(".ig-new-arrivals").find(".next").show()}),i.find(".owl-item").length===e&&t(".ig-new-arrivals").find(".next").hide(),t(".new-arrival-product-container").css("visibility","visible"),t(".ig-new-arrivals #owl-example > .owl-item").addClass("mz-productlist-item"),t(".ig-new-arrivals .next").on("click",function(){i.trigger("next.owl.carousel")}),t(".ig-new-arrivals .previous").on("click",function(){i.trigger("prev.owl.carousel")});var a=t(".ig-new-arrivals #owl-example .owl-item").length;(l.isDesktop&&a>=6||l.isTablet&&a>=3||l.isMobile&&a>=2)&&t(".ig-new-arrivals.carousel-parent").css("border-right","none")},mouseoverFunction:function(){t('[data-toolstip="toolstip"]').tooltip()},colorSwatching:function(e){if(e.preventDefault(),0===d){d=1;var a=t(e.currentTarget);a.closest(".owl-item").find("input").css({border:"none"}),a.css({border:"2px solid #4a4a4a"});{var s=a.closest(".mz-productlisting").data("mz-product"),o=a.attr("value").toLowerCase(),n=a.attr("value"),r=a.closest(".mz-productlisting").find(".mz-subcategory-image").attr("data-main-image-src");window.location.origin}a.closest(".mz-productlisting").find(".mz-subcategory-image").removeClass("active"),a.closest(".mz-productlisting").find(".mainImageContainer2").addClass("active");var l=new c;l.set("filter","productCode eq "+s),l.fetch().then(function(t){var e=t.apiModel.data.items,s=null,l=null;if(i.each(e,function(t){s=i.findWhere(t.content.productImages,{altText:n||o})}),s){var c=s.imageUrl;a.closest(".mz-productlisting").find(".mz-subcategory-image").attr({srcset:c+"?max=400",alt:l,style:""}).addClass("active"),a.closest(".mz-productlisting").find(".mainImageContainer2").removeClass("active"),d=0}else a.closest(".mz-productlisting").find(".mz-subcategory-image").attr({srcset:r+"?max=400",style:""}).addClass("active"),a.closest(".mz-productlisting").find(".mainImageContainer2").removeClass("active"),d=0})}},addToWishlist:function(e){e.preventDefault();var i=t(e.currentTarget).data("listing-prod-code"),a=e.currentTarget;t(a).hasClass("addedToWishlist")||t(a).addClass("clicked");r.createSync("wishlist").getOrCreate(require.mozuData("user").accountId).then(function(t){return t.data}).then(function(e){for(var o=!0,n=0;n<e.items.length;n++)e.items[n].product.productCode==i&&(o=!1);if(o){var r=new s.Product({productCode:i});r.addToWishlist({quantity:1});try{r.on("addedtowishlist",function(){t(a).attr("disabled","disabled"),t(a).addClass("addedToWishlist")})}catch(l){}}})},priceFunction:function(){t(".mz-price").each(function(){var e=t(this).data("total-amount"),i=e.toString(),a=i.charAt(0),s=i.split(a),o=s[1].split("."),n=o[1];"00"==n?t(this).html('<span class="dollar">'+a+"</span>"+o[0]):t(this).html('<span class="dollar">'+a+'</span><span class="interger">'+o[0]+"</span><sup>"+o[1]+"</sup>")})},render:function(){var t=this,e=require.mozuData("user").isAnonymous;e===!1&&t.addedToWishlist(),this.sliderFunction(),this.mouseoverFunction(),this.priceFunction()}});t(document).ready(function(){new u;t("#owl-example").css("display","block"),t("#mz-drop-zone-category-page-top").is(":has(#owl-example)")||t("#page-content").find(".banner").show()})});