import{j as _,r as S}from"./react-5cc2acaa.js";import{c as De}from"./react-dom-a0c8f1a1.js";import{P as Xe}from"./react-redux-aae1ccfc.js";import{N as ee,u as Ke,H as Ge}from"./react-router-dom-6c0b0898.js";import{s as i,W as Ye}from"./styled-components-a48973ba.js";import{c as Ze,d as Q,a as He,O as ye,e as Se,u as Pe,f as te,g as u}from"./react-router-14e86955.js";import{c as We,f as Ve,a as $e}from"./@reduxjs-62e1b03e.js";import{c as re,a as Je,b as B}from"./yup-b90887ff.js";import{d as _e}from"./@remix-run-5d2167a8.js";import{U as xe,T as Ce,V as et,X as ue,z as tt,B as rt}from"./@ant-design-e7dfb9fe.js";import{B as L,R as ot,C as nt,T as K,S as at,F as A,a as st,I as $,A as ke,U as it,b as be,c as ct,d as Ae,e as dt,f as lt,g as j}from"./antd-e71dd5f8.js";import{o as ut}from"./@hookform-17bb8824.js";import{u as mt,C as oe}from"./react-hook-form-b245aedd.js";import"./classnames-5c20d0be.js";import"./scheduler-04ce0582.js";import"./hoist-non-react-statics-7556f55f.js";import"./react-is-3e8633c1.js";import"./use-sync-external-store-c1aa51b6.js";import"./@emotion-dc7b60dc.js";import"./immer-1525a9ee.js";import"./redux-c1712102.js";import"./@babel-9169ff57.js";import"./redux-thunk-ef899f4c.js";import"./reselect-36a88051.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-59d3f8f4.js";import"./@ctrl-fb5a5473.js";import"./rc-util-1f458f21.js";import"./stylis-24eb1ffd.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-2e6aca21.js";import"./rc-motion-c6c48dbd.js";import"./rc-tooltip-a312be7a.js";import"./@rc-component-b7a21172.js";import"./rc-tabs-a454cdd1.js";import"./rc-dropdown-b380dcb8.js";import"./rc-trigger-278d3dce.js";import"./rc-align-221ec775.js";import"./dom-align-529d0cdc.js";import"./rc-menu-e754207b.js";import"./rc-overflow-586c3e02.js";import"./rc-select-646e4cce.js";import"./rc-virtual-list-078e30f2.js";import"./rc-tree-d73cc312.js";import"./rc-field-form-7fa8e0e5.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-rate-938d72a4.js";import"./rc-slider-fe0dbbc6.js";import"./rc-table-0be99f5d.js";import"./rc-pagination-9661c827.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-442b7e93.js";import"./copy-to-clipboard-113365a7.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-2aab31c5.js";import"./rc-input-a6365688.js";import"./rc-upload-386d0c70.js";import"./rc-picker-cb60eeb2.js";import"./rc-progress-aff77b86.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const v=_.Fragment,e=_.jsx,l=_.jsxs,ht="data:image/png;base64,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",N=t=>{const r=Ze();return()=>r(t)},O=We({baseQuery:Ve({baseUrl:"https://neko-back.herokuapp.com/2.0/",credentials:"include"}),endpoints:()=>({}),reducerPath:"cards",tagTypes:["authMe","pack"]}),D=O.injectEndpoints({endpoints:t=>({register:t.mutation({query:r=>({url:"auth/register",method:"POST",body:r})}),login:t.mutation({query:r=>({url:"auth/login",method:"POST",body:r,invalidatesTags:["authMe"]}),onQueryStarted:async({},{dispatch:r,queryFulfilled:n})=>{try{const{data:s}=await n;r(D.util.upsertQueryData("authMe","auth",s))}catch{return}}}),authMe:t.query({query:()=>({url:"auth/me",method:"POST"}),providesTags:["authMe"]}),authMeUpdate:t.mutation({query:r=>({url:"auth/me",method:"put",body:r,invalidatesTags:["authMe"]}),onQueryStarted:async({},{dispatch:r,queryFulfilled:n})=>{try{const{data:s}=await n;r(D.util.upsertQueryData("authMe","auth",s.updatedUser))}catch{return}}}),authMeLogOut:t.mutation({query:()=>({url:"auth/me",method:"DELETE"}),invalidatesTags:["authMe"]}),requestPasswordReset:t.mutation({query:r=>({url:"auth/forgot",method:"POST",body:{email:r.email,message:'password recovery link: <a href="http://localhost:5173/#/auth/set-new-password/$token$">link</a>'}})}),setNewPassword:t.mutation({query:r=>({url:"auth/set-new-password",method:"POST",body:r})})}),overrideExisting:!1}),{useRegisterMutation:pt,useLoginMutation:gt,useAuthMeQuery:wt,useLazyAuthMeQuery:Yo,useAuthMeUpdateMutation:ft,useAuthMeLogOutMutation:yt,useRequestPasswordResetMutation:St,useSetNewPasswordMutation:Pt}=D,T=()=>{const t=D.endpoints.authMe.useQueryState("auth");return{isAuthorised:t.status==="fulfilled",data:t.data||void 0}},ve=re().email().required(),J=re().min(8).required(),xt=re().min(1).required(),Ct=Je().default(!1),me=B({email:ve,password:J}),kt={updateUserName:B({name:xt}).required(),signup:me.shape({"confirm password":J.test("passwords-match","Passwords must match",function(t){return this.parent.password===t}).required()}).required(),login:me.shape({rememberMe:Ct}).required(),resetPassword:B({email:ve}),newPassword:B({password:J})},bt=t=>{const r=kt[t],{handleSubmit:n,control:s,formState:{errors:o},setError:a,watch:c,setValue:d}=mt({mode:"onBlur",resolver:ut(r)});return{handleSubmit:n,control:s,errors:o,setError:a,watch:c,setValue:d}};var f=(t=>(t.Root="/",t.Auth="/auth",t.Cards="/cards",t.Error="*",t))(f||{}),k=(t=>(t.Root="/",t.Profile="/profile",t.SignUp="/sign-up",t.SignIn="/sign-in",t.ResetPassword="/reset-password",t.NewPassword="/set-new-password/:token",t.Error="*",t))(k||{});const y={Profile:`${f.Auth}/profile`,SignUp:`${f.Auth}/sign-up`,SignIn:`${f.Auth}/sign-in`,ResetPassword:`${f.Auth}/reset-password`},At={email:{name:"email",controlName:"email",type:void 0,rules:{required:!0},placeholder:"Email",autoComplete:"email"},password:{name:"password",controlName:"password",type:"password",rules:{required:!0},placeholder:"Password",autoComplete:"new-password"},"confirm password":{name:"confirm password",controlName:"confirm password",type:"password",rules:{required:!0},placeholder:"Confirm password",autoComplete:"new-password"}},vt={login:{mutation:gt,path:f.Root},logout:{mutation:yt,path:y.SignIn},signup:{mutation:pt},resetPassword:{mutation:St},newPassword:{mutation:Pt},updateUserName:{mutation:ft}},ne=t=>{const{mutation:r,path:n}=vt[t],[s,{isLoading:o,isSuccess:a,error:c}]=r();return[async h=>{try{await s(h).unwrap(),n&&_e(n)}catch{return}},{trigger:s,isLoading:o,isSuccess:a,error:c}]},q=t=>{const{handleSubmit:r,control:n,setError:s,errors:o,watch:a,setValue:c}=bt(t),[d,{trigger:h,isLoading:m,isSuccess:p,error:P}]=ne(t);return[d,{handleSubmit:r,control:n,setError:s,errors:o,watch:a,setValue:c},{trigger:h,isLoading:m,isSuccess:p,error:P}]},Ee=(t,r)=>{const{isAuthorised:n}=T();return{defaultPage:n?e(Q,{to:t}):e(Q,{to:r})}},Et=({onClick:t,userName:r})=>l(Lt,{onClick:t,children:[e(Tt,{children:r}),e(It,{})]}),Lt=i.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,Tt=i.span`
  border-bottom: 1px dashed #1677ff;
  margin-right: 7px;
  font-family: 'Montserrat', sans-serif;
