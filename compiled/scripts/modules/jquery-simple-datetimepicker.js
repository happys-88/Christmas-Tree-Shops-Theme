/**
 * jquery-simple-datetimepicker (jquery.simple-dtpicker.js)
 * v1.13.0
 * (c) Masanori Ohgita - 2014.
 * https://github.com/mugifly/jquery-simple-datetimepicker
 */

!function(e){var t={en:{days:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sep:"-",format:"YYYY-MM-DD hh:mm",prevMonth:"Previous month",nextMonth:"Next month",today:"Today"},ro:{days:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],months:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"],sep:".",format:"DD.MM.YYYY hh:mm",prevMonth:"Luna precedentă",nextMonth:"Luna următoare",today:"Azi"},ja:{days:["日","月","火","水","木","金","土"],months:["01","02","03","04","05","06","07","08","09","10","11","12"],sep:"/",format:"YYYY/MM/DD hh:mm"},ru:{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],format:"DD.MM.YYYY hh:mm"},br:{days:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],format:"DD/MM/YYYY hh:mm"},pt:{days:["dom","seg","ter","qua","qui","sex","sáb"],months:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},cn:{days:["日","一","二","三","四","五","六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},da:{days:["Sø","Ma","Ti","On","To","Fr","Lø"],months:["Jan","Feb","Mar","Apr","Maj","Juni","Juli","Aug","Sept","Okt","Nov","Dec"],sep:"-",format:"DD-MM-YYYY hh:mm",prevMonth:"Forrige måned",nextMonth:"Næste måned",today:"I dag"},de:{days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Jan","Feb","März","Apr","Mai","Juni","Juli","Aug","Sept","Okt","Nov","Dez"],format:"DD.MM.YYYY hh:mm"},sv:{days:["Sö","Må","Ti","On","To","Fr","Lö"],months:["Jan","Feb","Mar","Apr","Maj","Juni","Juli","Aug","Sept","Okt","Nov","Dec"]},id:{days:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],months:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]},it:{days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],format:"DD/MM/YYYY hh:mm"},tr:{days:["Pz","Pzt","Sal","Çar","Per","Cu","Cts"],months:["Ock","Şub","Mar","Nis","May","Haz","Tem","Agu","Eyl","Ekm","Kas","Arlk"]},es:{days:["dom","lun","mar","miér","jue","vie","sáb"],months:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],format:"DD/MM/YYYY hh:mm"},ko:{days:["일","월","화","수","목","금","토"],months:["01","02","03","04","05","06","07","08","09","10","11","12"],sep:"/",prevMonth:"이전 달",nextMonth:"다음 달",today:"오늘"},nl:{days:["zo","ma","di","wo","do","vr","za"],months:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],format:"DD-MM-YYYY hh:mm"},no:{days:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],months:["Jan","Feb","Mar","Apr","Mi","Jun","Jul","Aug","Sep","Okt","Nov","Des"],sep:".",format:"YYYY-MM-DD hh:mm",prevMonth:"Forrige Måned",nextMonth:"Neste Måned",today:"I dag"},cz:{days:["Ne","Po","Út","St","Čt","Pá","So"],months:["Led","Úno","Bře","Dub","Kvě","Čer","Čvc","Srp","Zář","Říj","Lis","Pro"],format:"DD.MM.YYYY hh:mm"},fr:{days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],format:"DD-MM-YYYY hh:mm"},pl:{days:["N","Pn","Wt","Śr","Cz","Pt","So"],months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],sep:"-",format:"YYYY-MM-DD hh:mm",prevMonth:"Poprzedni miesiąc",nextMonth:"Następny miesiąc",today:"Dzisiaj"},gr:{days:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],months:["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],sep:"-",format:"DD-MM-YYYY hh:mm",prevMonth:"Προηγ. μήνας",nextMonth:"Επόμ. μήνας",today:"Σήμερα"},ua:{days:["Неділя","Понеділок","Вівторок","Cереда","Четвер","Пятниця","Субота"],months:["Cічень","Лютий","Березень","Квітень","Травень","Червня","Липня","Серпня","Вересня","Жовтень","Листопада","Грудня"],format:"YYYY-MM-DD hh:mm",prevMonth:"Попередній місяць",nextMonth:"Наступний місяць",today:"Cьогодні"},et:{days:["P","E","T","K","N","R","L"],months:["Jaan","Veebr","Märts","Apr","Mai","Juun","Juul","Aug","Sept","Okt","Nov","Dets"],sep:".",format:"DD.MM.YYYY hh:mm",prevMonth:"Eelmine kuu",nextMonth:"Järgmine kuu",today:"Täna"},hu:{days:["Va","Hé","Ke","Sze","Cs","Pé","Szo"],months:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],sep:"-",format:"YYYY-MM-DD hh:mm:00",prevMonth:"Előző hónap",nextMonth:"Következő hónap",today:"Ma"}},a=function(e,t){this.$pickerObject=e,this.$inputObject=t};a.prototype.getPicker=function(){return this.$pickerObject},a.prototype.getInput=function(){return this.$inputObject},a.prototype.isShow=function(){var e=!0;return"none"==this.$pickerObject.css("display")&&(e=!1),e},a.prototype.show=function(){var e=this.$pickerObject,t=this.$inputObject;e.show(),r=t.data("pickerId"),null!==t&&e.data("isInline")===!1&&this._relocate()},a.prototype.hide=function(){{var e=this.$pickerObject;this.$inputObject}e.hide()},a.prototype.getDate=function(){{var e=this.$pickerObject;this.$inputObject}return M(e)},a.prototype.setDate=function(e){{var t=this.$pickerObject;this.$inputObject}w("Date",e)||(e=new Date(e)),D(t,{isAnim:!0,isOutputToInputObject:!0},e)},a.prototype.destroy=function(){var e=this.$pickerObject,t=e.data("pickerId");n[t]=null,e.remove()},a.prototype._relocate=function(){var t=this.$pickerObject,a=this.$inputObject;if(null!==a&&t.data("isInline")===!1){var n=a.outerHeight({margin:!0});w("Number",n)||(n=a.outerHeight());var i=t.outerHeight({margin:!0});w("Number",i)||(i=t.outerHeight()),0!==e(".datepicker_calendar",t).width()&&0!==e(".datepicker_timelist",t).width()&&t.parent().width(e(".datepicker_calendar",t).width()+e(".datepicker_timelist",t).width()+6),parseInt(e(window).height(),10)<=a.offset().top-e(document).scrollTop()+n+i?t.parent().css("top",a.offset().top-n/2-i-3+"px"):t.parent().css("top",a.offset().top+n-3+"px"),t.parent().width()+a.offset().left>e(window).width()?t.parent().css("left",(e(window).width()-t.parent().width())/2+17.5+"px"):t.parent().css("left",a.offset().left+17.5+"px"),t.parent().css("z-index",9e10)}};var n=[],i=[],r=-1,o=function(t){return e(t).closest(".datepicker")},s=function(t){var a=o(t);return null!==a.data("inputObjectId")?e(i[a.data("inputObjectId")]):null},l=function(e){var t=o(e),a=new Date;y(t,{isAnim:!0,isOutputToInputObject:!0},a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes())},d=function(e){var t=o(e);if(t.data("stateAllowBeforeMonth")!==!1){var a=M(t),n=new Date(a.getFullYear(),a.getMonth(),0).getDate();n<a.getDate()&&a.setDate(n),y(t,{isAnim:!0,isOutputToInputObject:!0},a.getFullYear(),a.getMonth()-1,a.getDate(),a.getHours(),a.getMinutes());var i=new Date,r=i.getFullYear()==a.getFullYear(),s=r&&i.getMonth()==a.getMonth();s&&t.data("futureOnly")||(n<a.getDate()&&a.setDate(n),y(t,{isAnim:!0,isOutputToInputObject:!0},a.getFullYear(),a.getMonth()-1,a.getDate(),a.getHours(),a.getMinutes()))}},u=function(e){var t=o(e),a=M(t),n=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();n<a.getDate()&&a.setDate(n),c(a.getFullYear(),a.getMonth()+1)<a.getDate()&&a.setDate(c(a.getFullYear(),a.getMonth()+1)),y(t,{isAnim:!0,isOutputToInputObject:!0},a.getFullYear(),a.getMonth()+1,a.getDate(),a.getHours(),a.getMinutes())},c=function(e,t){var a=new Date(e,t+1,0);return a.getDate()},h=function(e,t,a){return"default"==e&&(e=Y(t,"format"),a&&(e=e.substring(0,e.search(" ")))),e},p=function(e){if(99>e){var t=new Date;return parseInt(e,10)+parseInt(t.getFullYear().toString().substr(0,2)+"00",10)}return e},m=function(e,t){var a,n,i;if(null!==t){var r=t.replace(/(-|\/)/g,"[-/]").replace(/YYYY/gi,"(\\d{2,4})").replace(/(YY|MM|DD|HH|hh|mm)/g,"(\\d{1,2})").replace(/(M|D|H|h|m)/g,"(\\d{1,2})").replace(/(tt|TT)/g,"([aApP][mM])");if(a=new RegExp(r),n=a.exec(e),null!==n){for(var o=[],s="",l="",d=t;null!==d&&0<d.length;){var u=d.substring(0,1);d=d.substring(1,d.length),l!=u&&(/(YYYY|YY|MM|DD|mm|dd|M|D|HH|H|hh|h|m|tt|TT)/.test(s)?(o.push(s),s=""):s=""),s+=u,l=u}""!==s&&/(YYYY|YY|MM|DD|mm|dd|M|D|HH|H|hh|h|m|tt|TT)/.test(s)&&o.push(s);for(var c,h,m,g,v,M=!1,f=!1,D=!1,Y=0;Y<o.length&&!(n.length<Y);Y++){var y=o[Y],w=n[Y+1];"YYYY"==y?(c=p(w),M=!0):"YY"==y?(c=parseInt(w,10)+2e3,M=!0):"MM"==y||"M"==y?(h=parseInt(w,10)-1,M=!0):"DD"==y||"D"==y?(m=w,M=!0):"hh"==y||"h"==y?(g=w,M=!0):"HH"==y||"H"==y?(g=w,D=!0,M=!0):"mm"==y||"m"==y?(v=w,M=!0):("tt"==y||"TT"==y)&&(("pm"==w||"PM"==w)&&(f=!0),M=!0)}if(D&&(f?12!=g&&(g=parseInt(g,10)+12):12==g&&(g=0)),i=new Date(c,h,m,g,v),M===!0&&isNaN(i)===!1&&isNaN(i.getDate())===!1)return i}}return a=/^(\d{2,4})[-\/](\d{1,2})[-\/](\d{1,2}) (\d{1,2}):(\d{1,2})$/,n=a.exec(e),null!==n?(n[1]=p(n[1]),i=new Date(n[1],n[2]-1,n[3],n[4],n[5])):(a=/^(\d{2,4})[-\/](\d{1,2})[-\/](\d{1,2})$/,n=a.exec(e),null!==n&&(n[1]=p(n[1]),i=new Date(n[1],n[2]-1,n[3]))),isNaN(i)===!1&&isNaN(i.getDate())===!1?i:!1},g=function(e,t){null===e&&(e=new Date);var a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),r=e.getHours(),o=e.getMinutes();return t=t.replace(/YYYY/gi,a).replace(/YY/g,a-2e3).replace(/MM/g,f(n)).replace(/M/g,n).replace(/DD/g,f(i)).replace(/D/g,i).replace(/hh/g,f(r)).replace(/h/g,r).replace(/HH/g,r>12?f(r-12):1>r?12:f(r)).replace(/H/g,r>12?r-12:1>r?12:r).replace(/mm/g,f(o)).replace(/m/g,o).replace(/tt/g,r>=12?"pm":"am").replace(/TT/g,r>=12?"PM":"AM")},v=function(e){var t=s(e);if(null!==t){var a=M(e),n=e.data("locale"),i=h(e.data("dateFormat"),n,e.data("dateOnly")),r=t.val(),o=g(a,i);t.val(o),r!=t.val()&&t.trigger("change")}},M=function(e){var t=o(e);return t.data("pickedDate")},f=function(e){return e=("0"+e).slice(-2)},D=function(e,t,a){y(e,t,a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes())},Y=function(e,a){return"undefined"!=typeof t[e][a]?t[e][a]:t.en[a]},y=function(a,n,i,s,c,h,p){var m=new Date;m=null!==h?new Date(i,s,c,h,p,0):null!==i?new Date(i,s,c):new Date;var g=a.data("todayButton"),D=a.data("closeButton"),b=n.isAnim;a.data("timelistScroll")===!1&&(b=!1);var T=n.isAnim;a.data("animation")===!1&&(T=!1);var O=a.data("futureOnly"),k=a.data("minDate"),I=a.data("maxDate"),S=n.isOutputToInputObject,x=a.data("minuteInterval"),F=a.data("firstDayOfWeek"),j=a.data("allowWdays");(null===j||w("Array",j)===!1||j.length<=0)&&(j=null);var A=a.data("minTime"),C=a.data("maxTime"),H=new Date;if(O&&m.getTime()<H.getTime()&&m.setTime(H.getTime()),null!==j&&j.length<=6)for(;;){if(-1!=e.inArray(m.getDay(),j))break;m.setDate(m.getDate()+1)}var _=a.data("locale");t.hasOwnProperty(_)||(_="en");var J=new Date(m.getFullYear(),m.getMonth(),1).getDay()-F,N=new Date(m.getFullYear(),m.getMonth()+1,0).getDate(),z=new Date(m.getFullYear(),m.getMonth(),0).getDate(),P=new Date(m.getFullYear(),m.getMonth(),0),L=new Date(m.getFullYear(),m.getMonth()+2,0),$=H.getFullYear()==m.getFullYear(),B=$&&H.getMonth()==m.getMonth(),W=B&&H.getDate()==m.getDate(),V=H.getFullYear()+1==m.getFullYear(),E=$&&H.getMonth()+1==m.getMonth()||V&&11===H.getMonth()&&0===m.getMonth(),K=!1;(m.getFullYear()<H.getFullYear()||$&&m.getMonth()<H.getMonth())&&(K=!0);var q=a.children(".datepicker_header"),G=(a.children(".datepicker_inner_container"),a.children(".datepicker_inner_container").children(".datepicker_calendar")),Q=G.children(".datepicker_table"),R=a.children(".datepicker_inner_container").children(".datepicker_timelist"),Z="",U=M(a);void 0!==U&&(U.getMonth()!=m.getMonth()||U.getDate()!=m.getDate()?Z="calendar":(U.getHours()!=m.getHours()||U.getMinutes()!=m.getMinutes())&&(0===m.getMinutes()||m.getMinutes()%x===0)&&(Z="timelist")),e(a).data("pickedDate",m),T===!0&&("calendar"==Z?(G.stop().queue([]),G.fadeTo("fast",.8)):"timelist"==Z&&(R.stop().queue([]),R.fadeTo("fast",.8)));var X=R.scrollTop(),et=-1;q.children().remove();var tt=new Date(m.getTime());tt.setMinutes(59),tt.setHours(23),tt.setSeconds(59),tt.setDate(0);var at=null;O&&B||!(null===k||k<tt.getTime())?a.data("stateAllowBeforeMonth",!1):(at=e("<a>"),at.text("<"),at.prop("alt",Y(_,"prevMonth")),at.prop("title",Y(_,"prevMonth")),at.click(function(){d(a)}),a.data("stateAllowBeforeMonth",!0)),tt.setMinutes(0),tt.setHours(0),tt.setSeconds(0),tt.setDate(1),tt.setMonth(m.getMonth()+1);var nt=e("<span>");nt.text(m.getFullYear()+" "+Y(_,"sep")+" "+Y(_,"months")[m.getMonth()]);var it=null;if((null===I||I>tt.getTime())&&(it=e("<a>"),it.text(">"),it.prop("alt",Y(_,"nextMonth")),it.prop("title",Y(_,"nextMonth")),it.click(function(){u(a)})),g){var rt=e("<a><div/></a>");rt.addClass("icon-home"),rt.prop("alt",Y(_,"today")),rt.prop("title",Y(_,"today")),rt.click(function(){l(a)}),q.append(rt)}if(D){var ot=e("<a><div/></a>");ot.addClass("icon-close"),ot.prop("alt",Y(_,"close")),ot.prop("title",Y(_,"close")),ot.click(function(){a.hide()}),ot.css("display","none"),q.append(ot)}null!==at&&q.append(at),q.append(nt),null!==it&&q.append(it),Q.children().remove();var st=e("<tr>");Q.append(st);for(var lt,dt=7+F,ut=Y(_,"days"),ct=0;7>ct;ct++)lt=e("<th>"),lt.text(ut[(ct+dt)%7]),st.append(lt);var ht=7*Math.ceil((J+N)/7);ct=0,0>J&&(ct=-7);var pt=new Date(m.getTime());pt.setHours(0),pt.setMinutes(0),pt.setSeconds(0);for(;ht>ct;ct++){var mt=ct+1-J,gt=K||B&&mt<H.getDate()||E&&J>ct&&z+mt<H.getDate();ct%7===0&&(st=e("<tr>"),Q.append(st)),lt=e("<td>"),lt.data("day",mt),st.append(lt),J>ct?(lt.text(z+mt),lt.addClass("day_another_month"),lt.data("dateStr",P.getFullYear()+"/"+(P.getMonth()+1)+"/"+(z+mt)),pt.setDate(z+mt),pt.setMonth(P.getMonth()),pt.setYear(P.getFullYear())):J+N>ct?(lt.text(mt),lt.data("dateStr",m.getFullYear()+"/"+(m.getMonth()+1)+"/"+mt),pt.setDate(mt),pt.setMonth(m.getMonth()),pt.setYear(m.getFullYear())):(lt.text(mt-N),lt.addClass("day_another_month"),lt.data("dateStr",L.getFullYear()+"/"+(L.getMonth()+1)+"/"+(mt-N)),pt.setDate(mt-N),pt.setMonth(L.getMonth()),pt.setYear(L.getFullYear()));var vt=(ct+dt)%7;if(null!==j){if(-1==e.inArray(vt,j)){lt.addClass("day_in_unallowed");continue}}else 0===vt?lt.addClass("wday_sun"):6==vt&&lt.addClass("wday_sat");mt==m.getDate()&&lt.addClass("active"),B&&mt==H.getDate()&&lt.addClass("today");var Mt=new Date(pt.getTime());Mt.setHours(23),Mt.setMinutes(59),Mt.setSeconds(59),null!==k&&k>Mt.getTime()||null!==I&&I<pt.getTime()?lt.addClass("out_of_range"):O&&gt?lt.addClass("day_in_past"):(lt.click(function(){e(this).hasClass("hover")&&e(this).removeClass("hover"),e(this).addClass("active");var t=o(e(this)),a=new Date(e(this).data("dateStr")),n=M(t);y(t,{isAnim:!1,isOutputToInputObject:!0},a.getFullYear(),a.getMonth(),a.getDate(),n.getHours(),n.getMinutes()),t.data("dateOnly")===!0&&t.data("isInline")===!1&&t.data("closeOnSelected")&&(r=-1,t.hide())}),lt.hover(function(){e(this).hasClass("active")||e(this).addClass("hover")},function(){e(this).hasClass("hover")&&e(this).removeClass("hover")}))}if(a.data("dateOnly")===!0)R.css("display","none");else{R.children().remove(),G.innerHeight()>0&&R.css("height",G.innerHeight()-10+"px"),pt=new Date(m.getTime()),R.css("height",G.innerHeight()-10+"px");for(var ft=A[0],Dt=A[1];100*ft+Dt<100*C[0]+C[1];){var Yt=e("<div>"),yt=ft<H.getHours()||ft==H.getHours()&&Dt<H.getMinutes(),wt=W&&yt;Yt.addClass("timelist_item");var bt="";a.data("amPmInTimeList")?(bt=ft>12?ft-12:1>ft?12:ft,bt+=":"+f(Dt),bt+=ft>=12?"PM":"AM"):bt=f(ft)+":"+f(Dt),Yt.text(bt),Yt.data("hour",ft),Yt.data("min",Dt),R.append(Yt),pt.setHours(ft),pt.setMinutes(Dt),null!==k&&k>pt.getTime()||null!==I&&I<pt.getTime()?Yt.addClass("out_of_range"):O&&wt?Yt.addClass("time_in_past"):(Yt.click(function(){e(this).hasClass("hover")&&e(this).removeClass("hover"),e(this).addClass("active");var t=o(e(this)),a=M(t),n=e(this).data("hour"),i=e(this).data("min");y(t,{isAnim:!1,isOutputToInputObject:!0},a.getFullYear(),a.getMonth(),a.getDate(),n,i),t.data("isInline")===!1&&t.data("closeOnSelected")&&(r=-1,t.hide())}),Yt.hover(function(){e(this).hasClass("active")||e(this).addClass("hover")},function(){e(this).hasClass("hover")&&e(this).removeClass("hover")})),ft==m.getHours()&&Dt==m.getMinutes()&&(Yt.addClass("active"),et=Yt.offset().top),Dt+=x,Dt>=60&&(Dt-=60,ft++)}b===!0?R.scrollTop(et-R.offset().top):R.scrollTop(X)}T===!0&&("calendar"==Z?G.fadeTo("fast",1):"timelist"==Z&&R.fadeTo("fast",1)),S===!0&&v(a)},w=function(e,t){var a=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&a===e},b=function(t,a){var i=e("<div>");if(i.destroy=function(){window.alert("destroy!")},i.addClass("datepicker"),t.append(i),a.current){var s=h(a.dateFormat,a.locale,a.dateOnly),l=m(a.current,s);a.current=l?l:new Date}else a.current=new Date;null!==a.inputObjectId&&i.data("inputObjectId",a.inputObjectId),i.data("dateOnly",a.dateOnly),i.data("pickerId",n.length),i.data("dateFormat",a.dateFormat),i.data("locale",a.locale),i.data("firstDayOfWeek",a.firstDayOfWeek),i.data("animation",a.animation),i.data("closeOnSelected",a.closeOnSelected),i.data("timelistScroll",a.timelistScroll),i.data("calendarMouseScroll",a.calendarMouseScroll),i.data("todayButton",a.todayButton),i.data("closeButton",a.closeButton),i.data("futureOnly",a.futureOnly),i.data("onShow",a.onShow),i.data("onHide",a.onHide),i.data("onInit",a.onInit),i.data("allowWdays",a.allowWdays),a.amPmInTimeList===!0?i.data("amPmInTimeList",!0):i.data("amPmInTimeList",!1);var c=Date.parse(a.minDate);isNaN(c)?i.data("minDate",null):i.data("minDate",c);var p=Date.parse(a.maxDate);isNaN(p)?i.data("maxDate",null):i.data("maxDate",p),i.data("state",0),5<=a.minuteInterval&&a.minuteInterval<=30?i.data("minuteInterval",a.minuteInterval):i.data("minuteInterval",30),a.minTime=a.minTime.split(":"),a.maxTime=a.maxTime.split(":"),a.minTime[0]>=0&&a.minTime[0]<24||(a.minTime[0]="00"),a.maxTime[0]>=0&&a.maxTime[0]<24||(a.maxTime[0]="23"),a.minTime[1]>=0&&a.minTime[1]<60||(a.minTime[1]="00"),a.maxTime[1]>=0&&a.maxTime[1]<24||(a.maxTime[1]="59"),a.minTime[0]=parseInt(a.minTime[0],10),a.minTime[1]=parseInt(a.minTime[1],10),a.maxTime[0]=parseInt(a.maxTime[0],10),a.maxTime[1]=parseInt(a.maxTime[1],10),i.data("minTime",a.minTime),i.data("maxTime",a.maxTime);var g=e("<div>");g.addClass("datepicker_header"),i.append(g);var v=e("<div>");v.addClass("datepicker_inner_container"),i.append(v);var M=e("<div>");M.addClass("datepicker_calendar");var f=e("<table>");f.addClass("datepicker_table"),M.append(f),v.append(M);var Y=e("<div>");Y.addClass("datepicker_timelist"),v.append(Y),i.hover(function(){r=e(this).data("pickerId")},function(){r=-1}),a.calendarMouseScroll&&(window.sidebar?M.bind("DOMMouseScroll",function(t){var a=o(e(this)),n=t.originalEvent.detail;return n>0?u(a):d(a),!1}):M.bind("mousewheel",function(t){var a=o(e(this));return t.originalEvent.wheelDelta/120>0?d(a):u(a),!1})),n.push(i),D(i,{isAnim:!0,isOutputToInputObject:a.autodateOnStart},a.currentTime?new Date(a.currentTime):!1||a.current)},T=function(){return{current:null,dateFormat:"default",locale:"en",animation:!0,minuteInterval:30,firstDayOfWeek:0,closeOnSelected:!1,timelistScroll:!0,calendarMouseScroll:!0,todayButton:!0,closeButton:!0,dateOnly:!1,futureOnly:!1,minDate:null,maxDate:null,autodateOnStart:!0,minTime:"00:00",maxTime:"23:59",onShow:null,onHide:null,allowWdays:null,amPmInTimeList:!1}};e.fn.dtpicker=function(t){var a=(new Date,T());("undefined"==typeof t||t.closeButton!==!0)&&(a.closeButton=!1),a.inputObjectId=void 0;var n=e.extend(a,t);return this.each(function(){b(e(this),n)})},e.fn.appendDtpicker=function(t){var r=(new Date,T());"undefined"!=typeof t&&t.inline===!0&&t.closeButton!==!0&&(r.closeButton=!1),r.inline=!1;var o=e.extend(r,t);return this.each(function(){var t=this;if(0<e(n[e(t).data("pickerId")]).length)return console.log("dtpicker - Already exist appended picker"),void 0;var r=i.length;i.push(t),o.inputObjectId=r;null!==e(t).val()&&""!==e(t).val()&&(o.current=e(t).val());var s=e("<div>");o.inline?s.insertAfter(t):(s.css("position","absolute"),e("body").append(s));var l=n.length,d=e(s).dtpicker(o),u=d.children(".datepicker");e(t).data("pickerId",l),e(t).keyup(function(){var t=e(this),a=e(n[t.data("pickerId")]);if(null!==t.val()&&(null===t.data("beforeVal")||null!==t.data("beforeVal")&&t.data("beforeVal")!==t.val())){var i=h(a.data("dateFormat"),a.data("locale"),a.data("dateOnly")),r=m(t.val(),i);r&&D(a,{isAnim:!0,isOutputToInputObject:!1},r)}t.data("beforeVal",t.val())}),e(t).change(function(){e(this).trigger("keyup")});var c=new a(u,e(t));o.inline===!0?u.data("isInline",!0):(u.data("isInline",!1),d.css({zIndex:100}),u.css("width","auto"),u.hide(),e(t).on("click, focus",function(){var t=e(this),i=e(n[t.data("pickerId")]),r=new a(i,t),o=r.isShow();if(!o){r.show();var s=i.data("onShow");null!==s&&(console.log("dtpicker- Call the onShow handler"),s(r))}}),function(t){e(window).resize(function(){t._relocate()}),e(window).scroll(function(){t._relocate()})}(c)),e(t).bind("destroyed",function(){var t=e(this),i=e(n[t.data("pickerId")]),r=new a(i,t);r.destroy()});var p=u.data("onInit");null!==p&&(console.log("dtpicker- Call the onInit handler"),p(c))})};var O={show:function(){var t=e(this),i=e(n[t.data("pickerId")]);if(null!==i){var r=new a(i,t);r.show()}},hide:function(){var t=e(this),i=e(n[t.data("pickerId")]);if(null!==i){var r=new a(i,t);r.hide()}},setDate:function(t){var i=e(this),r=e(n[i.data("pickerId")]);if(null!==r){var o=new a(r,i);o.setDate(t)}},getDate:function(){var t=e(this),i=e(n[t.data("pickerId")]);if(null!==i){var r=new a(i,t);return r.getDate()}},destroy:function(){var t=e(this),i=e(n[t.data("pickerId")]);if(null!==i){var r=new a(i,t);r.destroy()}}};e.fn.handleDtpicker=function(t){return O[t]?O[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.handleDtpicker"),void 0):O.init.apply(this,arguments)},window.console||(window.console={},window.console.log=function(){}),e.event.special.destroyed={remove:function(e){e.handler&&e.handler.apply(this,arguments)}},e(function(){e("body").click(function(){for(var t=0;t<n.length;t++){var o=e(n[t]);if(r!=t&&null!==o.data("inputObjectId")&&o.data("isInline")===!1&&"none"!=o.css("display")){var s=i[o.data("inputObjectId")],l=new a(o,s);l.hide();var d=o.data("onHide");null!==d&&(console.log("dtpicker- Call the onHide handler"),d(l))}}})})}(jQuery);