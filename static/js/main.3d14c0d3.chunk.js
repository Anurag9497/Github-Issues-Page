(this["webpackJsonpgithub-issue-page"]=this["webpackJsonpgithub-issue-page"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(11),n(2)),u=(n(12),n(3)),o=n(5),b=(n(13),n(0));var j=function(e){var t=e.setIssues,n=e.setPage,c=e.setShow,s=e.setFlag,i=Object(a.useState)({username:" ",reponame:" "}),j=Object(r.a)(i,2),l=j[0],d=j[1],h=function(e){var t=e.target,n=t.id,a=t.value;d(Object(o.a)(Object(o.a)({},l),{},Object(u.a)({},n,a)))};return Object(b.jsxs)("div",{id:"search",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",placeholder:"GitHub Username",className:"github-input",id:"username",onChange:h})," ",Object(b.jsx)("input",{type:"text",placeholder:"GitHub Repo Name",className:"github-input",id:"reponame",onChange:h})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",id:"search-issue",onClick:function(){" "!==l.username&&" "!==l.reponame?fetch("http://api.github.com/repos/".concat(l.username,"/").concat(l.reponame,"/issues")).then((function(e){if(200===e.status)return e.json();throw Error("".concat(e.status," occurred"))})).then((function(e){t(e);var a=e.length%8===0?e.length/8:Math.floor(e.length/8)+1,i=e.slice(0,9);c(i),n(a),s(!0)})).catch((function(e){return alert(e)})):alert("Input fields are empty!")},children:"Search Issues"})})]})};n(15),n(16);var l=function(e){var t=e.currentPage,n=e.activePage,a=e.handleDisplay,c=e.page,s=[];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",id:"decrement",onClick:a,children:"<<"}),function(){for(var e=0;e<Number(c);e++)s.push(Object(b.jsx)("button",{type:"button",id:t+e,onClick:a,className:t+e===n?"pageActive":"pageitem",children:t+e},t+e));return s}(),Object(b.jsx)("button",{type:"button",id:"increment",onClick:a,children:">>"})]})};var d=function(e){var t=e.issues,n=e.page,c=e.show,s=e.setShow,i=e.flag,u=Object(a.useState)(1),o=Object(r.a)(u,2),j=o[0],d=o[1],h=Object(a.useState)(1),p=Object(r.a)(h,2),g=p[0],O=p[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"display",children:c.map((function(e,t){return Object(b.jsxs)("div",{className:"display-item",children:[Object(b.jsx)("p",{className:"upper-para",children:e.title}),Object(b.jsxs)("p",{className:"bottom-para",children:["# ",e.number," ",e.state,"ed on ",e.created_at," by ",e.user.login]})]},t)}))}),i&&Object(b.jsx)("div",{id:"pagination",children:Object(b.jsx)(l,{currentPage:j,activePage:g,handleDisplay:function(e){var n=[];if("increment"===e.target.id||"decrement"===e.target.id){if(g%5===0){var a="increment"===e.target.id?j+1:j-1;d(a)}}else{var c=8*(Number(e.target.id)-1),i=8*Number(e.target.id);n=t.length>=i?t.slice(c,i):t.slice(c),s(n),O(Number(e.target.id))}},page:n})})]})};var h=function(){var e=Object(a.useState)(" "),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(" "),i=Object(r.a)(s,2),u=i[0],o=i[1],l=Object(a.useState)([]),h=Object(r.a)(l,2),p=h[0],g=h[1],O=Object(a.useState)(!1),m=Object(r.a)(O,2),f=m[0],v=m[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{setIssues:c,setPage:o,setShow:g,setFlag:v}),Object(b.jsx)(d,{issues:n,page:u,show:p,setShow:g,flag:f})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.3d14c0d3.chunk.js.map