`,It=i(xe)`
  margin-right: 7px;
  margin-top: 7px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
`,Rt=()=>{const{isAuthorised:t,data:r}=T(),[n]=ne("logout"),s=N(y.Profile),o=N(y.SignIn),a=N(y.SignUp),d=He().pathname==="/auth/sign-up"?{children:"Sign in",onClick:o}:{children:"Sign up",onClick:a};return t?l(v,{children:[e(Et,{onClick:s,userName:r==null?void 0:r.name}),e(he,{icon:e(Ce,{}),onClick:n,children:"Log out"})]}):e(he,{type:"primary",...d})},he=i(L)`
  width: 100px;
  height: 35px;
`,Ut=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  background: #fcfcfc;
  box-shadow: 0 2px 10px rgba(109, 109, 109, 0.3);
`,zt=i.img`
  color: white;
  width: 140px;
  height: 30px;
  margin-left: 10%;
  margin-bottom: 15px;
  margin-top: 15px;
`,Mt=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
`,Nt=()=>l(Ut,{children:[e(zt,{src:ht}),e(Mt,{children:e(Rt,{})})]}),ae=()=>{const t=N(f.Root);return e(ot,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:e(L,{onClick:t,type:"primary",children:"Back Home"})})},{Text:Le}=K,Te=i.div`
  display: flex;
  flex-direction: column;
  padding: 80px 5%;
  margin: 0;
