"use strict";(self.webpackChunkuniversal_ui_react=self.webpackChunkuniversal_ui_react||[]).push([[696],{"./lib/config/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ak:()=>ButtonVariant,R5:()=>Margin,Yq:()=>Padding,Z4:()=>FontSize,k3:()=>HoverEffect,r2:()=>BreakPoints,we:()=>ActiveEffect});let BreakPoints=function(BreakPoints){return BreakPoints.xs="@media only screen and (min-width: 0px)",BreakPoints.s="@media only screen and (min-width: 576px)",BreakPoints.m="@media only screen and (min-width: 768px)",BreakPoints.l="@media only screen and (min-width: 992px)",BreakPoints}({});const FontSize={Header:"1.375rem",Title:"1.375rem",Text:"1.25rem",ModalTitle:"1.75rem",ModalText:"1.5rem",TableTitle:"1rem",TableText:"1rem",FormTitle:"1.375rem",FormText:"1rem",FormGroupText:"0.9rem"},Padding={Button:"8px 12px",Container:"8px 12px",Header:"12px 18px",Table:"0.3rem 0.5rem",Input:"4px 6px"},Margin={Container:"0.5rem 0"};let ButtonVariant=function(ButtonVariant){return ButtonVariant.Default="default",ButtonVariant.Info="info",ButtonVariant.Success="success",ButtonVariant.Warning="warning",ButtonVariant.Error="error",ButtonVariant}({}),HoverEffect=function(HoverEffect){return HoverEffect.None="none",HoverEffect.Enlarge="enlarge",HoverEffect.Opaque="opaque",HoverEffect.Solidify="solidify",HoverEffect}({}),ActiveEffect=function(ActiveEffect){return ActiveEffect.None="none",ActiveEffect.Enlarge="enlarge",ActiveEffect.Opaque="opaque",ActiveEffect.Solidify="solidify",ActiveEffect}({})},"./lib/general/Container/Block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/theme/theme.ts"),_config_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/config/constants.ts");const Block=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div((({style,theme})=>({position:"relative",backgroundColor:(theme=(0,_theme_theme__WEBPACK_IMPORTED_MODULE_0__.R_)(theme)).block,color:theme.text,padding:_config_constants__WEBPACK_IMPORTED_MODULE_1__.Yq.Container,margin:_config_constants__WEBPACK_IMPORTED_MODULE_1__.R5.Container,...style}))),__WEBPACK_DEFAULT_EXPORT__=Block;try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Block.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"lib/general/Container/Block.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Container/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({size})=>({width:size||"100%",position:"relative",paddingBottom:size||"100%"}))),CircleContent=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((()=>({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",borderRadius:"50%"}))),Circle=({children,size,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContainer,{size,...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CircleContent,{children})});Circle.displayName="Circle";const __WEBPACK_DEFAULT_EXPORT__=Circle;try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Container/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"lib/general/Container/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./lib/general/Grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Cell,x:()=>Grid});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const Grid=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>({width:"100%",padding:"0.25rem 0.5rem",margin:"0.75rem 0",display:"flex",flexDirection:"row",justifyContent,alignItems,alignContent,flexWrap:"wrap"}))),Cell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div((({s,m,l,justifyContent="flex-start",alignItems="center",alignContent="stretch"})=>{const style={display:"flex",justifyContent,alignItems,alignContent,margin:"0",flexBasis:"auto"};if(void 0!==s&&s<=12&&s>=0){const width=Math.round(s/12*1e4)/100;style.flexBasis=`${width}%`}if(void 0!==m&&m<=12&&m>=0){const width=Math.round(m/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.m]={flexBasis:`${width}%`}}if(void 0!==l&&l<=12&&l>=0){const width=Math.round(l/12*1e4)/100;style[_config_constants__WEBPACK_IMPORTED_MODULE_0__.r2.l]={flexBasis:`${width}%`}}return style}));try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"lib/general/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{s:{defaultValue:null,description:"",name:"s",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"number"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/general/Grid/Grid.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"lib/general/Grid/Grid.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},"./lib/theme/GlobalStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.DU`
	/* Basic DOM */
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
		font-size: ${_config_constants__WEBPACK_IMPORTED_MODULE_0__.Z4.Text};
		color: ${props=>props.theme.text};
		background-color: ${props=>props.theme.background};
	}
	button {
		border: none;
		outline; none;
		cursor:pointer;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	  -khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
								  supported by Chrome, Edge, Opera and Firefox */
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	/* Scroll */
	::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(241,241,241, 0.3);
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: rgba(85, 85, 85, 0.8);
		-webkit-box-shadow: inset 0 0 6px rgba(136, 136, 136, 0.5);
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(85, 85, 85, 0.4);
	}

	.no-select {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	  -khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
								  supported by Chrome, Edge, Opera and Firefox */
	}

`},"./lib/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>getTheme,R_:()=>getDefaultThemeIfNotFound});const Dark={text:"#e3e3e3",background:"#1e1e1e",header:"#1e1e1e",sidebar:"#121212",block:"#171717",info:"#398AD7",success:"#0f9d58",warning:"#d5a439",error:"#d23f31",primary:"#435B66",secondary:"#828282",highlight:"#d5a439",card:{primary:"#02aab0",primary2:"#00cdac",secondary:"#e94057",secondary2:"#f27121",info:"#8e2de2",info2:"#4a00e0"},button:{text:"#fff",background:"#25aea6"},table:{header:"#575041",primary:"#424242",secondary:"#435B66"},form:{group:"#828282"},input:{text:"#000",background:"#e0e0e0",focusBackground:"#435B66",focusText:"#fff",disabledBackground:"transparent",disabledText:"inherit"}},Light={text:"#212121",background:"#fff",header:"#fff",sidebar:"#d2d3db",block:"#e3e3e3",info:"#74CAFF",success:"#82e846",warning:"#f7d54d",error:"#FFA48D",primary:"#9394a5",secondary:"#fefedd",highlight:"#f7d54d",card:{primary:"#8e2de2",primary2:"#4a00e0",secondary:"#e94057",secondary2:"#f27121",info:"#02aab0",info2:"#00cdac"},button:{text:"#fff",background:"#25aea6"},table:{header:"#ac9d81",primary:"#fefedd",secondary:"#42b9f5"},form:{group:"#232323"},input:{text:"#000",background:"#fff"}},getTheme=theme=>"dark"===theme?Dark:Light,getDefaultThemeIfNotFound=theme=>!theme||"object"==typeof theme&&0===Object.keys(theme).length?Light:theme},"./lib/util/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CE:()=>getActiveEffect,Kg:()=>isString,Ts:()=>getNumOfDays,sg:()=>getHoverEffect});var _config_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/config/constants.ts");const isString=s=>"string"==typeof s||s instanceof String,getHoverEffect=(hover,theme,variant=_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default)=>{let effects={};return hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Enlarge?effects={"&:hover":{cursor:"pointer",transform:"scale(1.1)"}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Opaque?effects={opacity:.75,"&:hover":{cursor:"pointer",opacity:1}}:hover===_config_constants__WEBPACK_IMPORTED_MODULE_0__.k3.Solidify&&(effects={transitionDuration:"0.3s",backgroundColor:"inherit",color:"inherit",border:`1px solid ${variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant]}`,"&:hover":{cursor:"pointer",backgroundColor:variant===_config_constants__WEBPACK_IMPORTED_MODULE_0__.Ak.Default?theme.primary:theme[variant],color:theme.button.text}}),effects},getActiveEffect=(active,theme)=>{let effects={};return active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Enlarge?effects={"&.active":{transform:"scale(1.1)"}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Opaque?effects={"&.active":{opacity:1}}:active===_config_constants__WEBPACK_IMPORTED_MODULE_0__.we.Solidify&&(effects={"&.active":{backgroundColor:theme.primary,color:theme.button.text}}),effects},MonthMap=[31,28,31,30,31,30,31,31,30,31,30,31],getNumOfDays=(year,month)=>{if(2===month){return MonthMap[month]+(year%4==0&&year%100!=0||year%400==0?1:0)}return MonthMap[month]}},"./lib/widgets/Calendar/Calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CalendarWithDarkTheme:()=>CalendarWithDarkTheme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Calendar_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),GlobalStyle=__webpack_require__("./lib/theme/GlobalStyle.tsx"),Block=__webpack_require__("./lib/general/Container/Block.tsx"),Grid=__webpack_require__("./lib/general/Grid/Grid.tsx"),Circle=__webpack_require__("./lib/general/Container/Circle.tsx");const CalendarEventTypeColor={Work:"#d23f31",Learning:"#0f9d58",Exercise:"#d5a439",Personal:"#398AD7",Other:"#333"},compareDateOnly=(d1,d2)=>new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()).getTime()-new Date(d2.getFullYear(),d2.getMonth(),d2.getDate()).getTime(),isEventInDate=(event,d)=>{const start=event.from,end=event.to,diff=compareDateOnly(start,d),diff2=end?compareDateOnly(end,d):-1;return 0===diff||0===diff2||diff<0&&diff2>0},getTimeString=d=>d.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),eventComparator=(e1,e2)=>{const fromDiff=e1.from.getTime()-e2.from.getTime();if(0===fromDiff){const toDiff=(e1.to?e1.to.getTime():0)-(e2.to?e2.to.getTime():0);return 0===toDiff?e1.name===e2.name?0:e1.name>e2.name?1:-1:toDiff}return fromDiff},getPrevMonth=m=>m-1<0?11:m-1,getNextMonth=m=>m+1>=12?0:m+1,getPrevYear=(y,m)=>m-1<0?y-1:y,getNextYear=(y,m)=>m+1>=12?y+1:y;var theme_theme=__webpack_require__("./lib/theme/theme.ts"),helper=__webpack_require__("./lib/util/helper.ts"),constants=__webpack_require__("./lib/config/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CalendarTitle=(0,styled_components_browser_esm.Ay)(Grid.x)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",margin:"0 0 0.5rem 0",fontSize:"1.25rem",[constants.r2.m]:{fontSize:"1.25rem"},[constants.r2.l]:{fontSize:"1.75rem"},...style}))),CalendarTitleArrow=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{cursor:"pointer",...style}))),CalendarTitleMonth=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",margin:"0",fontWeight:"bold",...style}))),WeekRow=(0,styled_components_browser_esm.Ay)(Grid.x)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",margin:"0",...style}))),WeekCell=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme,text})=>(theme=(0,theme_theme.R_)(theme),{fontWeight:"bold",fontSize:"1rem","&:before":{content:`'${text.slice(0,1)}'`},[constants.r2.m]:{fontSize:"1.125rem","&:before":{content:`'${text.slice(0,3)}'`}},[constants.r2.l]:{fontSize:"1.5rem","&:before":{content:`'${text}'`}},...style}))),DateRow=(0,styled_components_browser_esm.Ay)(Grid.x)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",margin:"0",...style}))),DateCell=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>({width:"100%",height:"2.625rem",position:"relative",cursor:"default",overflow:"hidden",padding:"0.325rem 0.275rem",boxShadow:`\n\t\t\t1px 0 0 0 ${(theme=(0,theme_theme.R_)(theme)).text},\n\t\t\t0 1px 0 0 ${theme.text},\n\t\t\t1px 1px 0 0 ${theme.text},\n\t\t\t1px 0 0 0 ${theme.text} inset,\n\t\t\t0 1px 0 0 ${theme.text} inset\n\t\t`,[constants.r2.m]:{height:"3rem",padding:"0.375rem 0.5rem"},[constants.r2.l]:{height:"7.5rem"},"&:hover":{cursor:"pointer",backgroundColor:"rgba(127,127,127,.5)"},"&.today":{backgroundColor:theme.table.header},"&.selected":{backgroundColor:theme.primary,"&:hover":{cursor:"default"}},...style}))),DateNumber=styled_components_browser_esm.Ay.span((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{top:"0.2rem",left:"0",position:"absolute",width:"1.2rem",height:"1.2rem",fontSize:"0.8rem",textAlign:"center",[constants.r2.m]:{fontSize:"1rem"},[constants.r2.l]:{width:"2.2rem",height:"2.2rem",fontSize:"2rem"},...style}))),DateDot=styled_components_browser_esm.Ay.div((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{width:"0.625rem",padding:"0.1rem",[constants.r2.m]:{width:"1.25rem"},...style}))),CalendarEventContainer=(0,styled_components_browser_esm.Ay)(Grid.x)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",height:"300px",overflow:"auto",...style}))),CalendarEventRow=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>({padding:"0.5rem 0.5rem",marginTop:"0.5rem",backgroundColor:(theme=(0,theme_theme.R_)(theme)).primary,borderRadius:"6px",boxShadow:"rgba(20, 20, 20, 0.25) 0px 0.2rem 0.3rem, rgba(20, 20, 20, 0.22) 0px 0.125rem 0.125rem",...style}))),CalendarEventTitle=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{padding:"0",margin:"0",maxWidth:"calc(100% - 7.875rem)","& div":{fontSize:"0.9rem",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",overflowWrap:"break-word",[constants.r2.m]:{fontSize:"1.25rem"}},"&:hover":{cursor:"pointer"},[constants.r2.m]:{maxWidth:"calc(100% - 11rem)"},...style}))),CalendarEventType=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{width:"0.875rem",paddingRight:"0.25rem",[constants.r2.m]:{width:"1.25rem"},...style}))),CalendarEventTime=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{position:"absolute",top:0,right:0,maxWidth:"7rem",fontSize:"0.7rem",[constants.r2.m]:{maxWidth:"9.75rem",fontSize:"0.975rem"},...style}))),CalendarEventDetails=(0,styled_components_browser_esm.Ay)(Grid.f)((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{fontSize:"0.875rem",...style}))),CalendarContainer=styled_components_browser_esm.Ay.div((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{width:"100%",overflow:"hidden",...style}))),CalendarMain=styled_components_browser_esm.Ay.div((({style,theme})=>(theme=(0,theme_theme.R_)(theme),{width:"100%",...style}))),Week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Month=["January","February","March","April","May","June","July","August","September","October","November","December"],CalendarMainView=(0,react.forwardRef)((({year,month,date,onSelected,events,type="main"},ref)=>{const numOfDays=(0,helper.Ts)(year,month),firstDay=new Date(year,month,1).getDay(),numOfRows=Array.from({length:Math.ceil((numOfDays+firstDay)/7)},((_,k)=>k));let style={width:"100%",margin:"0",padding:"0"};return"left"!==type&&"right"!==type||(style={...style,position:"absolute",left:"left"===type?"-100%":"100%"}),(0,jsx_runtime.jsx)(Grid.f,{s:12,ref,style,children:(0,jsx_runtime.jsxs)(CalendarMain,{children:[(0,jsx_runtime.jsx)(Grid.f,{children:(0,jsx_runtime.jsx)(WeekRow,{children:Week.map((w=>(0,jsx_runtime.jsx)(WeekCell,{s:12/7-.01,justifyContent:"center",text:w},`vl-calendar-week-${w}`)))})}),numOfRows.map((r=>{const days=[0,1,2,3,4,5,6].map((i=>{const d=7*r+i+1-firstDay;return(0,jsx_runtime.jsxs)(DateCell,{s:12/7-.01,className:`${d===date?"selected":""} ${d===(new Date).getDate()?"today":""}`,justifyContent:"center",onClick:()=>{onSelected&&onSelected(d)},children:[(0,jsx_runtime.jsx)(DateNumber,{children:d>0&&d<=numOfDays&&d}),events.filter((e=>isEventInDate(e,new Date(year,month,d)))).map((e=>e.type||"Other")).filter(((t,i,arr)=>arr.indexOf(t)===i)).map((t=>(0,jsx_runtime.jsx)(DateDot,{children:(0,jsx_runtime.jsx)(Circle.A,{style:{backgroundColor:CalendarEventTypeColor[t],borderRadius:"50%"}})},`vl-calendar-col-${i}-dot-${t}`)))]},`vl-calendar-col-${i}`)}));return(0,jsx_runtime.jsx)(Grid.f,{children:(0,jsx_runtime.jsx)(DateRow,{justifyContent:"center",children:days})},`vl-calendar-row-${r}`)}))]})})})),Calendar=({date=(new Date).getDate(),month=(new Date).getMonth(),year=(new Date).getFullYear(),onSelect,getEvents})=>{const[dateInternal,setDate]=(0,react.useState)(date),[monthInternal,setMonth]=(0,react.useState)(month),[yearInternal,setYear]=(0,react.useState)(year),[events,setEvents]=(0,react.useState)([]),[selectedEvent,setSelectedEvent]=(0,react.useState)(null),numOfDays=(0,helper.Ts)(yearInternal,monthInternal),calendarRef=(0,react.useRef)(null),calendarMonthRef=(0,react.useRef)(null),calendarPrevMonthRef=(0,react.useRef)(null),calendarNextMonthRef=(0,react.useRef)(null),swipeStartRef=(0,react.useRef)(null),swipeEndRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{onSelect&&onSelect(new Date(yearInternal,monthInternal,dateInternal)),setSelectedEvent(null)}),[dateInternal,monthInternal,yearInternal]),(0,react.useEffect)((()=>{getEvents&&setEvents(getEvents(new Date(yearInternal,monthInternal)))}),[monthInternal]);const goToPrevMonth=()=>{const prevMonth=getPrevMonth(monthInternal),prevYear=getPrevYear(yearInternal,monthInternal);setMonth(prevMonth),setYear(prevYear),dateInternal>numOfDays&&setDate(numOfDays)},goToNextMonth=()=>{const nextMonth=getNextMonth(monthInternal),nextYear=getNextYear(yearInternal,monthInternal);setMonth(nextMonth),setYear(nextYear),dateInternal>numOfDays&&setDate(numOfDays)};return(0,jsx_runtime.jsxs)(CalendarContainer,{className:"no-select",onTouchStart:e=>{swipeEndRef.current=null,swipeStartRef.current=e.targetTouches[0].clientX},onTouchMove:e=>{swipeEndRef.current=e.targetTouches[0].clientX;const swipeDist=(swipeEndRef?.current||0)-(swipeStartRef?.current||0);calendarRef.current&&(calendarRef.current.style.transform=`translateX(${swipeDist}px)`),calendarMonthRef.current&&(calendarMonthRef.current.style.transform=`translateX(${swipeDist}px)`),calendarPrevMonthRef.current&&(calendarPrevMonthRef.current.style.transform=`translateX(${swipeDist}px)`),calendarNextMonthRef.current&&(calendarNextMonthRef.current.style.transform=`translateX(${swipeDist}px)`)},onTouchEnd:_=>{if(!swipeStartRef.current||!swipeEndRef.current)return;const distance=swipeStartRef.current-swipeEndRef.current;distance>75?goToNextMonth():distance<-75&&goToPrevMonth(),calendarRef.current&&(calendarRef.current.style.transform="translateX(0px)"),calendarMonthRef.current&&(calendarMonthRef.current.style.transform="translateX(0px)"),calendarPrevMonthRef.current&&(calendarPrevMonthRef.current.style.transform="translateX(0px)"),calendarNextMonthRef.current&&(calendarNextMonthRef.current.style.transform="translateX(0px)")},children:[(0,jsx_runtime.jsx)(Grid.f,{s:12,justifyContent:"center",children:yearInternal}),(0,jsx_runtime.jsx)(Grid.f,{s:12,children:(0,jsx_runtime.jsxs)(CalendarTitle,{justifyContent:"space-between",children:[(0,jsx_runtime.jsx)(CalendarTitleArrow,{onClick:goToPrevMonth,children:"«"}),(0,jsx_runtime.jsx)(CalendarTitleMonth,{ref:calendarMonthRef,justifyContent:"center",children:Month[monthInternal]}),(0,jsx_runtime.jsx)(CalendarTitleArrow,{onClick:goToNextMonth,children:"»"})]})}),(0,jsx_runtime.jsxs)(Grid.f,{s:12,alignItems:"flex-start",style:{overflowInline:"hidden",position:"relative"},children:[(0,jsx_runtime.jsx)(CalendarMainView,{year:getPrevYear(yearInternal,monthInternal),month:getPrevMonth(monthInternal),date:dateInternal,events:getEvents?.(new Date(getPrevYear(yearInternal,monthInternal),getPrevMonth(monthInternal)))||[],type:"left",ref:calendarPrevMonthRef}),(0,jsx_runtime.jsx)(CalendarMainView,{year:yearInternal,month:monthInternal,date:dateInternal,onSelected:d=>setDate(d),events,ref:calendarRef}),(0,jsx_runtime.jsx)(CalendarMainView,{year:getNextYear(yearInternal,monthInternal),month:getNextMonth(monthInternal),date:dateInternal,events:getEvents?.(new Date(getNextYear(yearInternal,monthInternal),getNextMonth(monthInternal)))||[],ref:calendarNextMonthRef,type:"right"})]}),(0,jsx_runtime.jsx)(Grid.f,{s:12,children:(0,jsx_runtime.jsx)(CalendarEventContainer,{alignContent:"flex-start",children:events.filter((e=>isEventInDate(e,new Date(yearInternal,monthInternal,dateInternal)))).sort(eventComparator).map(((e,i)=>{return(0,jsx_runtime.jsx)(CalendarEventRow,{s:12,children:(0,jsx_runtime.jsxs)(Grid.x,{style:{padding:"0",margin:"0",position:"relative"},children:[(0,jsx_runtime.jsx)(CalendarEventType,{children:(0,jsx_runtime.jsx)(Circle.A,{style:{backgroundColor:CalendarEventTypeColor[e.type||"Other"],borderRadius:"50%"}})}),(0,jsx_runtime.jsx)(CalendarEventTitle,{onClick:()=>{setSelectedEvent((prev=>prev===i?null:i))},children:(0,jsx_runtime.jsx)("div",{children:e.name})}),(0,jsx_runtime.jsx)(CalendarEventTime,{children:(f=e.from,t=e.to,t?`${getTimeString(f)} - ${getTimeString(t)}`:"full-day")}),i===selectedEvent&&(0,jsx_runtime.jsx)(CalendarEventDetails,{s:12,children:"test"})]})},`event-${e.name}`);var f,t}))})})]})};Calendar.displayName="Calendar";const Calendar_Calendar=Calendar;try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{date:{defaultValue:{value:"new Date().getDate()"},description:"",name:"date",required:!1,type:{name:"number"}},month:{defaultValue:{value:"new Date().getMonth()"},description:"",name:"month",required:!1,type:{name:"number"}},year:{defaultValue:{value:"new Date().getFullYear()"},description:"",name:"year",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((d: Date) => void)"}},getEvents:{defaultValue:null,description:"",name:"getEvents",required:!1,type:{name:"((d: Date) => CalendarEvent[])"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/widgets/Calendar/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"lib/widgets/Calendar/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}const Calendar_stories={title:"VictorLam/Widgets/Calendar",component:Calendar_Calendar},Events=[{name:"Daily Standup",type:"Work",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1)},{name:"Gym",type:"Exercise",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1)},{name:"Singing",type:"Learning",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())},{name:"Swimming",type:"Exercise",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),15),to:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),17)},{name:"Lunch with Tommy Cheung ABCDEFG HIGJk DSFJlk DK",type:"Personal",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),12),to:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),13)},{name:"Apply for Visa",type:"Personal",from:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),12),to:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),13)}],CalendarWithDarkTheme={args:{getEvents:d=>Events},render:args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("light"),children:[(0,jsx_runtime.jsx)(GlobalStyle.A,{}),(0,jsx_runtime.jsxs)(Block.A,{style:{width:"100%"},children:[(0,jsx_runtime.jsx)("p",{children:"Light Theme"}),(0,jsx_runtime.jsx)(Calendar_Calendar,{...args})]})]}),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,theme_theme.O4)("dark"),children:(0,jsx_runtime.jsxs)(Block.A,{style:{width:"100%"},children:[(0,jsx_runtime.jsx)("p",{children:"Dark Theme"}),(0,jsx_runtime.jsx)(Calendar_Calendar,{...args})]})})]})};CalendarWithDarkTheme.parameters={...CalendarWithDarkTheme.parameters,docs:{...CalendarWithDarkTheme.parameters?.docs,source:{originalSource:'{\n  args: {\n    getEvents: (d: Date) => {\n      return Events;\n    }\n  },\n  render: (args: ComponentProps<typeof Calendar>) => {\n    return <>\n            <ThemeProvider theme={getTheme("light")}>\n                <GlobalStyle />\n                <Block style={{\n          width: "100%"\n        }}>\n                    <p>Light Theme</p>\n                    <Calendar {...args} />\n                </Block>\n            </ThemeProvider>\n            <ThemeProvider theme={getTheme("dark")}>\n                <Block style={{\n          width: "100%"\n        }}>\n                    <p>Dark Theme</p>\n                    <Calendar {...args} />\n                </Block>\n            </ThemeProvider>\n        </>;\n  }\n}',...CalendarWithDarkTheme.parameters?.docs?.source}}};const __namedExportsOrder=["CalendarWithDarkTheme"]}}]);
//# sourceMappingURL=widgets-Calendar-Calendar-stories.7b818488.iframe.bundle.js.map