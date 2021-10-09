(this["webpackJsonplab-notes"]=this["webpackJsonplab-notes"]||[]).push([[0],{31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(25),s=n.n(i),o=n(15),a=n(5),u=n(19),l=(n(39),n(16)),j=n(20),b=(n(40),n(53),j.a.initializeApp({apiKey:"AIzaSyCdqE8FqB73Nq1HI1CbQYF2_Vsy50UfECI",authDomain:"rememberme-c2d9f.firebaseapp.com",projectId:"rememberme-c2d9f",storageBucket:"rememberme-c2d9f.appspot.com",messagingSenderId:"1098176943880",appId:"1:1098176943880:web:3f321f68efebb29858bebd"}).auth()),d=j.a.firestore(),h=n(2),O=r.a.createContext();function p(){return Object(c.useContext)(O)}function f(e){var t=e.children,n=Object(c.useState)(),r=Object(l.a)(n,2),i=r[0],s=r[1];Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e)}))}),[]);var o={currentUser:i,emailAndPasswordSignUp:function(e,t,n){return b.createUserWithEmailAndPassword(e,t).then((function(e){return e.user.updateProfile({displayName:n})})).catch((function(e){return{error:!0,message:e.message}}))},googleLogIn:function(){var e=new j.a.auth.GoogleAuthProvider;return b.signInWithPopup(e).then((function(e){console.log(e)}))},facebokLogIn:function(){var e=new j.a.auth.FacebookAuthProvider;return b.signInWithPopup(e).then((function(e){console.log(e.user)}))},logIn:function(e,t){return b.signInWithEmailAndPassword(e,t)},logOut:function(){return b.signOut()}};return Object(h.jsx)(O.Provider,{value:o,children:t})}var x=n(14),m=n.n(x),g=n(21);n(31);function v(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=p().emailAndPasswordSignUp,i=p(),s=i.googleLogIn,u=i.facebokLogIn,l=Object(a.g)();function j(){return(j=Object(g.a)(m.a.mark((function c(i){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i.preventDefault(),c.next=3,r(t.current.value,n.current.value,e.current.value);case 3:l.push("/");case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Welcome to Remind me"}),Object(h.jsx)("p",{children:"A place to store your reminders, notes, even the list of your groceries"}),Object(h.jsx)("h2",{children:"Sign Up"}),Object(h.jsxs)("section",{className:"Authentication",children:[Object(h.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},className:"signUpForm",children:[Object(h.jsxs)("label",{className:"inputs",children:["Name",Object(h.jsx)("input",{type:"text",ref:e,required:!0})]}),Object(h.jsxs)("label",{className:"inputs",children:["Email",Object(h.jsx)("input",{type:"email",ref:t,required:!0})]}),Object(h.jsxs)("label",{className:"inputs",children:["Password",Object(h.jsx)("input",{type:"password",ref:n,required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Sign Up"})]}),Object(h.jsx)("h2",{children:"\xf3"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),s()},className:"loginSocialMedia",children:"Continue with Google"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),u()},className:"loginSocialMedia",children:"Continue with Facebook"}),Object(h.jsxs)("div",{children:["Already have an account? ",Object(h.jsx)(o.b,{to:"/login",children:"LogIn"})]})]})]})}var y=n(13),w=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("notes").doc().set(t,{created:firebase.database.ServerValue.TIMESTAMP});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.collection("notes").onSnapshot((function(e){var n=[];return e.forEach((function(e){n.push(Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id}))})),t(n)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you want to delete this note?")){e.next=4;break}return e.next=3,d.collection("notes").doc(t).delete();case 3:Object(u.a)("Note deleted",{type:"error"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(23);function k(e){var t=e.user,n={title:"",note:""},r=Object(c.useState)(n),i=Object(l.a)(r,2),s=i[0],o=i[1],a=function(e){var n,c=e.target,r=c.name,i=c.value;o(Object(y.a)(Object(y.a)({},s),{},(n={},Object(I.a)(n,r,i),Object(I.a)(n,"user",t.email),n)))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Add Note"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(s),o(Object(y.a)({},n)),Object(u.a)("New note added",{type:"success"})},children:[Object(h.jsxs)("label",{children:["Title:",Object(h.jsx)("input",{type:"text",name:"title",onChange:a,value:s.title,required:!0})]}),Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{placeholder:"Type your note here",rows:"3",name:"note",onChange:a,value:s.note,required:!0})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Save"})})]})]})}function C(e){var t=e.edintingNote;return console.log("Soy el console log de note status",t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Edit Note"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{children:["Title:",Object(h.jsx)("input",{type:"text",name:"title",value:t.title,required:!0})]}),Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{placeholder:"Type your note here",rows:"3",name:"note",value:t.note,required:!0})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Edit"})})]})]})}n(49);function A(){var e=p(),t=e.currentUser,n=e.logOut,r=Object(a.g)(),i=Object(c.useState)([]),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),d=b[0],O=b[1],f=Object(c.useState)({}),x=Object(l.a)(f,2),m=x[0],g=x[1];Object(c.useEffect)((function(){N(u)}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("section",{className:"header",children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("strong",{children:"Welcome "}),t.displayName]}),Object(h.jsx)("button",{variant:"link",onClick:function(){n(),r.push("/login")},className:"logOutButton",children:"Log Out"})]}),Object(h.jsx)("section",{className:"noteArea",children:d?Object(h.jsx)("section",{children:Object(h.jsx)(C,{edintingNote:m})}):Object(h.jsx)("section",{children:Object(h.jsx)(k,{user:t})})}),Object(h.jsx)("section",{children:o.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"material-icons",onClick:function(){return S(e.id)},children:"delete"}),Object(h.jsx)("i",{className:"material-icons",onClick:function(){return function(e){O(!0),g(e)}(e)},children:"edit"})]}),Object(h.jsx)("h4",{children:e.title}),Object(h.jsx)("p",{children:e.note})]},e.id)}))})]})}n(50);function P(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=p().logIn,r=p(),i=r.googleLogIn,s=r.facebokLogIn,u=Object(a.g)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Welcome to remind me"}),Object(h.jsx)("p",{children:"A place to store your reminders, notes, even the list of your groceries"}),Object(h.jsx)("h2",{children:"Log In"}),Object(h.jsxs)("section",{className:"Authentication",children:[Object(h.jsxs)("form",{onSubmit:function(c){c.preventDefault(),n(e.current.value,t.current.value),u.push("/")},className:"signUpForm",children:[Object(h.jsxs)("label",{className:"inputs",children:["Email",Object(h.jsx)("input",{type:"email",ref:e,required:!0})]}),Object(h.jsxs)("label",{className:"inputs",children:["Password",Object(h.jsx)("input",{type:"password",ref:t,required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Log In"})]}),Object(h.jsx)("h2",{children:"\xf3"}),Object(h.jsxs)("div",{className:"loginSocialMedia",children:[Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),i(),u.push("/")},children:"Continue with Google"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),s(),u.push("/")},children:"Continue with Facebook"})]}),Object(h.jsxs)("div",{children:["Need an account? ",Object(h.jsx)(o.b,{to:"/signup",children:"Sign Up"})]})]})]})}var E=n(34),F=["component"];function q(e){var t=e.component,n=Object(E.a)(e,F),c=p().currentUser;return Object(h.jsx)(a.b,Object(y.a)(Object(y.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(y.a)({},e)):Object(h.jsx)(a.a,{to:"/login"})}}))}u.a.configure();var L=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsx)(f,{children:Object(h.jsxs)(a.d,{children:[Object(h.jsx)(q,{exact:!0,path:"/",component:A}),Object(h.jsx)(a.b,{path:"/signup",component:v}),Object(h.jsx)(a.b,{path:"/login",component:P})]})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};n(51);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),U()}},[[52,1,2]]]);
//# sourceMappingURL=main.c7de2692.chunk.js.map