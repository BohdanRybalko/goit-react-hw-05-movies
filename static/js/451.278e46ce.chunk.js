"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[451],{451:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(409),i=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Df)();case 3:e=r.sent,c(e.data.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Trending Movies"}),(0,i.jsx)("ul",{children:t.map((function(r){return(0,i.jsx)("li",{children:r.title},r.id)}))})]})}},409:function(r,e,t){t.d(e,{Df:function(){return o},TP:function(){return i},tx:function(){return f},z1:function(){return s},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"328830ad39afbbc4f4fea7244342fed5"}}),o=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/trending/get-trending");case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/search/search-movies",{params:{query:e}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/get-movie-details/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/get-movie-credits/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/get-movie-reviews/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=451.278e46ce.chunk.js.map