(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=n(6),i=n(4),l=n(5),u=n(8),d=n(7),p=n(1),h=function(e){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",{className:"app-header__title"},"Super Sticky Notes"),o.a.createElement("aside",{className:"app-header__controls"},o.a.createElement("button",{className:"add-new",onClick:e.addNote},"+ New Note"),o.a.createElement("input",{type:"text",placeholder:"Type here to search...",className:"search",value:e.searchText,onChange:e.onSearch})))},f=function(e){return o.a.createElement("li",{className:"note"},o.a.createElement("input",{type:"text",value:e.note.title,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"title",n)},placeholder:"Title",className:"note__title"}),o.a.createElement("textarea",{value:e.note.description,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"description",n)},placeholder:"Description...",className:"note__description"}),o.a.createElement("span",{onClick:function(){return e.remove(e.note.id)},className:"note__delete"},"X"))},m=function(e){return e.doesMatchSearch},v=function(e){var t=e.notes.filter(m).map(function(t){return o.a.createElement(f,{note:t,key:t.id,onType:e.onType,remove:e.remove})});return o.a.createElement("ul",{className:"notes-list"},t)};function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var N=function(e){Object(u.a)(n,e);var t=y(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={notes:[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}],searchText:""},e.addNote=function(){var t=[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}].concat(Object(s.a)(e.state.notes));e.setState({notes:t})},e.onType=function(t,n,a){var o=e.state.notes.map(function(e){return e.id!==t?e:"title"===n?(e.title=a,e):(e.description=a,e)});e.setState({notes:o})},e.onSearch=function(t){var n=t.target.value.toLowerCase(),a=e.state.notes.map(function(e){if(n){var t=e.title.toLowerCase(),a=e.description.toLowerCase(),o=t.includes(n),r=a.includes(n),c=o||r;return e.doesMatchSearch=c,e}return e.doesMatchSearch=!0,e});e.setState({searchText:n,notes:a})},e.remove=function(t){var n=e.state.notes.filter(function(e){return e.id!==t});e.setState({notes:n})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.notes);localStorage.setItem("savedNotes",e)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("savedNotes");if(e){var t=JSON.parse(e);this.setState({notes:t})}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,{searchText:this.state.searchText,addNote:this.addNote,onSearch:this.onSearch}),o.a.createElement(v,{notes:this.state.notes,onType:this.onType,remove:this.remove}))}}]),n}(a.Component),S=(n(15),document.getElementById("root"));c.a.render(o.a.createElement(N,null),S)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.956dca6c.chunk.js.map