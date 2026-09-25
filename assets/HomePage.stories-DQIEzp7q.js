import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-CBgV5AWH.js";import"./TesseraCarouselLoader-v-IRCYUy.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-Cp6ksDE6.js";import{s as m,H as i}from"./HomePage-CtsPLRW1.js";import"./EditorToolWindow-DWdpneks.js";import"./EditorWorkspace-DrOmVOBu.js";import"./StandaloneWorkspaces-D8uWhXMK.js";import"./ColorReplaceDialog-D0aZxTar.js";import"./iframe-CHv6OKKN.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-DhEFkLJL.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,j={title:"03 Compositions/Home",component:i,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},o={args:{images:m},decorators:[a=>e.jsx("div",{className:"ts-story-wrap--narrow",children:e.jsx(a,{})})]},v=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{s as EmptyLibrary,o as NarrowWindow,r as WithLibrary,v as __namedExportsOrder,j as default};
