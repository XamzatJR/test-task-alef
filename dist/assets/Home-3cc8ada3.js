import{_ as k,o as r,c as u,r as g,m as y,d as h,a,t as L,b as x,u as U,e as o,w as i,f as _,F as B,g as S,h as q,i as A,j as D}from"./index-a14f82aa.js";import{u as F}from"./useUserInfo-f2e53f07.js";const I={};function N(n,e){return r(),u("button",y(n.$attrs,{class:"py-2.5 px-5 text-sm font-normal flex items-center justify-center"}),[g(n.$slots,"icon",{class:"w-6 p-6 mr-1"}),g(n.$slots,"default")],16)}const v=k(I,[["render",N]]),j={class:"block rounded-lg w-full px-4 py-2 border border-gray-200"},M={class:"text-sm text-gray-400"},H=["value"],p=h({__name:"AppInput",props:{label:{},modelValue:{}},emits:["update:modelValue"],setup(n){return(e,t)=>(r(),u("label",j,[a("div",M,L(e.label),1),a("input",y({class:"block w-full text-sm font-normal text-black focus:outline-none placeholder:text-black"},e.$attrs,{type:"text",value:e.modelValue,onInput:t[0]||(t[0]=c=>{var d;return e.$emit("update:modelValue",(d=c.target)==null?void 0:d.value)})}),null,16,H)]))}}),P=["onSubmit"],E={class:"flex flex-col gap-2.5 w-full"},R={class:"mt-11"},T={class:"flex justify-between items-center"},X=a("h2",{class:"text-black text-base font-medium"}," Дети (макс. 5) ",-1),Z=a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("g",{id:"24px / plus"},[a("path",{id:"Union","fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z",fill:"#01A7FD"})])],-1),z={class:"flex flex-col gap-2.5 mt-5"},G=5,J=h({__name:"PersonalDataForm",setup(n){const e=x({name:"",age:""}),t=x([]),{setChildren:c,setUser:d}=F(),C=U();function w(){t.value.length<G&&t.value.push({name:"",age:""})}function $(b){t.value=t.value.filter(s=>s.name!==b)}function V(){d(e.value),c(t.value),C.push({name:"preview"})}return(b,s)=>(r(),u("form",{action:"#",onSubmit:A(V,["prevent"])},[a("div",E,[o(p,{id:"username",label:"Имя",name:"username",required:"",pattern:"\\p{L}{3,16}",placeholder:"Введите имя","model-value":e.value.name,"onUpdate:modelValue":s[0]||(s[0]=l=>e.value.name=l)},null,8,["model-value"]),o(p,{id:"userage",label:"Возраст",name:"userage",required:"",pattern:"\\d{1,2}",placeholder:"Введите возраст","model-value":e.value.age,"onUpdate:modelValue":s[1]||(s[1]=l=>e.value.age=l)},null,8,["model-value"])]),a("section",R,[a("div",T,[X,o(v,{type:"button",class:"text-primary border-2 border-primary rounded-full",onClick:w},{icon:i(()=>[Z]),default:i(()=>[_(" Добавить ребенка ")]),_:1})]),a("div",z,[t.value.length?(r(!0),u(B,{key:0},S(t.value,(l,f)=>(r(),u("fieldset",{key:f,class:"flex gap-4"},[o(p,{label:"Имя",name:`child-name-${f}`,required:"",pattern:"\\p{L}{3,16}",placeholder:"Введите имя","model-value":l.name,"onUpdate:modelValue":m=>l.name=m},null,8,["name","model-value","onUpdate:modelValue"]),o(p,{label:"Возраст",name:`child-age-${f}`,required:"",pattern:"\\d{1,2}",placeholder:"Введите возраст","model-value":l.age,"onUpdate:modelValue":m=>l.age=m},null,8,["name","model-value","onUpdate:modelValue"]),o(v,{type:"button",class:"text-primary",onClick:m=>$(l.name)},{default:i(()=>[_(" Удалить ")]),_:2},1032,["onClick"])]))),128)):q("",!0)])]),o(v,{type:"submit",class:"text-white bg-primary border-2 border-primary rounded-full mt-8"},{default:i(()=>[_(" Сохранить ")]),_:1})],40,P))}}),Q=h({__name:"Home",setup(n){return(e,t)=>(r(),D(J))}});export{Q as default};