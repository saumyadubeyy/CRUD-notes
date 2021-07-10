(this["webpackJsonpcrud-notes"]=this["webpackJsonpcrud-notes"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),i=n.n(s),r=(n(23),"ADD_NOTE"),o="DELETE_NOTE",a="UPDATE_NOTE",l="SET_INPUT_TITLE",u="SET_INPUT_CONTENT",j="SET_INPUT_ID",d="RESET_INPUT",b="SET_FORM_DISPLAY",O={setFormDisplay:function(){return{type:b}}},h=n(2),p=(n(27),{setInputTitle:function(e){return{type:l,title:e}},setInputContent:function(e){return{type:u,content:e}},setInputId:function(e){return{type:j,id:e}},resetInput:function(){return{type:d}}}),m={addNote:function(e){return{type:r,note:e}},updateNote:function(e,t){return{type:a,index:e,note:t}},deleteNote:function(e){return{type:o,index:e}}},x=n(0),N=function(){var e=Object(h.c)((function(e){return e.inputs.id})),t=Object(h.c)((function(e){return e.inputs.title})),n=Object(h.c)((function(e){return e.inputs.content})),c=Object(h.b)();return Object(x.jsxs)("div",{className:"form",children:[Object(x.jsx)("h3",{children:-1===e?"NEW NOTE":"UPDATE NOTE"}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",placeholder:"Title",value:t,onChange:function(e){return c(p.setInputTitle(e.target.value))},className:"title"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("textarea",{placeholder:"Description (minimum characters: 150)",value:n,onChange:function(e){return c(p.setInputContent(e.target.value))},minLength:"150",rows:"15",cols:"45",className:"textarea"}),n.length<150?Object(x.jsxs)("p",{className:n.length<150?"error":"noError",children:[150-n.length," characters remaining"]}):Object(x.jsxs)("p",{style:{fontWeight:"bold"},children:["Total: ",n.length," characters"]}),Object(x.jsx)("button",{onClick:-1===e?function(){t&&n.length>150&&(c(m.addNote({title:t,content:n})),c(p.resetInput()),c(O.setFormDisplay()))}:function(){t&&n.length>150&&(c(m.updateNote(e,{title:t,content:n})),c(p.resetInput()),c(O.setFormDisplay()))},className:"btn",children:-1===e?"ADD NOTE":"UPDATE NOTE"})]})]})},f=(n(29),n(18)),v=(n(30),n(6)),E=n.n(v);E.a.setAppElement("#root");var T=function(e){var t=e.id,n=e.title,s=e.content,i=e.onNoteClicked,r=Object(c.useState)(!1),o=Object(f.a)(r,2),a=o[0],l=o[1],u=Object(h.b)();return Object(x.jsxs)("main",{className:"main",children:[Object(x.jsxs)("div",{className:"note",children:[Object(x.jsx)("h2",{style:{textTransform:"capitalize"},children:n}),Object(x.jsxs)("p",{children:[s.substring(0,150),"..."]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){return l(!0)},className:"btnP",children:"View"}),Object(x.jsx)("button",{onClick:i,className:"btnP",children:"Edit"}),Object(x.jsx)("button",{onClick:function(){u(m.deleteNote(t)),u(p.resetInput())},className:"btnP",children:"Delete"})]})]}),Object(x.jsx)(E.a,{isOpen:a,onRequestClose:function(){return l(!1)},shouldCloseOnOverlayClick:!1,className:"viewModalContent animate-modal",overlayClassName:"viewModalOverlay",children:Object(x.jsxs)("div",{className:"viewNote",children:[Object(x.jsx)("h2",{className:"viewTitle",children:n}),Object(x.jsx)("p",{className:"viewContent",children:s}),Object(x.jsx)("button",{onClick:function(){return l(!1)},className:"cross top",children:"X"})]})})]})},y=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.notes.notes}));return 0===t.length?Object(x.jsxs)("div",{className:"noNote",children:["There are no notes yet.",Object(x.jsx)("br",{})," Please create a new one :)"]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{className:"number",children:t.length>1?"".concat(t.length," notes available"):"".concat(t.length," note available")}),Object(x.jsx)("div",{className:"notes",children:t.map((function(t,n){return t?Object(x.jsx)(T,{id:n,title:t.title,content:t.content,onNoteClicked:function(){!function(t,n){e(O.setFormDisplay()),e(p.setInputId(n)),e(p.setInputTitle(t.title)),e(p.setInputContent(t.content))}(t,n)}},n):null}))})]})},g=n.p+"static/media/main.8844c01f.png",C=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.formDisplay})),n=function(){e(O.setFormDisplay()),e(p.resetInput())};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"img",children:Object(x.jsx)("img",{src:g,alt:"",className:"img"})}),Object(x.jsxs)(E.a,{isOpen:t,onRequestClose:n,shouldCloseOnEsc:!1,shouldCloseOnOverlayClick:!1,className:"content animate-modal",overlayClassName:"overlay",children:[Object(x.jsx)("button",{onClick:n,className:"cross top",children:"X"}),Object(x.jsx)(N,{})]}),Object(x.jsx)(y,{}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:n,className:"plus",children:"New Note"})})]})},I=(n(40),function(){return Object(x.jsxs)("nav",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("h4",{children:"Welcome"})}),Object(x.jsx)("div",{className:"nav",children:Object(x.jsx)("h4",{children:"Notes"})})]})}),D=(n(41),function(){return Object(x.jsx)("footer",{children:Object(x.jsx)("div",{className:"footer",children:"Made by Saumya Dubey"})})}),_=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(C,{}),Object(x.jsx)(D,{})]})},w=n(8),k=n(14),P={notes:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var n=Object(k.a)(e.notes);return n.push(t.note),{notes:n};case o:var c=t.index,s=[];return e.notes.forEach((function(e,t){c!==t&&s.push(e)})),{notes:s};case a:var i=t.index,l=t.note,u=Object(k.a)(e.notes);return u[i]=l,{notes:u};default:return e}},U=n(3),A={id:-1,title:"",content:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.title;return Object(U.a)(Object(U.a)({},e),{},{title:n});case u:var c=t.content;return Object(U.a)(Object(U.a)({},e),{},{content:c});case j:var s=t.id;return Object(U.a)(Object(U.a)({},e),{},{id:s});case d:return A;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return!e;default:return e}},R=Object(w.a)({inputs:F,formDisplay:L,notes:S}),X=Object(w.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(42);i.a.render(Object(x.jsx)(h.a,{store:X,children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f6116601.chunk.js.map