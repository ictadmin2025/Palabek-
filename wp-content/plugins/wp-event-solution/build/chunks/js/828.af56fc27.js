"use strict";(globalThis.webpackChunkwp_event_solution=globalThis.webpackChunkwp_event_solution||[]).push([[828],{5522:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(51609),l=a(29491),i=a(47143),o=a(52619),r=a(27723),s=a(92911),c=a(19549),d=a(86087),p=a(54725),m=a(27154),u=a(64282);const h=(0,i.withDispatch)(e=>{const t=e("eventin/global");return{shouldRefetchTemplateList:e=>{t.setRevalidateTemplateList(e),t.invalidateResolution("getTemplateList")}}}),g=(0,l.compose)(h)(function(e){const{id:t,modalOpen:a,setModalOpen:l,shouldRefetchTemplateList:i}=e,[h,g]=(0,d.useState)(!1);return(0,n.createElement)(c.A,{centered:!0,title:(0,n.createElement)(s.A,{gap:10},(0,n.createElement)(p.DuplicateIcon,null),(0,n.createElement)("span",null,(0,r.__)("Are you sure?","eventin"))),open:a,onOk:async()=>{g(!0);try{await u.A.template.cloneTemplate(t),(0,o.doAction)("eventin_notification",{type:"success",message:(0,r.__)("Successfully cloned the template!","eventin")}),l(!1),i(!0)}catch(e){(0,o.doAction)("eventin_notification",{type:"error",message:(0,r.__)("Failed to clone the template!","eventin")})}finally{g(!1)}},confirmLoading:h,onCancel:()=>l(!1),okText:(0,r.__)("Clone","eventin"),okButtonProps:{type:"default",style:{height:"32px",fontWeight:600,fontSize:"14px",color:m.PRIMARY_COLOR,border:`1px solid ${m.PRIMARY_COLOR}`}},cancelButtonProps:{style:{height:"32px"}},cancelText:(0,r.__)("Cancel","eventin"),width:"344px"},(0,n.createElement)("p",null,(0,r.__)("Are you sure you want to clone this template?","eventin")))})},9892:(e,t,a)=>{a.d(t,{m:()=>n});const n=a(69815).default.div`
	.etn-template-status {
		.ant-select-selector {
			border: 1px solid #d9d9d9;
			background: #ffffff;
			padding-inline-start: 15px;
		}
	}
`},12236:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(51609),l=a(56427),i=(a(27723),a(52741)),o=a(92911),r=a(75093),s=a(27154),c=a(54725);function d(e){const{title:t,buttonText:a,onClickCallback:d}=e,p=!!window.localized_data_obj.evnetin_pro_active;return(0,n.createElement)(l.Fill,{name:s.PRIMARY_HEADER_NAME},(0,n.createElement)(o.A,{justify:"space-between",align:"center",wrap:"wrap",gap:20},(0,n.createElement)(r.LogoWithTitle,{title:t}),(0,n.createElement)("div",{style:{display:"flex",alignItems:"center"}},p&&(0,n.createElement)(r.PrimaryButton,{htmlType:"button",onClick:d,disabled:!p,sx:{display:"flex",alignItems:"center",fontSize:"16px",fontWeight:600,borderRadius:"6px",height:"44px"}},(0,n.createElement)(c.PlusOutlined,null),a),(0,n.createElement)(i.A,{type:"vertical",style:{height:"44px",marginInline:"12px",top:"0"}}))))}},20415:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(51609),l=a(17437),i=a(11721),o=a(29491),r=a(47143),s=a(86087),c=a(52619),d=a(27723),p=a(54725),m=a(7638),u=a(80734),h=a(10962),g=a(64282),v=a(5522);const f=(0,r.withDispatch)(e=>{const t=e("eventin/global");return{setRevalidateData:e=>{t.setRevalidateTemplateList(e),t.invalidateResolution("getTemplateList")}}}),b=(0,o.compose)(f)(function(e){const{setRevalidateData:t,record:a}=e,[o,r]=(0,s.useState)(!1),[f,b]=(0,s.useState)(!1),_=async()=>{try{await g.A.template.deleteTemplate(a.id),t(!0),(0,c.doAction)("eventin_notification",{type:"success",message:(0,d.__)("Successfully deleted the event!","eventin")})}catch(e){(0,c.doAction)("eventin_notification",{type:"error",message:(0,d.__)("Failed to delete the event!","eventin")})}},y=[{label:(0,d.__)("Clone","eventin"),key:"1",icon:(0,n.createElement)(p.CloneOutlined,{width:"16",height:"16"}),className:"copy-event",onClick:()=>b(!0)},{label:(0,d.__)("Delete","eventin"),key:"2",icon:(0,n.createElement)(p.DeleteOutlined,{width:"16",height:"16"}),className:"delete-event",onClick:()=>{(0,u.A)({title:(0,d.__)("Are you sure?","eventin"),content:(0,d.__)("Are you sure you want to delete this template?","eventin"),onOk:_})}}];return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.mL,{styles:h.S}),(0,n.createElement)(i.A,{menu:{items:y},trigger:["click"],placement:"bottomRight",overlayClassName:"action-dropdown"},(0,n.createElement)(m.Ay,{variant:m.Vt},(0,n.createElement)(p.MoreIconOutlined,{width:"16",height:"16"}))),(0,n.createElement)(v.A,{id:a.id,modalOpen:f,setModalOpen:b}))})},25333:(e,t,a)=>{a.d(t,{O:()=>i,f:()=>l});var n=a(69815);const l=n.default.div`
	background-color: #f4f6fa;
	padding: 12px 32px;
	min-height: 100vh;

	.ant-table-wrapper {
		padding: 30px;
		background-color: #fff;
		border-radius: 0 0 12px 12px;
	}

	.event-list-wrapper {
		border-radius: 0 0 12px 12px;
	}

	.ant-table-thead {
		> tr {
			> th {
				background-color: #ffffff;
				padding-top: 10px;
				font-weight: 600;
				color: #7a7a99;
				font-size: 16px;
				&:before {
					display: none;
				}
			}
		}
	}

	tr {
		&:hover {
			background-color: #f8fafc !important;
		}
	}

	.event-title {
		color: #262626;
		font-size: 16px;
		font-weight: 600;
		line-height: 26px;
		display: inline-flex;
		margin-bottom: 6px;
		align-items: center;
	}
	.template-thumbnail {
		img {
			width: 60px;
			height: 50px;
			border-radius: 6px;
			margin-right: 18px;
			object-fit: contain;
		}
	}
	.event-actions {
		.ant-btn {
			padding: 0;
			width: 28px;
			height: 28px;
			line-height: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			border-color: #94a3b8;
			color: #525266;
			background-color: #f5f5f5;
		}
	}

	.etn-category-group {
		display: flex;
		gap: 10px;
		text-transform: capitalize;
	}
`,i=n.default.div`
	padding: 22px 36px;
	background: #fff;
	border-radius: 12px 12px 0 0;
	border-bottom: 1px solid #ddd;

	.ant-form-item {
		margin-bottom: 0;
	}

	.event-filter-by-name {
		height: 36px;
		border: 1px solid #ddd;
		width: initial;
		input.ant-input {
			height: 20px !important;
			border: none !important;
			&:focus {
				border: none !important;
			}
		}
	}
	.ant-input-outlined:hover,
	.ant-input-outlined:focus-within {
		border-color: #d9d9d9 !important;
		background-color: #fff !important;
	}
`},25611:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(51609),l=a(92911),i=a(79888),o=a(36492),r=a(29491),s=a(47143),c=a(27723),d=a(54725),p=a(75093),m=a(6836),u=a(25333),h=a(64282),g=a(57933);const v=(0,s.withDispatch)(e=>{const t=e("eventin/global");return{shouldRefetchTemplateList:e=>{t.setRevalidateTemplateList(e),t.invalidateResolution("getTemplateList")}}}),f=(0,r.compose)(v)(e=>{const{selectedTemplate:t,setSelectedTemplate:a,setParams:r,shouldRefetchTemplateList:s}=e,v=!!t?.length,f=[{label:(0,c.__)("All","eventin"),value:"all"},{label:(0,c.__)("Landing Page","eventin"),value:"event"},{label:(0,c.__)("Certificate","eventin"),value:"certificate"},{label:(0,c.__)("Ticket","eventin"),value:"ticket"}],b=[{label:(0,c.__)("Publish","eventin"),value:"publish"},{label:(0,c.__)("Draft","eventin"),value:"draft"}],_=(0,g.useDebounce)(e=>{r(t=>({...t,search:e.target.value||void 0}))},300);return(0,n.createElement)(u.O,{className:"filter-wrapper"},(0,n.createElement)(l.A,{justify:"space-between",align:"center",gap:16,wrap:"wrap"},(0,n.createElement)(l.A,{justify:"start",align:"center",gap:8},v?(0,n.createElement)(p.BulkDelete,{selectedCount:t?.length,callbackFunction:async()=>{const e=(0,m.generateBulkDeleteQueryString)(t);await h.A.template.deleteTemplate(e),s(!0),a([])},setSelectedRows:a}):(0,n.createElement)(l.A,{gap:8,align:"center",justify:"start",wrap:"wrap"},(0,n.createElement)(o.A,{placeholder:(0,c.__)("Filter By Template Type","eventin"),options:f,size:"default",style:{minWidth:"250px",height:"36px"},onChange:e=>{r(t=>({...t,type:e}))},allowClear:!0,showSearch:!0}),(0,n.createElement)(o.A,{placeholder:(0,c.__)("Filter By Status","eventin"),options:b,size:"default",style:{minWidth:"250px",height:"36px"},onChange:e=>{r(t=>({...t,status:e}))},allowClear:!0,showSearch:!0}))),!v&&(0,n.createElement)(i.A,{className:"event-filter-by-name",placeholder:(0,c.__)("Search by name","eventin"),size:"default",prefix:(0,n.createElement)(d.SearchIconOutlined,null),onChange:_,allowClear:!0})))})},30828:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(51609),l=a(29491),i=a(47143),o=a(52619),r=a(27723),s=a(86087),c=a(47767),d=a(75093),p=a(12236),m=a(57082),u=a(73145);const h=(0,i.withDispatch)(e=>({setShowCreateTemplateModal:e("eventin/global").setShowCreateTemplateModal})),g=(0,l.compose)([h])(e=>{const{setShowCreateTemplateModal:t}=e,a=(0,c.useNavigate)(),l=!!window.localized_data_obj?.evnetin_pro_active,i=(0,o.applyFilters)("eventin-pro-create-template-modal","eventin");return(0,n.createElement)("div",null,(0,n.createElement)(p.A,{title:(0,r.__)("Template Builder","eventin"),buttonText:(0,r.__)("New Template","eventin"),onClickCallback:()=>t(!0)}),l?(0,n.createElement)(s.Fragment,null,(0,n.createElement)(m.A,null),(0,n.createElement)(i,{navigate:a})):(0,n.createElement)(u.A,null),(0,n.createElement)(d.FloatingHelpButton,null))})},32192:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(51609),l=a(75093),i=a(47767);function o(e){const{record:t}=e,a=!!window.localized_data_obj.evnetin_pro_active,o=(0,i.useNavigate)();return(0,n.createElement)(l.TableEditButton,{variant:l.outlined,onClick:()=>{o(`/template-builder/${t?.id}`)},disabled:!a})}},32350:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(51609),l=(a(27723),a(86087)),i=a(67313),o=a(75093),r=a(54725),s=(a(6836),a(58413),a(45338),a(45115));const{Title:c}=i.A;function d(e){const{record:t}=e,[a,i]=(0,l.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.Button,{variant:o.outlined,onClick:()=>{i(!0)}},(0,n.createElement)(r.EyeOutlinedIcon,{width:"16",height:"16"})),(0,n.createElement)(s.A,{showModal:a,setShowModal:i,templateId:t?.id}))}},45338:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(51609),l=a(29491),i=a(47143),o=a(27723),r=a(86087),s=a(52619),c=a(36492),d=a(64282),p=a(9892);const m=(0,i.withDispatch)(e=>{const t=e("eventin/global");return{shouldRefetchTemplateList:e=>{t.setRevalidateTemplateList(e),t.invalidateResolution("getTemplateList")}}}),u=(0,l.compose)(m)(function(e){const{status:t,record:a,shouldRefetchTemplateList:l}=e,[i,m]=(0,r.useState)(!1),{id:u}=a;return(0,n.createElement)(p.m,null,(0,n.createElement)(c.A,{defaultValue:t,onChange:async e=>{const t={...a,status:e};m(!0);try{await d.A.template.updateTemplate(u,t),(0,s.doAction)("eventin_notification",{type:"success",message:(0,o.__)("Successfully updated the template status!","eventin")}),l(!0)}catch(e){console.error("Couldn't update Template!"),console.error(e),(0,s.doAction)("eventin_notification",{type:"error",message:(0,o.__)("Failed to update the template status!","eventin")})}finally{m(!1)}},style:{width:125},loading:i,className:"etn-template-status",popupClassName:"etn-template-status-dropdown",options:[{label:(0,n.createElement)("span",{className:"etn-template-status-label status-label-draft"},(0,o.__)("Draft","eventin")),value:"draft"},{label:(0,n.createElement)("span",{className:"etn-template-status-label status-label-published"},(0,o.__)("Publish","eventin")),value:"publish"}]}))})},54687:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(51609),l=a(27723),i=a(18537),o=a(84976),r=a(90498),s=a(45338),c=a(71524);const d=[{title:(0,l.__)("Template Name","eventin"),dataIndex:"name",key:"name",width:"30%",render:(e,t)=>(0,n.createElement)(o.Link,{to:`/template-builder/${t?.id}`,className:"event-title",style:{display:"flex",alignItems:"center"}},t?.thumbnail&&(0,n.createElement)("span",{className:"template-thumbnail"},(0,n.createElement)("img",{src:t?.thumbnail,alt:t?.name})),"New Template"===e?`${e} - ${t.id}`:(0,i.decodeEntities)(e),t?.is_clone&&(0,n.createElement)(c.A,{color:"blue",style:{padding:"1px 10px",borderRadius:"20px",fontSize:"0.75rem",marginLeft:"10px"}},(0,l.__)("Clone","eventin")))},{title:(0,l.__)("Template Type","eventin"),dataIndex:"type",key:"type",render:(e,t)=>(0,n.createElement)("span",{style:{backgroundColor:"ticket"===e?"#E8F4FF":"event"===e?"#F5EAF4":"#F9F2E5",color:"ticket"===e?"#1890FF":"event"===e?"#92278F":"#FAAD14",padding:"4px 12px",borderRadius:"20px",fontWeight:"600",fontSize:"14px"}},e?.charAt(0).toUpperCase()+e?.slice(1))},{title:"Status",dataIndex:"status",key:"status",render:(e,t)=>(0,n.createElement)(s.A,{status:e,record:t})},{title:(0,l.__)("Action","eventin"),key:"action",width:120,render:(e,t)=>(0,n.createElement)(r.A,{record:t})}]},57082:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(51609),l=a(29491),i=a(47143),o=a(86087),r=a(27723),s=a(16784),c=a(64282),d=a(6836),p=a(25611),m=a(54687),u=a(25333),h=a(75093);const g=(0,i.withDispatch)(e=>{const t=e("eventin/global");return{setShouldRevalidateTemplateList:e=>{t.setRevalidateTemplateList(e),t.invalidateResolution("getTemplateList")}}}),v=(0,i.withSelect)(e=>({shouldRevalidateTemplateList:e("eventin/global").getRevalidateTemplateList()})),f=(0,l.compose)([g,v])(function({setShouldRevalidateTemplateList:e,shouldRevalidateTemplateList:t}){const[a,l]=(0,o.useState)({list:[],totalCount:0,loading:!0}),[i,g]=(0,o.useState)({paged:1,per_page:10,type:void 0,status:void 0,search:void 0}),[v,f]=(0,o.useState)([]),b=(0,o.useRef)(!1),_=(0,o.useRef)(!0),y=async()=>{if(!b.current){b.current=!0,l(e=>({...e,loading:!0}));try{const e=await c.A.template.templateList(i),t=await e.json(),a=e.headers.get("X-Wp-Total");l({list:t,totalCount:a,loading:!1}),(0,d.scrollToTop)()}catch(e){console.error("Error fetching templates:",e),l(e=>({...e,loading:!1}))}finally{b.current=!1}}};(0,o.useEffect)(()=>{_.current&&(y(),_.current=!1)},[]),(0,o.useEffect)(()=>{_.current||y()},[i]),(0,o.useEffect)(()=>{t&&(console.log("revalidateTemplateList"),y(),e(!1))},[t,e]),(0,o.useEffect)(()=>{document.body?.classList?.remove("folded")},[]);const x=(e,t)=>{g(a=>({...a,paged:e,per_page:t}))};return(0,n.createElement)(u.f,{className:"eventin-page-wrapper"},(0,n.createElement)("div",{className:"event-list-wrapper"},(0,n.createElement)(p.A,{selectedTemplate:v,setSelectedTemplate:f,onFilterChange:e=>{g(t=>({...t,paged:1,...e}))}}),(0,n.createElement)(s.A,{className:"eventin-data-table",columns:m.A,dataSource:a.list,loading:a.loading,rowSelection:{selectedRowKeys:v,onChange:e=>{f(e)}},rowKey:e=>e.id,scroll:{x:900},pagination:{current:i.paged,pageSize:i.per_page,total:a.totalCount,showSizeChanger:!0,showLessItems:!0,onChange:x,onShowSizeChange:x,showTotal:(e,t)=>(0,n.createElement)(h.CustomShowTotal,{totalCount:e,range:t,listText:(0,r.__)("templates","eventin")})}})))})},58413:(e,t,a)=>{a(69815).default.div`
	padding: 30px;

	.etn-template-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #dfdfdf;
    gap: 20px;
    flex-wrap: wrap;
	.etn-template-title {
		font-weight: 600;
		font-size: 26px;
		color: #1e293b;
		margin: 18px 0;
	}
  }
  .etn-template-modal-action{
	  display: flex;
	  gap: 10px;
  }
	  .etn-template-image {
	     margin-top: 30px;
   		 text-align: center;
		 display: block;
		img {
			max-width: 80%;
		}
	}
}
`},90498:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(51609),l=(a(27723),a(90070)),i=a(32350),o=a(32192),r=a(20415);function s(e){const{record:t}=e;return(0,n.createElement)(l.A,{size:"small",className:"event-actions"},(0,n.createElement)(i.A,{record:t}),(0,n.createElement)(o.A,{record:t}),(0,n.createElement)(r.A,{record:t}))}}}]);