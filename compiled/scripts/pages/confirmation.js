define(["modules/api","modules/backbone-mozu","underscore","modules/jquery-mozu","modules/models-orders","hyprlivecontext","hyprlive","modules/preserve-element-through-render"],function(e,o,n,t,i){t.cookie("paypal",null),t.cookie("GSIPaypal",null),t.cookie("PaypalAmnt",null),t.cookie("token",null),t.cookie("PayerID",null);var r=o.MozuView.extend({templateName:"modules/confirmation/confirmation-detail",render:function(){o.MozuView.prototype.render.apply(this)}}),l=i.Order.extend({getLocationData:function(){var o=[],n=this.get("items");n.forEach(function(e){-1==o.indexOf(e.get("fulfillmentLocationCode"))&&o.push(e.get("fulfillmentLocationCode"))});var t="";return o.forEach(function(e,n){t+=n!=o.length-1?"code eq "+e+" or ":"code eq "+e}),e.get("locations",{filter:t})}});t(document).ready(function(){var e=l.fromCurrent();e.getLocationData().then(function(o){e.set("locationDetails",o.data.items);var n=new r({el:t("#confirmation-container"),model:e});n.render()})})});