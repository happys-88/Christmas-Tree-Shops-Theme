define("modules/models-location",["modules/jquery-mozu","modules/backbone-mozu","hyprlive","modules/api"],function(e,t){var o=t.MozuModel.extend({mozuType:"location",idAttribute:"code"}),a=t.MozuModel.extend({mozuType:"locations",relations:{items:t.Collection.extend({model:o})}});return{Location:o,LocationCollection:a}}),require(["modules/jquery-mozu","hyprlive","modules/backbone-mozu","modules/models-location","modules/models-product"],function(e,t,o,a,s){function i(){var e={},t=function(e){return decodeURIComponent(e.replace(/\+/g," "))},o=location.search.substring(1),a=o.split("&");for(var s in a){var i=a[s].split("=");i.length>1&&(e[t(i[0])]=t(i[1]))}return e}var n={googleMapAPIKey:t.getThemeSetting("googleMapAPIKey"),googleMapLatitude:t.getThemeSetting("googleMapLatitude"),googleMapLongitude:t.getThemeSetting("googleMapLongitude"),googleMapZoom:t.getThemeSetting("googleMapZoom"),googleMapPinIcon:t.getThemeSetting("googleMapPinIcon"),storesPageSize:t.getThemeSetting("storesPageSize"),googleMapMaxNearbyDistance:t.getThemeSetting("googleMapMaxNearbyDistance")},r=o.MozuView.extend({templateName:"modules/location/location-infosummary",initialize:function(){var e=this;e.listenTo(e.model,"change",e.render)},render:function(){return o.MozuView.prototype.render.apply(this),this}}),d=o.MozuModel.extend();try{n.googleMapZoom=parseInt(n.googleMapZoom,10)}catch(l){}var c,m,g,h,p,u=window.google||{},v=t.getTemplate("modules/location/social-share-widget"),w=(t.getLabel("positionError"),o.MozuView.extend({templateName:"modules/location/locations",initialize:function(){this.populate()},populate:function(t){var o=this,a=function(){o.render(),e(".mz-locationsearch-pleasewait").fadeOut(),o.$el.noFlickerFadeIn();var t=i(),a=t.zipcode,s=t.code;if(a&&(e("#searchTermView").val(a),e(".empty-store-container").removeClass("active"),e(".search-view-container").addClass("active"),e(".btn-find-stores").trigger("click"),"Enter Zip"===a&&(e("#searchTermView").val(""),e("#searchTermView").attr("placeholder",a))),s){for(var n,r,d=window.lv.model.apiModel.data.items,l=!1,c=0;c<d.length;c++)if(s===d[c].code){n=d[c].geo.lat,r=d[c].geo.lng,l=!0,e(".pagination-wrapper").hide();break}l?o.loadStoreDetailPage(1,n,r):(e("#searchTermView").val("enter+zip"),e(".btn-find-stores").trigger("click"),e("#searchTermView").val(""))}e(".store-locator-overlay").removeClass("active")};t?this.model.apiGetByLatLong({location:t}).then(a):window.location.pathname.indexOf("store-details")>-1?this.model.apiGet().then(a):this.model.apiGet({pageSize:n.storesPageSize}).then(a)},getRenderContext:function(){var e=o.MozuView.prototype.getRenderContext.apply(this,arguments);return e.model.positionError=this.positionError,e},drawMap:function(t){var o;o=0===t.length?new u.maps.LatLng(n.googleMapLatitude,n.googleMapLongitude):new u.maps.LatLng(t[0].geo.lat,t[0].geo.lng),c=new u.maps.Map(document.getElementById("map"),{zoom:n.googleMapZoom,center:o,mapTypeId:u.maps.MapTypeId.ROADMAP}),m=new u.maps.InfoWindow,g=new u.maps.LatLngBounds,u.maps.event.addListener(c,"click",function(){m.close()});for(var a=0;a<t.length;a++)this.createMarker(t[a],a),this.bindMarkers(t[a],p);this.bindShowDetailPage(),e(".store-locator-overlay").removeClass("active")},createMarker:function(t,o){h=new u.maps.Marker({position:new u.maps.LatLng(t.geo.lat,t.geo.lng),icon:n.googleMapPinIcon?n.googleMapPinIcon:"",title:t.description,map:c}),g.extend(h.position),p=h;var a=e("#success-shops").text().length>0?"hidden":"";u.maps.event.addListener(h,"click",function(e){return function(){var o=["Christmas Tree Shops "+t.address.address1,t.address.address2,t.address.address2,t.address.cityOrTown,t.address.stateOrProvince,t.address.postalOrZipCode,t.address.countryCode];t.storeSearched=a,t.dirQueryString=o.join(" ");var s=window.location.pathname.indexOf("store-details")>-1?'<p class="start-address-label">Start address:</p> <input type="text" name="saddr">':"";t.saddr=s,t.regularHours=!1;var i=new r({model:new d(t)}),n=i.render().el;c.setCenter(e.getPosition()),m.setContent(n),m.open(c,e)}}(h,o)),c.fitBounds(g)},bindMarkers:function(t,o){var a=e("[data-marker-id='marker_"+t.code+"']");a.on("click",function(){e("html,body").animate({scrollTop:e("#mz-store-locator-map").offset().top},600),u.maps.event.trigger(o,"click")})},getGeoCode:function(e,t){var o=this,a=new u.maps.Geocoder;a.geocode({address:e},function(e,a){a==u.maps.GeocoderStatus.OK?(t(e),document.getElementById("success-shops").innerHTML="Stores near "+e[0].formatted_address,document.getElementsByClassName("invalid-location")[0].classList.add("hidden"),document.getElementById("noNearbyStores").classList.add("hidden")):o.getNearbyShops(n.storesPageSize,30.375321,69.34511599999996,0,function(){o.drawMap(window.lv.model.apiModel.data.items),document.getElementById("noNearbyStores").classList.add("hidden"),document.getElementsByClassName("invalid-location")[0].classList.remove("hidden"),document.getElementsByClassName("error-success-message-container")[0].classList.remove("hidden"),document.getElementById("location-list").classList.remove("hidden")})})},getNearbyShops:function(t,o,a,s,i){e(".store-locator-overlay").addClass("active"),this.model.apiGet({pageSize:t,startIndex:s,filter:"geo near("+o+","+a+","+n.googleMapMaxNearbyDistance+")"}).then(function(o){o.length>0?(e(".pagination-wrapper").hasClass("hidden")&&e(".pagination-wrapper").removeClass("hidden"),"0"===e("#showLessStores").attr("data-start-index")&&e("#showLessStores").addClass("hidden"),e(".error-success-message-container").hasClass("hidden")&&e(".error-success-message-container").removeClass("hidden"),e("#location-list").hasClass("hidden")&&e("#location-list").removeClass("hidden"),e(".store-locator-overlay").removeClass("active"),e("#success-shops").show(),o.length<t&&e(".pagination-wrapper").addClass("hidden")):(e(".pagination-wrapper").addClass("hidden"),e(".error-success-message-container").hasClass("hidden")&&e(".error-success-message-container").removeClass("hidden"),e("#location-list").hasClass("hidden")&&e("#location-list").removeClass("hidden"),e(".store-locator-overlay").removeClass("active"),e("#success-shops").hide(),e(".invalid-location").addClass("hidden"),e("#noNearbyStores").removeClass("hidden")),i()})},bindShowDetailPage:function(){e(".show-store-detail").on("click",function(){e(".pagination-wrapper").hide();e(this).attr("data-store-id"),window.lv.model.apiModel.data.items;window.location.href=window.location.origin+"/store-details?code="+e(this).attr("data-store-id")})},loadStoreDetailPage:function(t,o,a){var s=this;s.getNearbyShops(t,o,a,0,function(){s.drawMap(window.lv.model.apiModel.data.items),e(".dir-btn-container").removeClass("hidden"),e("#success-shops").text("Store Details"),e("#searchTermView").val(""),e(".store-details").after(v.render()),e(".mz-locationlisting-locationdetails,.show-store-detail,div[data-marker-id]").off("click"),e("#location-list").removeClass("mz-locationlist"),e(".mz-locationlist").addClass("store-detail"),e(".search-address-container").removeClass("hidden")})}})),f=w.extend({templateName:"modules/location/location-search",populate:function(t){var o=this;this.model.apiGetForProduct({productCode:this.product.get("variationProductCode")||this.product.get("productCode"),location:t}).then(function(){o.render(),e(".mz-locationsearch-pleasewait").fadeOut(),o.$el.noFlickerFadeIn()})},addToCartForPickup:function(t){var o=e(t.currentTarget),a=o.data("mzLocation");o.parent().addClass("is-loading"),this.product.addToCartForPickup(a)},setProduct:function(t){var o=this;o.product=t,this.listenTo(o.product,"addedtocart",function(){e(window).on("beforeunload",function(){o.$(".is-loading").removeClass("is-loading")}),window.location.href="/cart"})}});e(document).ready(function(){var t=e(".btn-find-stores"),o=e(".btn-find-stores-empty"),r=e("#searchTermEmpty"),d=e("#searchTermView"),l=e(".empty-store-container"),c=e(".search-view-container"),m=e("#showMoreStores"),g=e("#showLessStores"),h=(e(".show-store-detail"),e(".empty-search")),p=e(".store-search-container"),u=i(),v=u.zipcode;v?(e(".store-locator-overlay").addClass("active"),c.addClass("active")):l.addClass("active");var C=e("#location-list"),y=s.Product.fromCurrent(),M=!!y.get("productCode"),S=new a.LocationCollection,z=M?f:w,b=new z({model:S,el:C});M?b.setProduct(y):e(".store-locator-overlay").removeClass("active"),window.lv=b,o.on("click",function(){var o=e.trim(r.val());o.length>0?(d.val(o),t.trigger("click")):(h.removeClass("hidden"),p.addClass("has-error"))}),t.on("click",function(){var t=e.trim(d.val());if(t.length>0){if(window.location.pathname.indexOf("store-details")>-1)return window.location.href=window.location.origin+"/store-locator?zipcode="+t,void 0;e(".store-locator-overlay").addClass("active"),l.removeClass("active"),c.addClass("active"),m.attr("data-start-index",n.storesPageSize),g.attr("data-start-index",0),e("#map").length>0&&b.getGeoCode(t,function(t){var o=t[0].geometry.location.lat(),a=t[0].geometry.location.lng();b.getNearbyShops(n.storesPageSize,o,a,0,function(){b.drawMap(window.lv.model.apiModel.data.items),e(".pagination-wrapper").show()})})}else h.removeClass("hidden"),p.addClass("has-error")}),m.on("click",function(t){t.preventDefault();var o=parseInt(e(this).attr("data-start-index"),10),a=e.trim(d.val());o+n.storesPageSize>window.lv.model.attributes.totalCount&&(o=window.lv.model.attributes.totalCount-n.storesPageSize,e(this).addClass("hidden")),a.length>0&&e("#map").length>0&&b.getGeoCode(a,function(e){var t=e[0].geometry.location.lat(),a=e[0].geometry.location.lng();b.getNearbyShops(n.storesPageSize,t,a,o,function(){b.drawMap(window.lv.model.apiModel.data.items),g.attr("data-start-index",o),o+=n.storesPageSize,m.attr("data-start-index",o),g.hasClass("hidden")&&g.removeClass("hidden")})})}),g.on("click",function(t){t.preventDefault();var o=parseInt(e(this).attr("data-start-index"),10),a=e.trim(d.val());return 0>=o?(e(this).addClass("hidden"),void 0):(m.attr("data-start-index",o),o-=n.storesPageSize,e(this).removeClass("hidden"),m.hasClass("hidden")&&m.removeClass("hidden"),a.length>0&&e("#map").length>0&&b.getGeoCode(a,function(e){var t=e[0].geometry.location.lat(),a=e[0].geometry.location.lng();b.getNearbyShops(n.storesPageSize,t,a,o,function(){b.drawMap(window.lv.model.apiModel.data.items),g.attr("data-start-index",o),0===o&&g.addClass("hidden")})}),void 0)}),e("#map").on("click",".mz-locationlisting-name,.mz-store-hours",function(t){t.preventDefault();var o=e(this).attr("data-store-url");window.location.href=o}),e("#searchTermView,#searchTermEmpty").keyup(function(a){13===a.which&&(e(this).val().length>0?("searchTermEmpty"===e(this).attr("id")?o.trigger("click"):t.trigger("click"),window.location.hash=""):(h.removeClass("hidden"),p.addClass("has-error"))),e(this).val().length>0&&!h.hasClass("hidden")&&(h.addClass("hidden"),p.removeClass("has-error"))})})}),define("pages/location",function(){});