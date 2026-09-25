import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-CqbPvftw.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-CI21xiOq.js";import{s as m,H as i}from"./HomePage-CHKBykGF.js";import"./EditorToolWindow-DRtJrvUK.js";import"./EditorWorkspace-DohvSV7s.js";import"./StandaloneWorkspaces-Bw1qPZSY.js";import"./ColorReplaceDialog-BP8RYOpg.js";import"./iframe-hNe2M4pi.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-Cfb4I1MF.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,_={title:"03 Compositions/Home",component:i,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},o={args:{images:m},decorators:[a=>e.jsx("div",{className:"ts-story-wrap--narrow",children:e.jsx(a,{})})]},b=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{s as EmptyLibrary,o as NarrowWindow,r as WithLibrary,b as __namedExportsOrder,_ as default};
