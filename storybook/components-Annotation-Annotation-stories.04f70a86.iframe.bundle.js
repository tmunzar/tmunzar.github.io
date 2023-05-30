"use strict";(self.webpackChunkportfolio_2022=self.webpackChunkportfolio_2022||[]).push([[964],{"./src/components/Annotation/Annotation.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PrimaryColor:()=>PrimaryColor,default:()=>Annotation_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),vivus=__webpack_require__("./node_modules/vivus/dist/vivus.js"),vivus_default=__webpack_require__.n(vivus),esm=__webpack_require__("./node_modules/react-animation-on-scroll/dist/esm/index.js"),utils=__webpack_require__("./src/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Annotation_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Annotation/Annotation.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Annotation_module.Z,options);const Annotation_Annotation_module=Annotation_module.Z&&Annotation_module.Z.locals?Annotation_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,_Default$parameters2$,_PrimaryColor$paramet,_PrimaryColor$paramet2,_PrimaryColor$paramet3,__jsx=react.createElement,Annotation_Annotation=function Annotation(props){var speed=props.speed,arrowProps=props.arrowProps,animProps=props.animProps,textRotate=props.textRotate,text=props.text,_props$color=props.color,color=void 0===_props$color?"default":_props$color,style=props.style,className=props.className,_animProps$animDurati=animProps.animDuration,animDuration=void 0===_animProps$animDurati?.4:_animProps$animDurati,_animProps$animDelay=animProps.animDelay,animDelay=void 0===_animProps$animDelay?0:_animProps$animDelay,_animProps$animOffset=animProps.animOffset,animOffset=void 0===_animProps$animOffset?150:_animProps$animOffset,onScroll=animProps.onScroll,_animProps$initiallyV=animProps.initiallyVisible,initiallyVisible=void 0!==_animProps$initiallyV&&_animProps$initiallyV,arrowRef=(0,react.useRef)(null),noScrollRef=(0,react.useRef)(null),_useState=(0,react.useState)(),vivusState=_useState[0],setVivusState=_useState[1];(0,react.useEffect)((function(){var currentRef=arrowRef.current;setVivusState(new(vivus_default())(currentRef,{duration:30,type:"oneByOne",pathTimingFunction:vivus_default().EASE_IN,start:"manual"}))}),[arrowRef,speed,animDelay,onScroll]),(0,react.useEffect)((function(){var _noScrollRef$current;onScroll||null===(_noScrollRef$current=noScrollRef.current)||void 0===_noScrollRef$current||_noScrollRef$current.classList.add("animate__animated","animate__jackInTheBox","animate__delay-0.4s")}));var afterAnimate=function afterAnimate(){return null==vivusState?void 0:vivusState.play()},arrowTransforms=[];null!=arrowProps&&arrowProps.flip&&arrowTransforms.push("scale(-1,1)"),null!=arrowProps&&arrowProps.rotate&&arrowTransforms.push("rotate(".concat(arrowProps.rotate,")")),null!=arrowProps&&arrowProps.translate&&arrowTransforms.push("translate(".concat(arrowProps.translate,")"));var Text=function Text(){return __jsx("div",{className:"annotation-text",style:{transform:"rotate(".concat(textRotate,")")}},text)};return __jsx("div",{id:Annotation_Annotation_module.annotation,style,className:(0,utils.cx)(Annotation_Annotation_module[color],className)},animProps.onScroll?__jsx(esm.n,{animateIn:"animate__jackInTheBox",offset:animOffset,delay:animDelay,initiallyVisible,afterAnimatedIn:afterAnimate,duration:animDuration,animateOnce:!0},__jsx(Text,null)):__jsx("div",{ref:noScrollRef,onAnimationEnd:function onAnimationEnd(){return afterAnimate()},style:{animationDuration:"".concat(animDuration,"s"),animationDelay:"".concat(animDelay/1e3,"s")}},__jsx(Text,null)),__jsx("svg",{ref:arrowRef,width:(null==arrowProps?void 0:arrowProps.size)||50,viewBox:"0 0 229 317",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:arrowTransforms.join(" ")},className:Annotation_Annotation_module.arrow},__jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M27.7529 6.5L28.9525 3.84509C24.7478 13.1069 21.7387 20.1735 19.9253 25.0448C18.1119 29.9161 16.7372 35.1144 14 44.5C12.3534 50.3942 13.0931 50.5 11.08 62.5C10.0271 68.7757 8.1906 82.5 8.00001 92C7.7687 103.53 7.83168 120.689 11.08 132.5C12.9061 139.14 14.4557 143.348 17.9944 152.306C19.8316 156.956 23.6574 164.51 29.472 174.969C36.0116 185.608 41.3945 193.534 45.6205 198.748C49.8465 203.963 56.4871 210.699 65.5421 218.957C75.0034 227.606 83.0533 234.335 89.6917 239.142C96.3301 243.95 106.684 250.464 120.755 258.684C134.265 266.078 144.843 271.501 152.489 274.953C156.796 276.897 162.052 279.532 169.049 282.28C171.328 283.175 174.146 283.824 176.711 284.804C176.925 284.886 184.691 287.747 184.929 287.838C186.518 288.443 187.961 288.9 189.257 289.21",stroke:(null==arrowProps?void 0:arrowProps.color)||"#000000",strokeWidth:(null==arrowProps?void 0:arrowProps.size)||7}),__jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M153.631 197.841C159.317 211.472 164.388 222.414 168.844 230.667C173.301 238.92 180.987 250.733 191.902 266.107L216.58 304.917C203.405 307.086 191.764 308.407 181.655 308.878C171.545 309.35 157.777 308.602 140.349 306.635C128.173 304.644 118.861 302.524 112.411 300.276C105.961 298.027 97.178 293.839 86.0609 287.711",stroke:(null==arrowProps?void 0:arrowProps.color)||"#000000",strokeWidth:(null==arrowProps?void 0:arrowProps.size)||7})))};Annotation_Annotation.displayName="Annotation",Annotation_Annotation.__docgenInfo={description:"",methods:[],displayName:"Annotation",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'white'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'white'"}]},description:""},textRotate:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},arrowProps:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  flip?: boolean\n  rotate?: string\n  size?: number\n  color?: string\n  translate?: string\n  thickness?: number\n}",signature:{properties:[{key:"flip",value:{name:"boolean",required:!1}},{key:"rotate",value:{name:"string",required:!1}},{key:"size",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"translate",value:{name:"string",required:!1}},{key:"thickness",value:{name:"number",required:!1}}]}},description:""},animProps:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  animOffset?: number\n  animDelay?: number\n  animDuration?: number\n  initiallyVisible?: boolean\n  onScroll?: boolean\n}",signature:{properties:[{key:"animOffset",value:{name:"number",required:!1}},{key:"animDelay",value:{name:"number",required:!1}},{key:"animDuration",value:{name:"number",required:!1}},{key:"initiallyVisible",value:{name:"boolean",required:!1}},{key:"onScroll",value:{name:"boolean",required:!1}}]}},description:""}}};try{Annotation_Annotation.displayName="Annotation",Annotation_Annotation.__docgenInfo={description:"",displayName:"Annotation",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"white"'}]}},textRotate:{defaultValue:null,description:"",name:"textRotate",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},arrowProps:{defaultValue:null,description:"",name:"arrowProps",required:!1,type:{name:"{ flip?: boolean; rotate?: string; size?: number | undefined; color?: string | undefined; translate?: string | undefined; thickness?: number | undefined; } | undefined"}},animProps:{defaultValue:null,description:"",name:"animProps",required:!0,type:{name:"{ animOffset?: number | undefined; animDelay?: number | undefined; animDuration?: number | undefined; initiallyVisible?: boolean | undefined; onScroll?: boolean | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Annotation/Annotation.tsx#Annotation"]={docgenInfo:Annotation_Annotation.__docgenInfo,name:"Annotation",path:"src/components/Annotation/Annotation.tsx#Annotation"})}catch(__react_docgen_typescript_loader_error){}try{Annotation.displayName="Annotation",Annotation.__docgenInfo={description:"",displayName:"Annotation",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"white"'}]}},textRotate:{defaultValue:null,description:"",name:"textRotate",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},arrowProps:{defaultValue:null,description:"",name:"arrowProps",required:!1,type:{name:"{ flip?: boolean; rotate?: string; size?: number | undefined; color?: string | undefined; translate?: string | undefined; thickness?: number | undefined; } | undefined"}},animProps:{defaultValue:null,description:"",name:"animProps",required:!0,type:{name:"{ animOffset?: number | undefined; animDelay?: number | undefined; animDuration?: number | undefined; initiallyVisible?: boolean | undefined; onScroll?: boolean | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Annotation/index.tsx#Annotation"]={docgenInfo:Annotation.__docgenInfo,name:"Annotation",path:"src/components/Annotation/index.tsx#Annotation"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Annotation_stories={title:"Annotation",component:Annotation_Annotation,tags:["autodocs"],argTypes:{text:{control:"text"},textRotate:{control:"text"},animProps:{control:"object"},speed:{control:"number"}}};var Default={args:{text:"Hello!",textRotate:"",animProps:{onScroll:!1}}},PrimaryColor={args:{text:"Hello!",textRotate:"",animProps:{onScroll:!1},color:"primary"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    text: 'Hello!',\n    textRotate: '',\n    animProps: {\n      onScroll: false\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),PrimaryColor.parameters=_objectSpread(_objectSpread({},PrimaryColor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrimaryColor$paramet=PrimaryColor.parameters)||void 0===_PrimaryColor$paramet?void 0:_PrimaryColor$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    text: 'Hello!',\n    textRotate: '',\n    animProps: {\n      onScroll: false\n    },\n    color: 'primary'\n  }\n}"},null===(_PrimaryColor$paramet2=PrimaryColor.parameters)||void 0===_PrimaryColor$paramet2||null===(_PrimaryColor$paramet3=_PrimaryColor$paramet2.docs)||void 0===_PrimaryColor$paramet3?void 0:_PrimaryColor$paramet3.source)})})},"./src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cx:()=>cx});var cx=function cx(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.flat().filter((function(x){return null!=x&&"boolean"!=typeof x})).join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Annotation/Annotation.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'#Annotation_annotation__x8RRi{font-family:"Indie Flower",cursive;font-size:24px;position:absolute;color:#000;text-align:left;z-index:1}#Annotation_annotation__x8RRi.Annotation_primary__rNCdo{color:#1d6ab0}#Annotation_annotation__x8RRi.Annotation_primary__rNCdo svg.Annotation_arrow__a9FJ4 path{stroke:#1d6ab0}#Annotation_annotation__x8RRi.Annotation_white__fURrD{color:#fff}#Annotation_annotation__x8RRi.Annotation_white__fURrD svg.Annotation_arrow__a9FJ4 path{stroke:#fff}html.dark #Annotation_annotation__x8RRi{color:#fff}html.dark #Annotation_annotation__x8RRi svg.Annotation_arrow__a9FJ4 path{stroke:#fff}@media(max-width: 769px){#Annotation_annotation__x8RRi{display:none !important}}',"",{version:3,sources:["webpack://./src/components/Annotation/Annotation.module.scss","webpack://./src/styles/theme.scss"],names:[],mappings:"AACA,8BACE,kCCsBoB,CDrBpB,cAAA,CACA,iBAAA,CACA,UCIY,CDHZ,eAAA,CACA,SAAA,CACA,wDACE,aCNiB,CDQf,yFACE,cCTa,CDanB,sDACE,UCPU,CDSR,uFACE,WCVM,CDiBZ,wCACE,UClBU,CDoBR,yEACE,WCrBM,CD2Bd,yBACE,8BACE,uBAAA,CAAA",sourcesContent:['#annotation{font-family:"Indie Flower",cursive;font-size:24px;position:absolute;color:#000;text-align:left;z-index:1}#annotation.primary{color:#1d6ab0}#annotation.primary svg.arrow path{stroke:#1d6ab0}#annotation.white{color:#fff}#annotation.white svg.arrow path{stroke:#fff}html:global(.dark) #annotation{color:#fff}html:global(.dark) #annotation svg.arrow path{stroke:#fff}@media(max-width: 769px){#annotation{display:none !important}}',"@import 'bulma/sass/utilities/_all.sass';\n\n$color-primary: #3c91df;\n$color-primary-dark: #1d6ab0;\n\n$color-secondary: #f6f8ee;\n$color-secondary-dark: #e0e4cc;\n\n$color-grey: #f2f2f2;\n$color-black: #000000;\n$color-white: #ffffff;\n\n$color-light-grey-dark-mode: #0d0d0d;\n\n$color-dm-primary: $color-primary;\n$color-dm-primary-dark: $color-primary-dark;\n\n$color-dm-secondary-light: #322c53;\n$color-dm-secondary: #1f1b33;\n$color-dm-secondary-dark: #090711;\n$color-dm-grey: #3f3f3f;\n\n$body-font-family: 'PT Sans', sans-serif;\n$header-font-family: 'DM Serif Display', serif;\n$cursive-font-family: 'Indie Flower', cursive;\n\n// The container horizontal gap, which acts as the offset for breakpoints\n// $gap: 32px !default;\n// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16\n$tablet: 768px !default;\n// // 960px container + 4rem\n$desktop: 961px + (2 * $gap);\n// // 1152px container + 4rem\n// $widescreen: 1152px + (2 * $gap) !default;\n// $widescreen-enabled: true !default;\n// // 1344px container + 4rem\n// $fullhd: 1344px + (2 * $gap) !default;\n// $fullhd-enabled: true !default;\n\n$modal-content-width: 90%;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={annotation:"Annotation_annotation__x8RRi",primary:"Annotation_primary__rNCdo",arrow:"Annotation_arrow__a9FJ4",white:"Annotation_white__fURrD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);