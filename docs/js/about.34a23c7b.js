"use strict";(self["webpackChunktoy"]=self["webpackChunktoy"]||[]).push([[443],{1017:function(n,l,e){e.r(l),e.d(l,{default:function(){return k}});var r=e(3396),t=e(4870),u=e(7139),a=e(1209),i=e(7365);function s(){const n=i.Ps`
    query {
      allUsers { 
        id
        name
        email
        admin
      }
    }
  `,{result:l,error:e,loading:t}=(0,a.aM)(n),u=(0,r.Fl)((()=>l.value?.allUsers??[]));return{users:u,error:e,loading:t}}const d=n=>((0,r.dD)("data-v-f6a943cc"),n=n(),(0,r.Cn)(),n),o={class:"about"},c=d((()=>(0,r._)("h1",null,"User Query",-1))),_={key:0},w={key:1},f={key:2,class:"users"},v=d((()=>(0,r._)("tr",null,[(0,r._)("th",null,"ID"),(0,r._)("th",null,"Name"),(0,r._)("th",null,"Email"),(0,r._)("th",null,"Admin")],-1)));var g={__name:"About",setup(n){let{users:l,error:e,loading:a}=s();return(n,i)=>((0,r.wg)(),(0,r.iD)("div",o,[c,(0,t.SU)(e)?((0,r.wg)(),(0,r.iD)("div",_,(0,u.zw)((0,t.SU)(e)),1)):(0,r.kq)("",!0),(0,t.SU)(a)?((0,r.wg)(),(0,r.iD)("div",w,"Loading....")):((0,r.wg)(),(0,r.iD)("table",f,[(0,r._)("thead",null,[v,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,t.SU)(l),(n=>((0,r.wg)(),(0,r.iD)("tr",{key:n.id},[(0,r._)("td",null,(0,u.zw)(n.id),1),(0,r._)("td",null,(0,u.zw)(n.name),1),(0,r._)("td",null,(0,u.zw)(n.email),1),(0,r._)("td",null,(0,u.zw)(n.admin),1)])))),128))])]))]))}},m=e(89);const h=(0,m.Z)(g,[["__scopeId","data-v-f6a943cc"]]);var k=h},9500:function(n,l,e){e.r(l),e.d(l,{default:function(){return o}});var r=e(3396);const t=(0,r._)("h1",null,"User Information",-1),u=[t];function a(n,l){return(0,r.wg)(),(0,r.iD)("div",null,u)}var i=e(89);const s={},d=(0,i.Z)(s,[["render",a]]);var o=d}}]);
//# sourceMappingURL=about.34a23c7b.js.map