define(["underscore","modules/api"],function(e,t){function n(e){this.nameSpace=e.nameSpace,this.feedName=e.feedName,this.feedId=e.feedId}var i=function(e){var i=new n(e),r=function(e,n){return t.get("entityList",{listName:"socialContentFeeds@"+i.nameSpace,startIndex:e,pageSize:n})},a=function(e,n,r){return t.get("documentView",{listName:"socialContentCollection@"+i.nameSpace,startIndex:e,pageSize:n,filter:"properties.feeds eq "+r,sortBy:"properties.createDate desc",viewName:"socialContentFeeds"})};return{getFeedItems:function(e,t,n){return a(e,t,n)},getFeeds:function(){return r()}}};return{getSocialContentFeeds:function(e){return i(e)}}});