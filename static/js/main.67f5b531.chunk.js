(this["webpackJsonpreact-youtube-clone"]=this["webpackJsonpreact-youtube-clone"]||[]).push([[0],{22:function(e,t,n){e.exports={videos:"video_list_videos__1VCw_"}},3:function(e,t,n){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channelTitle:"video_item_channelTitle__3uISa"}},30:function(e,t,n){},4:function(e,t,n){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},5:function(e,t,n){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},51:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(21),s=n.n(c),r=(n(30),n(12)),o=n(5),l=n.n(o),u=n(4),d=n.n(u),p=n(0),h=function(e){var t=e.onSearch,n=Object(i.useRef)(),a=function(){t(n.current.value)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:d.a.channelTitle,children:"Youtube"})]}),Object(p.jsx)("input",{ref:n,className:d.a.input,type:"Search",placeholer:"Search..",onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(p.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){a()},children:Object(p.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})},m=n(9),_=n.n(m),j=function(e){var t=e.video;return console.log(t),Object(p.jsxs)("section",{className:_.a.detail,children:[Object(p.jsx)("iframe",{className:_.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{children:t.title}),Object(p.jsx)("h3",{children:t.channelTitle}),Object(p.jsx)("pre",{className:_.a.description,children:t.description})]})},b=n(3),v=n.n(b),f=function(e){var t=e.video,n=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(p.jsxs)("div",{className:v.a.video,children:[Object(p.jsx)("img",{className:v.a.thumbnail,src:t.thumbnail,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:v.a.metadata,children:[Object(p.jsx)("p",{className:v.a.title,children:t.title}),Object(p.jsx)("p",{className:v.a.channelTitle,children:t.channelTitle})]})]})})},x=n(22),O=n.n(x),g=function(e){var t=e.videos,n=e.onVideoClick,i=e.display;return Object(p.jsx)("ul",{className:O.a.videos,children:t.map((function(e){return Object(p.jsx)(f,{video:e,onVideoClick:n,display:i},e.id)}))})};var y=function(e){var t=e.youtube,n=Object(i.useState)([]),a=Object(r.a)(n,2),c=a[0],s=a[1],o=Object(i.useState)(null),u=Object(r.a)(o,2),d=u[0],m=u[1];return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:function(e){m(null),t.search(e).then((function(e){return s(e)}))}}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(j,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(g,{videos:c,onVideoClick:function(e){m(e)},display:d?"list":"grid"})})]})]})},N=n(23),k=n.n(N),w=n(6),I=n.n(w),T=n(11),S=n(24),C=n(25),P=new(function(){function e(t){Object(S.a)(this,e),this.client=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(T.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:30}});case 2:return t=e.sent,e.abrupt("return",t.data.items.map((function(e){return{id:e.id,title:e.snippet.title,channelTitle:e.snippet.channelTitle,description:e.snippet.description,thumbnail:e.snippet.thumbnails.medium.url}})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(T.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get("search",{params:{part:"snippet",maxResults:30,type:"video",q:t}});case 2:return n=e.sent,e.abrupt("return",n.data.items.map((function(e){return{id:e.id.videoId,title:e.snippet.title,channelTitle:e.snippet.channelTitle,description:e.snippet.description,thumbnail:e.snippet.thumbnails.medium.url}})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(k.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyB0uzK6PMyN5H6r7GAhNpFqPqj-Eoh7QVI"}}));s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{youtube:P})}),document.getElementById("root"))},9:function(e,t,n){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[51,1,2]]]);
//# sourceMappingURL=main.67f5b531.chunk.js.map