`,R=i(nt)`
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,se=i.p`
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`,G=i(ee)`
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 24px;
`,ie=i(Le)`
  display: flex;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  line-height: 24px;
  color: #9d9d9d;
`,Ot=i(Le)`
  display: block;
  text-align: center;
  color: #ff4c4c;
  margin-bottom: 1rem;
`,U={textAlign:"center",fontWeight:"600",fontSize:"1.5rem",marginBottom:"0.6rem"},Qt=i(Te)`
  height: 50vh;
  justify-content: center;
`,qt=({isLoading:t,children:r})=>t?e(Qt,{children:e(at,{tip:"Loading",size:"large"})}):e(v,{children:r});function Ft(t){return typeof t=="object"&&t!=null&&"status"in t&&"data"in t}const z=({error:t})=>Ft(t)?e(Ot,{children:t.data.error}):null,Ie=()=>{const{isAuthorised:t}=T();return t?e(ye,{}):e(Q,{to:f.Auth})},jt="/assets/check-email-image-3ff827d1.svg",pe="/assets/success-registration-4762c118.png",Bt={resetPassword:{title:"Check Email",propsPath:y.SignIn,image:jt,text:"We’ve sent an Email with instructions to"},signUp:{title:"Success!",text:"We’ve successfully registered you, please go through the authorization",propsPath:y.SignIn,image:pe,timer:!0},newPassword:{title:"Success!",text:"Your password has been successfully changed, please go to login!",propsPath:y.SignIn,image:pe,timer:!0}},Dt=i.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 110px;
  height: 110px;
