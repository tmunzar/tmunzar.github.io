"use strict";(self.webpackChunkportfolio_2022=self.webpackChunkportfolio_2022||[]).push([[862],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./src/components/ContentModal/ContentModal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ContentModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ContentModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/ContentModal/ContentModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ContentModal_module.Z,options);const ContentModal_ContentModal_module=ContentModal_module.Z&&ContentModal_module.Z.locals?ContentModal_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,_Default$parameters2$,__jsx=react.createElement,ContentModal_ContentModal=function ContentModal(props){var children=props.children,buttonText=props.buttonText,_useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function handleOnClose(){return setIsOpen(!1)};return __jsx(react.Fragment,null,__jsx(Button.Z,{onClick:function handleOnOpen(){return setIsOpen(!0)}},buttonText),__jsx(CSSTransition.Z,{in:isOpen,timeout:300,unmountOnExit:!0,classNames:"zoomInUp"},__jsx("div",{className:"modal is-active content-modal"},__jsx("div",{className:"modal-background",onClick:handleOnClose}),__jsx("div",{className:"modal-content ".concat(ContentModal_ContentModal_module.content)},children),__jsx("button",{className:"modal-close is-large","aria-label":"close",onClick:handleOnClose}))))};ContentModal_ContentModal.__docgenInfo={description:"",methods:[],displayName:"ContentModal",props:{buttonText:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{ContentModal_ContentModal.displayName="ContentModal",ContentModal_ContentModal.__docgenInfo={description:"",displayName:"ContentModal",props:{buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentModal/ContentModal.tsx#ContentModal"]={docgenInfo:ContentModal_ContentModal.__docgenInfo,name:"ContentModal",path:"src/components/ContentModal/ContentModal.tsx#ContentModal"})}catch(__react_docgen_typescript_loader_error){}try{ContentModal.displayName="ContentModal",ContentModal.__docgenInfo={description:"",displayName:"ContentModal",props:{buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentModal/index.tsx#ContentModal"]={docgenInfo:ContentModal.__docgenInfo,name:"ContentModal",path:"src/components/ContentModal/index.tsx#ContentModal"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ContentModal_stories={title:"ContentModal",component:ContentModal_ContentModal,tags:["autodocs"],argTypes:{buttonText:{control:"text"},children:{label:"Content",control:"text"}}};var Default={args:{buttonText:"Click Me!",children:"The content"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    buttonText: 'Click Me!',\n    children: 'The content'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var _excluded=["children","large","className"],__jsx=react.createElement,Button_Button=function Button(props){var children=props.children,large=props.large,className=props.className,restProps=(0,objectWithoutProperties.Z)(props,_excluded);return __jsx("button",(0,esm_extends.Z)({className:(0,utils.cx)(Button_Button_module.button,className,large&&Button_Button_module.isLarge)},restProps),children)};Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{large:{required:!1,tsType:{name:"boolean"},description:""}}};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cx:()=>cx});var cx=function cx(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.flat().filter((function(x){return null!=x&&"boolean"!=typeof x})).join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Button_button__PjVhE{display:flex;flex-direction:row;padding:5px 15px;background-color:#2178c7;border:none;box-shadow:0px 2px 4px rgba(0,0,0,.25);color:#fff;justify-content:center;font-weight:300;margin:10px 0;position:relative;border-radius:2px;text-decoration:none;font-size:18px;font-family:"PT Sans",sans-serif;cursor:pointer}.Button_button__PjVhE:hover{background-color:#1a5d9b}.Button_button__PjVhE:active{box-shadow:inset 0 0 5px #ccc;top:1px}.Button_button__PjVhE.Button_isLarge__KhgVs{font-size:24px;padding:7px 18px}',"",{version:3,sources:["webpack://./src/components/Button/Button.module.scss","webpack://./src/styles/theme.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,wBAAA,CACA,WAAA,CACA,sCAAA,CACA,UCCY,CAAA,sBAAA,CDCZ,eAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,oBAAA,CACA,cAAA,CACA,gCCKiB,CDJjB,cAAA,CACA,4BACE,wBAAA,CAEF,6BACE,6BAAA,CACA,OAAA,CAEF,4CACE,cAAA,CACA,gBAAA",sourcesContent:['.button{display:flex;flex-direction:row;padding:5px 15px;background-color:#2178c7;border:none;box-shadow:0px 2px 4px rgba(0,0,0,.25);color:#fff;justify-content:center;font-weight:300;margin:10px 0;position:relative;border-radius:2px;text-decoration:none;font-size:18px;font-family:"PT Sans",sans-serif;cursor:pointer}.button:hover{background-color:#1a5d9b}.button:active{box-shadow:inset 0 0 5px #ccc;top:1px}.button.isLarge{font-size:24px;padding:7px 18px}',"@import 'bulma/sass/utilities/_all.sass';\n\n$color-primary: #3c91df;\n$color-primary-dark: #1d6ab0;\n\n$color-secondary: #f6f8ee;\n$color-secondary-dark: #e0e4cc;\n\n$color-grey: #f2f2f2;\n$color-black: #000000;\n$color-white: #ffffff;\n\n$color-light-grey-dark-mode: #0d0d0d;\n\n$color-dm-primary: $color-primary;\n$color-dm-primary-dark: $color-primary-dark;\n\n$color-dm-secondary-light: #322c53;\n$color-dm-secondary: #1f1b33;\n$color-dm-secondary-dark: #090711;\n$color-dm-grey: #3f3f3f;\n\n$body-font-family: 'PT Sans', sans-serif;\n$header-font-family: 'DM Serif Display', serif;\n$cursive-font-family: 'Indie Flower', cursive;\n\n// The container horizontal gap, which acts as the offset for breakpoints\n// $gap: 32px !default;\n// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16\n$tablet: 768px !default;\n// // 960px container + 4rem\n$desktop: 961px + (2 * $gap);\n// // 1152px container + 4rem\n// $widescreen: 1152px + (2 * $gap) !default;\n// $widescreen-enabled: true !default;\n// // 1344px container + 4rem\n// $fullhd: 1344px + (2 * $gap) !default;\n// $fullhd-enabled: true !default;\n\n$modal-content-width: 90%;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"Button_button__PjVhE",isLarge:"Button_isLarge__KhgVs"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/ContentModal/ContentModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ContentModal_content__bvbJq{background-color:#f6f8ee;padding:40px 80px;width:75%}html.dark .ContentModal_content__bvbJq{background-color:#1f1b33}","",{version:3,sources:["webpack://./src/components/ContentModal/ContentModal.module.scss","webpack://./src/styles/theme.scss"],names:[],mappings:"AAEA,6BACE,wBCEgB,CDDhB,iBAAA,CACA,SAAA,CAIA,uCACE,wBCQiB",sourcesContent:[".content{background-color:#f6f8ee;padding:40px 80px;width:75%}html:global(.dark) .content{background-color:#1f1b33}","@import 'bulma/sass/utilities/_all.sass';\n\n$color-primary: #3c91df;\n$color-primary-dark: #1d6ab0;\n\n$color-secondary: #f6f8ee;\n$color-secondary-dark: #e0e4cc;\n\n$color-grey: #f2f2f2;\n$color-black: #000000;\n$color-white: #ffffff;\n\n$color-light-grey-dark-mode: #0d0d0d;\n\n$color-dm-primary: $color-primary;\n$color-dm-primary-dark: $color-primary-dark;\n\n$color-dm-secondary-light: #322c53;\n$color-dm-secondary: #1f1b33;\n$color-dm-secondary-dark: #090711;\n$color-dm-grey: #3f3f3f;\n\n$body-font-family: 'PT Sans', sans-serif;\n$header-font-family: 'DM Serif Display', serif;\n$cursive-font-family: 'Indie Flower', cursive;\n\n// The container horizontal gap, which acts as the offset for breakpoints\n// $gap: 32px !default;\n// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16\n$tablet: 768px !default;\n// // 960px container + 4rem\n$desktop: 961px + (2 * $gap);\n// // 1152px container + 4rem\n// $widescreen: 1152px + (2 * $gap) !default;\n// $widescreen-enabled: true !default;\n// // 1344px container + 4rem\n// $fullhd: 1344px + (2 * $gap) !default;\n// $fullhd-enabled: true !default;\n\n$modal-content-width: 90%;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={content:"ContentModal_content__bvbJq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);