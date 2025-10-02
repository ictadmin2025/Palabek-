"use strict";(globalThis.webpackChunkwp_event_solution=globalThis.webpackChunkwp_event_solution||[]).push([[46],{5985:(e,t,n)=>{n.d(t,{Jj:()=>c,ff:()=>o,nA:()=>r,vi:()=>s});var a=n(27154),i=n(69815),l=n(77278);const o=i.default.div`
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
`,r=i.default.div`
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
`,c=(i.default.span`
	font-size: 24px;
	margin-right: 10px;
`,i.default.div`
	position: absolute;
	height: 85px;
	width: 60px;
	transform: rotate( -45deg );
	top: -38px;
	right: -22px;
	background-color: #faad14;
	color: #fff;
	padding: 5px 16px;
	.anticon {
		position: absolute;
		top: 38px;
		left: 7px;
		transform: rotate( 45deg );
	}
`)},14770:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(51609),i=n(56427),l=n(92911),o=n(18062),r=n(27154);function s(e){const{title:t}=e;return(0,a.createElement)(i.Fill,{name:r.PRIMARY_HEADER_NAME},(0,a.createElement)(l.A,{justify:"space-between",align:"center",wrap:"wrap",gap:20},(0,a.createElement)(o.A,{title:t})))}},15208:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(51609),i=n(29491),l=n(47143),o=n(86087),r=n(16370),s=n(47152),c=n(67313),d=n(64026);const{Title:m,Text:g,Link:p}=c.A,v=(0,l.withDispatch)(e=>{const t=e("eventin/global");return{invalidateExtensions:()=>t.invalidateResolution("getExtensions")}}),u=(0,l.withSelect)(e=>{const t=e("eventin/global");return{extensions:t.getExtensions(),isExtensionsLoading:t.isResolving("getExtensions")}}),x=(0,i.compose)(u,v)(e=>{const{extensions:t,isExtensionsLoading:n,invalidateExtensions:i}=e||{},[l,c]=(0,o.useState)([]);return(0,o.useEffect)(()=>{if(t){const e=Object.values(t).filter(e=>"addon"===e.type);c(e)}},[t]),(0,a.createElement)("div",{className:"etn-module-section"},(0,a.createElement)(s.A,{gutter:[30,30]},l.map(e=>(0,a.createElement)(r.A,{key:e.name,xs:24,sm:12,xl:8},(0,a.createElement)(d.A,{...e,invalidateExtensions:i})))))})},17026:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(51609),i=n(77278),l=n(16370),o=n(47152),r=n(75063);const s=()=>(0,a.createElement)(o.A,{gutter:[16,16]},(0,a.createElement)(l.A,{xs:24,sm:24},(0,a.createElement)(r.A.Input,{active:!0,size:"large",style:{margin:"20px 0"}})),[...Array(6)].map((e,t)=>(0,a.createElement)(l.A,{xs:24,sm:12,md:8,key:t},(0,a.createElement)(i.A,{style:{borderRadius:8}},(0,a.createElement)(r.A.Avatar,{active:!0,size:"large",shape:"circle",style:{marginBottom:16,marginRight:16}}),(0,a.createElement)(r.A.Input,{style:{width:200,marginBottom:8},active:!0}),(0,a.createElement)(r.A.Input,{style:{width:120,marginBottom:8},active:!0}),(0,a.createElement)("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:16}},(0,a.createElement)(r.A.Button,{style:{width:100},active:!0}),(0,a.createElement)(r.A.Button,{style:{width:100},active:!0}))))))},19575:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(52619),i=n(27723),l=n(64282);const o=async(e,t)=>{try{const n=await l.A.extensions.updateExtension({name:e,status:t});return(0,a.doAction)("eventin_notification",{type:"success",message:n?.message}),!0}catch(e){return(0,a.doAction)("eventin_notification",{type:"error",message:e?.message||(0,i.__)("Update failed! Please check the plugin list and try again.","eventin")}),!1}}},25046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(51609),i=n(29491),l=n(47143),o=n(27723),r=n(86087),s=n(67313),c=n(75093),d=(n(17026),n(14770)),m=n(85787),g=n(5985);const{Title:p}=s.A,v=(0,l.withSelect)(e=>{const t=e("eventin/global");return{extensions:t.getExtensions(),isExtensionsLoading:t.isResolving("getExtensions")}}),u=(0,i.compose)(v)(function(e){const{extensions:t,isExtensionsLoading:n}=e,[i,l]=(0,r.useState)("1");return(0,a.createElement)(g.ff,{className:"eventin-page-wrapper"},(0,a.createElement)(d.A,{title:(0,o.__)("Extensions","eventin")}),(0,a.createElement)(m.A,{activeTab:i,setActiveTab:l,extensions:t,isExtensionsLoading:n}),(0,a.createElement)(c.FloatingHelpButton,null))})},34264:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(51609),i=n(6836);const l=({height:e=22,width:t=22})=>(0,i.iconCreator)(()=>(({height:e,width:t})=>(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M6.25 4.121h7.083c.69 0 1.25.56 1.25 1.25v1.25M12.5 10.788h-5M10 14.121H7.5"}),(0,a.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",d:"M15.414 1.667H5.256c-.414 0-.837.06-1.172.306-1.062.78-1.88 2.517-.228 4.086.464.44 1.112.6 1.75.6h9.63c.662 0 1.847.095 1.847 2.114v6.211a3.34 3.34 0 0 1-3.33 3.35H6.226c-1.836 0-3.172-1.298-3.277-3.274L2.922 4.304"})))({height:e,width:t}))},56944:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(51609),i=n(29491),l=n(47143),o=n(86087),r=n(16370),s=n(47152),c=n(70920);const d=(0,l.withDispatch)(e=>{const t=e("eventin/global");return{invalidateExtensions:()=>t.invalidateResolution("getExtensions")}}),m=(0,l.withSelect)(e=>{const t=e("eventin/global");return{extensions:t.getExtensions(),isExtensionsLoading:t.isResolving("getExtensions")}}),g=(0,i.compose)(m,d)(e=>{const{extensions:t,isExtensionsLoading:n,invalidateExtensions:i}=e||{},[l,d]=(0,o.useState)([]);return(0,o.useEffect)(()=>{if(t){const e=Object.values(t).filter(e=>"module"===e.type);d(e)}},[t]),(0,a.createElement)("div",{className:"etn-module-section"},(0,a.createElement)(s.A,{gutter:[30,30]},l.map(e=>(0,a.createElement)(r.A,{key:e.name,xs:24,sm:12,xl:8},(0,a.createElement)(c.A,{...e,invalidateExtensions:i})))))})},57584:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(51609),i=n(6836);const l=({height:e=22,width:t=22})=>(0,i.iconCreator)(()=>(({height:e,width:t})=>(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"none",viewBox:"0 0 14 14"},(0,a.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M6.999 1.895a2.04 2.04 0 0 0-2.042 2.042v.91a57 57 0 0 1 2.042-.035c.72 0 1.39.012 2.041.035v-.91A2.04 2.04 0 0 0 7 1.895M3.79 3.937v1.036a2.51 2.51 0 0 0-1.735 2.059c-.087.641-.16 1.316-.16 2.009s.073 1.368.16 2.01c.158 1.176 1.133 2.106 2.333 2.16.834.04 1.68.06 2.61.06.932 0 1.778-.02 2.611-.06 1.2-.054 2.175-.984 2.334-2.16.086-.642.16-1.317.16-2.01s-.074-1.368-.16-2.01a2.5 2.5 0 0 0-1.736-2.057V3.936a3.208 3.208 0 1 0-6.417 0m6.125 5.098a.583.583 0 1 0-1.166 0v.006a.583.583 0 1 0 1.166 0zM7 8.452c.322 0 .583.261.583.583v.006a.583.583 0 1 1-1.167 0v-.006c0-.322.262-.583.584-.583m-1.75.583a.583.583 0 1 0-1.167 0v.006a.583.583 0 1 0 1.167 0z",clipRule:"evenodd"})))({height:e,width:t}))},64026:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(51609),i=n(86087),l=n(27723),o=n(34264),r=n(57584),s=n(75093),c=n(7638),d=n(92911),m=n(43960),g=n(67313),p=n(5985),v=n(19575);const{Title:u,Text:x,Link:E}=g.A,h=({name:e,title:t,description:n,status:g,icon:E,demo_link:h,is_pro:_,doc_link:A,upgrade_link:f,upgrade:w,notice:b,invalidateExtensions:k})=>{const[y,C]=(0,i.useState)("off"!==g),[z,T]=(0,i.useState)(!1),[R,B]=(0,i.useState)(!1),L=async t=>{T(!0),await(0,v.A)(e,t?"on":"off",C)?(C(t),k()):C(!t),T(!1)},N=async t=>{B(!0),await(0,v.A)(e,t),k(),B(!1)},S=!!window.localized_data_obj.evnetin_pro_active,M={fontSize:"16px",padding:"6px 14px",marginTop:"20px"};return(0,a.createElement)(p.vi,null,!S&&"eventin-divi-addon"!==e&&(0,a.createElement)(p.Jj,null,(0,a.createElement)(r.A,null)),(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"etn-module-card-header"},(0,a.createElement)("div",{dangerouslySetInnerHTML:{__html:E}}),S&&_&&(0,a.createElement)(m.A,{className:"etn-addon-module-switch",loading:z,checked:y,onChange:L}),"eventin-divi-addon"==e&&(0,a.createElement)(m.A,{className:"etn-addon-module-switch",loading:z,checked:y,onChange:L})),(0,a.createElement)("div",null,(0,a.createElement)(u,{level:4,style:{margin:"10px 0",fontSize:"20px"}},t),(0,a.createElement)("div",{className:"etn-card-desc",style:{marginRight:"30px"}},(0,a.createElement)("div",{style:{marginBottom:"20px"}},(0,a.createElement)(x,null,n)," ",(0,a.createElement)("br",null),b&&(0,a.createElement)(x,{style:{display:"flex",color:"#ff7129",marginTop:"10px"}},b),(0,a.createElement)("div",{className:"etn-doc-link"},(0,a.createElement)(s.LinkText,{href:A,target:"_blank"},(0,a.createElement)(o.A,null)," ",(0,l.__)("Documentation","eventin")))),"on"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{N("install")},target:"_blank",sx:M,loading:R},(0,l.__)("Install","eventin")),"install"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{N("activate")},target:"_blank",sx:M,loading:R},(0,l.__)("Activate","eventin")),"upgrade"==g&&w&&(0,a.createElement)(c.Ay,{variant:c.zB,href:f,target:"_blank",sx:M,loading:R},(0,l.__)("Download","eventin")),"activate"==g&&(0,a.createElement)(d.A,{gap:20,wrap:"wrap"},(0,a.createElement)(c.Ay,{variant:c.Vt,onClick:()=>{N("deactivate")},target:"_blank",sx:M,loading:R},(0,l.__)("Deactivate","eventin"))),!S&&"eventin-divi-addon"!==e&&(0,a.createElement)("div",{style:{marginTop:"20px"}},h&&(0,a.createElement)(s.ProButton,null))))))}},70920:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(51609),i=n(86087),l=n(27723),o=n(34264),r=n(57584),s=n(75093),c=n(7638),d=n(92911),m=n(43960),g=n(67313),p=n(5985),v=n(19575);const{Title:u,Text:x,Link:E}=g.A,h=({name:e,title:t,description:n,status:g,notice:E,icon:h,settings_link:_,demo_link:A,doc_link:f,is_pro:w,upgrade_link:b,upgrade:k,deps:y,invalidateExtensions:C})=>{const[z,T]=(0,i.useState)("off"!==g),[R,B]=(0,i.useState)(!1),[L,N]=(0,i.useState)(!1),S=async t=>{B(!0),T(t),await(0,v.A)(e,t?"on":"off")?(T(t),C()):T(!t),B(!1)},M=async t=>{N(!0),await(0,v.A)(e,t),C(),N(!1)},I=!!window.localized_data_obj.evnetin_pro_active,j=(window.localized_data_obj.timetics_pro_active,{fontSize:"16px",padding:"6px 14px",marginTop:"20px"});return(0,a.createElement)(p.vi,null,!I&&w&&(0,a.createElement)(p.Jj,null,(0,a.createElement)(r.A,null)),(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"etn-module-card-header"},(0,a.createElement)("div",{dangerouslySetInnerHTML:{__html:h}}),(0,a.createElement)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"}},w&&I&&(0,a.createElement)(m.A,{className:"etn-addon-module-switch",loading:R,checked:z,onChange:S,disabled:!I&&w}),"seat_map"===e&&(0,a.createElement)(m.A,{className:"etn-addon-module-switch",loading:R,checked:z,onChange:S,disabled:!I&&w}),"automation"===e&&(0,a.createElement)(m.A,{className:"etn-addon-module-switch",loading:R,checked:z,onChange:S,disabled:!I&&w}))),(0,a.createElement)("div",null,(0,a.createElement)(u,{level:4,style:{margin:"10px 0",fontSize:"20px"}},t),(0,a.createElement)("div",{className:"etn-card-desc"},(0,a.createElement)("div",{style:{marginBottom:"20px"}},(0,a.createElement)(x,null,n)," ",(0,a.createElement)("br",null),E&&(0,a.createElement)(x,{style:{display:"flex",color:"#ff7129",marginTop:"10px"}},E),(0,a.createElement)("div",{className:"etn-doc-link"},(0,a.createElement)(s.LinkText,{href:f,target:"_blank"},(0,a.createElement)(o.A,null)," ",(0,l.__)("Documentation","eventin")))),y&&y.length>0&&I&&w&&(0,a.createElement)(a.Fragment,null,"on"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{M("install")},target:"_blank",sx:j,loading:L},(0,l.__)("Install","eventin")),"install"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{M("activate")},target:"_blank",sx:j,loading:L},(0,l.__)("Activate","eventin")),"upgrade"==g&&k&&(0,a.createElement)(c.Ay,{variant:c.zB,href:b,target:"_blank",sx:j,loading:L},(0,l.__)("Download","eventin")),"activate"==g&&(0,a.createElement)(d.A,{gap:20,wrap:"wrap"},(0,a.createElement)(c.Ay,{variant:c.Vt,onClick:()=>{M("deactivate")},target:"_blank",sx:j,loading:L},(0,l.__)("Deactivate","eventin")),_&&(0,a.createElement)(c.Ay,{variant:c.Vt,target:"_blank",sx:j,href:_},(0,l.__)("Configure","eventin")))),!I&&w&&(0,a.createElement)(c.Oc,null),y&&y.length>0&&"seat_map"===e&&(0,a.createElement)(a.Fragment,null,"on"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{M("install")},target:"_blank",sx:j,loading:L},(0,l.__)("Install","eventin")),"install"==g&&(0,a.createElement)(c.Ay,{variant:c.zB,onClick:()=>{M("activate")},target:"_blank",sx:j,loading:L},(0,l.__)("Activate","eventin")),"upgrade"==g&&k&&(0,a.createElement)(c.Ay,{variant:c.zB,href:b,target:"_blank",sx:j,loading:L},(0,l.__)("Download","eventin")),"activate"==g&&(0,a.createElement)(d.A,{gap:20,wrap:"wrap"},(0,a.createElement)(c.Ay,{variant:c.Vt,onClick:()=>{M("deactivate")},target:"_blank",sx:j,loading:L},(0,l.__)("Deactivate","eventin")),_&&(0,a.createElement)(c.Ay,{variant:c.Vt,target:"_blank",sx:j,href:_},(0,l.__)("Configure","eventin"))))))))}},85787:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(51609),i=n(27723),l=n(86087),o=n(80560),r=n(67313),s=n(17026),c=n(15208),d=n(56944),m=n(5985);const{Title:g}=r.A,p=function(e){const{activeTab:t,setActiveTab:n,extensions:r}=e||{},[p,v]=(0,l.useState)(!0);if((0,l.useEffect)(()=>{null!=r&&v(!1)},[r]),p)return(0,a.createElement)(s.A,null);const u=[{key:"1",label:(0,i.__)("All","eventin"),children:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g,{level:3,className:"etn-extension-title"},(0,i.__)("Modules","eventin")),(0,a.createElement)(d.A,null),(0,a.createElement)(g,{level:3,className:"etn-extension-title"},(0,i.__)("Addons","eventin")),(0,a.createElement)(c.A,null))},{key:"2",label:(0,i.__)("Modules","eventin"),children:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g,{level:3,className:"etn-extension-title"},(0,i.__)("Modules","eventin")),(0,a.createElement)(d.A,null))},{key:"3",label:(0,i.__)("Addons","eventin"),children:(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g,{level:3,className:"etn-extension-title"},(0,i.__)("Addons","eventin")),(0,a.createElement)(c.A,null))}];return(0,a.createElement)("div",{className:"etn-extensions-container"},(0,a.createElement)(m.nA,null,(0,a.createElement)(o.A,{defaultActiveKey:t,onTabClick:e=>n(e),items:u})))}}}]);