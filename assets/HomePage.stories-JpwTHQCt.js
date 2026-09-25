import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-gG2D7ax2.js";import"./TesseraCarouselLoader-v-IRCYUy.js";import"./TesseraSquareLoader-An1SDQw-.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-JrHUHWYT.js";import{s as m,H as i}from"./HomePage-a8T1-I_5.js";import"./EditorToolWindow-CuXXiA7-.js";import"./EditorWorkspace-CD6zqi_B.js";import"./StandaloneWorkspaces-DbW039E6.js";import"./ColorReplaceDialog-CBOLUiXk.js";import"./iframe-Ce8sO1K-.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-ChUJKnVr.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,v={title:"03 Compositions/Home",component:i,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},o={args:{images:m},decorators:[a=>e.jsx("div",{className:"ts-story-wrap--narrow",children:e.jsx(a,{})})]},E=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    images: []
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  },
  decorators: [Story => <div className="ts-story-wrap--narrow"><Story /></div>]
}`,...o.parameters?.docs?.source}}};export{s as EmptyLibrary,o as NarrowWindow,r as WithLibrary,E as __namedExportsOrder,v as default};
