(this["webpackJsonpcautious-adventure"]=this["webpackJsonpcautious-adventure"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(54),o=a.n(l),c=(a(71),a(9)),i=a(18),s=a(14),u=a(12),m=a(4),p=a(6),d=a(8),h=a(7),f=a(17),E=r.a.createContext(null),b=function(e){return function(t){return r.a.createElement(E.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},g=E,v=a(24),w=a.n(v),j=(a(73),a(75),a(77),{apiKey:"AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng",authDomain:"portfolio-7b51b.firebaseapp.com",databaseURL:"https://portfolio-7b51b.firebaseio.com",projectId:"portfolio-7b51b",storageBucket:"portfolio-7b51b.appspot.com",messagingSenderId:"888392851400",appId:"1:888392851400:web:c91412c8602e7f2e6f2afd",measurementId:"G-N4G5H32S57"}),O=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(new w.a.auth.GoogleAuthProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.collection.ref("users/".concat(e))},this.users=function(){return t.db.collection.ref("users")},this.projects=function(){return t.db.collection("projects")},this.social=function(){return t.db.collection("social")},this.blog=function(){return t.db.collection("blog")},w.a.initializeApp(j),this.auth=w.a.auth(),this.db=w.a.firestore()},y={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(e){n.setState(Object(u.a)({},y)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value)),n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},y),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,o=e.error,c=n!==l||""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"})),r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up")),r.a.createElement("div",{className:"error-message"},o&&r.a.createElement("p",null,o.message)))}}]),a}(n.Component),C=function(){return r.a.createElement("p",null,"Dont have an account?",r.a.createElement("span",null," "),r.a.createElement(c.b,{to:"/signup"},"Sign Up"))},S=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Create your account"),r.a.createElement(N,null))},N=Object(f.a)(i.e,b)(k),P={email:"",error:null},x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(u.a)({},P))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},P),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:n,type:"submit"},"Search")),r.a.createElement("div",{className:"error-message"},a&&r.a.createElement("p",null,a.message)))}}]),a}(n.Component),A=function(){return r.a.createElement("p",null,r.a.createElement(c.b,{to:"/pw-forget"},"Forgot Password?"))},D=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Forgot your password"),r.a.createElement("p",null,"Enter your email address."),r.a.createElement(U,null))},U=b(x),W={email:"",password:"",error:null},I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(u.a)({},W)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},W),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,l=""===a||""===t;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("p",null,r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("button",{disabled:l,type:"submit"},"Sign In"),r.a.createElement("div",{className:"error-message"},n&&r.a.createElement("p",null,n.message))))}}]),a}(n.Component),R=Object(f.a)(i.e,b)(I),T=function(){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Log in"),r.a.createElement(R,null),r.a.createElement(A,null),r.a.createElement(C,null))},M=a(28),B=a.n(M),G=function(e){var t=function(t){Object(d.a)(n,t);var a=Object(h.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={terms:null},t}return Object(p.a)(n,[{key:"componentWillMount",value:function(){var t=this;fetch(e).then((function(e){return e.text()})).then((function(e){t.setState({terms:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(B.a,{source:this.state.terms}))}}]),n}(n.Component);return t},L=a(59),F=G(a.n(L).a),J=r.a.createContext(null),z=function(e){var t=function(t){Object(d.a)(n,t);var a=Object(h.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={authUser:null},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(J.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return b(t)},_=function(e){return function(t){var a=function(a){Object(d.a)(l,a);var n=Object(h.a)(l);function l(){return Object(m.a)(this,l),n.apply(this,arguments)}return Object(p.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(J.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),l}(r.a.Component);return Object(f.a)(i.e,b)(a)}},H={passwordOne:"",passwordTwo:"",error:null},Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(u.a)({},H))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state=Object(u.a)({},H),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,l=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",null,r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"})),r.a.createElement("p",null,r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"})),r.a.createElement("p",null,r.a.createElement("button",{disabled:l,type:"submit"},"Reset My Password")),r.a.createElement("div",{className:"error-message"},n&&r.a.createElement("p",null,n.message)))}}]),a}(n.Component),K=b(Y),V=_((function(e){return!!e}))((function(){return r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement("div",{className:"account twitter-style-border"},r.a.createElement("h1",null,"Accounts"),r.a.createElement("strong",null,"email:")," ",e.email,r.a.createElement(U,null),r.a.createElement(K,null))}))})),Z=a(180),$=a(179),q=a(61),Q=a.n(q);function X(e){var t=e.date;return r.a.createElement("span",null,r.a.createElement(Z.a,{date:t,timeStyle:"Twitter"}))}$.a.locale(Q.a);var ee=a(29),te=a.n(ee),ae=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,projects:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.projects().orderBy("time").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,link:t.data().link,image:t.data().image,description:t.data().description,time:t.data().time};e.state.projects.push(a),e.state.projects.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),a&&r.a.createElement("div",null,"Loading ..."),t?r.a.createElement(ne,{projects:t.sort((function(e,t){return new Date(t.time)-new Date(e.time)}))}):r.a.createElement("div",null,"There are no projects ..."))}}]),a}(n.Component),ne=function(e){var t=e.projects;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(re,{key:e.id,project:e})})))},re=function(e){var t=e.project;return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{class:"logo",src:te.a,alt:"woodRock github logo"}),r.a.createElement("span",{className:"project-title-text"},r.a.createElement("span",{className:"secondary"}," @woodRock")," \u2022",r.a.createElement("i",{className:"secondary"}," ",X({date:t.time}))),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,t.title),t.description)),r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:t.link},r.a.createElement("img",{width:"100%",height:"width",src:t.image,alt:t.title})),r.a.createElement("div",null,r.a.createElement("a",{href:t.link,className:"github-link"},r.a.createElement("i",{className:"fa fa-github"})))))},le=b(ae),oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,blog:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.blog().orderBy("title").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,time:t.data().time,markdown:t.data().markdown};e.state.blog.push(a),e.state.blog.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.blog,a=e.loading;return r.a.createElement("div",{className:"blog"},r.a.createElement("h1",null,"Blog"),a&&r.a.createElement("div",null,"Loading ..."),t?r.a.createElement(ce,{blog:t.sort((function(e,t){return new Date(t.time)-new Date(e.time)}))}):r.a.createElement("div",null,"There are no blog posts ..."))}}]),a}(n.Component),ce=function(e){var t=e.blog;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(ie,{key:e.id,blog:e})})))},ie=function(e){var t=e.blog;return r.a.createElement("div",{className:"blog-post twitter-style-border"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{class:"logo",src:te.a,alt:"woodRock github logo"}),r.a.createElement("span",{class:"blog-title-text"},"woodRock \u2022",r.a.createElement("i",null,r.a.createElement("span",{className:"secondary"}," ",X({date:t.time}))))),r.a.createElement("div",{className:"blog-content"},r.a.createElement("h2",null,t.title),r.a.createElement(B.a,{source:(t.markdown+"").replace(/\\n/g,"\n\n")})))},se=b(oe),ue=a(62),me=G(a.n(ue).a),pe=a(63),de=G(a.n(pe).a),he=a(64),fe=G(a.n(he).a),Ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ciriculum Vitae"),r.a.createElement("embed",{src:"https://woodrock.tk/assets/files/my-cv.pdf",width:"800px",height:"600px"}))},be=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).props.history.push("/home"),n}return Object(p.a)(a,[{key:"render",value:function(){return null}}]),a}(n.Component),ge=[{path:"",component:Object(f.a)(i.e)(be)},{name:"Home",path:"/home",component:F,icon:"home"},{name:"Projects",path:"/projects",component:le,icon:"code"},{name:"Skills",path:"/skills",component:fe,icon:"language"},{name:"Education",path:"/education",component:me,icon:"school"},{name:"Jobs",path:"/job",component:de,icon:"work"},{path:"/cv",component:Ee,icon:""},{name:"Blog",path:"/blog",component:se,icon:"create"},{name:"Account",path:"/account",component:V,icon:"settings",auth:!0},{name:"Register",path:"/signup",component:S,icon:""},{path:"/signin",component:T,icon:""},{path:"/pw-forget",component:D,icon:""}],ve=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,social:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.social().orderBy("title").get().then((function(t){t.forEach((function(t){var a={id:t.id,title:t.data().title,link:t.data().link,image:t.data().image,description:t.data().description};e.state.social.push(a),e.state.social.length>0&&e.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.social,a=e.loading;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"..."),t?r.a.createElement(we,{social:t}):r.a.createElement("div",null,"There are no social links ..."))}}]),a}(n.Component),we=function(e){var t=e.social;return r.a.createElement("div",{className:"social"},t.map((function(e){return r.a.createElement(je,{key:e.id,social:e})})))},je=function(e){var t=e.social;return r.a.createElement("span",null,r.a.createElement("a",{href:t.link},r.a.createElement("i",{className:"link fa fa-"+t.title})))},Oe=b(ve),ye=b((function(e){var t=e.firebase;return r.a.createElement(c.b,{onClick:t.doSignOut},r.a.createElement("i",{className:"link material-icons"},"exit_to_app"))})),ke=a(65),Ce=a.n(ke),Se=function(){return r.a.createElement("ul",null,ge.map((function(e){return""===e.icon?null:r.a.createElement("li",null,r.a.createElement(c.b,{className:"link",to:e.path},r.a.createElement("i",{className:"link material-icons"},e.icon),r.a.createElement("span",{className:"link link-text"},e.name)))})),r.a.createElement("li",null,r.a.createElement(ye,null)))},Ne=function(){return r.a.createElement("ul",null,ge.map((function(e){return e.auth||""===e.icon?null:r.a.createElement("li",null,r.a.createElement(c.b,{to:e.path},r.a.createElement("i",{className:"link material-icons"},e.icon),r.a.createElement("span",{className:"link link-text"},e.name)))})),r.a.createElement("li",null,r.a.createElement(c.b,{className:"link",to:"/signin"},r.a.createElement("i",{className:"link material-icons"},"person"))))},Pe=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"avatar",width:"80%",src:Ce.a,alt:""})),r.a.createElement(J.Consumer,null,(function(e){return e?r.a.createElement(Se,null):r.a.createElement(Ne,null)}))))},xe=function(){return r.a.createElement("div",{className:"copyright"},r.a.createElement("small",null,"\xa9 Copyright ",(new Date).getFullYear(),", Jesse Wood"))},Ae=z((function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"navigation twitter-style-border"},r.a.createElement(Pe,null))),r.a.createElement("div",{className:"container twitter-style-border"},r.a.createElement("div",{className:""},ge.map((function(e){return r.a.createElement(i.a,{path:e.path,component:e.component})})))),r.a.createElement(Oe,null),r.a.createElement(xe,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g.Provider,{value:new O},r.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports=a.p+"static/media/logo.e2ca0a41.png"},59:function(e,t,a){e.exports=a.p+"static/media/home.4048db52.md"},62:function(e,t,a){e.exports=a.p+"static/media/education.18fca96b.md"},63:function(e,t,a){e.exports=a.p+"static/media/job.a5a29cf3.md"},64:function(e,t,a){e.exports=a.p+"static/media/skills.f62be371.md"},65:function(e,t,a){e.exports=a.p+"static/media/me.791eff73.jpg"},66:function(e,t,a){e.exports=a(173)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.cdefc310.chunk.js.map