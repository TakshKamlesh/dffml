(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{392:function(e,a,t){e.exports=t(488)},488:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),i=t.n(o),l=t(526),c=t(525),s=t(30),m=t.n(s),d=t(48),u=t(141),p=t(342),f=t(182),h=t(5),g=t(339),b=t(382),E=t(3),v=t(140),y=t(520),k=t(66),w=t(492),x=t(493),S=t(519),j=t(307),O=t(343),N=t.n(O),I=t(344),C=t.n(I),B=t(355),D=t.n(B),z=t(354),M=t.n(z),T=t(356),P=t.n(T),R=t(352),U=t.n(R),W=t(350),F=t.n(W),L=t(353),H=t.n(L),A=t(345),q=t.n(A),J=t(351),V=t.n(J),_=t(347),G=t.n(_),K=t(348),Q=t.n(K),X=t(346),Y=t.n(X),Z=t(349),$=t.n(Z),ee=[{id:"Sources",children:[{id:"Upload",icon:r.a.createElement(N.a,null),active:!0},{id:"Configure",icon:r.a.createElement(C.a,null)},{id:"Explore",icon:r.a.createElement(q.a,null)}]},{id:"Models",children:[{id:"Configure",icon:r.a.createElement(Y.a,null)},{id:"Train",icon:r.a.createElement(G.a,null)},{id:"Predict",icon:r.a.createElement(Q.a,null)}]},{id:"Operations",children:[{id:"View",icon:r.a.createElement($.a,null)},{id:"Create",icon:r.a.createElement(F.a,null)},{id:"Run",icon:r.a.createElement(V.a,null)}]},{id:"Dataflows",children:[{id:"View",icon:r.a.createElement(U.a,null)},{id:"Create",icon:r.a.createElement(H.a,null)},{id:"Run",icon:r.a.createElement(M.a,null)},{id:"Deploy",icon:r.a.createElement(D.a,null)}]},{id:"Settings",children:[{id:"Backend",icon:r.a.createElement(P.a,null)}]}];var ae=Object(h.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(b.a)(e,["classes"]);return r.a.createElement(k.a,Object.assign({variant:"permanent"},t),r.a.createElement(w.a,{disablePadding:!0},r.a.createElement(x.a,{className:Object(E.a)(a.firebase,a.item,a.itemCategory)},"DFFML"),ee.map((function(e){var t=e.id,n=e.children;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(x.a,{className:a.categoryHeader},r.a.createElement(j.a,{classes:{primary:a.categoryHeaderPrimary}},t)),n.map((function(e){var n=e.id,o=e.icon,i=e.active;return r.a.createElement(v.b,{key:n,style:{textDecoration:"none"},to:"/"+t.toLowerCase()+"/"+n.toLowerCase()},r.a.createElement(x.a,{button:!0,className:Object(E.a)(a.item,i&&a.itemActiveItem)},r.a.createElement(S.a,{className:a.itemIcon},o),r.a.createElement(j.a,{classes:{primary:a.itemPrimary}},n)))})),r.a.createElement(y.a,{className:a.divider}))}))))})),te=t(521),ne=t(308),re=t(81),oe=t(107),ie=t(259),le=t(193),ce=t(309),se=t(310),me=t(194),de=t(244),ue=t.n(de),pe=t(195),fe=t.n(pe);Object(h.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return r.a.createElement(oe.a,{className:a.paper},r.a.createElement(te.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(ne.a,null,r.a.createElement(ie.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(ie.a,{item:!0},r.a.createElement(ue.a,{className:a.block,color:"inherit"})),r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Search by email address, phone number, or user UID",InputProps:{disableUnderline:!0,className:a.searchInput}})),r.a.createElement(ie.a,{item:!0},r.a.createElement(le.a,{variant:"contained",color:"primary",className:a.addUser},"Add user"),r.a.createElement(se.a,{title:"Reload"},r.a.createElement(me.a,null,r.a.createElement(fe.a,{className:a.block,color:"inherit"}))))))),r.a.createElement("div",{className:a.contentWrapper},r.a.createElement(re.a,{color:"textSecondary",align:"center"},"No users for this project yet")))}));var he=t(360),ge=t.n(he),be=t(98),Ee={"/sources/upload":{title:"Files and Uploads",help:"https://intel.github.io/dffml/webui/help/for/sources"},"/sources/configure":{title:"Configure Data Sources",help:"https://intel.github.io/dffml/webui/help/for/sources"},"/sources/explore":{title:"Explore Data Sources",help:"https://intel.github.io/dffml/webui/help/for/sources"}};var ve=Object(h.a)((function(e){return{secondaryBar:{zIndex:0},toolbar:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"}}}))((function(e){var a=e.classes,t=(e.onDrawerToggle,Object(be.g)());return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0},r.a.createElement(ne.a,{className:a.toolbar},r.a.createElement(ie.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(re.a,{color:"inherit",variant:"h5",component:"h1"},Ee[t.path].title)),r.a.createElement(ie.a,{item:!0},r.a.createElement(se.a,{title:"Help"},r.a.createElement(me.a,{color:"inherit"},r.a.createElement(ge.a,null))))))))})),ye=t(501),ke=t(504),we=t(503),xe=t(522),Se=t(502),je=t(380),Oe={routes:function(){this.namespace="/api",this.get("/service/files",(function(){return[{filename:"file.csv",size:3271},{filename:"there.csv",size:2310},{filename:"down1/other.csv",size:7157},{filename:"down1/down2/another.csv",size:56190},{filename:"down1/down2/also.csv",size:4654},{filename:"down1/down3/here.csv",size:12716}]}))}};function Ne(){Oe=new je.a(Oe)}function Ie(e){var a=r.a.useState(null===localStorage.getItem("backend")),t=Object(d.a)(a,2),n=t[0],o=t[1],i="",l=function(){o(!1)};return r.a.createElement(ye.a,{open:n,onClose:l,"aria-labelledby":"form-dialog-title"},r.a.createElement(Se.a,{id:"form-dialog-title"},"Set Backend"),r.a.createElement(we.a,null,r.a.createElement(xe.a,null,"The web interface requires a backend server to be fully operational. Instructions on how to start the server can be found ",r.a.createElement("a",{href:"https://intel.github.io/dffml/plugins/service/http/index.html"},"here"),'. If you only want to play around and get a feel for things, click "Demo Mode" instead of "Save".'),r.a.createElement(ce.a,{autoFocus:!0,margin:"dense",id:"backend_url",label:"URL Of Backend",type:"url",onChange:function(e){return i=e.target.value},fullWidth:!0})),r.a.createElement(ke.a,null,r.a.createElement(le.a,{onClick:l,color:"primary"},"Demo Mode"),r.a.createElement(le.a,{onClick:function(){e.saveBackend(i),console.log("Using fake server",Ne()),o(!1)},color:"primary"},"Save")))}var Ce=t(369),Be=t(370),De=t(381),ze=t(371),Me=t(383),Te=t(372),Pe=t.n(Te),Re=t(377),Ue=t(379);function We(e){var a=r.a.useState([]),t=Object(d.a)(a,2),n=t[0],o=t[1],i=Object(Ue.a)(e.backend.url+"/service/files",fetch),l=i.data,c={};return i.error?(l=[],c.body={emptyDataSourceMessage:"Error loading files"}):l?function(e,a){var t,n,r,o,i,l;m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e.bodyUsed){c.next=2;break}return c.abrupt("return");case 2:return c.next=4,m.a.awrap(e.json());case 4:for(r in t=c.sent,n={},t)t[r].id=Number(r),(o=t[r].filename.split("/")).pop(),n[o.join("/")+"/"]=!0;for(n.hasOwnProperty("/")&&delete n["/"],r=0;r<Object.keys(n).length;r++)n[Object.keys(n)[r]]=t.length+r;for(r in n)(o=r.split("/")).pop(),i={id:n[r],filename:o[o.length-1]+"/"},o.pop(),l=o.join("/")+"/",n.hasOwnProperty(l)&&(i.parentId=n[l]),t.push(i);c.t0=m.a.keys(t);case 11:if((c.t1=c.t0()).done){c.next=22;break}if(r=c.t1.value,!t[r].filename.endsWith("/")){c.next=15;break}return c.abrupt("continue",11);case 15:o=t[r].filename.split("/"),t[r].filename=o[o.length-1],o.pop(),l=o.join("/")+"/",n.hasOwnProperty(l)&&(t[r].parentId=n[l]),c.next=11;break;case 22:console.log(t),a(t);case 24:case"end":return c.stop()}}))}(l,o):(l=[],c.body={emptyDataSourceMessage:"No files"}),r.a.createElement(Pe.a,{title:"Files",localization:c,data:n,columns:[{title:"Filename",field:"filename",removable:!1},{title:"Size (MB)",field:"size",type:"numeric"}],parentChildData:function(e,a){return a.find((function(a){return a.id===e.parentId}))},options:{selection:!0}})}var Fe=function(e){function a(e){var t;return Object(Ce.a)(this,a),(t=Object(De.a)(this,Object(ze.a)(a).call(this,e))).state={files:[]},t}return Object(Me.a)(a,e),Object(Be.a)(a,[{key:"handleChange",value:function(e){this.setState({files:e})}},{key:"render",value:function(){return r.a.createElement(Re.a,{dropzoneText:"Drag and drop a file here or click",showFileNames:!0,acceptedFiles:[],onChange:this.handleChange.bind(this)})}}]),a}(r.a.Component);var Le=Object(h.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes,t=e.backend;return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{className:a.paper},r.a.createElement(Fe,null),r.a.createElement(te.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(ne.a,null,r.a.createElement(ie.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(ie.a,{item:!0,xs:!0},r.a.createElement(ce.a,{fullWidth:!0,placeholder:"Path to place file at",InputProps:{disableUnderline:!0,className:a.searchInput}})),r.a.createElement(ie.a,{item:!0},r.a.createElement(le.a,{disabled:!0,variant:"contained",color:"primary",className:a.addUser},"Upload File"),r.a.createElement(se.a,{title:"Reload"},r.a.createElement(me.a,null,r.a.createElement(fe.a,{className:a.block,color:"inherit"})))))))),r.a.createElement("br",null),r.a.createElement(oe.a,{className:a.paper},r.a.createElement(We,{backend:t})))})),He=Object(f.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});He=Object(p.a)({},He,{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:He.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:He.palette.common.white}},MuiTab:{root:Object(u.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},He.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:He.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:He.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Ae={root:{display:"flex",minHeight:"100vh"},drawer:Object(u.a)({},He.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:He.spacing(6,4),background:"#eaeff1"},footer:{padding:He.spacing(2),background:"#eaeff1"}},qe=localStorage.getItem("backend.url");null===qe&&(qe="/api");var Je={url:qe};var Ve=Object(h.a)(Ae)((function(e){var a=e.classes,t=r.a.useState(!1),n=Object(d.a)(t,2),o=n[0],i=n[1],s=r.a.useState(Je),u=Object(d.a)(s,2),p=u[0],f=u[1];console.log(p);var h=function(){i(!o)};return r.a.createElement(c.a,{theme:He},r.a.createElement(v.a,null,r.a.createElement("div",{className:a.root},r.a.createElement(l.a,null),r.a.createElement(Ie,{backend:p,saveBackend:function(e){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:localStorage.setItem("backend.url",e),console.log(e),f({api:e});case 3:case"end":return a.stop()}}))}}),r.a.createElement("nav",{className:a.drawer},r.a.createElement(g.a,{smUp:!0,implementation:"js"},r.a.createElement(ae,{PaperProps:{style:{width:256}},variant:"temporary",open:o,onClose:h})),r.a.createElement(g.a,{xsDown:!0,implementation:"css"},r.a.createElement(ae,{PaperProps:{style:{width:256}}}))),r.a.createElement("div",{className:a.app},r.a.createElement(be.d,null,"// Begin the views",r.a.createElement(be.b,{path:"/sources/upload"},r.a.createElement(ve,{onDrawerToggle:h}),r.a.createElement("main",{className:a.main},r.a.createElement(Le,{backend:p}))),"// When URL path is / redirect to the default route",r.a.createElement(be.b,{path:"/",render:function(e){var a=e.location;return r.a.createElement(be.a,{to:{pathname:"/sources/upload",state:{from:a}}})}})),r.a.createElement("footer",{className:a.footer})))))})),_e=t(119),Ge=Object(f.a)({"@global":{div:{"-ms-overflow-style":"none","scrollbar-width":"none"},"*::-webkit-scrollbar":{display:"none"}},palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:_e.a.A400},background:{default:"#fff"}}});console.log("Using fake server",Ne()),i.a.render(r.a.createElement(c.a,{theme:Ge},r.a.createElement(l.a,null),r.a.createElement(Ve,null)),document.querySelector("#root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.ad822fd5.chunk.js.map