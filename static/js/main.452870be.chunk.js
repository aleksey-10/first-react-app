(this.webpackJsonpapp_1=this.webpackJsonpapp_1||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(9),n(1)),u=(n(10),o.a.createContext());function i(e){return o.a.createElement("input",{type:e.type,className:"form-control",onKeyDown:function(t){"Enter"===t.key&&e.submitInput(e.type,t.target.value)},onBlur:function(t){e.submitInput(e.type,t.target.value)},autoFocus:!0})}function m(e){var t=e.todo,n=o.a.useContext(u),a=n.deleteTodo,r=n.completeTodo,c=n.onChangeValue,m=["list-group-item"];t.completed&&m.push("completed");var s=o.a.useState(!1),d=Object(l.a)(s,2),p=d[0],f=d[1],v=o.a.useState(!1),b=Object(l.a)(v,2),E=b[0],g=b[1],h=function(e,n){return f(!1),g(!1),"number"===e?c(t.id,"value",n):n.trim()?c(t.id,e,n):void 0};return o.a.createElement("li",{className:m.join(" ")},o.a.createElement("div",{className:"row justify-content-around align-items-center"},o.a.createElement("input",{type:"checkbox",className:"item-element check col-1",onChange:function(){return r(t.id)},checked:t.completed}),o.a.createElement("div",{className:"item-element text col",onClick:function(){return f(!0)}},p?o.a.createElement(i,{submitInput:h,type:"text"}):t.text),o.a.createElement("div",{className:"item-element value col-3",onClick:function(){return g(!0)}},E?o.a.createElement(i,{submitInput:h,type:"number"}):t.value),o.a.createElement("div",{className:"item-element del col-1",onClick:function(){return a(t.id)}}," \xd7 ")))}function s(e){var t=e.todos;return o.a.createElement("ul",{className:"list-group"},t.map((function(e,t){return o.a.createElement(m,{todo:e,key:t+1})})))}function d(){var e=o.a.useContext(u),t=e.clear,n=e.getSum;return o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenu2"},o.a.createElement("button",{className:"dropdown-item",type:"button",onClick:n},"SUM"),o.a.createElement("button",{className:"dropdown-item",type:"button",onClick:t},"Clear"),o.a.createElement("button",{className:"dropdown-item",type:"button"},"UP"))}function p(e){var t=o.a.useState(""),n=Object(l.a)(t,2),a=n[0],r=n[1],c=o.a.useState(0),u=Object(l.a)(c,2),i=u[0],m=u[1];return o.a.createElement("form",{className:"form row justify-content-around sticky-top",onSubmit:function(t){t.preventDefault(),e.createItem(a,i)}},o.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},className:"form-control col-7 col-md-5",placeholder:"Product",required:!0}),o.a.createElement("input",{type:"number",onChange:function(e){return m(e.target.value)},className:"form-control col-4 col-md-2",placeholder:"Value"}),o.a.createElement("input",{type:"submit",className:"form-control col-7 col-md-2 btn btn-info",value:"Submit"}),o.a.createElement("input",{className:"form-control col-4 col-md-2 btn btn-secondary dropdown-toggle",value:"More",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),o.a.createElement(d,null))}var f=function(){var e=o.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];function r(e){a(e.map((function(t){for(var n=0;n<e.length;n++)t===e[n]&&(t.id=n+1);return t})))}return o.a.createElement(u.Provider,{value:{deleteTodo:function(e){r(n.filter((function(t){return e!==t.id})))},completeTodo:function(e){a(n.map((function(t){return e===t.id&&(t.completed=!t.completed),t}))),r(n)},onChangeValue:function(e,t,o){a(n.map((function(n){return e===n.id&&(n[t]=o),n})))},clear:function(){a([])},getSum:function(){alert(n.reduce((function(e,t){return e+ +t.value}),0))}}},o.a.createElement("nav",{className:"navbar navbar-dark bg-warning"},o.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"REACT TO-DO")),o.a.createElement("div",{className:"container todo"},o.a.createElement(p,{createItem:function(e,t){a(n.concat([{text:e,value:t,completed:!1,id:n.length+1}]))}}),o.a.createElement(s,{todos:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.452870be.chunk.js.map