`,ce=({variant:t,email:r})=>{const{title:n,propsPath:s,timer:o,image:a,text:c}=Bt[t],d=N(s),h={onClick:d,type:"primary",htmlType:"submit",size:"large",style:{fontWeight:"500"},block:!0};return S.useEffect(()=>{if(o){let m=setTimeout(()=>{d()},3e3);return()=>{clearTimeout(m)}}},[o]),l(R,{title:n,headStyle:U,children:[e(Dt,{src:a,alt:"image"}),e(ie,{type:"secondary",children:`${c} ${r}`}),!o&&e(A.Item,{children:e(L,{...h,children:"Back to login"})})]})},Xt={type:"primary",htmlType:"submit",size:"large",style:{fontWeight:"500"},block:!0},Y=({loading:t,children:r})=>e(A.Item,{children:e(L,{...Xt,loading:t,children:r})}),Kt=({name:t,control:r})=>e(A.Item,{name:t,valuePropName:"checked",wrapperCol:{offset:0,span:16},children:e(oe,{name:t,control:r,render:({field:n})=>e(st,{...n,checked:n.value,children:"Remember me"})})}),E=({name:t,control:r,error:n})=>{const{type:s,placeholder:o,rules:a,autoComplete:c}=At[t];return e(A.Item,{validateStatus:n?"error":"",help:n==null?void 0:n.message,children:e(v,{children:e(oe,{name:t,control:r,rules:a,render:({field:d})=>s==="password"?e($.Password,{...d,placeholder:o,autoComplete:c}):e($,{...d,placeholder:o,autoComplete:c})})})})},Gt=()=>{const{isAuthorised:t}=T();return t?e(Q,{to:y.Profile}):e(ye,{})},Yt=()=>{const{token:t}=Se(),[r,{handleSubmit:n,control:s,setError:o,errors:a},{isLoading:c,error:d,isSuccess:h}]=q("newPassword"),m=async p=>{if(!t){o("error",{message:"Something wrong with token"});return}await r({...p,resetPasswordToken:t})};return h?e(ce,{variant:"newPassword"}):l(R,{title:"Create new Password",headStyle:U,children:[l(A,{onFinish:n(m),children:[e(E,{name:"password",control:s,error:a.password}),e(ie,{type:"secondary",children:"Create new password and we will send you further instructions to email"}),e(z,{error:d}),e(Y,{loading:c,children:"Create new Password"})]}),e(G,{to:y.ResetPassword,children:"Back to Send Email form"})]})},Zt="/assets/arrow-back-20d9035c.svg",{Text:Ht,Paragraph:Wt}=K,Vt=i(ee)`
  display: block;
  text-align: start;
  text-decoration: none;
  position: absolute;
  top: 100px;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  left: 14%;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`,$t=i.img`
  margin-right: 0.5rem;
`,Jt=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,_t=i(ke.Group)`
  margin-bottom: 1.7rem;
