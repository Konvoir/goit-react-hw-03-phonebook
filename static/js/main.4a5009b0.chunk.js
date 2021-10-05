(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"FormInput_form__1XUTy",label:"FormInput_label__w4Uv-",input:"FormInput_input__35r_C",button:"FormInput_button__2uInP"}},,function(e,t,n){e.exports={list:"ContactList_list__1uybX",item:"ContactList_item__18WUk",text:"ContactList_text__26Bl0",button:"ContactList_button__3gk5Q"}},,,,function(e,t,n){e.exports={container:"Section_container__2COej",title:"Section_title__1Sz7W"}},function(e,t,n){e.exports={label:"Filter_label__2mCwN",input:"Filter_input__1XsMr"}},,function(e,t,n){e.exports={container:"App_container__1anSn"}},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(12),o=n(3),l=n(20),u=n(2),b=n.n(u),m=n(0),j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),u=l[0],j=l[1],d=function(e){var t=e.currentTarget,n=t.name,a=t.value;n&&("name"===n?i(a):"number"===n&&j(a))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),i(""),j("")},children:[Object(m.jsxs)("label",{className:b.a.label,children:["Name",Object(m.jsx)("input",{className:b.a.input,type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:["Number",Object(m.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:u,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0438\u0437 5 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438, \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})})},d=n(8),p=n.n(d),O=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("div",{className:p.a.container,children:[Object(m.jsx)("h2",{className:p.a.title,children:t}),n]})},f=n(4),_=n.n(f),x=function(e){var t=e.contacts,n=e.onDelete;return Object(m.jsx)("ul",{className:_.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{className:_.a.item,children:[Object(m.jsxs)("span",{className:_.a.text,children:[a," :"]}),Object(m.jsx)("span",{className:_.a.text,children:c}),Object(m.jsx)("button",{className:_.a.button,onClick:function(){n(t)},children:" Delete"})]},t)}))})},h=n(9),v=n.n(h),C=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:v.a.label,children:["Filter contacts by input",Object(m.jsx)("input",{className:v.a.input,type:"text",value:t,onChange:n})]})},N=n(11),g=n.n(N),S=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),u=i[0],b=i[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]);var d=Object(a.useRef)(!0);Object(a.useEffect)((function(){d.current?d.current=!1:window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var p=u.toLowerCase(),f=n.filter((function(e){return e.name.toLowerCase().includes(p)})).sort((function(e,t){return e.name.localeCompare(t.name)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{title:"Phonebook",children:Object(m.jsx)(j,{onSubmit:function(e){var t=e.name,a=e.number,r={id:Object(l.a)(),name:t,number:a};n.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):n.find((function(e){return e.number===a}))?alert("".concat(a," is  already in contacts")):c([r].concat(Object(s.a)(n)))}})}),Object(m.jsx)(O,{title:"Contacts",children:Object(m.jsxs)("div",{className:g.a.container,children:[Object(m.jsx)(C,{value:u,onChange:function(e){b(e.target.value)}}),Object(m.jsx)(x,{contacts:f,onDelete:function(e){c(n.filter((function(t){return t.id!==e})))}})]})})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4a5009b0.chunk.js.map