(this["webpackJsonpcodingapple-react-2021-0219-part2-shop"]=this["webpackJsonpcodingapple-react-2021-0219-part2-shop"]||[]).push([[0],{53:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(14),a=c.n(i),j=(c(53),c(26)),o=c(17),r=(c(54),c(88)),d=c(89),l=c(11),b=c(4),h=c(44),O=c.n(h),u=(c(73),[{id:0,title:"0-White and Black",content:"0-Born in France",price:2e3},{id:1,title:"1-Red Knit",content:"1-Born in Seoul",price:11e4},{id:2,title:"2-Grey Yordan",content:"2-Born in the States",price:23e4}]),x=(c(74),c(90)),p=c(1);function m(e){return Object(n.useEffect)((function(){e.setturn(!0)}),[]),0===e.tab?Object(p.jsx)("div",{children:" 0 datas "}):1===e.tab?Object(p.jsx)("div",{children:" 1 datas "}):Object(p.jsx)("div",{children:" 2 datas "})}function f(e){return Object(p.jsxs)("p",{children:[" inventory : ",e.inventory[e.id]," "]})}var v=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(0),j=Object(o.a)(a,2),r=j[0],d=j[1],l=Object(n.useState)(!1),h=Object(o.a)(l,2),O=h[0],u=h[1];Object(n.useEffect)((function(){setTimeout((function(){i(!1)}),2e3)}),[]);var v=Object(b.f)(),g=Object(b.g)().id,k=e.shoes.find((function(e){return e.id==g}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[!0===s?Object(p.jsx)("div",{className:"my-alert2",children:Object(p.jsx)("p",{children:"out of order soon (hide in 2sec)"})}):null,Object(p.jsx)("button",{onClick:function(){i(!0)},children:"show"}),Object(p.jsx)("button",{onClick:function(){i(!1)},children:"hide"})]}),Object(p.jsxs)("div",{className:"row ",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+g+".jpg",width:"100%"})}),Object(p.jsxs)("div",{className:"col-md-6 mt-4 ",children:[Object(p.jsx)("h4",{className:"pt-5 lightcoral",children:k.title}),"        ",Object(p.jsx)("p",{children:k.content}),Object(p.jsxs)("p",{children:[k.price,"$"]}),Object(p.jsx)(f,{inventory:e.inventory,id:g}),"        ",Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){},children:"order"}),Object(p.jsx)("button",{className:"btn btn-danger",onclick:function(){v.goBack()},children:"back"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){u(!1),d(0)},children:" show 0"}),Object(p.jsx)("button",{onClick:function(){u(!1),d(1)},children:" show 1"}),Object(p.jsx)("button",{onClick:function(){u(!1),d(2)},children:" show 2"})]}),Object(p.jsx)(x.a,{in:O,className:"wow",timeout:500,children:Object(p.jsx)(m,{tab:r,setturn:u})})]})},g=c(87),k=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)(g.a,{responsive:"md",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:" name "}),Object(p.jsx)("th",{children:" amount "}),Object(p.jsx)("th",{children:" change "})]})}),Object(p.jsx)("tbody",{children:e.store.map((function(t,c){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[t.id," "]}),Object(p.jsxs)("td",{children:[t.name," "]}),Object(p.jsxs)("td",{children:[t.quan," "]}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{className:"myButton",onClick:function(){e.dispatch({type:"plus"})},children:"+"})," "]})]})}))})]})})},N=c(30);function C(e){return Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(p.jsx)("h4",{children:e.shoes.title}),Object(p.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var w=function(){var e=Object(n.useState)(u),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([10,11,12]),a=Object(o.a)(i,2),h=a[0],x=(a[1],Object(n.useState)([{id:0,name:"cool shoes",quan:2},{id:1,name:"cool shoes",quan:2},{id:2,name:"cool shoes",quan:2},{id:3,name:"cool shoes",quan:2}])),m=Object(o.a)(x,2),f=m[0],g=m[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("p",{className:"black-nav",children:"react "}),Object(p.jsx)("nav",{children:Object(p.jsxs)(r.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(r.a.Brand,{href:"#home",children:"ShoeShop"}),Object(p.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(d.a,{className:"mr-auto",children:[Object(p.jsxs)(d.a.Link,{as:l.b,to:"/",children:[" ",Object(p.jsx)(l.b,{to:"/",children:"Home"})," "]}),Object(p.jsxs)(d.a.Link,{as:l.b,to:"/cart",children:[" ",Object(p.jsx)(l.b,{to:"/cart",children:"Cart"})," "]}),Object(p.jsx)(d.a.Link,{as:l.b,to:"/detail/0",children:" detail0 "}),Object(p.jsx)(d.a.Link,{as:l.b,to:"/detail/1",children:" detail1 "}),Object(p.jsx)(d.a.Link,{as:l.b,to:"/detail/2",children:"  detail2 "})]})})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)(b.c,{children:[Object(p.jsxs)(b.a,{exact:!0,path:"/",children:[Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(p.jsx)(C,{shoes:e,i:t})}))})})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){O.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),s([].concat(Object(j.a)(c),Object(j.a)(e.data)))})).catch((function(){console.log("fail")}))},children:"more"})})]}),"     ",Object(p.jsx)(b.a,{path:"/detail/:id",children:Object(p.jsx)(v,{shoes:c,inventory:h})}),Object(p.jsx)(b.a,{path:"/cart",children:Object(p.jsx)(k,{store:f,setstore:g})})]})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))},S=c(23),B=Object(S.b)((function(){return[{id:0,name:"cool shoes",quan:12}]}));a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(N.a,{store:B,children:Object(p.jsx)(w,{})})})}),document.getElementById("root")),y()}},[[84,1,2]]]);
//# sourceMappingURL=main.7f5b5703.chunk.js.map