`,er=i(Wt)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
`,tr=i(Ht)`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #c2c2c2;
`,rr=i(L)`
  margin-top: 1.8rem;
  margin-bottom: 1.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,or=()=>e(_t,{children:e(it,{showUploadList:!1,beforeUpload:()=>!1,accept:"image/*",children:e(ke,{shape:"square",size:96,icon:e(xe,{})})})}),nr=({userName:t})=>{var p,P;const[r,{handleSubmit:n,control:s,errors:o,setValue:a,setError:c},{isLoading:d,error:h}]=q("updateUserName"),m=async(g,w)=>{if(!g){c("name",{type:"custom",message:"Name should be at least 1 character length"});return}g!==t&&(w.onBlur(),w.onChange(g),n(r)(g))};return S.useEffect(()=>a("name",t),[]),l(v,{children:[e(A.Item,{validateStatus:(p=o==null?void 0:o.name)!=null&&p.message?"error":"",help:(P=o==null?void 0:o.name)==null?void 0:P.message,children:e(oe,{name:"name",control:s,rules:{required:!0},render:({field:g})=>e(v,{children:e(er,{editable:{onChange:w=>m(w,g)},disabled:d,children:g.value})})})}),e(z,{error:h})]})},ar=()=>{const{data:t}=T(),{name:r="",email:n=""}=t??{},[s,{isLoading:o}]=ne("logout");return l(v,{children:[l(Vt,{to:f.Cards,children:[e($t,{src:Zt,alt:"arrow-back"}),"Go to cards"]}),e(R,{title:"Personal information",headStyle:U,children:l(Jt,{children:[e(or,{}),e(nr,{userName:r}),e(tr,{children:n}),e(rr,{onClick:s,loading:o,icon:e(Ce,{}),children:"Log out"})]})})]})},sr=i(ee)`
  display: block;
  margin-left: 65%;
  color: black;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.2rem;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`,ir=()=>{const[t,{handleSubmit:r,control:n,errors:s},{isLoading:o,error:a}]=q("login");return l(R,{title:"Sign In",headStyle:U,children:[l(A,{onFinish:r(t),children:[e(E,{name:"email",control:n,error:s.email}),e(E,{name:"password",control:n,error:s.password}),e(Kt,{name:"rememberMe",control:n}),e(sr,{to:y.ResetPassword,children:"Forgot password?"}),e(z,{error:a}),e(Y,{loading:o,children:"Sign In"})]}),e(se,{children:"Have no account?"}),e(G,{to:y.SignUp,children:"Sign Up"})]})},cr=()=>{const[t,{handleSubmit:r,control:n,errors:s},{isLoading:o,isSuccess:a,error:c}]=q("signup");return a?e(ce,{variant:"signUp"}):l(R,{title:"Sign Up",headStyle:U,children:[l(A,{onFinish:r(t),children:[e(E,{name:"email",control:n,error:s.email}),e(E,{name:"password",control:n,error:s.password}),e(E,{name:"confirm password",control:n,error:s["confirm password"]}),e(z,{error:c}),e(Y,{loading:o,children:"Sign Up"})]}),e(se,{children:"Already have an account?"}),e(G,{to:y.SignIn,children:"Sign In"})]})},dr=()=>{const[t,{handleSubmit:r,watch:n,control:s,errors:o},{isLoading:a,isSuccess:c,error:d}]=q("resetPassword");return c?e(ce,{variant:"resetPassword",email:n().email}):l(R,{title:"Forgot your password?",headStyle:U,children:[l(A,{onFinish:r(t),children:[e(E,{name:"email",control:s,error:o.email}),e(ie,{type:"secondary",children:"Enter your email address and we will send you further instructions"}),e(z,{error:d}),e(Y,{loading:a,children:"Send Instructions"})]}),e(se,{children:"Did you remember your password?"}),e(G,{to:y.SignIn,children:"Try logging in"})]})},lr=()=>{const t=Pe(""),{defaultPage:r}=Ee(`${t.pathname}${k.Profile}`,`${t.pathname}${k.SignIn}`);return e(Te,{children:l(te,{children:[e(u,{path:k.Root,element:r}),e(u,{element:e(Ie,{}),children:e(u,{path:k.Profile,element:e(ar,{})})}),l(u,{element:e(Gt,{}),children:[e(u,{path:k.SignIn,element:e(ir,{})}),e(u,{path:k.SignUp,element:e(cr,{})}),e(u,{path:k.NewPassword,element:e(Yt,{})}),e(u,{path:k.ResetPassword,element:e(dr,{})})]}),e(u,{path:k.Error,element:e(ae,{})})]})})},M={Root:"/",Packs:"/packs",Pack:"/packs/:packId",Error:"*"},ge=window.innerHeight*.53,X="My",we="All",ur=O.injectEndpoints({endpoints:t=>({cardPacks:t.query({query:r=>({url:"cards/pack",method:"GET",params:r,cacheTime:1}),providesTags:["pack"]}),newCardsPack:t.mutation({query:r=>({url:"cards/pack",method:"POST",body:r}),invalidatesTags:["pack"]}),deleteCardsPack:t.mutation({query:({id:r})=>({url:`cards/pack?id=${r}`,method:"DELETE"})}),updatedCardsPack:t.mutation({query:r=>({url:"cards/pack",method:"PUT",body:r})}),cards:t.query({query:r=>({url:"cards/card",method:"GET",params:r})}),newCard:t.mutation({query:r=>({url:"cards/card",method:"POST",body:r})}),deletedCard:t.mutation({query:r=>({url:"cards/card",method:"DELETE",body:r})}),updatedCard:t.mutation({query:r=>({url:"cards/card",method:"PUT",body:r})})}),overrideExisting:!1}),{useCardPacksQuery:mr,useNewCardsPackMutation:hr,useDeleteCardsPackMutation:pr,useUpdatedCardsPackMutation:Zo,useCardsQuery:gr,useNewCardMutation:Ho,useDeletedCardMutation:Wo,useUpdatedCardMutation:Vo}=ur,{Text:wr}=K,Re=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  margin: 0;
`,fr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Ue=i(L).attrs(t=>({type:"primary",htmlType:"submit",size:"large",children:t.children}))`
  font-weight: 500;
  margin-left: 10px;
  width: 200px;
`,ze=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,yr=i.div`
  width: ${t=>t.size==="small"?35:100}%;
`,Sr=i.div`
  width: 14%;
  max-width: 200px;
  margin: 0 14px;
`,de=i(wr)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`,Pr=i(be)`
  margin-bottom: 24px;
