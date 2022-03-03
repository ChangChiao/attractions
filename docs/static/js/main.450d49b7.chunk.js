(this["webpackJsonpreact-attractions"]=this["webpackJsonpreact-attractions"]||[]).push([[0],{196:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s,o,l,d=n(0),p=n(21),u=n.n(p),j=n(11),b=n(89),h=n(54),x=n(12),m=n(36),f=n(90),O=n.n(f),v=n(13),g=Object(m.b)({name:"search",initialState:{searchData:{}},reducers:{setSearchData:function(e,t){e.searchData=t.payload}}}),y=g.actions.setSearchData,w=g.reducer,k=Object(m.b)({name:"intro",initialState:{introData:{}},reducers:{setIntroData:function(e,t){e.introData=t.payload}}}),N=k.actions.setIntroData,C=k.reducer,S=n(40),_={key:"root",storage:O.a},T=Object(v.c)({search:w,intro:C}),P=Object(h.a)(_,T),D=Object(m.a)({reducer:P,middleware:[S.a],whitelist:["cityList","searchData","introData"]}),z=n(7),E=n(8),$=n(10),A=[{value:"activity",label:"\u7bc0\u6176\u6d3b\u52d5"},{value:"spot",label:"\u63a2\u7d22\u666f\u9ede"},{value:"restaurant",label:"\u54c1\u5690\u7f8e\u98df"}],M=[{name:"\u63a2\u7d22\u666f\u9ede",path:"spot"},{name:"\u7bc0\u6176\u6d3b\u52d5",path:"activity"},{name:"\u54c1\u5690\u7f8e\u98df",path:"restaurant"}],R=[{label:"\u81fa\u5317\u5e02",value:"Taipei"},{label:"\u65b0\u5317\u5e02",value:"NewTaipei"},{label:"\u6843\u5712\u5e02",value:"Taoyuan"},{label:"\u81fa\u4e2d\u5e02",value:"Taichung"},{label:"\u81fa\u5357\u5e02",value:"Tainan"},{label:"\u9ad8\u96c4\u5e02",value:"Kaohsiung"},{label:"\u57fa\u9686\u5e02",value:"Keelung"},{label:"\u65b0\u7af9\u5e02",value:"Hsinchu"},{label:"\u65b0\u7af9\u7e23",value:"HsinchuCounty"},{label:"\u82d7\u6817\u7e23",value:"MiaoliCounty"},{label:"\u5f70\u5316\u7e23",value:"ChanghuaCounty"},{label:"\u5357\u6295\u7e23",value:"NantouCounty"},{label:"\u96f2\u6797\u7e23",value:"YunlinCounty"},{label:"\u5609\u7fa9\u7e23",value:"ChiayiCounty"},{label:"\u5609\u7fa9\u5e02",value:"Chiayi"},{label:"\u5c4f\u6771\u7e23",value:"PingtungCounty"},{label:"\u5b9c\u862d\u7e23",value:"YilanCounty"},{label:"\u82b1\u84ee\u7e23",value:"HualienCounty"},{label:"\u81fa\u6771\u7e23",value:"TaitungCounty"},{label:"\u91d1\u9580\u7e23",value:"KinmenCounty"},{label:"\u6f8e\u6e56\u7e23",value:"PenghuCounty"},{label:"\u9023\u6c5f\u7e23",value:"LienchiangCounty"}],U=n(1),I=Object(E.a)(a||(a=Object(z.a)(["\n  color: var(--green);\n  letter-spacing: 5px;\n  font-size: 20px;\n  cursor: pointer;\n"]))),F=E.b.div(c||(c=Object(z.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 50px;\n  border-bottom: 1px solid #ccc;\n  @media (max-width: 980px) {\n    display: none;\n  }\n  h1 {\n    ","\n  }\n  .logo {\n    cursor: pointer;\n  }\n"])),I),H=E.b.ul(r||(r=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 980px) {\n    display: none;\n  }\n  li {\n    margin: 0 10px;\n    cursor: pointer;\n    &:hover {\n      color: var(--green);\n    }\n  }\n"]))),Y=E.b.header(i||(i=Object(z.a)(["\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  position: relative;\n  line-height: 50px;\n  display: none;\n  h1 {\n    ","\n  }\n  .logo {\n    cursor: pointer;\n    padding-top: 10px;\n  }\n  @media (max-width: 980px) {\n    display: block;\n  }\n"])),I),L=E.b.ul(s||(s=Object(z.a)(["\n  width: 100%;\n  height: calc(100vh - 50px);\n  position: fixed;\n  top: 50px;\n  z-index: 100;\n  background: var(--green);\n  li {\n    color: #fff;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    border-bottom: 1px solid var(--line);\n  }\n"]))),V=E.b.div(o||(o=Object(z.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background: var(--green);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n\n  .line {\n    width: 30px;\n    height: 3px;\n    background-color: #ecf0f1;\n    display: block;\n    margin: 3px 0;\n    transition: all 0.3s ease-in-out;\n  }\n"])),(function(e){return e.active&&Object(E.a)(l||(l=Object(z.a)(["\n      .line {\n        &:nth-child(1) {\n          transform: translateY(8px) rotate(45deg);\n        }\n        &:nth-child(2) {\n          opacity: 0;\n        }\n        &:nth-child(3) {\n          transform: translateY(-10px) rotate(-45deg);\n        }\n      }\n    "])))}));var B,q=function(){var e=Object(d.useState)(!1),t=Object($.a)(e,2),n=t[0],a=t[1],c=Object(j.f)(),r=Object(x.b)(),i=function(e){r(y({type:e})),a(!1),c.push("/search")},s=function(){a(!1),c.push("/")};return Object(d.useEffect)((function(){document.body.style=n?"position:fixed":""}),[n]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(F,{children:[Object(U.jsx)("img",{className:"logo",onClick:s,src:"./image/logo.png"}),Object(U.jsx)(H,{children:M.map((function(e){return Object(U.jsx)("li",{onClick:function(){i(e.path)},children:e.name},e.name)}))})]}),Object(U.jsxs)(Y,{children:[Object(U.jsx)("img",{className:"logo",onClick:s,src:"./image/logo-mobile.png"}),Object(U.jsxs)(V,{active:n,onClick:function(){a((function(e){return!e}))},children:[Object(U.jsx)("span",{className:"line"}),Object(U.jsx)("span",{className:"line"}),Object(U.jsx)("span",{className:"line"})]})]}),n&&Object(U.jsx)(L,{children:M.map((function(e){return Object(U.jsx)("li",{onClick:function(){i(e.path)},children:e.name},"m"+e.name)}))})]})},K=E.b.footer(B||(B=Object(z.a)(["\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  background-color: var(--green);\n  color: #fff;\n"])));var W,X=function(){return Object(U.jsx)(K,{children:"The F2E 3rd \u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd"})},G=E.b.div(W||(W=Object(z.a)(["\n  /* overflow-y: scroll; */\n"])));var J=function(e){return Object(U.jsxs)(G,{children:[Object(U.jsx)(q,{}),Object(U.jsx)("div",{className:"wrapper",children:e.children}),Object(U.jsx)(X,{})]})};var Q=Object(j.g)((function(e){var t=e.history,n=e.children;return Object(d.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),Object(U.jsx)(d.Fragment,{children:n})})),Z=n(19),ee=n.n(Z),te=n(9),ne=n(29),ae=(n(116),n(94));var ce,re=function(){return Object(U.jsx)(ae.Carousel,Object(te.a)(Object(te.a)({},{dots:!0,infinite:!0,autoPlay:!0,speed:500,showStatus:!1}),{},{children:["\u5357\u6295 \uff5c \u6e05\u5883\u8fb2\u5834","\u82b1\u84ee \uff5c \u82b1\u6771\u7e31\u8c37","\u9ad8\u96c4 \uff5c \u4e09\u9cf3\u5bae","\u53f0\u5317 \uff5c 101","\u65b0\u5317 \uff5c \u91ce\u67f3"].map((function(e,t){return Object(U.jsx)("div",{className:"carousel-item",style:{backgroundImage:"url(".concat(".","/image/banner/").concat(t,".jpg)")},children:Object(U.jsx)("p",{className:"carousel-title",children:e})},e)}))}))},ie=n(100),se=E.b.div(ce||(ce=Object(z.a)(["\n  width: 300px;\n  margin-right: 5px;\n  margin-top: 0px;\n  height: 32px;\n  input {\n    min-height: 18px !important;\n  }\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n"]))),oe=function(e){return Object(te.a)(Object(te.a)({},e),{},{borderRadius:8,colors:Object(te.a)({},e.colors)})},le={option:function(e,t){return Object(te.a)(Object(te.a)({},e),{},{borderBottom:"1px dotted #ccc",color:t.isSelected?"#fff":"#666",backgroundColor:t.isSelected?"#6E7D60":"#fff",padding:5})},control:function(e){return Object(te.a)(Object(te.a)({},e),{},{border:"1px solid #ddd",color:"#ccc"})},singleValue:function(e,t){return Object(te.a)(Object(te.a)({},e),{},{borderRadius:"4px",opacity:t.isDisabled?.5:1})}};var de,pe=function(e){return Object(U.jsx)(se,{children:Object(U.jsx)(ie.a,{defaultValue:e.defaultValue,theme:oe,styles:le,onChange:e.onChange,options:e.options})})},ue=n(16),je=n(17),be=E.b.div(de||(de=Object(z.a)(['\n  text-align: left;\n  padding: 5% 10%;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 980px) {\n    display: block;\n    text-align: center;\n    padding: 5% 0;\n  }\n  .area {\n    width: 40%;\n    padding-left: 20px;\n    @media (max-width: 980px) {\n      width: 100%;\n      padding-left: 0px;\n    }\n  }\n  .main-title {\n    font-size: 36px;\n    line-height: 50px;\n    @media (max-width: 980px) {\n      font-size: 32px;\n    }\n    .taiwan {\n      position: relative;\n      &:after {\n        content: "";\n        position: absolute;\n        bottom: -3px;\n        height: 2px;\n        background-color: var(--green_light);\n        width: 100%;\n        left: 0;\n      }\n    }\n  }\n  .sub-title {\n    font-size: 16px;\n    padding: 20px 0;\n    color: #646464;\n    svg {\n      color: var(--green_light);\n      margin: 0 5px;\n    }\n    span {\n      color: #646464;\n    }\n  }\n  .search-input {\n    width: 300px;\n    margin-top: 10px;\n    @media (max-width: 980px) {\n      width: 100%;\n      margin-top: 16px;\n    }\n  }\n  .search-btn {\n    width: 300px;\n    height: 40px;\n    margin-top: 10px;\n    letter-spacing: 5px;\n    display: block;\n    cursor: pointer;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n    svg {\n      margin-right: 5px;\n      cursor: pointer;\n    }\n  }\n'])));var he,xe=function(){var e=Object(x.b)(),t=Object(j.f)(),n=Object(d.useState)(""),a=Object($.a)(n,2),c=a[0],r=a[1],i=Object(d.useState)(A[1]),s=Object($.a)(i,2),o=s[0],l=s[1];return Object(U.jsxs)(be,{children:[Object(U.jsxs)("div",{className:"area",children:[Object(U.jsxs)("p",{className:"main-title",children:["\u63a2\u7d22",Object(U.jsx)("span",{className:"taiwan",children:"\u53f0\u7063\u4e4b\u7f8e"})]}),Object(U.jsx)("p",{className:"main-title",children:"\u8b93\u6211\u5011\u66f4\u89aa\u8fd1\u9019\u7247\u571f\u5730"}),Object(U.jsxs)("p",{className:"sub-title",children:[Object(U.jsx)(ue.a,{className:"mark",icon:je.c}),"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd ",Object(U.jsx)("span",{children:"Taiwan Travel Guide"})]})]}),Object(U.jsxs)("div",{className:"area",children:[Object(U.jsx)(pe,{defaultValue:o,onChange:l,options:A}),Object(U.jsx)("input",{className:"search-input",placeholder:"\u4f60\u60f3\u53bb\u54ea\u88e1\uff1f\u8acb\u8f38\u5165\u95dc\u9375\u5b57",value:c,onChange:function(e){r(e.target.value)}}),Object(U.jsxs)("button",{className:"search-btn",onClick:function(){var n={keyword:c,type:null===o||void 0===o?void 0:o.value};e(y(n)),t.push("/search")},children:[Object(U.jsx)(ue.a,{className:"mark",icon:je.d}),"\u641c\u5c0b"]})]})]})},me=n(42),fe=function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,c=t.getDate();return"".concat(n,"/").concat(a,"/").concat(c)},Oe=E.b.div(he||(he=Object(z.a)(["\n  width: 49%;\n  cursor: pointer;\n  display: flex;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  margin-top: 10px;\n  background-color: var(--gray);\n  transition-duration: 0.3s;\n  height: 120px;\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  &:hover {\n    .cover {\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n  .cover {\n    width: 150px;\n    overflow: hidden;\n    @media (max-width: 980px) {\n      width: 80px;\n    }\n    img {\n      transition-duration: 0.3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .text {\n    flex: 1;\n    padding: 10px 14px;\n    position: relative;\n  }\n  .bottom-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    width: 90%;\n    bottom: 10px;\n  }\n  .intro {\n    @media (max-width: 980px) {\n      display: none;\n    }\n  }\n"])));var ve=function(e){var t=e.data,n=Object(x.b)(),a=Object(j.f)();return Object(U.jsxs)(Oe,{onClick:function(){n(N(t)),a.push({pathname:"/intro"})},children:[Object(U.jsx)("div",{className:"cover",children:Object(U.jsx)("img",{src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"./image/default/act.jpg"}(t.Picture)})}),Object(U.jsxs)("div",{className:"text",children:[Object(U.jsx)("p",{className:"date",children:"".concat(fe(t.StartTime),"-").concat(fe(t.EndTime))}),Object(U.jsx)("p",{className:"item-title",children:t.ActivityName||t.RestaurantName}),Object(U.jsxs)("p",{className:"bottom-info",children:[Object(U.jsxs)("span",{className:"location",children:[Object(U.jsx)(ue.a,{className:"mark",icon:je.c}),t.Address]}),Object(U.jsxs)("span",{className:"intro",children:["\u8a73\u7d30\u4ecb\u7d39",Object(U.jsx)(ue.a,{className:"mark",icon:je.a})]})]})]})]})},ge=n(95),ye=n.n(ge).a.create({});ye.interceptors.request.use((function(e){var t=e.params;return Object.keys(t).map((function(e){t[e]||delete t[e]})),e}),(function(e){return e})),ye.interceptors.response.use((function(e){return e.data}),(function(e){var t=e.response.status;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e&&("error"===t&&me.b.error(e),"success"===t&&me.b.success(e))}("error--".concat(t),"error"),Promise.reject(e)}));var we,ke=ye,Ne=n(101),Ce=function(){var e=(new Date).toGMTString(),t=new Ne.a("SHA-1","TEXT");t.setHMACKey("daVxLDO01nPgTTwhQKVBmY-pjeQ","TEXT"),t.update("x-date: "+e);var n=t.getHMAC("B64");return{Authorization:'hmac username="'.concat("b65665fcca144956a79d25bb3edc7b34",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(n,'"'),"X-Date":e,"Content-Type":"application/x-www-form-urlencoded"}},Se=function(e){var t=e.city,n=void 0===t?"":t;return delete e.city,{cityPath:n,data:e}},_e=function(e){var t=Se(e),n=t.cityPath,a=t.data,c={headers:Ce(),params:Object(te.a)({},a)};return ke.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant"+"/".concat(n),c)},Te=function(e){var t=Se(e),n=t.cityPath,a=t.data,c={headers:Ce(),params:Object(te.a)({},a)};return ke.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot"+"/".concat(n),c)},Pe=function(e){var t=Se(e),n=t.cityPath,a=t.data,c={headers:Ce(),params:Object(te.a)({},a)};return ke.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity"+"/".concat(n),c)},De=E.b.div(we||(we=Object(z.a)(["\n  margin-top: 30px;\n  .title-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-left: 5px;\n    }\n  }\n  .list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-top: 10px;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n"])));var ze,Ee=function(){var e=Object(j.f)(),t=Object(x.b)(),n=Object(d.useState)([]),a=Object($.a)(n,2),c=a[0],r=a[1],i=function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4,$orderBy:"EndTime desc",$filter:"Picture/PictureUrl1 ne null"},e.next=3,Pe(t);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){i()}),[]),Object(U.jsxs)(De,{children:[Object(U.jsxs)("div",{className:"title-bar",children:[Object(U.jsx)("h3",{className:"title",children:"\u8fd1\u671f\u6d3b\u52d5"}),Object(U.jsxs)("span",{className:"more",onClick:function(){t(y({type:"activity"})),e.push("/search")},children:["\u67e5\u770b\u66f4\u591a\u6d3b\u52d5",Object(U.jsx)(ue.a,{className:"mark",icon:je.a})]})]}),Object(U.jsx)("div",{className:"list",children:c.map((function(e){return Object(U.jsx)(ve,{data:Object(te.a)(Object(te.a)({},e),{},{type:"activity"})},e.ActivityID)}))})]})},$e=E.b.div(ze||(ze=Object(z.a)(["\n  width: 24%;\n  cursor: pointer;\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  &:hover {\n    .cover {\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n  .cover {\n    border-radius: 20px;\n    height: 200px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    img {\n      transition-duration: 0.3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .location {\n    margin-bottom: 10px;\n    text-align: left;\n    padding: 10px 0;\n  }\n"])));var Ae,Me=function(e){var t=e.data,n=Object(x.b)(),a=Object(j.f)();return Object(U.jsxs)($e,{onClick:function(){n(N(t)),a.push({pathname:"/intro"})},children:[Object(U.jsx)("div",{className:"cover",children:Object(U.jsx)("img",{src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"./image/default/default.png"}(t.Picture)})}),Object(U.jsx)("p",{className:"item-title",children:t.ScenicSpotName||t.RestaurantName}),Object(U.jsxs)("p",{className:"location",children:[Object(U.jsx)(ue.a,{className:"mark",icon:je.c}),t.Address||t.City]})]})},Re=E.b.div(Ae||(Ae=Object(z.a)(["\n  margin-top: 50px;\n  .title-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-left: 5px;\n    }\n  }\n  .list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-top: 16px;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n"])));var Ue=function(e){var t=e.data,n=Object(j.f)(),a=Object(x.b)();return Object(U.jsxs)(Re,{children:[Object(U.jsxs)("div",{className:"title-bar",children:[Object(U.jsx)("h3",{className:"title",children:t.title}),Object(U.jsxs)("span",{className:"more",onClick:function(){var e={type:null===t||void 0===t?void 0:t.type};a(y(e)),n.push("/search")},children:["\u67e5\u770b\u66f4\u591a\u6d3b\u52d5",Object(U.jsx)(ue.a,{className:"mark",icon:je.a})]})]}),Object(U.jsx)("div",{className:"list",children:t.list&&t.list.map((function(e){return Object(U.jsx)(Me,{data:Object(te.a)(Object(te.a)({},e),{},{type:t.type})},e.ScenicSpotID||e.RestaurantID)}))})]})};var Ie=function(){var e=Object(d.useState)({title:"\u71b1\u9580\u6253\u5361\u666f\u9ede",type:"spot",list:[]}),t=Object($.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)({title:"\u4e00\u518d\u56de\u8a2a\u7f8e\u98df",type:"restaurant",list:[]}),r=Object($.a)(c,2),i=r[0],s=r[1],o=function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4,$filter:"Picture/PictureUrl1 ne null"},e.next=3,Te(t);case 3:n=e.sent,a((function(e){return Object(te.a)(Object(te.a)({},e),{},{list:n})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4,$filter:"Picture/PictureUrl1 ne null"},e.next=3,_e(t);case 3:n=e.sent,s((function(e){return Object(te.a)(Object(te.a)({},e),{},{list:n})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){o(),l()}),[]),Object(U.jsxs)("div",{children:[Object(U.jsx)(xe,{}),Object(U.jsx)(re,{}),Object(U.jsx)(Ee,{}),Object(U.jsx)(Ue,{data:n}),Object(U.jsx)(Ue,{data:i})]})};var Fe=function(e){var t=e.Name;return Object(U.jsx)("iframe",{width:"100%",height:"250",loading:"lazy",src:"https://maps.google.com/maps?q=".concat(t,"&hl=zh-TW&z=16&output=embed")})};var He=function(e){var t=e.data;return Object(U.jsxs)("div",{className:"detail",children:[Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u6d3b\u52d5\u6642\u9593:"}),"".concat(fe(t.StartTime),"-").concat(fe(t.EndTime))]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u4e3b\u8fa6\u55ae\u4f4d:"}),t.Organizer]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u6d3b\u52d5\u5730\u9ede:"}),t.Address]})]})};var Ye=function(e){var t=e.data;return Object(U.jsxs)("div",{className:"detail",children:[Object(U.jsxs)("p",{children:[Object(U.jsx)("h3",{className:"focus",children:"\u71df\u696d\u6642\u9593:"}),t.OpenTime]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("h3",{className:"focus",children:"\u806f\u7d61\u96fb\u8a71:"}),Object(U.jsx)("a",{href:"tel:".concat(t.Phone),children:t.Phone})]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("h3",{className:"focus",children:"\u9910\u5ef3\u5730\u5740:"}),t.Address]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("h3",{className:"focus",children:"\u5b98\u65b9\u7db2\u7ad9:"}),t.WebsiteUrl?Object(U.jsx)("a",{href:t.WebsiteUrl,target:"_blank",rel:"noreferrer",children:t.WebsiteUrl}):Object(U.jsx)("span",{children:"\u7121"})]})]})};var Le,Ve,Be=function(e){var t=e.data;return Object(U.jsxs)("div",{className:"detail",children:[Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u958b\u653e\u6642\u9593:"}),t.OpenTime]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u670d\u52d9\u96fb\u8a71:"}),Object(U.jsx)("a",{href:"tel:".concat(t.Phone),children:t.Phone})]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u666f\u9ede\u5730\u5740:"}),t.Address]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u7968\u50f9\u8cc7\u8a0a:"}),t.TicketInfo]}),Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{className:"focus",children:"\u6ce8\u610f\u4e8b\u9805:"}),t.Remarks||"\u7121"]})]})},qe=E.b.div(Le||(Le=Object(z.a)(["\n  padding-bottom: 20px;\n  font-size: 14px;\n  .crumb-text {\n    color: var(--green);\n    cursor: pointer;\n  }\n  strong {\n    color: var(--green);\n    margin: 0 5px;\n  }\n"])));function Ke(e){var t=e.type,n=e.title,a=Object(j.f)(),c=Object(x.b)(),r=function(e){var t="";"\u9996\u9801"===e&&(t="/"),M.forEach((function(n){if(n.name===e){t="/search";var a={type:n.path};c(y(a))}})),t&&a.push({pathname:t})};return Object(U.jsxs)(qe,{children:[Object(U.jsx)("span",{onClick:function(){r(t)},className:"crumb-text",children:t}),Object(U.jsx)("strong",{children:"/"}),Object(U.jsx)("span",{onClick:function(){r(n)},className:"crumb-text",children:n})]})}var We=E.b.div(Ve||(Ve=Object(z.a)(["\n  margin-top: 30px;\n  .main-cover {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 20px;\n    @media (max-width: 980px) {\n      height: 200px;\n    }\n  }\n  .intro-title {\n    font-size: 32px;\n    padding: 20px 0 16px;\n  }\n  .tag {\n    color: var(--brown);\n    font-size: 14px;\n    padding: 5px;\n    border-radius: 20px;\n    margin-right: 5px;\n    border: 1px solid var(--brown);\n  }\n  .content {\n    padding: 30px 0 20px;\n    h3 {\n      padding-bottom: 14px;\n    }\n    p {\n      line-height: 24px;\n    }\n  }\n  .intro {\n    display: flex;\n    justify-content: space-between;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n  .map {\n    width: 48%;\n    height: 100%;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n  }\n  .detail {\n    width: 48%;\n    background: #f9f9f9;\n    border-radius: 20px;\n    padding: 20px 10px;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n    p {\n      padding: 8px 0;\n      display: flex;\n      line-height: 20px;\n      .focus {\n        margin-right: 5px;\n        word-break: keep-all;\n      }\n    }\n    a {\n      word-break: break-all;\n      color: var(--green);\n    }\n  }\n"])));var Xe=function(){var e=Object(d.useState)({}),t=Object($.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)([]),r=Object($.a)(c,2),i=r[0],s=r[1],o=Object(d.useState)(""),l=Object($.a)(o,2),p=l[0],u=l[1],j=Object(x.c)((function(e){return e.intro.introData})),b=function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={$top:4,$skip:(r=30,4*(Math.floor(Math.random()*r)+1)),$filter:"Picture/PictureUrl1 ne null"},n="",c=[],e.t0=j.type,e.next="activity"===e.t0?6:"spot"===e.t0?11:16;break;case 6:return n="\u6d3b\u52d5",e.next=9,Pe(t);case 9:return c=e.sent,e.abrupt("break",21);case 11:return n="\u666f\u9ede",e.next=14,Te(t);case 14:return c=e.sent,e.abrupt("break",21);case 16:return n="\u9910\u5ef3",e.next=19,_e(t);case 19:return c=e.sent,e.abrupt("break",21);case 21:u(n),a({type:j.type,title:"\u9084\u6709\u9019\u4e9b\u4e0d\u80fd\u932f\u904e",list:c});case 23:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){switch(j.type){case"activity":return Object(U.jsx)(He,{data:j});case"spot":return Object(U.jsx)(Be,{data:j});default:return Object(U.jsx)(Ye,{data:j})}},m=function(e){var t=e.ActivityName,n=e.ScenicSpotName,a=e.RestaurantName;return t||n||a};return Object(d.useEffect)((function(){}),[]),Object(d.useEffect)((function(){b(),function(){for(var e=[],t=0,n=Object.entries(j);t<n.length;t++){var a=Object($.a)(n[t],2),c=a[0],r=a[1];c.includes("Class")&&e.push("#".concat(r))}0===e.length&&e.push("#\u71b1\u9580\u6253\u5361"),s(e)}()}),[j]),Object(U.jsxs)(We,{children:[Object(U.jsx)(Ke,{type:j.type?A.find((function(e){return e.value===j.type})).label:"",title:m(j)}),Object(U.jsx)("img",{className:"main-cover",src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"./image/default/act.jpg"}(j.Picture)}),Object(U.jsx)("h2",{className:"intro-title",children:m(j)}),Object(U.jsx)("div",{className:"tag-group",children:i.map((function(e){return Object(U.jsx)("span",{className:"tag",children:e},e)}))}),Object(U.jsxs)("div",{className:"content",children:[Object(U.jsxs)("h3",{className:"focus",children:[p,"\u4ecb\u7d39:"]}),Object(U.jsx)("p",{children:"spot"===j.type?j.DescriptionDetail:j.Description})]}),Object(U.jsxs)("div",{className:"intro",children:[Object(U.jsx)(h,{}),Object(U.jsx)("div",{className:"map",children:Object(U.jsx)(Fe,{Name:m(j)})})]}),Object(U.jsx)(Ue,{data:n})]})},Ge=n(71);var Je,Qe=function(e){var t=e.setCity,n=e.city;return Object(U.jsx)(pe,{defaultValue:n,onChange:t,options:R})},Ze=n(97),et=n.n(Ze),tt=E.b.div(Je||(Je=Object(z.a)(["\n  padding-top: 50px;\n  .list {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 20px;\n    .item {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 20px;\n      width: 23%;\n      border-radius: 20px;\n      height: 168px;\n      font-size: 20px;\n      background-size: 100%;\n      background-position: center;\n      background-repeat: no-repeat;\n      @media (max-width: 980px) {\n        width: 100%;\n      }\n      p {\n        color: #fff;\n        transition: 0.2s;\n      }\n      &:hover {\n        p {\n          transform: scale(1.1);\n          color: #d5e2c8;\n        }\n      }\n    }\n  }\n"]))),nt={activity:[{keyword:"\u7bc0\u6176",cover:"event_type_1",title:"\u7bc0\u6176\u6d3b\u52d5"},{keyword:"\u81ea\u884c\u8eca",cover:"event_type_2",title:"\u81ea\u884c\u8eca\u6d3b\u52d5"},{keyword:"\u4f11\u9592",cover:"event_type_3",title:"\u904a\u61a9\u6d3b\u52d5"},{keyword:"\u7522\u696d",cover:"event_type_4",title:"\u7522\u696d\u6587\u5316\u6d3b\u52d5"},{keyword:"2021",cover:"event_type_5",title:"\u5e74\u5ea6\u6d3b\u52d5"},{keyword:"\u79cb",cover:"event_type_6",title:"\u56db\u5b63\u6d3b\u52d5"},{keyword:"",cover:"we",title:""},{keyword:"",cover:"ew",title:""}],spot:[{keyword:"\u98a8\u666f",cover:"spot_type_1",title:"\u81ea\u7136\u98a8\u666f\u985e"},{keyword:"\u5de5\u5ee0",cover:"spot_type_2",title:"\u89c0\u5149\u5de5\u5ee0\u985e"},{keyword:"\u4f11\u9592",cover:"spot_type_3",title:"\u904a\u61a9\u985e"},{keyword:"\u8fb2\u696d",cover:"spot_type_4",title:"\u4f11\u9592\u8fb2\u696d\u985e"},{keyword:"\u751f\u614b",cover:"spot_type_5",title:"\u751f\u614b\u985e"},{keyword:"\u6eab\u6cc9",cover:"spot_type_6",title:"\u6eab\u6cc9\u985e"},{keyword:"\u53e4\u8e5f",cover:"spot_type_7",title:"\u53e4\u8e5f\u985e"},{keyword:"",cover:"wq",title:""}],restaurant:[{keyword:"\u7279\u7522",cover:"food_type_1",title:"\u5730\u65b9\u7279\u7522"},{keyword:"\u4e2d\u5f0f",cover:"food_type_2",title:"\u4e2d\u5f0f\u7f8e\u98df"},{keyword:"\u751c\u9ede",cover:"food_type_3",title:"\u751c\u9ede\u51b0\u54c1"},{keyword:"\u7570\u570b",cover:"food_type_4",title:"\u7570\u570b\u6599\u7406"},{keyword:"\u4f34\u624b\u79ae",cover:"food_type_5",title:"\u4f34\u624b\u79ae"},{keyword:"\u7d20\u98df",cover:"food_type_6",title:"\u7d20\u98df"},{keyword:"",cover:"sd",title:""},{keyword:"",cover:"ad",title:""}]};var at,ct=function(e){var t=e.type,n=void 0===t?"spot":t,a=e.setCategory;return Object(U.jsxs)(tt,{children:[Object(U.jsx)("h2",{className:"title",children:"\u71b1\u9580\u4e3b\u984c"}),Object(U.jsx)("ul",{className:"list",children:n&&nt[n].map((function(e){return Object(U.jsx)("li",{onClick:function(){var t;(t=e.keyword)&&a(t)},className:"item",style:{backgroundImage:"url(".concat(".","/image/catagory/").concat(n,"/").concat(e.cover,".png)")},children:Object(U.jsx)("p",{children:e.title})},e.cover)}))})]})},rt=n(96),it=n.n(rt),st=E.b.div(at||(at=Object(z.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  .load-container {\n    position: absolute;\n    width: 200px;\n    height: 50px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n  }\n  .letter {\n    color: #fff;\n    animation-name: loading;\n    animation-duration: 1.6s;\n    animation-iteration-count: infinite;\n    animation-direction: linear;\n    font-size: 20px;\n  }\n\n  @for $i from 1 to 10 {\n    .l-#{$i} {\n      animation-delay: 0.48s + $i * 0.12s;\n    }\n  }\n\n  @keyframes loading {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])));var ot,lt,dt=function(){var e=it()({onOpen:function(e){e.portal.current.style.cssText="\n            /* add your css here for the Portal */\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            transform: translate(-50%,-50%);\n            z-index: 1000;\n          "}}).Portal;return Object(U.jsx)(e,{children:Object(U.jsx)(st,{children:Object(U.jsxs)("div",{className:"load-container",children:[Object(U.jsx)("div",{className:"l-1 letter",children:"L"}),Object(U.jsx)("div",{className:"l-2 letter",children:"o"}),Object(U.jsx)("div",{className:"l-3 letter",children:"a"}),Object(U.jsx)("div",{className:"l-4 letter",children:"d"}),Object(U.jsx)("div",{className:"l-5 letter",children:"i"}),Object(U.jsx)("div",{className:"l-6 letter",children:"n"}),Object(U.jsx)("div",{className:"l-7 letter",children:"g"}),Object(U.jsx)("div",{className:"l-8 letter",children:"."}),Object(U.jsx)("div",{className:"l-9 letter",children:"."}),Object(U.jsx)("div",{className:"l-10 letter",children:"."})]})})})},pt=(n(154),E.b.div(ot||(ot=Object(z.a)(["\n  padding-top: 50px;\n  .search-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    @media (max-width: 980px) {\n      display: block;\n    }\n    .search-input {\n      flex-grow: 1;\n      margin-top: 5px;\n      margin-right: 5px;\n      @media (max-width: 980px) {\n        width: 100%;\n        margin: ",";\n      }\n    }\n    .react-datepicker-wrapper {\n      margin-top: 5px;\n      margin-right: 5px;\n      width: 200px;\n      input {\n        width: 200px;\n      }\n      @media (max-width: 980px) {\n        margin-top: 10px;\n        width: 100% !important;\n        .input {\n          height: 44px;\n        }\n      }\n    }\n    .search-btn {\n      width: 160px;\n      height: 40px;\n      letter-spacing: 5px;\n      display: block;\n      cursor: pointer;\n      @media (max-width: 980px) {\n        width: 100%;\n      }\n      svg {\n        margin-right: 5px;\n        cursor: pointer;\n      }\n    }\n  }\n"])),(function(e){return"activity"===e.type?"4px 0":"20px 0 10px"}))),ut=E.b.div(lt||(lt=Object(z.a)(["\n  .search-result-text {\n    padding: 50px 0 20px;\n    font-weight: normal;\n    font-size: 28px;\n    span {\n      padding-left: 6px;\n      font-size: 16px;\n      strong {\n        color: #949142;\n      }\n    }\n  }\n  .search-result-list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    @media (max-width: 980px) {\n      display: block;\n    }\n    svg {\n      color: var(--green);\n    }\n  }\n  .no-data {\n    font-size: 20px;\n    line-height: 24px;\n    width: 200px;\n    margin: 0 auto;\n    text-align: center;\n    svg {\n      display: block;\n      font-size: 60px;\n      margin: 20px auto;\n    }\n  }\n"])));var jt=function(){var e=!1,t=0,n=Object(x.b)(),a=Object(d.useState)([]),c=Object($.a)(a,2),r=c[0],i=c[1],s=Object(d.useState)(""),o=Object($.a)(s,2),l=o[0],p=o[1],u=Object(d.useState)(""),j=Object($.a)(u,2),b=j[0],h=j[1],m=Object(d.useState)(""),f=Object($.a)(m,2),O=f[0],v=f[1],g=Object(d.useState)(new Date),w=Object($.a)(g,2),k=w[0],N=w[1],C=Object(d.useState)(!0),S=Object($.a)(C,2),_=S[0],T=S[1],P=Object(d.useState)(!1),D=Object($.a)(P,2),z=D[0],E=D[1],M=Object(x.c)((function(e){return e.search.searchData})),R=Object(d.useRef)(b),I=Object(d.useRef)(k),F=Object(d.useRef)(l),H=Object(d.useRef)(O),Y=Object(d.useRef)(_),L=function(e){R.current=e,h(e)},V=function(e){H.current=e,v(e)},B=function(e){Y.current=e,T(e)},q=function(){return A.find((function(e){return e.value===M.type})).label},K=function(){t=0,e=!1,i([])},W=function(e){var t=new Date(e);return[t.getMonth()+1,t.getFullYear()]},X=function(){return"activity"===M.type?"ActivityName":"spot"===M.type?"ScenicSpotName":"RestaurantName"},G=function(){var n=Object(ne.a)(ee.a.mark((function n(){var a,c,r,s,o,l,d,p,u,j,h;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=[],r="activity"===M.type?W(I.current):[],s=Object($.a)(r,2),o=s[0],l=s[1],d=R.current?"contains(".concat(X(),",'").concat(b,"')"):"",p=o?"month(StartTime) eq ".concat(o):"",u=l?"year(StartTime) eq ".concat(l):"","Picture/PictureUrl1 ne null",j=H.current&&[X(),"Description"].map((function(e){return" contains(".concat(e,", '").concat(H.current,"') ")})).join("or"),h={$top:30,$skip:t,$filter:(x=[d,p,u,"Picture/PictureUrl1 ne null",j],x.filter((function(e){return""!==e})).join(" and ")),city:null===(a=F.current)||void 0===a?void 0:a.value},console.log("sendData",h),E(!0),n.prev=10,n.t0=M.type,n.next="activity"===n.t0?14:"spot"===n.t0?18:22;break;case 14:return n.next=16,Pe(h);case 16:return c=n.sent,n.abrupt("break",26);case 18:return n.next=20,Te(h);case 20:return c=n.sent,n.abrupt("break",26);case 22:return n.next=24,_e(h);case 24:return c=n.sent,n.abrupt("break",26);case 26:E(!1),0===c.length?e=!0:i((function(e){return[].concat(Object(Ge.a)(e),Object(Ge.a)(c))})),n.next=35;break;case 30:n.prev=30,n.t1=n.catch(10),console.error("error"),e=!0,E(!1);case 35:case"end":return n.stop()}var x}),n,null,[[10,30]])})));return function(){return n.apply(this,arguments)}}(),J=function(){document.body.offsetHeight-window.innerHeight<5||e||Y.current||window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&(console.log("is-bottom====",b),!z&&(e||(t+=30,G())))};return Object(d.useEffect)((function(){return window.addEventListener("scroll",J),window.onbeforeunload=function(e){n(y({type:M.type,keyword:""})),window.scrollTo(0,0)},function(){window.removeEventListener("scroll",J)}}),[]),Object(d.useEffect)((function(){M.keyword?(L(M.keyword),B(!1),G()):B(!0),V(""),i([]),q()}),[M]),Object(d.useEffect)((function(){O&&(B(!1),i([]),G())}),[O]),Object(U.jsxs)(pt,{type:M.type,children:[z&&Object(U.jsx)(dt,{}),Object(U.jsx)(Ke,{type:"\u9996\u9801",title:q()}),Object(U.jsxs)("div",{className:"search-bar",children:[Object(U.jsx)(Qe,{setCity:function(e){F.current=e,p(e)},city:l}),"activity"===M.type&&Object(U.jsx)(et.a,{selected:k,onChange:function(e){return t=e,I.current=t,void N(t);var t},dateFormat:"MM/yyyy",showMonthYearPicker:!0}),Object(U.jsx)("input",{className:"search-input",placeholder:"".concat({activity:"\u4f60\u60f3\u73a9\u4ec0\u9ebc\uff1f",spot:"\u4f60\u60f3\u53bb\u54ea\u88e1\uff1f",restaurant:"\u4f60\u60f3\u5403\u4ec0\u9ebc\uff1f"}[M.type],"\u8acb\u8f38\u5165\u95dc\u9375\u5b57"),value:b,onChange:function(e){L(e.target.value)}}),Object(U.jsxs)("button",{className:"search-btn",onClick:function(){V(""),K(),G()},children:[Object(U.jsx)(ue.a,{icon:je.d}),"\u641c\u5c0b"]})]}),Y.current&&Object(U.jsx)(ct,{type:M.type,setCategory:V}),!Y.current&&Object(U.jsxs)(ut,{children:[Object(U.jsxs)("h3",{className:"search-result-text",children:["\u641c\u5c0b\u7d50\u679c",Object(U.jsxs)("span",{children:["\u5171\u6709",Object(U.jsx)("strong",{children:r.length}),"\u7b46"]})]}),Object(U.jsxs)("div",{className:"search-result-list",children:[r.map((function(e){return Object(U.jsx)(Me,{data:Object(te.a)(Object(te.a)({},e),{},{type:M.type})},e.ScenicSpotID)})),0===r.length&&Object(U.jsxs)("div",{className:"no-data",children:["\u3000",Object(U.jsx)(ue.a,{icon:je.b}),Object(U.jsx)("p",{children:"\u67e5\u7121\u8cc7\u6599"}),Object(U.jsx)("p",{children:"\u8acb\u91cd\u65b0\u67e5\u8a62"})]})]})]})]})},bt=(n.p,n.p,n.p,n.p,Object(h.b)(D));var ht=function(){return Object(U.jsx)(x.a,{store:D,children:Object(U.jsx)(b.a,{loading:null,persistor:bt,children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(J,{children:Object(U.jsxs)(Q,{children:[Object(U.jsx)(j.a,{path:"/",exact:!0,component:Ie}),Object(U.jsx)(j.a,{path:"/search",exact:!0,component:jt}),Object(U.jsx)(j.a,{path:"/intro",component:Xe})]})}),Object(U.jsx)(me.a,{})]})})})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},mt=n(23);n(196),n(197);u.a.render(Object(U.jsx)(mt.a,{children:Object(U.jsx)(j.c,{children:Object(U.jsx)(ht,{})})}),document.getElementById("root")),xt()}},[[199,1,2]]]);
//# sourceMappingURL=main.450d49b7.chunk.js.map