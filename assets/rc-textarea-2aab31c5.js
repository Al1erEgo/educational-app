import{b as me,c as P,_ as pe,a as G,h as he,d as se,g as O}from"./@babel-9169ff57.js";import{c as ue}from"./classnames-5c20d0be.js";import{B as we,r as ne,f as Ee}from"./rc-input-a6365688.js";import{x as Se,b as fe,o as ve}from"./rc-util-1f458f21.js";import{r as v,R}from"./react-5cc2acaa.js";import{R as Ae}from"./rc-resize-observer-2e6aca21.js";var Ie=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Ve=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],re={},h;function Te(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(c&&re[t])return re[t];var n=window.getComputedStyle(e),l=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),f=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),o=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=Ve.map(function(r){return"".concat(r,":").concat(n.getPropertyValue(r))}).join(";"),z={sizingStyle:s,paddingSize:f,borderSize:o,boxSizing:l};return c&&t&&(re[t]=z),z}function Ne(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;h||(h=document.createElement("textarea"),h.setAttribute("tab-index","-1"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h)),e.getAttribute("wrap")?h.setAttribute("wrap",e.getAttribute("wrap")):h.removeAttribute("wrap");var l=Te(e,c),f=l.paddingSize,o=l.borderSize,s=l.boxSizing,z=l.sizingStyle;h.setAttribute("style","".concat(z,";").concat(Ie)),h.value=e.value||e.placeholder||"";var r=void 0,u=void 0,S,g=h.scrollHeight;if(s==="border-box"?g+=o:s==="content-box"&&(g-=f),t!==null||n!==null){h.value=" ";var I=h.scrollHeight-f;t!==null&&(r=I*t,s==="border-box"&&(r=r+f+o),g=Math.max(r,g)),n!==null&&(u=I*n,s==="border-box"&&(u=u+f+o),S=g>u?"":"hidden",g=Math.min(u,g))}var m={height:g,overflowY:S,resize:"none"};return r&&(m.minHeight=r),u&&(m.maxHeight=u),m}var Pe=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],oe=0,ie=1,le=2,Fe=v.forwardRef(function(e,c){var t=e,n=t.prefixCls;t.onPressEnter;var l=t.defaultValue,f=t.value,o=t.autoSize,s=t.onResize,z=t.className,r=t.style,u=t.disabled,S=t.onChange;t.onInternalAutoSize;var g=me(t,Pe),I=Se(l,{value:f,postState:function(i){return i??""}}),m=P(I,2),_=m[0],F=m[1],X=function(i){F(i.target.value),S==null||S(i)},p=v.useRef();v.useImperativeHandle(c,function(){return{textArea:p.current}});var M=v.useMemo(function(){return o&&pe(o)==="object"?[o.minRows,o.maxRows]:[]},[o]),Y=P(M,2),C=Y[0],w=Y[1],V=!!o,U=function(){try{if(document.activeElement===p.current){var i=p.current,Q=i.selectionStart,ee=i.selectionEnd,te=i.scrollTop;p.current.setSelectionRange(Q,ee),p.current.scrollTop=te}}catch{}},W=v.useState(le),T=P(W,2),x=T[0],E=T[1],q=v.useState(),$=P(q,2),J=$[0],B=$[1],Z=function(){E(oe)};fe(function(){V&&Z()},[f,C,w,V]),fe(function(){if(x===oe)E(ie);else if(x===ie){var b=Ne(p.current,!1,C,w);E(le),B(b)}else U()},[x]);var H=v.useRef(),L=function(){ve.cancel(H.current)},k=function(i){x===le&&(s==null||s(i),o&&(L(),H.current=ve(function(){Z()})))};v.useEffect(function(){return L},[]);var j=V?J:null,N=G(G({},r),j);return(x===oe||x===ie)&&(N.overflowY="hidden",N.overflowX="hidden"),v.createElement(Ae,{onResize:k,disabled:!(o||s)},v.createElement("textarea",he({},g,{ref:p,style:N,className:ue(n,z,se({},"".concat(n,"-disabled"),u)),disabled:u,value:_,onChange:X})))}),Me=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles"];function xe(e,c){return O(e||"").slice(0,c).join("")}function ge(e,c,t,n){var l=t;return e?l=xe(t,n):O(c||"").length<t.length&&O(t||"").length>n&&(l=c),l}var De=R.forwardRef(function(e,c){var t,n=e.defaultValue,l=e.value,f=e.onFocus,o=e.onBlur,s=e.onChange,z=e.allowClear,r=e.maxLength,u=e.onCompositionStart,S=e.onCompositionEnd,g=e.suffix,I=e.prefixCls,m=I===void 0?"rc-textarea":I,_=e.classes,F=e.showCount,X=e.className,p=e.style,M=e.disabled,Y=e.hidden,C=e.classNames,w=e.styles,V=me(e,Me),U=Se(n,{value:l,defaultValue:n}),W=P(U,2),T=W[0],x=W[1],E=v.useRef(null),q=R.useState(!1),$=P(q,2),J=$[0],B=$[1],Z=R.useState(!1),H=P(Z,2),L=H[0],k=H[1],j=R.useRef(),N=R.useRef(0),b=function(){E.current.textArea.focus()};v.useImperativeHandle(c,function(){return{resizableTextArea:E.current,focus:b,blur:function(){E.current.textArea.blur()}}}),v.useEffect(function(){B(function(y){return!M&&y})},[M]);var i=Number(r)>0,Q=function(a){k(!0),j.current=T,N.current=a.currentTarget.selectionStart,u==null||u(a)},ee=function(a){k(!1);var d=a.currentTarget.value;if(i){var A,Ce=N.current>=r+1||N.current===((A=j.current)===null||A===void 0?void 0:A.length);d=ge(Ce,j.current,d,r)}d!==T&&(x(d),ne(a.currentTarget,a,s,d)),S==null||S(a)},te=function(a){var d=a.target.value;if(!L&&i){var A=a.target.selectionStart>=r+1||a.target.selectionStart===d.length||!a.target.selectionStart;d=ge(A,T,d,r)}x(d),ne(a.currentTarget,a,s,d)},de=function(a){var d=V.onPressEnter,A=V.onKeyDown;a.key==="Enter"&&d&&d(a),A==null||A(a)},be=function(a){B(!0),f==null||f(a)},ye=function(a){B(!1),o==null||o(a)},Re=function(a){x(""),b(),ne(E.current.textArea,a,s)},D=Ee(T);!L&&i&&l==null&&(D=xe(D,r));var ae=g,K;if(F){var ce=O(D).length;pe(F)==="object"?K=F.formatter({value:D,count:ce,maxLength:r}):K="".concat(ce).concat(i?" / ".concat(r):""),ae=R.createElement(R.Fragment,null,ae,R.createElement("span",{className:ue("".concat(m,"-data-count"),C==null?void 0:C.count),style:w==null?void 0:w.count},K))}var ze=R.createElement(we,{value:D,allowClear:z,handleReset:Re,suffix:ae,prefixCls:m,classes:{affixWrapper:ue(_==null?void 0:_.affixWrapper,(t={},se(t,"".concat(m,"-show-count"),F),se(t,"".concat(m,"-textarea-allow-clear"),z),t))},disabled:M,focused:J,className:X,style:p,dataAttrs:{affixWrapper:{"data-count":typeof K=="string"?K:void 0}},hidden:Y,inputElement:R.createElement(Fe,he({},V,{onKeyDown:de,onChange:te,onFocus:be,onBlur:ye,onCompositionStart:Q,onCompositionEnd:ee,className:C==null?void 0:C.textarea,style:G(G({},w==null?void 0:w.textarea),{},{resize:p==null?void 0:p.resize}),disabled:M,prefixCls:m,ref:E}))});return ze});export{De as T};