`,{Title:xr}=K,Me=({title:t,children:r})=>l(fr,{children:[e(xr,{level:2,children:t}),r]}),Ne=({size:t="small"})=>l(yr,{size:t,children:[e(de,{children:"Search"}),e($.Search,{})]}),Cr=[{title:"Question",dataIndex:"question"},{title:"Answer",dataIndex:"answer"},{title:"LastUpdated",dataIndex:"updated",sorter:!0,width:"10%"},{title:"Grade",dataIndex:"grade",sorter:!0,width:"17%",render:(t,r)=>e(ct,{disabled:!0,defaultValue:r.grade})}],kr=({data:t,tableParams:r,isLoading:n,onTableChange:s})=>{const[o,a]=S.useState(window.innerHeight-350),c=(t==null?void 0:t.cards.map(d=>({key:d._id,question:d.question,answer:d.answer,updated:new Date(d.updated).toLocaleDateString("ru-RU"),grade:d.grade})))||[];return S.useEffect(()=>(window.addEventListener("resize",()=>a(window.innerHeight-350)),()=>{window.removeEventListener("resize",()=>a(window.innerHeight-350))}),[window.innerHeight]),e(be,{size:"small",columns:Cr,dataSource:c,loading:n,onChange:s,sortDirections:["ascend","descend",null],pagination:{...r.pagination,pageSizeOptions:["10","20","50"],showQuickJumper:!0,showSizeChanger:!0,total:(t==null?void 0:t.cardsTotalCount)||0},scroll:{scrollToFirstRowOnChange:!0,y:o}})},br=t=>{if(t.order&&t.field)return(t.order==="ascend"?0:1)+t.field.toString()},Ar=()=>{var m,p;const{packId:t}=Se(),{data:r}=T();Ke();const[n,s]=S.useState({pagination:{current:1,pageSize:10},field:"",order:null}),{data:o,isLoading:a,isFetching:c}=gr({cardsPack_id:t+"",page:(m=n.pagination)==null?void 0:m.current,pageCount:(p=n.pagination)==null?void 0:p.pageSize,sortCards:br(n)});console.log("pack data",o);const d=(r==null?void 0:r._id)===(o==null?void 0:o.packUserId)?"Add new card":"Learn pack";return l(Re,{children:[e(Me,{title:"Pack",children:e(Ue,{loading:a,children:d})}),e(ze,{children:e(Ne,{size:"big"})}),e(kr,{data:o,tableParams:n,isLoading:a||c,onTableChange:(P,g,w)=>{s({pagination:P,...w})}})]})},vr=({activeButton:t,setActiveButton:r})=>l(Sr,{children:[e(de,{children:"Show packs"}),l(Ae.Compact,{block:!0,children:[e(fe,{type:t===X?"primary":"default",onClick:()=>r(X),children:"My"}),e(fe,{type:t===we?"primary":"default",onClick:()=>r(we),children:"All"})]})]}),fe=i(L)`
  width: 100px;
