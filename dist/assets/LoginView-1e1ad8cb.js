import{aB as i,bw as a,at as c,p as r,q as e,bm as u,bb as _}from"./index-b2fa3154.js";import{_ as p}from"./haie_logo-5f9306a3.js";const m={class:"login"},d=e("div",{class:"headline"},[e("img",{class:"icon",src:p}),e("h1",{class:"title"},"HAIE")],-1),h=e("h2",{class:"fs-subtitle"},"DATA Explorer",-1),k={__name:"LoginView",setup(v){const t=i(),s=new URLSearchParams(location.search).get("token");s&&(localStorage.setItem("token",s),a.push("/"));const n=()=>{localStorage.setItem("token",t.value),a.push("/")};return(b,o)=>(c(),r("div",m,[e("fieldset",null,[d,h,u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),type:"input"},null,512),[[_,t.value]]),e("button",{onClick:n},"submit")])]))}};export{k as default};
