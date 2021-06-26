(this["webpackJsonpscrollable-tabs"]=this["webpackJsonpscrollable-tabs"]||[]).push([[0],{12:function(e,t,a){e.exports={Tab:"Tab_Tab__3tPHr",TabName:"Tab_TabName__1TILm",DeleteTab:"Tab_DeleteTab__2GP47"}},14:function(e,t,a){e.exports={ScrollableTabs:"ScrollableTabs_ScrollableTabs__1zkTM",tabMainContent:"ScrollableTabs_tabMainContent__v7ZvT"}},16:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3v-UR"}},22:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),l=a.n(o),c=(a(22),a(17)),r=a(2),b=a(4),d=a(5),i=a(7),h=a(6),u=a(10),p=a(12),j=a.n(p),T=a(1),f=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={showDeleteIcon:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.currentTabId===this.props.tabId?{borderBottom:"2px solid #3486eb",fontWeight:"bold"}:null;return Object(T.jsxs)("div",{className:j.a.Tab,style:t,onClick:function(){e.props.selectedtab(e.props.tabId)},onMouseOver:function(){e.setState({showDeleteIcon:!0})},onMouseLeave:function(){e.setState({showDeleteIcon:!1})},children:["Tab ",this.props.tabId,this.props.showDelete&&this.state.showDeleteIcon?Object(T.jsx)("button",{className:j.a.DeleteTab,onClick:function(t){e.props.deleteTab(t,e.props.tabId)},children:"\xd7"}):null]})}}]),a}(n.Component),I=a(8),O=a.n(I),v=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).tabsRef=Object(n.createRef)(),e.scrollLeftHandler=function(){e.tabsRef.current.scrollBy({left:-120,behavior:"smooth"})},e.scrollRightHandler=function(){e.tabsRef.current.scrollBy({left:120,behavior:"smooth"})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;console.log("[Tabs.js] props",this.props);var t=null,a=null;return this.props.tabs.length>4&&(t=this.props.currentTabId!==this.props.tabs[0].tabId?Object(T.jsx)("span",{className:O.a.Chevron,onClick:this.scrollLeftHandler,children:"\u2039"}):null,a=this.props.currentTabId!==this.props.tabs[this.props.tabs.length-1].tabId?Object(T.jsx)("span",{className:O.a.Chevron,onClick:this.scrollRightHandler,children:"\u203a"}):null),Object(T.jsxs)("div",{className:O.a.Header,children:[t,Object(T.jsx)(u.a,{onDragEnd:this.props.dragDropHandler,children:Object(T.jsx)(u.c,{droppableId:"droppableId-1",direction:"horizontal",children:function(t){return Object(T.jsx)("div",Object(r.a)(Object(r.a)({},t.droppableProps),{},{ref:t.innerRef,children:Object(T.jsxs)("div",{className:O.a.Tabs,ref:e.tabsRef,children:[e.props.tabs.map((function(t,a){return Object(T.jsx)(u.b,{draggableId:t.tabId.toString(),index:a,children:function(a){return Object(T.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({},a.draggableProps),a.dragHandleProps),{},{ref:a.innerRef,children:Object(T.jsx)(f,{currentTabId:e.props.currentTabId,tabId:t.tabId,showDelete:e.props.tabs.length>1,selectedtab:e.props.selectedtab,deleteTab:e.props.deleteTab})}))}},t.tabId)})),t.placeholder]})}))}})}),a,Object(T.jsx)("button",{className:O.a.AddTab,disabled:this.props.tabs.length>=10,onClick:this.props.addTab,children:"+"})]})}}]),a}(n.Component),x=a(16),g=a.n(x),m=function(e){return e.show?Object(T.jsx)("div",{className:g.a.Backdrop,onClick:e.clicked}):null},_=a(9),M=a.n(_),S=function(e){return console.log("[Modal.js] props",e),Object(T.jsxs)(s.a.Fragment,{children:[Object(T.jsx)(m,{show:e.show,clicked:function(){return e.closeModal(!1)}}),Object(T.jsxs)("div",{className:M.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(100vh)",opacity:e.show?"1":"0"},children:[Object(T.jsx)("header",{children:"Alert"}),Object(T.jsxs)("section",{children:["Are you sure to delete Tab ",e.tabIdToDelete,"?"]}),Object(T.jsxs)("footer",{children:[Object(T.jsx)("button",{className:M.a.Cancel,onClick:function(){return e.closeModal(!1)},children:"No"}),Object(T.jsx)("button",{className:M.a.Confirm,onClick:function(){return e.closeModal(!0)},children:"Yes"})]})]})]})},w=a(14),C=a.n(w),H=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={tabs:[{tabId:1,content:"Tab 1 content"},{tabId:2,content:"Tab 2 content"},{tabId:3,content:"Tab 3 content"}],selectedTabId:1,maxTabId:3,tabIdToDelete:null,showModal:!1},e.selectTabHandler=function(t){console.log("[ScrollableTabs.js] selected",t),t===e.state.selectedTabId?console.log("[ScrollableTabs.js] selected No change",t):e.setState({selectedTabId:t})},e.addTabHandler=function(){if(e.state.tabs.length<10){var t=Object(r.a)({},e.state).maxTabId;e.setState((function(e){return{tabs:e.tabs.concat({tabId:t+1,content:"Tab ".concat(t+1," content")}),maxTabId:t+1}}))}},e.deleteTabHandler=function(t){console.log("ScrollableTabs.js deleteId",t);var a=e.state.tabs.findIndex((function(e){return e.tabId===t})),n=Object(c.a)(e.state.tabs).filter((function(e){return e.tabId!==t})),s=n[a]?n[a].tabId:n[n.length-1].tabId;console.log("ScrollableTabs.js newSelId",s),e.setState({tabs:n,selectedTabId:t===e.state.selectedTabId?s:e.state.selectedTabId,showModal:!1})},e.openModalHandler=function(t,a){t.stopPropagation(),e.setState({tabIdToDelete:a,showModal:!0})},e.closeModalHandler=function(t){!0===t&&e.deleteTabHandler(e.state.tabIdToDelete),e.setState({tabIdToDelete:null,showModal:!1})},e.dragDropHandler=function(t){console.log("ScrollableTabs.js drag result ",t);var a=Object(r.a)({},t.source),n=Object(r.a)({},t.destination),s=[];if(a.index&&n.index){var o=Object(r.a)({},e.state.tabs[a.index]),l=Object(r.a)({},e.state.tabs[n.index]);s=e.state.tabs.map((function(e,t){return t===a.index?l:t===n.index?o:e})),e.setState({tabs:s})}},e}return Object(d.a)(a,[{key:"render",value:function(){var e,t,a=this;console.log("ScrollableTabs.js tabs",this.context);var n=this.state.tabs.filter((function(e){return e.tabId===a.state.selectedTabId}));return console.log("ScrollableTabs.js mainContent",n),Object(T.jsxs)("div",{className:C.a.ScrollableTabs,children:[Object(T.jsx)(v,{tabs:this.state.tabs,currentTabId:this.state.selectedTabId,selectedtab:this.selectTabHandler,addTab:this.addTabHandler,deleteTab:this.openModalHandler,dragDropHandler:this.dragDropHandler}),Object(T.jsx)("main",{className:C.a.tabMainContent,children:Object(T.jsx)("p",{children:(null===(e=n[0])||void 0===e?void 0:e.content)?null===(t=n[0])||void 0===t?void 0:t.content:"Select a Tab"})}),this.state.showModal?Object(T.jsx)(S,{tabIdToDelete:this.state.tabIdToDelete,show:this.state.showModal,closeModal:this.closeModalHandler}):null]})}}]),a}(n.Component);a(30);var D=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(H,{})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),o(e),l(e)}))};l.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(D,{})}),document.getElementById("root")),k()},8:function(e,t,a){e.exports={Header:"Tabs_Header__31eti",Tabs:"Tabs_Tabs__3GpKZ",AddTab:"Tabs_AddTab__3Hla9",Chevron:"Tabs_Chevron__1ef_g"}},9:function(e,t,a){e.exports={Modal:"Modal_Modal__20ezR"}}},[[31,1,2]]]);
//# sourceMappingURL=main.92772874.chunk.js.map