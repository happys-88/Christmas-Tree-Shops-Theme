define("pages/associate-login",["modules/backbone-mozu","modules/jquery-mozu","hyprlive"],function(e,a,o){var t=e.MozuView.extend({templateName:"modules/aos/aos-detail",additionalEvents:{"click #mz-aos-detail":"associateSignup"},render:function(){e.MozuView.prototype.render.apply(this)},associateSignup:function(){var e=!0,t=a("#associate-id").val(),s=a("#store-no").val(),i=/^[0-9]+$/;if(!i.test(t)||t.length<5?(a('[data-mz-validationmessage-for="associate-id"]').text(o.getLabel("aosIdMsg")),e=!1):a('[data-mz-validationmessage-for="associate-id"]').text(""),!i.test(s)||s.length<3?(a('[data-mz-validationmessage-for="store-no"]').text(o.getLabel("storeNoMsg")),e=!1):a('[data-mz-validationmessage-for="store-no"]').text(""),!e)return e;var n={assID:t,storeNum:s};return a.cookie("aos",JSON.stringify(n),{path:"/"}),window.location.href=window.location.origin,!1}}),s=e.MozuModel.extend(),i=new t({el:a("#aos"),model:new s({})});i.render()});