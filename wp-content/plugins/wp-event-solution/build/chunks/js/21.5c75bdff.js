"use strict";(globalThis.webpackChunkwp_event_solution=globalThis.webpackChunkwp_event_solution||[]).push([[21],{3949:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(51609),i=n(27723),l=n(67313),r=n(77424),o=n(38814);const{Title:s}=l.A,c=function(e){return(0,a.createElement)("div",{className:"etn-extensions-container"},(0,a.createElement)(o.nA,null,(0,a.createElement)(s,{level:3,className:"etn-extension-title"},(0,i.__)("Plugins List","eventin")),(0,a.createElement)(r.A,null)))}},19575:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(52619),i=n(27723),l=n(64282);const r=async(e,t)=>{try{const n=await l.A.extensions.updateExtension({name:e,status:t});return(0,a.doAction)("eventin_notification",{type:"success",message:n?.message}),!0}catch(e){return(0,a.doAction)("eventin_notification",{type:"error",message:e?.message||(0,i.__)("Update failed! Please check the plugin list and try again.","eventin")}),!1}}},24462:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(51609),i=n(56427),l=n(92911),r=n(18062),o=n(27154);function s(e){const{title:t}=e;return(0,a.createElement)(i.Fill,{name:o.PRIMARY_HEADER_NAME},(0,a.createElement)(l.A,{justify:"space-between",align:"center",wrap:"wrap",gap:20},(0,a.createElement)(r.A,{title:t})))}},34264:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(51609),i=n(6836);const l=({height:e=22,width:t=22})=>(0,i.iconCreator)(()=>(({height:e,width:t})=>(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M6.25 4.121h7.083c.69 0 1.25.56 1.25 1.25v1.25M12.5 10.788h-5M10 14.121H7.5"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",d:"M15.414 1.667H5.256c-.414 0-.837.06-1.172.306-1.062.78-1.88 2.517-.228 4.086.464.44 1.112.6 1.75.6h9.63c.662 0 1.847.095 1.847 2.114v6.211a3.34 3.34 0 0 1-3.33 3.35H6.226c-1.836 0-3.172-1.298-3.277-3.274L2.922 4.304"})))({height:e,width:t}))},38814:(e,t,n)=>{n.d(t,{ff:()=>r,nA:()=>o,vi:()=>s});var a=n(27154),i=n(69815),l=n(77278);const r=i.default.div`
	background-color: #f4f6fa;
	padding: 12px 32px;
	min-height: 100vh;

	.addons-area-heading {
		width: 50%;
		margin-bottom: 30px;
		@media ( max-width: 768px ) {
			width: 100%;
		}
	}
`,o=i.default.div`
	background: #fff;
	border-radius: 8px;
	margin-bottom: 30px;
	padding: 30px;
	@media ( max-width: 768px ) {
		padding: 20px;
	}
	.etn-extension-title {
		font-size: 24px;
		margin: 25px 0;
		padding: 14px 0;
		display: inline-block;
		border-bottom: 2px solid #d9d9d9;
		margin-top: 0;
	}
	.ant-tabs-tab {
		font-size: 18px;
		font-weight: 600;
		padding: 16px 30px;
	}
	.ant-tabs-top > .ant-tabs-nav::before {
		border-bottom: 2px solid #d9d9d9;
	}
`,s=(0,i.default)(l.A)`
	border-radius: 8px;
	margin: 0;
	min-height: 340px;
	overflow: hidden;
	position: relative;
	.etn-module-card-header {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		@media ( max-width: 768px ) {
			flex-wrap: wrap;
		}
	}
	.etn-card-desc {
		font-size: 14px;
		color: #838790;
		.etn-doc-link {
			color: ${a.PRIMARY_COLOR};
			margin-top: 20px;
			a {
				display: flex;
				gap: 8px;
				font-size: 16px !important;
				font-weight: 600 !important;
				text-decoration: none !important;
			}
		}
	}
	.etn-link-button {
		color: ${a.PRIMARY_COLOR};
		font-size: 15px;
		font-weight: 600;
		margin-top: 10px;
		text-decoration: underline;
		&:hover {
			text-decoration: underline;
			color: ${a.PRIMARY_COLOR};
		}
	}
	@media ( max-width: 768px ) {
		.ant-card .ant-card-body {
			padding: 40px 10px;
		}
	}
	.ant-switch .ant-switch-loading-icon.anticon {
		position: relative;
		top: -2px;
		color: rgba( 0, 0, 0, 0.65 );
		vertical-align: top;
	}
`;i.default.span`
	font-size: 24px;
	margin-right: 10px;
`,i.default.div`
    position: absolute;
    height: 85px;
    width: 60px;
    transform: rotate(-45deg);
    top: -38px;
    right: -22px;
    background-color: #faad14;
    color: #fff;
    padding: 5px 16px;
	.anticon {
		position: absolute;
		top: 38px;
		left: 7px;
		transform: rotate(45deg);
	}
}
`},56621:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(51609),i=n(86087),l=n(27723),r=n(34264),o=n(75093),s=n(7638),c=n(92911),d=n(67313),p=n(38814),g=n(19575);const{Title:m,Text:u,Link:x}=d.A,v=({name:e,title:t,description:n,status:d,notice:x,icon:v,settings_link:h,demo_link:f,doc_link:E,is_pro:A,upgrade_link:w,upgrade:_,deps:b,invalidatePluginList:k})=>{const[y,L]=(0,i.useState)(!1),P=async t=>{L(!0),await(0,g.A)(e,t),k(),L(!1)},R={fontSize:"16px",padding:"6px 14px",marginTop:"20px"};return(0,a.createElement)(p.vi,null,(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"etn-module-card-header"},v&&(0,a.createElement)("img",{src:v,alt:t,style:{width:"50px",height:"50px"}})),(0,a.createElement)("div",null,(0,a.createElement)(m,{level:4,style:{margin:"10px 0",fontSize:"20px"}},t),(0,a.createElement)("div",{className:"etn-card-desc"},(0,a.createElement)("div",{style:{marginBottom:"20px"}},(0,a.createElement)(u,null,n)," ",(0,a.createElement)("br",null),x&&(0,a.createElement)(u,{style:{display:"flex",color:"#ff7129",marginTop:"10px"}},x),(0,a.createElement)("div",{className:"etn-doc-link"},(0,a.createElement)(o.LinkText,{href:E,target:"_blank"},(0,a.createElement)(r.A,null)," ",(0,l.__)("Documentation","eventin")))),"on"==d&&(0,a.createElement)(s.Ay,{variant:s.zB,onClick:()=>{P("install")},target:"_blank",sx:R,loading:y},(0,l.__)("Install","eventin")),"install"==d&&(0,a.createElement)(s.Ay,{variant:s.zB,onClick:()=>{P("activate")},target:"_blank",sx:R,loading:y},(0,l.__)("Activate","eventin")),"upgrade"==d&&_&&(0,a.createElement)(s.Ay,{variant:s.zB,href:w,target:"_blank",sx:R,loading:y},(0,l.__)("Download","eventin")),"activate"==d&&(0,a.createElement)(c.A,{gap:20,wrap:"wrap"},(0,a.createElement)(s.Ay,{variant:s.Vt,onClick:()=>{P("deactivate")},target:"_blank",sx:R,loading:y},(0,l.__)("Deactivate","eventin")),h&&(0,a.createElement)(s.Ay,{variant:s.Vt,target:"_blank",sx:R,href:h},(0,l.__)("Configure","eventin")))))))}},70228:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(51609),i=n(77278),l=n(16370),r=n(47152),o=n(75063);const s=()=>(0,a.createElement)(r.A,{gutter:[16,16]},[...Array(3)].map((e,t)=>(0,a.createElement)(l.A,{xs:24,sm:12,md:8,key:t},(0,a.createElement)(i.A,{style:{borderRadius:8}},(0,a.createElement)(o.A.Avatar,{active:!0,size:"large",shape:"circle",style:{marginBottom:16,marginRight:16}}),(0,a.createElement)(o.A.Input,{style:{width:200,marginBottom:8},active:!0}),(0,a.createElement)(o.A,{paragraph:{rows:4}}),(0,a.createElement)("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:16}},(0,a.createElement)(o.A.Button,{style:{width:100},active:!0}),(0,a.createElement)(o.A.Button,{style:{width:100},active:!0}))))))},77424:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(51609),i=n(29491),l=n(47143),r=n(86087),o=n(16370),s=n(47152),c=n(56621),d=n(70228);const p=(0,l.withDispatch)(e=>{const t=e("eventin/global");return{invalidatePluginList:()=>t.invalidateResolution("getPluginList")}}),g=(0,l.withSelect)(e=>({pluginsList:e("eventin/global").getPluginList()})),m=(0,i.compose)(g,p)(e=>{const{pluginsList:t,invalidatePluginList:n}=e||{},[i,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{null!=t&&l(!1)},[t]),i?(0,a.createElement)(d.A,null):(0,a.createElement)("div",{className:"etn-module-section"},(0,a.createElement)(s.A,{gutter:[30,30]},t.map(e=>(0,a.createElement)(o.A,{key:e.name,xs:24,sm:12,xl:8},(0,a.createElement)(c.A,{...e,invalidatePluginList:n})))))})},98021:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(51609),i=n(29491),l=n(47143),r=n(27723),o=n(75093),s=n(24462),c=n(3949),d=n(38814);const p=(0,l.withSelect)(e=>{const t=e("eventin/global");return{pluginsList:t.getPluginList(),isPluginsListLoading:t.isResolving("getPluginList")}}),g=(0,i.compose)(p)(function(e){const{pluginsList:t,isPluginsListLoading:n}=e;return(0,a.createElement)(d.ff,{className:"eventin-page-wrapper"},(0,a.createElement)(s.A,{title:(0,r.__)("Our Plugins","eventin")}),(0,a.createElement)(c.A,{pluginsList:t,isPluginsListLoading:n}),(0,a.createElement)(o.FloatingHelpButton,null))})}}]);