(this.webpackJsonpyuki=this.webpackJsonpyuki||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(28),n=a.n(c),i=a(3),r=a(6),l=a(9),d=a(148),o=(a(88),a(149)),j=a(150),u=a(151),b=a(50),m=a.n(b),O=a(51),h=a.n(O),x=a(0);function p(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(x.jsxs)("div",{className:a?"expanded sidebar position-fixed":"sidebar position-fixed",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[a?Object(x.jsx)("h3",{className:"label",children:"Dashboard"}):null,Object(x.jsx)(d.a,{onClick:function(){return c(!a)},children:Object(x.jsx)(o.a,{})})]}),Object(x.jsx)("div",{className:"Sidemenu",children:a?Object(x.jsxs)(r.b,{to:"/",className:"menu-bars",children:[Object(x.jsx)(j.a,{className:"icons"}),Object(x.jsx)("span",{className:"sidebar-text",children:"Home"})]}):Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)(j.a,{className:"icon-collapsed"})})}),Object(x.jsx)("div",{className:"Sidemenu",children:a?Object(x.jsxs)(r.b,{to:"/",className:"menu-bars",children:[Object(x.jsx)(m.a,{className:"icons"}),Object(x.jsx)("span",{className:"sidebar-text",children:"Users"})]}):Object(x.jsx)(r.b,{to:"/users",children:Object(x.jsx)(m.a,{className:"icon-collapsed"})})}),Object(x.jsx)("div",{className:"Sidemenu",children:a?Object(x.jsxs)(r.b,{to:"/",className:"menu-bars",children:[Object(x.jsx)(u.a,{className:"icons"}),Object(x.jsx)("span",{className:"sidebar-text",children:"Companies"})]}):Object(x.jsx)(r.b,{to:"/companies",children:Object(x.jsx)(u.a,{className:"icon-collapsed"})})}),Object(x.jsx)("div",{className:"Sidemenu",children:a?Object(x.jsxs)(r.b,{to:"/logout",className:"menu-bars",children:[Object(x.jsx)(h.a,{className:"icons"}),Object(x.jsx)("span",{className:"sidebar-text",children:"Logout"})]}):Object(x.jsx)(r.b,{to:"/user/logout",children:Object(x.jsx)(h.a,{className:"icon-collapsed"})})})]})}a(95);var v=a.p+"static/media/logo.a5bd138d.png",f=a.p+"static/media/user.a8d98262.svg";var g=function(e){var t,a=e.user,c=Object(s.createRef)(),n=Object(s.createRef)(),i=Object(s.createRef)();function l(){c.current.classList.toggle("nav_list_show"),n.current.classList.toggle("crosslines_show"),i.current.classList.toggle("lines_hide")}return t=a?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"nav_lin",children:Object(x.jsx)(r.b,{onClick:l,to:"/user/profile",children:Object(x.jsx)("img",{src:f,className:"user_img"})})})}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"nav_lin",children:Object(x.jsx)(r.b,{onClick:l,to:"/signin",children:Object(x.jsx)("img",{src:f,className:"user_img"})})})}),Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)("div",{className:"nav-brand",children:Object(x.jsxs)(r.b,{to:"/",children:[Object(x.jsx)("img",{src:v}),Object(x.jsx)("p",{children:"Yuki22"})]})}),Object(x.jsxs)("div",{className:"lines",onClick:l,ref:i,children:[Object(x.jsx)("div",{className:"smallline"}),Object(x.jsx)("div",{className:"smallline"}),Object(x.jsx)("div",{className:"smallline"})]}),Object(x.jsxs)("div",{className:"nav_list",ref:c,children:[Object(x.jsx)("div",{className:"crosslines",onClick:l,ref:n}),t]})]})},w=a(26);a(96);var N=function(e){return Object(x.jsx)("div",{className:e.position?"loader-wrapper position-static":"loader-wrapper",style:e.loading?Object(w.a)({display:"flex",marginTop:"0"},e.style):Object(w.a)({display:"none"},e.style),children:Object(x.jsxs)("div",{className:"square-loader",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})},_=a(163),y=a(153),S=a(152),R=a(10),C=a.n(R),k=a(52),P={signIn:function(e){return C.a.post("/admin/user/signin",e)},getCounts:function(){return C.a.get("/admin/user/getCounts")},getAllUsers:function(e,t){return C.a.get("/admin/user/getAllUsers/?limit="+t+"&page="+e)},verfiyEmail:function(e){return C.a.get("/admin/user/verifiyMyEmail/"+e)},addMyReview:function(e){return C.a.post("/admin/user/addMyReview/",e)},updateUserReview:function(e){return C.a.post("/admin/user/updateUserReview/",e)},deleteUserReview:function(e){return C.a.get("/admin/user/deleteUserReview/"+e)},getCompanyNames:function(){return C.a.get("/admin/user/companyNames/")},getUserReviews:function(e){return C.a.get("/admin/user/getUserReviews/"+e)},getUserReview:function(e){return C.a.get("/admin/user/getUserReview/"+e)},getMyProfile:function(){return C.a.get("/admin/user/getMyProfile/")},updateProfile:function(e){return C.a.post("/admin/user/updateMyProfile/",e)},logout:function(){return C.a.get("/admin/user/logout/")}},U={getCompanyList:function(){return C.a.get("/company/list/")},getCompanyReviews:function(e){return C.a.get("/company/getReviews/"+e)}},A={setToken:function(e){localStorage.setItem("token",e)},isAuth:function(){return!!localStorage.getItem("token")},setAuthHeader:function(){var e=localStorage.getItem("token");e&&(C.a.defaults.headers.common.Authorization="Bearer "+e)},removeAuthHeader:function(){C.a.defaults.headers.common.Authorization=""},checkTokenExp:function(){var e=localStorage.getItem("token");if(!(e&&e.split(".").length>=2))return!0;var t=Object(k.a)(e),a=new Date;return 1e3*t.exp<a.getTime()&&(localStorage.removeItem("user"),localStorage.removeItem("token"),!0)},decodedUserJWT:function(){var e=localStorage.getItem("token");return e&&e.split(".").length>=2?Object(k.a)(e):null},getCounts:P.getCounts,signIn:P.signIn,signUp:P.signUp,verfiyEmail:P.verfiyEmail,addMyReview:P.addMyReview,deleteUserReview:P.deleteUserReview,getCompanyNames:P.getCompanyNames,getUserReviews:P.getUserReviews,getUserReview:P.getUserReview,updateUserReview:P.updateUserReview,getAllUsers:P.getAllUsers,getMyProfile:P.getMyProfile,updateProfile:P.updateProfile,sendForgetPassword:P.sendForgetPassword,sendResetPassword:P.sendResetPassword,logout:P.logout,getCompanyList:U.getCompanyList,getCompanyReviews:U.getCompanyReviews};!function(){var e=localStorage.getItem("token");e&&(C.a.defaults.headers.common.Authorization="Bearer "+e)}();a(115);function E(e){var t=Object(s.useState)("..."),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)("..."),l=Object(i.a)(r,2),d=l[0],o=l[1],j=Object(s.useState)("..."),u=Object(i.a)(j,2),b=u[0],m=u[1],O=(Object(S.a)(),Object(y.a)("(max-width:800px)"));return Object(s.useEffect)((function(){A.getCounts().then((function(e){"sucess"===e.data.status?(n(e.data.user_count),o(e.data.review_count),m(e.data.company_count)):(n("Failed"),o("Failed"),m("Failed"))})).catch((function(e){n("Failed"),o("Failed"),m("Failed")}))}),[]),Object(x.jsx)("div",{className:"homepage_container",children:Object(x.jsxs)(_.a,{display:"flex",flexDirection:O?"column":"row",justifyContent:"space-around",alignItems:"center",children:[Object(x.jsxs)(_.a,{p:4,mx:10,lg:2,width:O?"160px":"200px",border:1,align:"center",margin:O?"10px":0,children:[Object(x.jsx)(_.a,{mb:3,children:"TOTAL USERS"}),Object(x.jsx)("h2",{children:c})]}),Object(x.jsxs)(_.a,{p:4,mx:10,lg:2,width:O?"160px":"200px",border:1,align:"center",margin:O?"10px":0,children:[Object(x.jsx)(_.a,{mb:3,children:"TOTAL REVIEW COUNT"}),Object(x.jsx)("h2",{children:d})]}),Object(x.jsxs)(_.a,{p:4,mx:10,lg:2,width:O?"160px":"200px",border:1,align:"center",margin:O?"10px":0,children:[Object(x.jsx)(_.a,{mb:3,children:"TOTAL COMPAINES"}),Object(x.jsx)("h2",{children:b})]})]})})}var F=a(53),I=a.n(F);function T(e,t){e?(t||(t="Something went wrong"),I()({title:"Error",text:t,icon:"error"})):I()({title:"Success",text:t,icon:"success"})}a(117);var D=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(i.a)(n,2),d=l[0],o=l[1],j=Object(s.useState)(),u=Object(i.a)(j,2),b=(u[0],u[1],Object(s.useState)(!0)),m=Object(i.a)(b,2),O=m[0],h=m[1],p=0;return Object(s.useEffect)((function(){A.getCompanyList().then((function(e){"sucess"===e.data.status?(h(!1),c(e.data.list)):T(!0,e.data.msg)})).catch((function(e){h(!1),e.data&&e.data.msg?T(!0,e.data.msg):T(!0)}))}),[]),O?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{loading:O})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:O}),Object(x.jsxs)("div",{className:"companies_container",children:[Object(x.jsx)("div",{className:"companies_search-wrapper",children:Object(x.jsx)("input",{type:"text",className:"companies_search",placeholder:"Search here..",value:d,onChange:function(e){var t;t=e.target.value,o(t),a.forEach((function(e){console.log(e.name.startsWith(t.toLowerCase())),e.name.toLowerCase().startsWith(t.toLowerCase())?e.isShow=!1:e.isShow=!0}))}})}),a.length>0?Object(x.jsxs)("div",{className:"companies_content-wrapper",children:[a.map((function(e,t){if(!e.isShow)return p=1,Object(x.jsxs)("div",{className:"companies_content",children:[Object(x.jsx)(r.b,{to:"/company/reviews/"+e._id,className:"link flex2",children:Object(x.jsxs)("p",{className:"companies_content-text ",children:[t+1,".",e.name]})}),Object(x.jsxs)("p",{className:"companies_content-rating flex1",children:[e.rating&&e.noOfReviews?(e.rating/e.noOfReviews).toFixed(1):0,Object(x.jsx)("i",{className:"far fa-star"})," "]}),Object(x.jsxs)("p",{className:"companies_content-review flex1",children:[e.noOfReviews,Object(x.jsx)("i",{className:"fas fa-user-friends"})]})]},e.name)})),!p&&Object(x.jsx)("div",{className:"companies_content",children:Object(x.jsxs)("p",{className:"companies_content-text",children:["No compaines find with name ",d]})})]}):Object(x.jsx)("div",{className:"companiesContainer",children:Object(x.jsx)("p",{children:" No companies found"})})]})]})},M=a.p+"static/media/user.7834b102.png";a(118);var L=function(e){var t=e.setUser,a=Object(s.useState)(""),c=Object(i.a)(a,2),n=c[0],r=c[1],d=Object(s.useState)(""),o=Object(i.a)(d,2),j=o[0],u=o[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),O=(m[0],m[1],Object(s.useState)("")),h=Object(i.a)(O,2),p=h[0],v=h[1],f=Object(s.useState)(""),g=Object(i.a)(f,2),w=g[0],_=g[1],y=Object(l.g)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:p}),Object(x.jsx)("div",{className:"user",children:Object(x.jsx)("img",{src:M,className:"user-img"})}),Object(x.jsx)("div",{className:"signin_container",children:Object(x.jsxs)("div",{className:"form_container",children:[Object(x.jsxs)("div",{className:"form_input",children:[Object(x.jsx)("label",{for:"name",children:" Email "}),Object(x.jsx)("input",{type:"email",placeholder:"Email...",name:"email",required:"true",onChange:function(e){r(e.target.value)},value:n})]}),Object(x.jsxs)("div",{className:"form_input",children:[Object(x.jsx)("label",{for:"password",children:" Password "}),Object(x.jsx)("input",{type:"password",placeholder:"Password...",name:"password",required:"true",onChange:function(e){u(e.target.value)},value:j})]}),Object(x.jsx)("div",{className:"form_button",children:Object(x.jsx)("input",{type:"submit",name:"signin",value:"SIgn In",className:"signin_button",onClick:function(){v(!0),A.signIn({email:n,password:j}).then((function(e){v(!1),"sucess"===e.data.status?(A.setToken(e.data.token),A.setAuthHeader(),t(!0),y.push("/user/myReviews")):_(e.data.msg)})).catch((function(e){console.log(e),v(!1),e.data&&e.data.msg?_(e.data.msg):_("Something went wrong")}))}})}),Object(x.jsx)("div",{className:"error_msg",children:Object(x.jsx)("span",{children:w})}),Object(x.jsxs)("div",{className:"form_text",children:[Object(x.jsx)("small",{children:Object(x.jsx)("a",{href:"/user/forgetPassword",children:" Forget password ? "})}),Object(x.jsxs)("small",{children:[" New to Yuki ? ",Object(x.jsx)("a",{href:"/signup",children:" Create an account "})]})]})]})})]})};var W=function(e){var t=e.company_names,a=e.name,s=e.setName;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{list:"browsers",placeholder:"Company Name",name:"companyName",className:"add_review-input",value:a,onChange:function(e){s(e.target.value)}}),Object(x.jsx)("datalist",{id:"browsers",children:t.map((function(e){return Object(x.jsx)("option",{value:e})}))})]})};var H=function(e){var t=e.name,a=e.attended_on,c=e.setName,n=e.setAttendedOn,r=e.placement_type,l=e.setPlacementType,d=e.company_names,o=Object(s.useState)(!1),j=Object(i.a)(o,2),u=(j[0],j[1],Object(s.useState)([])),b=Object(i.a)(u,2),m=(b[0],b[1],Object(s.useState)(0)),O=Object(i.a)(m,2);return O[0],O[1],Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"companyName",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Company Name ",Object(x.jsx)("span",{className:"red_color",children:"*"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)(W,{name:t,setName:c,company_names:d})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"attendedOn",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Attended the interview on year  ",Object(x.jsx)("span",{className:"red_color",children:"*"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"number",placeholder:"attended on  year",name:"attendedOn",className:"add_review-input",value:a,onChange:function(e){n(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"placementType",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Placement Type ",Object(x.jsx)("span",{className:"red_color",children:"*"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsxs)("select",{id:"placementType",className:"add_review-input",onChange:function(e){l(e.target.value)},children:[Object(x.jsx)("option",{value:"onCampus",selected:"onCampus"===r,children:"on campus"}),Object(x.jsx)("option",{value:"offCampus",selected:"offCampus"===r,children:"off campus"})]})})]})]})};var Y=function(e){var t=e.rounds,a=e.setRounds;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"rounds",className:"add_review-label",children:Object(x.jsxs)("span",{children:["How many Rounds ",Object(x.jsx)("span",{className:"red_color",children:"*"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"number",placeholder:"How many rounds",name:"rounds",className:"add_review-input",value:t,onChange:function(e){a(e.target.value)}})})]})})},q=a(37);var B=function(e){var t=e.round_number,a=e.rounds_names,s=e.setRoundsNames,c=e.rounds_details,n=e.setRoundsDetails;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"roundsName",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Enter Round ",t+1," name ",Object(x.jsx)("span",{className:"red_color",children:" *"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"text",placeholder:"Aptitude / group discussion",name:"roundsName",className:"add_review-input",value:a[t],onChange:function(e){var c=Object(q.a)(a);c[t]=e.target.value,s(Object(q.a)(c))}})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"roundDetail",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Round ",t+1," ",Object(x.jsx)("span",{className:"red_color",children:" *"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("textarea",{placeholder:"write full details about the round",rows:"7",cols:"24",name:"roundDetail",className:"add_review-textarea",value:c[t],onChange:function(e){var a=Object(q.a)(c);a[t]=e.target.value,n(Object(q.a)(a))}})})]})]})};var z=function(e){var t=e.is_placed,a=e.setIsPlaced;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"isPlaced",className:"add_review-label",children:Object(x.jsxs)("span",{children:["Are you Placed in the company",Object(x.jsx)("span",{className:"red_color",children:" *"})]})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsxs)("select",{id:"isPlaced",className:"add_review-input",onChange:function(e){a(e.target.value)},children:[Object(x.jsx)("option",{value:"1",selected:"1"===t,children:"Yes"}),Object(x.jsx)("option",{value:"0",selected:"0"===t,children:"No"})]})})]})})};var J=function(e){var t=e.rating,a=e.setRating,s=e.pros,c=e.setPros,n=e.cons,i=e.setCons,r=e.salary,l=e.setSalary,d=e.mobile_no,o=e.setMobileNo;return e.advice,e.setAdvice,Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsxs)("label",{for:"rating",className:"add_review-label",children:[Object(x.jsx)("span",{children:"Rate the company out of 5 "}),Object(x.jsx)("span",{className:"red_color",children:" *"})]}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"number",placeholder:"rating",name:"rating",className:"add_review-input",value:t,onChange:function(e){a(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"pros",className:"add_review-label",children:Object(x.jsx)("span",{children:"What do you like about working at the company? "})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("textarea",{placeholder:"example:Good place to work, can learn lot",rows:"7",cols:"24",name:"pros",className:"add_review-textarea",value:s,onChange:function(e){c(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"cons",className:"add_review-label",children:Object(x.jsx)("span",{children:"What do you dislike about working at the company?"})}),Object(x.jsxs)("div",{className:"add_review-input-wrapper",children:[Object(x.jsx)("span",{className:"small_text",children:"(Talk about teammates, training, job security, career growth, salary/appraisal, travel, politics, learning, work environment, innovation, work-life balance, etc.) Please be polite & avoid using offensive language or defame people. This is a place for constructive feedback \ud83d\ude0a"}),Object(x.jsx)("textarea",{placeholder:"example:less salary,high work pressure",rows:"7",cols:"24",name:"cons",className:"add_review-textarea",value:n,onChange:function(e){i(e.target.value)}})]})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"salary",className:"add_review-label",children:Object(x.jsx)("span",{children:"Salary range "})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"text",placeholder:"15k-20k",name:"salary",className:"add_review-input",value:r,onChange:function(e){l(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"add_review-from",children:[Object(x.jsx)("label",{for:"mobile_no",className:"add_review-label",children:Object(x.jsx)("span",{children:"Provide your mobile number for further enquires for students "})}),Object(x.jsx)("div",{className:"add_review-input-wrapper",children:Object(x.jsx)("input",{type:"number",placeholder:"mobile no",name:"mobile_no",className:"add_review-input",value:d,onChange:function(e){o(e.target.value)}})})]})]})},V=(a(119),!1);var G=function(){var e=Object(s.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),r=Object(i.a)(n,2),d=r[0],o=r[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),b=u[0],m=u[1],O=Object(s.useState)(""),h=Object(i.a)(O,2),p=h[0],v=h[1],f=Object(s.useState)([]),g=Object(i.a)(f,2),w=g[0],_=g[1],y=Object(s.useState)(""),S=Object(i.a)(y,2),R=S[0],C=S[1],k=Object(s.useState)("onCampus"),P=Object(i.a)(k,2),U=P[0],E=P[1],F=Object(s.useState)(),I=Object(i.a)(F,2),T=I[0],D=I[1],M=Object(s.useState)([]),L=Object(i.a)(M,2),W=L[0],q=L[1],G=Object(s.useState)([]),K=Object(i.a)(G,2),Q=K[0],X=K[1],Z=Object(s.useState)("1"),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(s.useState)(),se=Object(i.a)(ae,2),ce=se[0],ne=se[1],ie=Object(s.useState)(""),re=Object(i.a)(ie,2),le=re[0],de=re[1],oe=Object(s.useState)(""),je=Object(i.a)(oe,2),ue=je[0],be=je[1],me=Object(s.useState)(),Oe=Object(i.a)(me,2),he=Oe[0],xe=Oe[1],pe=Object(s.useState)(""),ve=Object(i.a)(pe,2),fe=ve[0],ge=ve[1],we=Object(s.useState)(""),Ne=Object(i.a)(we,2),_e=Ne[0],ye=Ne[1],Se=Object(l.g)();Object(s.useEffect)((function(){A.getCompanyNames().then((function(e){"sucess"===e.data.status&&_(e.data.list)})).catch((function(e){e.data&&e.data.list,_([])}))}),[]);var Re=function(){if(1===a)return!!(p&&R&&U)||(o("Plse fill all the data"),!1);if(2===a)return!!T||(o("Plse fill all the data"),!1);if(3===a)return W.length===T-0&&Q.length===T-0||(o("Plse fill all the data"),!1);if(4===a)return"0"===ee||"1"===ee||(o("Plse fill all the data"),!1);if(5===a){if(!ce)return o("Plse fill all the data"),!1;if(ce>=0&&ce<=5)return!0;o("rating must be between 0 and 5")}},Ce=null;if(1===a)Ce=Object(x.jsx)(H,{name:p,company_names:w,attended_on:R,setName:v,setAttendedOn:C,setPlacementType:E});else if(2===a)Ce=Object(x.jsx)(Y,{rounds:T,setRounds:D});else if(3===a){var ke=[];if(Q.length==T&&V)for(var Pe=0;Pe<T;Pe++)ke.push(Object(x.jsx)(B,{round_number:Pe,rounds_names:W,setRoundsNames:q,rounds_details:Q,setRoundsDetails:X}));else for(var Ue=0;Ue<T;Ue++)ke.push(Object(x.jsx)(B,{round_number:Ue,rounds_names:W,setRoundsNames:q,rounds_details:Q,setRoundsDetails:X}));Ce=ke}else 4===a?Ce=Object(x.jsx)(z,{setIsPlaced:te}):5===a&&(Ce=Object(x.jsx)(J,{rating:ce,setRating:ne,pros:le,setPros:de,cons:ue,setCons:be,salary:he,setSalary:xe,mobile_no:fe,setMobileNo:ge,advice:_e,setAdvice:ye}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:b}),Object(x.jsx)("div",{className:"add_review-wrapper",children:Object(x.jsxs)("div",{className:"add_review-container",children:[Ce,Object(x.jsx)("p",{className:"add_review-error-msg",children:d}),Object(x.jsxs)("div",{className:"add_review-button",children:[1!==a?Object(x.jsx)("button",{onClick:function(){a-1===3&&(V=!0),c(a-1),o("")},children:"Previous"}):null,5==a?Object(x.jsx)("button",{onClick:function(){if(Re()){m(!0);for(var e={},t=0;t<W.length;t++)e[W[t]]=Q[t];A.addMyReview({name:p,attended_on:R,placement_type:U,rounds:T,rounds_detail:e,is_placed:ee,rating:ce,pros:le,cons:ue,salary:he,mobile_no:fe,advice:_e}).then((function(e){m(!1),"sucess"===e.data.status?Se.push("/user/myReviews"):o(e.data.msg)})).catch((function(e){m(!1),e.data&&e.data.msg?o(e.data.msg):o("Something went wrong")}))}},children:"Submit"}):Object(x.jsx)("button",{onClick:function(){a+1===3&&(V=!1),Re()&&(c(a+1),o(""))},children:"Next"})]})]})})]})};a(120);var K=function(e){var t=e._id,a=e.placementType,s=e.rounds,c=e.roundsDetails,n=e.attendedOn,i=e.isPlaced,l=e.rating,d=e.pros,o=e.cons,j=e.salary,u=e.mobileNo,b=(e.advice,e.user),m=e.createdAt,O=e.isEditing,h=e.deleteReview;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"review_container",children:[Object(x.jsxs)("div",{className:"wrapper",children:[m&&Object(x.jsxs)("p",{className:"created_at",children:["Posted on ",new Date(m).toDateString()]}),O&&Object(x.jsx)("div",{className:"edit_icon",children:Object(x.jsx)(r.b,{to:"/user/edit/review/".concat(t),children:Object(x.jsx)("i",{className:"fas fa-edit"})})}),Object(x.jsxs)("div",{className:"user_wrapper",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("img",{src:f,alt:"user",className:"user_img"}),1===i&&Object(x.jsx)("span",{className:"user_text-green",children:"Placed"}),l&&Object(x.jsxs)("span",{className:"user_text rating",children:[l.toFixed(1),Object(x.jsx)("i",{className:"far fa-star"})]})]}),Object(x.jsx)("p",{className:"user_name",children:b.name}),Object(x.jsx)("span",{className:"user_text-small",children:b.department})]})]}),Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)("div",{className:"review_text",children:Object(x.jsxs)("p",{children:["Attended On:",Object(x.jsx)("span",{className:"review_text-bold",children:n})]})}),Object(x.jsx)("div",{className:"review_text",children:Object(x.jsxs)("p",{children:["placement type:",Object(x.jsx)("span",{className:"review_text-bold",children:a})]})}),Object(x.jsx)("p",{className:"review_text-bold",children:"Interview Process"}),Object(x.jsxs)("div",{className:"padding",children:[Object(x.jsx)("div",{className:"review_text",children:Object(x.jsxs)("p",{children:["No of rounds:",Object(x.jsx)("span",{className:"review_text-bold",children:s})]})}),Object.keys(c).map((function(e,t){return Object(x.jsx)("div",{className:"review_rounds",children:Object(x.jsxs)("details",{children:[Object(x.jsxs)("summary",{className:"review_text-bold d-inline",children:[t+1,".",e]}),Object(x.jsx)("div",{className:"review_text",children:c[e].split("\n").map((function(e,t){return Object(x.jsx)("p",{className:"review_text-point",children:e},t)}))})]})},e)}))]})]}),Object(x.jsxs)("div",{className:"wrapper",children:[d&&Object(x.jsxs)("div",{className:"review_text",children:[Object(x.jsx)("p",{className:"review_text-bold",children:"pros:"}),d.split("\n").map((function(e,t){return Object(x.jsx)("p",{className:"review_text-point",children:e},t)}))]}),o&&Object(x.jsxs)("div",{className:"review_text",children:[Object(x.jsx)("p",{className:"review_text-bold",children:"cons:"}),o.split("\n").map((function(e,t){return Object(x.jsx)("p",{className:"review_text-point",children:e},t)}))]})]}),Object(x.jsxs)("div",{className:"wrapper",children:[j&&Object(x.jsx)("div",{className:"review_text",children:Object(x.jsxs)("p",{className:"review_text-bold",children:["salary:",j]})}),u&&Object(x.jsx)("div",{className:"review_text",children:Object(x.jsxs)("p",{className:"review_text-bold",children:["Contact No:",u]})})]}),O&&Object(x.jsx)("div",{className:"edit_icon",children:Object(x.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){h(t)}})})]})})};a(121);var Q=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),r=Object(i.a)(n,2),d=r[0],o=r[1],j=Object(l.h)().companyId;return Object(l.g)(),Object(s.useEffect)((function(){o(!0),A.getCompanyReviews(j).then((function(e){o(!1),"sucess"===e.data.status?c(e.data.reviews):T(!0,e.data.msg)})).catch((function(e){o(!1),e.data&&e.data.msg?T(!0,e.data.msg):T(!0)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:d}),Object(x.jsxs)("div",{className:"review_wrapper",children:[!d&&a[0]&&a[0].company?Object(x.jsxs)("div",{className:"companies_contents",children:[Object(x.jsx)("p",{className:"companies_content-text flex1",children:a[0].company.name}),Object(x.jsxs)("p",{className:"companies_content-rating flex1",children:[a[0].company.rating&&a[0].company.noOfReviews?(a[0].company.rating/a[0].company.noOfReviews).toFixed(1):0,Object(x.jsx)("i",{className:"far fa-star"})," "]}),Object(x.jsxs)("p",{className:"companies_content-review flex1",children:[a[0].company.noOfReviews,Object(x.jsx)("i",{className:"fas fa-user-friends"})]})]},a[0].company.name):null,!d&&a.map((function(e){return Object(x.jsx)(K,Object(w.a)({},e),e.user.name)})),0!=a.length||d?null:Object(x.jsx)("p",{children:"This company has no reviews yet or reviews may be deleted"})]})]})};a(122);var X=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),d=Object(i.a)(n,2),o=d[0],j=d[1],u=Object(s.useState)(""),b=Object(i.a)(u,2),m=b[0],O=b[1],h=Object(l.h)().userId;Object(l.g)(),Object(s.useEffect)((function(){A.getUserReviews(h).then((function(e){j(!1),"sucess"===e.data.status?c(e.data.reviews):O(m)})).catch((function(e){j(!1),e.data&&e.data.msg?O(m):O("Something went wrong")}))}),[]);var p=function(e){swal({title:"Are you sure?",text:"You want to delete this review.",buttons:["No","Yes"],dangerMode:!0}).then((function(t){t&&A.deleteUserReview(e).then((function(t){if(j(!1),"sucess"===t.data.status){var s=[];a.forEach((function(t){t._id!=e&&s.push(t)})),c(s),T(!1,t.data.msg)}})).catch((function(e){j(!1),e.data&&e.data.msg?T(!0,e.data.msg):T(!0)}))}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:o}),Object(x.jsxs)("div",{className:"review_wrapper",children:[!o&&a.map((function(e){return Object(x.jsx)(K,Object(w.a)(Object(w.a)({},e),{},{deleteReview:p,isEditing:!0}),e.user.name)})),0!=a.length||o?null:Object(x.jsxs)("p",{children:["He has added No reviews yet",Object(x.jsx)(r.b,{to:"/user/addReview",children:" Add Here"})]})]})]})},Z=(a(123),!1);var $=function(){var e=Object(s.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),r=Object(i.a)(n,2),d=r[0],o=r[1],j=Object(s.useState)(!0),u=Object(i.a)(j,2),b=u[0],m=u[1],O=Object(s.useState)(""),h=Object(i.a)(O,2),p=h[0],v=h[1],f=Object(s.useState)(""),g=Object(i.a)(f,2),w=g[0],_=g[1],y=Object(s.useState)(""),S=Object(i.a)(y,2),R=S[0],C=S[1],k=Object(s.useState)([]),P=Object(i.a)(k,2),U=P[0],E=P[1],F=Object(s.useState)(""),I=Object(i.a)(F,2),D=I[0],M=I[1],L=Object(s.useState)("onCampus"),W=Object(i.a)(L,2),q=W[0],V=W[1],G=Object(s.useState)(),K=Object(i.a)(G,2),Q=K[0],X=K[1],$=Object(s.useState)([]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],se=Object(s.useState)([]),ce=Object(i.a)(se,2),ne=ce[0],ie=ce[1],re=Object(s.useState)("1"),le=Object(i.a)(re,2),de=le[0],oe=le[1],je=Object(s.useState)(),ue=Object(i.a)(je,2),be=ue[0],me=ue[1],Oe=Object(s.useState)(),he=Object(i.a)(Oe,2),xe=he[0],pe=he[1],ve=Object(s.useState)(""),fe=Object(i.a)(ve,2),ge=fe[0],we=fe[1],Ne=Object(s.useState)(""),_e=Object(i.a)(Ne,2),ye=_e[0],Se=_e[1],Re=Object(s.useState)(),Ce=Object(i.a)(Re,2),ke=Ce[0],Pe=Ce[1],Ue=Object(s.useState)(""),Ae=Object(i.a)(Ue,2),Ee=Ae[0],Fe=Ae[1],Ie=Object(l.g)(),Te=Object(l.h)().reviewId;Object(s.useEffect)((function(){A.getCompanyNames().then((function(e){"sucess"===e.data.status&&E(e.data.list)})).catch((function(e){e.data&&e.data.list?E(e.data.list):E(["unable to fetch list"])})),A.getUserReview(Te).then((function(e){if(m(!1),"sucess"===e.data.status){var t=e.data.review;v(t._id),_(t.name),C(t.name),M(t.attendedOn),V(t.placementType),X(t.rounds),oe(t.isPlaced),me(t.rating),pe(t.rating),Pe(t.salary),we(t.pros),Se(t.cons),Fe(t.mobileNo);var a=Object.keys(t.roundsDetails);console.log(a),ae(a);var s=[];a.forEach((function(e){s.push(t.roundsDetails[e])})),ie(s)}})).catch((function(e){m(!1),e.data&&e.data.msg?T(!0,e.data.msg):(T(!0),console.log(e))}))}),[]);var De=null;if(1===a)De=Object(x.jsx)(H,{name:w,company_names:U,attended_on:D,setName:_,setAttendedOn:M,placement_type:q,setPlacementType:V});else if(2===a)De=Object(x.jsx)(Y,{rounds:Q,setRounds:X});else if(3===a){var Me=[];if(ne.length==Q&&Z)for(var Le=0;Le<Q;Le++)Me.push(Object(x.jsx)(B,{round_number:Le,rounds_names:te,setRoundsNames:ae,rounds_details:ne,setRoundsDetails:ie},Le));else for(var We=0;We<Q;We++)Me.push(Object(x.jsx)(B,{round_number:We,rounds_names:te,setRoundsNames:ae,rounds_details:ne,setRoundsDetails:ie},We));De=Me}else 4===a?De=Object(x.jsx)(z,{is_placed:de,setIsPlaced:oe}):5===a&&(De=Object(x.jsx)(J,{rating:be,setRating:me,pros:ge,setPros:we,cons:ye,setCons:Se,salary:ke,setSalary:Pe,mobile_no:Ee,setMobileNo:Fe}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{loading:b}),Object(x.jsx)("div",{className:"add_review-wrapper",children:Object(x.jsxs)("div",{className:"add_review-container",children:[De,Object(x.jsx)("p",{className:"add_review-error-msg",children:d}),Object(x.jsxs)("div",{className:"add_review-button",children:[1!==a?Object(x.jsx)("button",{onClick:function(){a-1===3&&(Z=!0),c(a-1),o("")},children:"Previous"}):null,5==a?Object(x.jsx)("button",{onClick:function(){m(!0);for(var e={},t=0;t<te.length;t++)e[te[t]]=ne[t];A.updateUserReview({id:p,name:w,attended_on:D,placement_type:q,rounds:Q,rounds_detail:e,is_placed:de,rating:be,old_rating:xe,pros:ge,cons:ye,salary:ke,mobile_no:Ee}).then((function(e){m(!1),"sucess"===e.data.status?Ie.push("/users/"):o(e.data.msg)})).catch((function(e){m(!1),e.data&&e.data.msg?o(e.data.msg):o("Something went wrong")}))},children:"Update"}):Object(x.jsx)("button",{onClick:function(){a+1===3&&(Z=!1),(1===a?R!==w?(o("Plse don't change company name if you like to chnage delete this review and create new one"),0):w&&D&&q||(o("Plse fill all the data"),0):2===a?Q||(o("Plse fill all the data"),0):3===a?te.length===Q-0&&ne.length===Q-0||(o("Plse fill all the data"),0):4===a?de+""||(o("Plse fill all the data"),0):void 0)&&(c(a+1),o(""))},children:"Next"})]})]})})]})},ee=a(154),te=a(155),ae=a(156),se=a(157),ce=a(158),ne=a(159),ie=a(160),re=a(161),le=a(162),de=a(164),oe=Object(ee.a)({table:{minWidth:650},backnext:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},head:{fontWeight:"bold"}});var je=function(){var e=oe(),t=Object(s.useState)(!0),a=Object(i.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)([]),d=Object(i.a)(l,2),o=d[0],j=d[1],u=Object(s.useState)(1),b=Object(i.a)(u,2),m=b[0],O=b[1],h=Object(s.useState)(20),p=Object(i.a)(h,2),v=p[0],f=(p[1],Object(s.useState)(0)),g=Object(i.a)(f,2),w=g[0],y=g[1];return Object(s.useEffect)((function(){A.getAllUsers(m,v).then((function(e){n(!1),j(e.data.users),y(e.data.count)})).catch((function(e){n(!1),j([])}))}),[]),Object(s.useEffect)((function(){n(!0),A.getAllUsers(m,v).then((function(e){n(!1),j(e.data.users),y(e.data.count)})).catch((function(e){n(!1),j([])}))}),[m,v]),Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{loading:c}),Object(x.jsxs)(_.a,{m:5,children:[Object(x.jsxs)(te.a,{maxWidth:"false",children:[Object(x.jsx)(_.a,{m:1,children:Object(x.jsx)("h3",{children:"All Users"})}),o.length>0&&!c&&Object(x.jsx)(ae.a,{component:se.a,children:Object(x.jsxs)(ce.a,{className:e.table,"aria-label":"simple table",children:[Object(x.jsx)(ne.a,{children:Object(x.jsxs)(ie.a,{children:[Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Name"}),Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Email"}),Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Reg No"}),Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Department"}),Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Is Email Verified"}),Object(x.jsx)(re.a,{align:"left",className:e.head,children:"Created At"})]})}),Object(x.jsx)(le.a,{children:o.map((function(e){return Object(x.jsxs)(ie.a,{children:[Object(x.jsx)(r.b,{to:"/user/userReviews/".concat(e._id),children:Object(x.jsx)(re.a,{align:"left",children:e.name})}),Object(x.jsx)(re.a,{align:"left",children:e.email}),Object(x.jsx)(re.a,{align:"left",children:e.regno}),Object(x.jsx)(re.a,{align:"left",children:e.department}),Object(x.jsx)(re.a,{align:"left",children:e.isEmailVerified?"Yes":"No"}),Object(x.jsx)(re.a,{align:"left",children:new Date(e.createdAt).toDateString()})]},e._id)}))})]})}),0===o.length&&!c&&Object(x.jsx)("h3",{children:"No Users Found"})]}),w>v?Object(x.jsx)(de.a,{className:"d-flex justify-content-center",count:w%v===0?w/v:Math.floor(w/v)+1,page:m,onChange:function(e,t){return O(t)}}):null]})]})};var ue=function(e){var t=e.setUser,a=Object(l.g)();return Object(s.useEffect)((function(){localStorage.removeItem("token"),A.logout(),t(!1),a.push("/signin")}),[]),null};var be=function(e){var t=e.path,a=e.component;return console.log(A.isAuth(),A.checkTokenExp()),Object(x.jsx)(l.b,{exact:!0,path:t,render:function(e){return A.isAuth()&&!A.checkTokenExp()?Object(x.jsx)(a,{}):Object(x.jsx)(l.a,{to:"/signin"})}})};a(124);var me=function(e){var t=Object(s.useState)(A.isAuth()),a=Object(i.a)(t,2),c=(a[0],a[1]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(g,{user:A.isAuth()}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(p,{}),Object(x.jsx)("div",{style:{maxWidth:"calc(100vw - 80px)"},children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(be,{exact:!0,path:"/",component:E}),Object(x.jsx)(be,{exact:!0,path:"/signin",component:function(){return Object(x.jsx)(L,{setUser:c})}}),Object(x.jsx)(be,{exact:!0,path:"/companies",component:D}),Object(x.jsx)(be,{exact:!0,path:"/company/reviews/:companyId",component:Q}),Object(x.jsx)(be,{path:"/user/logout",component:function(){return Object(x.jsx)(ue,{setUser:c})}}),Object(x.jsx)(be,{path:"/users/",component:je}),Object(x.jsx)(be,{path:"/user/addReview",component:G}),Object(x.jsx)(be,{path:"/user/userReviews/:userId",component:X}),Object(x.jsx)(be,{path:"/user/edit/review/:reviewId",component:$})]})})]})]})})};n.a.render(Object(x.jsx)(me,{}),document.getElementById("root"))},88:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.1505b7b6.chunk.js.map