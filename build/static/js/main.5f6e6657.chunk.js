(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(75),c=n.n(r),l=n(19),i=n(20),s=n(213),d=(n(84),n(86),n(4)),u=n(5),m=n(7),f=n(6),h=n(8),p=n(211),N=n(95),v=n(10),E=n(212),b=n(78),j=n(27);n(90);function O(e){e.tag,e.className,e.childrenm;var t=Object(j.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(b.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}O.defaultProps={tag:"a"};var y=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},g=(n(92),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,n=void 0===t?[]:t,a=e.notes,r=void 0===a?[]:a;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(E.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length}(r,e.id)),e.name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(O,{tag:N.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(v.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(o.a.Component));g.contextType=y,g.defaultProps={folders:[]};n(96);var k=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.context,n=t.notes,a=t.folders,r=this.props.match.params.noteId,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(a,(_(n,r)||{}).folderId);return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(O,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(v.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),c&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},c.name))}}]),t}(o.a.Component);k.defaultProps={history:{goBack:function(){}},match:{params:{}}},k.contextType=y;var P=n(77),A={API_ENDPOINT:"https://radiant-beach-41928.herokuapp.com",TOKEN_KEY:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TOKEN_KEY},F=(n(200),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.id;fetch("".concat(A.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(){n.context.deleteNote(t),n.props.onDeleteNote(t)}).catch(function(e){console.error({error:e})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,a=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(N.a,{to:"/note/".concat(n)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(v.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(P.format)(a,"DD MMM YYYY")))))}}]),t}(o.a.Component));F.defaultProps={onDeleteNote:function(){}},F.contextType=y;n(202);function x(e){return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,e.notes.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(F,{id:e.id,name:e.name,modified:e.modified}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(O,{tag:N.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(v.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}x.defaultProps={notes:[]};n(204);var D=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).deleteNote=function(e){n.props.history.push("/")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e,n=this.props.match.params.noteId,a=_(t,n)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(F,{id:a.id,name:a.name,content:a.content,modified:a.modified,onDeleteNote:this.deleteNote}),o.a.createElement("div",{className:"NotePageMain__content"}))}}]),t}(o.a.Component);D.defaultProps={match:{params:{}}},D.contextType=y;n(206);var w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h2",null,"Error!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.a.Component);function I(e){var t=e.className,n=Object(j.a)(e,["className"]);return o.a.createElement(w,null,o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},n)))}var T=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleAddFolder=function(e){e.preventDefault();var t={name:e.target["new-folder"].value};console.log(t),fetch("".concat(A.API_ENDPOINT,"/folders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addFolder(e),n.props.history.push("/folders/".concat(e.id))})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(I,{onSubmit:this.handleAddFolder},o.a.createElement(w,null,o.a.createElement("label",{htmlFor:"new-folder"},"New Folder"),o.a.createElement("input",{type:"text",id:"new-folder",name:"new-folder",required:!0}),o.a.createElement("button",{type:"submit"},"Add New Folder")))}}]),t}(o.a.Component);T.defaultProps={history:{push:function(){}}},T.contextType=y;var C=T,L=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).addNote=function(e){e.preventDefault();var t={name:e.target["note-name"].value,content:e.target["content-name"].value,folder_id:e.target.folderId.value,modified:new Date};console.log(t),fetch("".concat(A.API_ENDPOINT,"/notes"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addNote(e),n.context.updateFolder(),n.props.history.push("/notes/".concat(e.id))})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(I,{onSubmit:this.addNote},o.a.createElement(w,null,o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{id:"name",type:"text",name:"note-name",required:!0}),o.a.createElement("label",{htmlFor:"content"},"Content"),o.a.createElement("textarea",{id:"content",type:"text",name:"content-name",required:!0}),o.a.createElement("label",{htmlFor:"folder"},"Folder"),o.a.createElement("select",{name:"folderId"},this.context.folders.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})),o.a.createElement("button",{type:"submit"},"Add Note")))}}]),t}(o.a.Component);L.defaultProps={history:{push:function(){}}},L.contextType=y;var M=L,S=(n(208),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},n.updateFolders=function(){fetch("".concat(A.API_ENDPOINT,"/folders")).then(function(e){return e.json()}).then(function(e){n.setState({folders:e})})},n.handleAddedFolder=function(e){var t=n.state.folders;t.push(e),n.setState({folders:t})},n.handleNewNote=function(e){var t=n.state.notes;t.push(e),n.setState({notes:t})},n.setNotes=function(e){n.setState({notes:e})},n.deleteNote=function(e){var t=n.state.notes.filter(function(t){return t.id!==e});n.setNotes(t)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateFolders(),fetch("".concat(A.API_ENDPOINT,"/notes")).then(function(e){return e.json()}).then(function(t){e.setState({notes:t})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folders/:folder_id"].map(function(e){return o.a.createElement(p.a,{exact:!0,key:e,path:e,component:g})}),o.a.createElement(p.a,{path:"/notes/:note_id",component:k}),o.a.createElement(p.a,{path:"/add-folder",component:k}),o.a.createElement(p.a,{path:"/add-note",component:k}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folders/:folder_id"].map(function(e){return o.a.createElement(p.a,{exact:!0,key:e,path:e,component:x})}),o.a.createElement(p.a,{path:"/notes/:note_id",component:D}),o.a.createElement(p.a,{path:"/add-folder",component:C}),o.a.createElement(p.a,{path:"/add-note",component:M}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,addFolder:this.handleAddedFolder,addNote:this.handleNewNote,updateFolder:this.updateFolders,deleteNote:this.deleteNote};return o.a.createElement(y.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(N.a,{to:"/"},"Noteful")," ",o.a.createElement(v.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes())))}}]),t}(a.Component));l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(s.a,null,o.a.createElement(S,null)),document.getElementById("root"))},79:function(e,t,n){e.exports=n(210)},86:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},96:function(e,t,n){}},[[79,2,1]]]);
//# sourceMappingURL=main.5f6e6657.chunk.js.map