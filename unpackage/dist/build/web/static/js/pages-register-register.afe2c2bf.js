(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"2b8e":function(e,t,r){"use strict";r.r(t);var n=r("f096"),a=r("7eaf");for(var i in a)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("848f");var s=r("828b"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d7fda1ee",null,!1,n["a"],void 0);t["default"]=o.exports},"304f":function(e,t,r){var n=r("b9bd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("967d").default;a("191de218",n,!0,{sourceMap:!1,shadowMode:!1})},"7b37":function(e,t,r){"use strict";(function(e){r("6a54");var n=r("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("2634")),i=n(r("2fdc")),s={data:function(){return{bgImage:"/static/bg.jpg",registerForm:{username:"",password:"",nickname:""},rules:{username:{required:!0,message:"Username cannot be empty"},password:{required:!0,message:"Password cannot be empty"},nickname:{required:!0,message:"Nickname cannot be empty"}}}},methods:{register:function(){var t=this;return(0,i.default)((0,a.default)().mark((function r(){var n;return(0,a.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.callFunction({name:"registerUser",data:t.registerForm});case 3:n=r.sent,n.result.success?(uni.showToast({title:"注册成功",icon:"success"}),uni.navigateTo({url:"/pages/login/login"})):uni.showToast({title:n.result.message,icon:"error"}),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),uni.showToast({title:"注册失败",icon:"error"});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},goToLogin:function(){uni.navigateTo({url:"/pages/login/login"})}}};t.default=s}).call(this,r("861b")["default"])},"7eaf":function(e,t,r){"use strict";r.r(t);var n=r("7b37"),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},"848f":function(e,t,r){"use strict";var n=r("304f"),a=r.n(n);a.a},b9bd:function(e,t,r){var n=r("c86c");t=n(!1),t.push([e.i,".container[data-v-d7fda1ee]{display:flex;align-items:center;justify-content:center;height:100vh;background-size:cover;background-position:50%}.form-container[data-v-d7fda1ee]{width:80%;max-width:400px}.header[data-v-d7fda1ee]{text-align:center;margin-bottom:20px}.title[data-v-d7fda1ee]{font-size:24px;font-weight:700}.register-button[data-v-d7fda1ee]{width:100%;margin-top:20px}.register-link[data-v-d7fda1ee]{display:block;text-align:center;margin-top:10px;color:#007aff;cursor:pointer}",""]),e.exports=t},f096:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var n={uniCard:r("b7a5").default,uniForms:r("76df").default,uniEasyinput:r("6276").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"container",style:{backgroundImage:"url("+e.bgImage+")"}},[r("v-uni-view",{staticClass:"form-container"},[r("uni-card",[r("v-uni-view",{staticClass:"header"},[r("v-uni-text",{staticClass:"title"},[e._v("Register")])],1),r("uni-forms",{attrs:{model:e.registerForm,rules:e.rules}},[r("uni-easyinput",{attrs:{label:"Username",placeholder:"Enter G number here"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}}),r("uni-easyinput",{attrs:{label:"Password",type:"password",placeholder:"Enter password here"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),r("uni-easyinput",{attrs:{label:"Nickname",type:"",placeholder:"Enter nickname here"},model:{value:e.registerForm.nickname,callback:function(t){e.$set(e.registerForm,"nickname",t)},expression:"registerForm.nickname"}}),r("v-uni-button",{staticClass:"register-button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("Register")])],1),r("v-uni-text",{staticClass:"register-link",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goToLogin.apply(void 0,arguments)}}},[e._v("Have an account? Login here")])],1)],1)],1)},i=[]}}]);