define(["modules/api","modules/backbone-mozu","underscore","modules/jquery-mozu","hyprlivecontext","hyprlive","modules/preserve-element-through-render"],function(e,o,n,i){{var t=require.mozuData("checkout");t.id}i.cookie("paypal",null),i.cookie("GSIPaypal",null),i.cookie("PaypalAmnt",null),i.cookie("token",null),i.cookie("PayerID",null);o.MozuView.extend({templateName:"modules/confirmationv2/confirmation-detail",additionalEvents:{"click #mz-print-content-confirmation":"printWindow"},render:function(){o.MozuView.prototype.render.apply(this)},printWindow:function(){window.print()}}),o.MozuModel.extend({mozuType:"checkout"})});