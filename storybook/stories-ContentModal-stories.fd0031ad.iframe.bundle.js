"use strict";(self.webpackChunkportfolio_2022=self.webpackChunkportfolio_2022||[]).push([[968],{"./src/stories/ContentModal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ContentModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/Button.tsx"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),__jsx=react.createElement,ContentModal=function ContentModal(props){var children=props.children,buttonText=props.buttonText,_useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function handleOnClose(){return setIsOpen(!1)};return __jsx(react.Fragment,null,__jsx(Button.Z,{className:"column is-4-desktop is-6-tablet is-12-mobile",onClick:function handleOnOpen(){return setIsOpen(!0)}},buttonText),__jsx(CSSTransition.Z,{in:isOpen,timeout:300,unmountOnExit:!0,classNames:"zoomInUp"},__jsx("div",{className:"modal content-modal is-active"},__jsx("div",{className:"modal-background",onClick:handleOnClose}),__jsx("div",{className:"modal-content"},children),__jsx("button",{className:"modal-close is-large","aria-label":"close",onClick:handleOnClose}))))};ContentModal.__docgenInfo={description:"",methods:[],displayName:"ContentModal",props:{buttonText:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const src_ContentModal=ContentModal;try{ContentModal.displayName="ContentModal",ContentModal.__docgenInfo={description:"",displayName:"ContentModal",props:{buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ContentModal.tsx#ContentModal"]={docgenInfo:ContentModal.__docgenInfo,name:"ContentModal",path:"src/ContentModal.tsx#ContentModal"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ContentModal_stories={title:"ContentModal",component:src_ContentModal,tags:["autodocs"],argTypes:{buttonText:{control:"text"},children:{label:"Content",control:"text"}}};var Default={args:{buttonText:"Click Me!",children:"The content"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    buttonText: 'Click Me!',\n    children: 'The content'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Button});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");var react=__webpack_require__("./node_modules/react/index.js"),cx=function cx(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.flat().filter((function(x){return null!=x&&"boolean"!=typeof x})).join(" ")},_excluded=["children","large","className"],__jsx=react.createElement,Button=function Button(props){var children=props.children,large=props.large,className=props.className,restProps=function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,objectWithoutPropertiesLoose.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}(props,_excluded);return __jsx("button",(0,esm_extends.Z)({className:cx("button",className,large&&"is-large")},restProps),children)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{large:{required:!1,tsType:{name:"boolean"},description:""}}};const src_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);