(this["webpackJsonpcautious-adventure"]=this["webpackJsonpcautious-adventure"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.e2ca0a41.png"},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(54),l=a(3),i=a(8),o=a(39),m=a.n(o),s=a(55),u=a(14),d=a(13),f=a.n(d),E=function(e){var t=e.markdown,a=Object(n.useState)(null),r=Object(u.a)(a,2),l=r[0],i=r[1],o=function(){var e=Object(s.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then((function(e){return e.text()})).then((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o(t)}),[t,l]),c.a.createElement("div",{className:"content"},l?c.a.createElement(f.a,{source:l}):c.a.createElement("h1",null,"Loading"))},p=a(56),h=a.n(p),b=function(){return c.a.createElement(E,{markdown:h.a})},v=a(187),g=a(185),N=a(58),j=a.n(N);g.a.locale(j.a);function w(e){var t=e.date,a=new Date(t);return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{date:a,timeStyle:"Twitter"}))}var k=a(30),O=a(17),x=a(40);a(176);x.initializeApp({apiKey:"AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng",authDomain:"portfolio-7b51b.firebaseapp.com",databaseURL:"https://portfolio-7b51b.firebaseio.com",projectId:"portfolio-7b51b",storageBucket:"portfolio-7b51b.appspot.com",messagingSenderId:"888392851400",appId:"1:888392851400:web:c91412c8602e7f2e6f2afd",measurementId:"G-N4G5H32S57"});var y=x.firestore(),S=function(e,t,a){return y.collection(e).orderBy(t).onSnapshot(a)},C=Object(n.createContext)({}),I=function(){return Object(n.useContext)(C)};function R(e){var t=e.children;return c.a.createElement(C.Provider,{value:{fetch:S}},t)}var B=a(16),J=a.n(B),A=function(){return c.a.createElement("div",{className:"loading stage"},c.a.createElement("img",{className:"square loading-logo",style:{animation:"spin ".concat(3,"s linear infinite")},src:J.a,alt:"img"}))},D=a(186),W=function(e){var t=e.Child,a=e.collectionName,r=e.sort,l=Object(n.useState)([]),i=Object(u.a)(l,2),o=i[0],m=i[1],s=I().fetch;return Object(n.useEffect)((function(){var e=s(a,r,{next:function(e){e.forEach((function(e){var t=Object(O.a)({id:e.id},e.data());m((function(e){return[t].concat(Object(k.a)(e))}))}))}});return function(){return e()}}),[s,a,r]),c.a.createElement("div",null,c.a.createElement("h1",null,a.replace(/^\w/,(function(e){return e.toUpperCase()}))),!o.length&&c.a.createElement(A,null),o?o.map((function(e){return c.a.createElement(t,{key:Object(D.a)(),item:e})})):c.a.createElement("div",null,"There are no ",a,"s ..."))},z=function(e){var t=e.item;return c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"title"},c.a.createElement("img",{className:"logo",src:J.a,alt:"woodRock github logo"}),c.a.createElement("span",{className:"project-title-text"},c.a.createElement("span",{className:"header"},"@woodRock"),"\u2022",c.a.createElement("i",{className:"secondary"},w({date:t.time}))),c.a.createElement("div",{className:"description text"},c.a.createElement("h2",null,c.a.createElement(i.b,{to:"/project/"+t.id},t.title)),c.a.createElement(f.a,{source:t.description}))),c.a.createElement("div",{className:"project"},c.a.createElement("a",{href:t.link},c.a.createElement("img",{className:"project-image",width:"100%",height:"width",src:t.image,alt:t.title})),c.a.createElement("div",null,c.a.createElement("a",{href:t.link,className:"github-link"},c.a.createElement("i",{className:"fa fa-github"})))))},F=function(){return c.a.createElement(W,{Child:z,collectionName:"projects",sort:"time"})},G=function(e){var t=e.id,a=e.title,n=e.description,r=e.link,l=e.image;return c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,c.a.createElement(i.b,{to:"/projects"},c.a.createElement("i",{className:"material-icons"},"chevron_left")),c.a.createElement(i.b,{to:"/project/"+t},a)),c.a.createElement("div",{className:"description text"},c.a.createElement(f.a,{source:n}))),c.a.createElement("div",{className:"project"},c.a.createElement("a",{href:r},c.a.createElement("img",{className:"project-image",width:"100%",height:"width",src:l,alt:a})),c.a.createElement("div",null,c.a.createElement("a",{href:r,className:"github-link"},c.a.createElement("i",{className:"fa fa-github"})))))},L=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],i=I().fetch,o=Object(l.e)().id;return Object(n.useEffect)((function(){var e=i("projects","time",{next:function(e){e.forEach((function(e){var t=Object(O.a)({id:e.id},e.data());o===t.id&&r(t)}))}});return function(){return e()}}),[o,i]),c.a.createElement("div",{className:"project"}," ",a?c.a.createElement(G,a):c.a.createElement(A,null)," ")},T=function(e){var t=e.item;return c.a.createElement("div",{className:"blog-post twitter-style-border"},c.a.createElement("div",{className:"title"},c.a.createElement("img",{className:"logo",src:J.a,alt:"woodRock github logo"}),c.a.createElement("span",{className:"blog-title-text"},"woodRock \u2022",c.a.createElement("i",null,c.a.createElement("span",{className:"secondary"},w({date:t.time}))))),c.a.createElement("div",{className:"blog-content"},c.a.createElement("h2",null,c.a.createElement(i.b,{to:"/blog/"+t.id},t.title)),c.a.createElement(f.a,{source:t.markdown+""})))},U=function(){return c.a.createElement(W,{Child:T,collectionName:"blog",sort:"time"})},_=function(e){var t=e.item;return c.a.createElement("div",{className:"blog-post twitter-style-border"},c.a.createElement("h1",null,c.a.createElement(i.b,{to:"/blog"},c.a.createElement("i",{className:"material-icons"},"chevron_left")),t.title),c.a.createElement("div",{className:"title"},c.a.createElement("img",{className:"logo",src:J.a,alt:"woodRock github logo"}),c.a.createElement("span",{className:"blog-title-text"},"woodRock\u2022"," ",c.a.createElement("i",null,c.a.createElement("span",{className:"secondary"}," ",w({date:t.time})," ")," ")," ")," ")," ",c.a.createElement("div",{className:"blog-content"},c.a.createElement(f.a,{source:t.markdown+""})," ")," ")},H=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],i=I().fetch,o=Object(l.e)().id;return Object(n.useEffect)((function(){var e=i("blog","time",{next:function(e){e.forEach((function(e){var t=Object(O.a)({id:e.id},e.data());o===t.id&&r(t)}))}});return function(){return e()}}),[o,i]),c.a.createElement("div",{className:"blog"}," ",a?c.a.createElement(_,{item:a}):c.a.createElement(A,null)," ")},M=a(60),P=a.n(M),Y=function(){return c.a.createElement(E,{markdown:P.a})},q=function(e){var t=e.file,a=e.i%2?"right":"left";return c.a.createElement("div",{className:"timeline-container "+a},c.a.createElement("div",{className:"timeline-content twitter-style-border"},c.a.createElement(E,{markdown:t})))},K=function(e){var t=e.title,a=e.events;return c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("div",{className:"timeline"},a.map((function(e,t){return c.a.createElement(q,{key:Object(D.a)(),file:e,i:t})}))))},Z=a(61),$=a.n(Z),Q=a(62),V=a.n(Q),X=a(63),ee=a.n(X),te=a(64),ae=[a.n(te).a,ee.a,V.a,$.a],ne=function(){return c.a.createElement(K,{title:"Education",events:ae})},ce=a(65),re=a.n(ce),le=a(66),ie=a.n(le),oe=a(67),me=a.n(oe),se=[ie.a,me.a,re.a],ue=[{path:"/",component:b},{name:"Home",path:"/home",component:b,icon:"home"},{name:"Projects",path:"/projects",component:F,icon:"code"},{name:"Blog",path:"/blog",component:U,icon:"create"},{name:"Skills",path:"/skills",component:Y,icon:"language"},{name:"Education",path:"/education",component:ne,icon:"school"},{name:"Jobs",path:"/job",component:function(){return c.a.createElement(K,{title:"Jobs",events:se})},icon:"work"},{path:"/blog/:id",component:H},{path:"/project/:id",component:L}],de=function(e){var t=e.social;return c.a.createElement("div",{className:"social"},t.map((function(e){return c.a.createElement(fe,{key:Object(D.a)(),social:e})})))},fe=function(e){var t=e.social;return c.a.createElement("span",null,c.a.createElement("a",{href:t.link},c.a.createElement("i",{className:"link fa fa-"+t.title})))},Ee=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=I().fetch;return Object(n.useEffect)((function(){var e=l("social","title",{next:function(e){e.forEach((function(e){var t=Object(O.a)({id:e.id},e.data());r((function(e){return[].concat(Object(k.a)(e),[t])}))}))}});return function(){return e()}}),[l]),c.a.createElement("div",null,a.length&&c.a.createElement("div",null,"..."),a?c.a.createElement(de,{social:a}):c.a.createElement("div",null,"There are no social links ..."))},pe=a(68),he=a.n(pe),be=function(){return c.a.createElement("ul",null,ue.map((function(e){return""===e.icon?null:c.a.createElement("li",{key:e.path},c.a.createElement(i.b,{className:"link",to:e.path},c.a.createElement("i",{className:"link material-icons"},e.icon),c.a.createElement("span",{className:"link link-text"},e.name)))})))},ve=function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{className:"avatar",width:"80%",src:he.a,alt:""})),c.a.createElement(be,null)))},ge=function(){return c.a.createElement("div",{className:"copyright"},c.a.createElement("small",null,"\xa9 Copyright ",(new Date).getFullYear(),", Jesse Wood"))},Ne=(a(178),function(){return c.a.createElement("div",{className:"navigation twitter-style-border"},c.a.createElement(ve,null))}),je=function(){return c.a.createElement("div",{className:"container twitter-style-border"},c.a.createElement("div",{className:""},ue.map((function(e){return c.a.createElement(l.a,{key:e.path,path:e.path,exact:!0,component:e.component})}))))},we=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ee,null),c.a.createElement(ge,null))},ke=function(){return c.a.createElement(i.a,null,c.a.createElement(Ne,null),c.a.createElement(je,null),c.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(c.a.createElement(R,null,c.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports=a.p+"static/media/home.96322957.md"},60:function(e,t,a){e.exports=a.p+"static/media/skills.b3e295d9.md"},61:function(e,t,a){e.exports=a.p+"static/media/ibs.f9e79478.md"},62:function(e,t,a){e.exports=a.p+"static/media/swis.965bd400.md"},63:function(e,t,a){e.exports=a.p+"static/media/rc.0332008a.md"},64:function(e,t,a){e.exports=a.p+"static/media/vuw.5c3093bd.md"},65:function(e,t,a){e.exports=a.p+"static/media/macs.0fc29bca.md"},66:function(e,t,a){e.exports=a.p+"static/media/niwa.181c615f.md"},67:function(e,t,a){e.exports=a.p+"static/media/stjohns.45df9c08.md"},68:function(e,t,a){e.exports=a.p+"static/media/me.791eff73.jpg"},69:function(e,t,a){e.exports=a(179)}},[[69,1,2]]]);
//# sourceMappingURL=main.834f5965.chunk.js.map