`,Er=()=>e(et,{onClick:r=>{console.log("record",r)}}),Lr=()=>{const t={minCardsCount:0,maxCardsCount:110},r=t==null?void 0:t.minCardsCount,n=t==null?void 0:t.maxCardsCount;return l("div",{style:{width:"25%",maxWidth:"370px",marginRight:"10px"},children:[e(de,{children:"Number of cards"}),e(dt,{max:n,range:{draggableTrack:!0},defaultValue:[r,n],step:1,onChange:a=>{console.log("onChange: ",a)},onAfterChange:a=>{console.log("onAfterChange: ",a)}})]})},Tr=({activeButton:t,currentHeight:r,handlePageChange:n,handleSortChange:s,handleLearn:o,handleEdit:a,handleDelete:c,isDeleteLoading:d,currentPage:h,pageCount:m,userData:p,isError:P,error:g,data:w,isLoading:F,isFetching:Z})=>{const H=[{title:"Name",dataIndex:"name",sorter:!0},{title:"Cards",dataIndex:"cardsCount",sorter:!0},{title:"Last Updated",dataIndex:"updated",sorter:!0},{title:"Created By",dataIndex:"user_name",sorter:!0},{title:"Actions",dataIndex:"actions",render:(x,b)=>t===X||(b==null?void 0:b.user_name)===(p==null?void 0:p.name)?l(Ae,{size:"middle",children:[e(j,{title:"Learn",children:e(ue,{onClick:()=>o(b)})}),e(j,{title:"Edit",children:e(tt,{onClick:()=>a(b)})}),e(j,{title:"Delete",children:e(rt,{onClick:()=>c(b)})})]}):e(j,{title:"Learn",children:e(ue,{onClick:()=>o(b)})})}];if(P)return e(z,{error:g});const W=(w==null?void 0:w.cardPacks.map(x=>({key:x._id,_id:x._id,name:x.name,cardsCount:x.cardsCount,updated:new Date(x.updated).toLocaleDateString("ru-RU"),user_name:x.user_name})))||[];return e(v,{children:F||d||Z?e(lt,{paragraph:{rows:10},active:!0}):e(Pr,{size:"small",columns:H,dataSource:W,onChange:s,pagination:{pageSizeOptions:["10","20","50"],showQuickJumper:!0,onChange:n,total:(w==null?void 0:w.cardPacksTotalCount)||0,current:h,pageSize:m,showSizeChanger:!0},scroll:{y:r,scrollToFirstRowOnChange:!0}})})},Ir=()=>{const[t,r]=S.useState("All"),[n,s]=S.useState(1),[o,a]=S.useState(10),[c,d]=S.useState(ge),[h,m]=S.useState(""),[p,{isLoading:P}]=hr(),{data:g}=T(),w=g==null?void 0:g._id,{data:F,isLoading:Z,isError:H,error:W,refetch:x,isFetching:b}=mr({page:n,pageCount:o,user_id:t===X?w:void 0,sortPacks:h||void 0});console.log("data",F);const[Oe,{isLoading:Qe}]=pr(),qe=(C,V,I)=>{Array.isArray(I)||I.field&&(I.order==="ascend"?m(`1${I.field}`):I.order==="descend"?m(`0${I.field}`):m(""))},Fe=C=>{console.log("record",C)},je=C=>{console.log("record",C)},Be=async C=>{await Oe({id:C._id}),await x()},le=()=>{d(ge)};return S.useEffect(()=>(window.addEventListener("resize",le),()=>{window.removeEventListener("resize",le)}),[window.innerHeight]),l(Re,{children:[e(Me,{title:"Packs list",children:e(Ue,{loading:P,onClick:async()=>{try{await p({cardsPack:{name:`test pack ${Math.round(Math.random()+100)}`}}),await x()}catch(C){console.error(C)}},children:"Add new pack"})}),l(ze,{children:[e(Ne,{}),e(vr,{activeButton:t,setActiveButton:r}),e(Lr,{}),e(Er,{})]}),e(Tr,{activeButton:t,currentHeight:c,handlePageChange:(C,V)=>{s(C),V&&a(V)},handleSortChange:qe,sortPacks:h,handleLearn:Fe,handleEdit:je,handleDelete:Be,isDeleteLoading:Qe,currentPage:n,pageCount:o,userData:g,isError:H,error:W,data:F,isLoading:Z,isFetching:b})]})},Rr=()=>{const t=Pe("");return l(te,{children:[e(u,{path:M.Root,element:e(Q,{to:`${t.pathname}${M.Packs}`})}),e(u,{path:M.Packs,element:e(Ir,{})}),e(u,{path:M.Pack,element:e(Ar,{})}),e(u,{path:M.Error,element:e(ae,{})})]})},Ur=Ye`{
  body {
    margin: 0;
    padding: 0;
  }
}
`,zr=()=>{const{isLoading:t}=wt("auth"),{defaultPage:r}=Ee(f.Cards,f.Auth);return l(v,{children:[e(Ur,{}),e(Nt,{}),e(qt,{isLoading:t,children:l(te,{children:[e(u,{path:f.Root,element:r}),e(u,{path:`${f.Auth}/*`,element:e(lr,{})}),e(u,{element:e(Ie,{}),children:e(u,{path:`${f.Cards}/*`,element:e(Rr,{})})}),e(u,{path:f.Error,element:e(ae,{})})]})})]})},Mr=$e({reducer:{[O.reducerPath]:O.reducer},middleware:t=>t().concat(O.middleware)});De(document.getElementById("root")).render(e(Xe,{store:Mr,children:e(Ge,{children:e(zr,{})})}));
