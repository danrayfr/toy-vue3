"use strict";(self["webpackChunktoy"]=self["webpackChunktoy"]||[]).push([[910],{121:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(3396),o=a(9242),i=a(4870),l=a(7139),r=(a(7658),a(5490)),u=a(1209),d=a(7365);function s(){const e=(0,i.iH)(""),t=(0,i.iH)(""),a=(0,i.qj)({value:[]});let o=(0,i.iH)("");const l=(0,i.iH)(!1),s=(0,r.tv)(),c=d.ZP`
    mutation addToy($name: String!, $description: String!, $images: [String!]) {
      createToy(input: {
        name: $name,
        description: $description,
        images: $images,
      }) {
        toy {
          id
          name
          description
          imagesUrl
          postedBy {
            id
            name
          }
        }
      }
    }
  `,{mutate:v,loading:m}=(0,u.Db)(c),p=async()=>{if(!e.value&&!t.value&&!a.value)return void console.log("All fields are required.");l.value=!0;const i=localStorage.getItem("token");if(!i)return void console.log("User not authenticated");const r={name:e.value,description:t.value,images:a.value};try{const{data:e}=await v(r),t=(0,n.Fl)((()=>e.createToy?.toy??[]));console.log("Toy:",t.value);const a=(0,n.Fl)((()=>e.createToy?.errors??[]));return o.value=a,s.push({name:"toy-details",params:{id:t.value.id}}),t.value,a}catch(u){o.value=u.message||"An unknown error occured",console.log("Error:",o.value)}finally{l.value=!1}};return{name:e,description:t,images:a,create:p,hasCreate:l,error:o}}const c=e=>((0,n.dD)("data-v-5d5fd591"),e=e(),(0,n.Cn)(),e),v=c((()=>(0,n._)("h1",{class:"text-3xl font-bold underline"},"Toy Mutations",-1))),m=["disabled"],p={key:0};var y={__name:"Toy",setup(e){let{name:t,description:a,images:r,create:u,hasCreate:d,error:c}=s();return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[v,(0,n._)("form",{action:"",method:"POST",onSubmit:r[2]||(r[2]=(0,o.iM)(((...e)=>(0,i.SU)(u)&&(0,i.SU)(u)(...e)),["prevent"]))},[(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"name","onUpdate:modelValue":r[0]||(r[0]=e=>(0,i.dq)(t)?t.value=e:t=e),placeholder:"Enter the name of the toy"},null,512),[[o.nr,(0,i.SU)(t)]])]),(0,n._)("div",null,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":r[1]||(r[1]=e=>(0,i.dq)(a)?a.value=e:a=e),placeholder:"toy description..."},"\n        ",512),[[o.nr,(0,i.SU)(a)]])]),(0,n._)("div",null,[(0,n._)("button",{class:"submit",type:"submit",disabled:(0,i.SU)(d)},"Create Toy",8,m)])],32)]),(0,i.SU)(c)?((0,n.wg)(),(0,n.iD)("div",p,(0,l.zw)((0,i.SU)(c)),1)):(0,n.kq)("",!0)],64))}},g=a(89);const _=(0,g.Z)(y,[["__scopeId","data-v-5d5fd591"]]);var f=_},3376:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});a(7658);var n=a(3396),o=a(9242),i=a(4870),l=a(7139),r=a(5490),u=a(1209),d=a(7365);const s=e=>((0,n.dD)("data-v-0ee1a6cb"),e=e(),(0,n.Cn)(),e),c=s((()=>(0,n._)("h1",{class:"text-3xl font-bold underline"},"Toy Mutations",-1))),v=["onSubmit"],m=s((()=>(0,n._)("div",null,[(0,n._)("button",{class:"submit",type:"submit"},"Update Toy")],-1))),p={key:0};var y={__name:"UpdateToy",props:{id:{type:String,required:!0}},setup(e){const t=e,a=(0,i.iH)(""),s=(0,i.iH)(""),y=(0,i.iH)([]);let g=(0,i.iH)("");const _=(0,r.tv)(),f=d.ZP`
  mutation updateToy($id: ID!, $name: String!, $description: String!, $images: [String!]) { 
    updateToy(input: { 
      id: $id,
      name: $name,
      description: $description,
      images: $images
    }) {
      toy {
        id
        name
        description
        imagesUrl
        postedBy {
          id
          name
        }
      }
    }
  }
`,{mutate:h,loading:S}=(0,u.Db)(f),b=async()=>{if(!a.value&&!s.value)return void console.log("All fields are required.");const e={id:t.id,name:a.value,description:s.value,images:y.value};try{const{data:t}=await h(e),a=(0,n.Fl)((()=>t.updateToy?.toy??[]));console.log("Toy:",a.value);const o=(0,n.Fl)((()=>t.updateToy?.errors??[]));return g.value=o,_.push({name:"toy-details",params:{id:a.value.id}}),a.value,g.value}catch(o){g.value=o.message||"An unknown error occured",console.log("Error:",g.value)}};return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[c,(0,n._)("form",{action:"",method:"POST",onSubmit:(0,o.iM)(b,["prevent"])},[(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"name","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:"Enter the name of the toy"},null,512),[[o.nr,a.value]])]),(0,n._)("div",null,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),placeholder:"toy description..."},"\n        ",512),[[o.nr,s.value]])]),m],40,v)]),(0,i.SU)(g)?((0,n.wg)(),(0,n.iD)("div",p,(0,l.zw)((0,i.SU)(g)),1)):(0,n.kq)("",!0)],64))}},g=a(89);const _=(0,g.Z)(y,[["__scopeId","data-v-0ee1a6cb"]]);var f=_}}]);
//# sourceMappingURL=toy.1ea548ce.js.map