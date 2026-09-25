import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-CljmR_jS.js";import"./TesseraScrollArea-BngJWlN9.js";import{s as m,H as i}from"./HomePage-Yb04sEpW.js";import"./EditorToolWindow-Dr4SJ7Je.js";import"./EditorWorkspace-DzJ_UG16.js";import"./StandaloneWorkspaces-23CGep4p.js";import"./ColorReplaceDialog-CbbRDZf2.js";import"./iframe-DZtHNNb1.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-B2wgozLJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,S={title:"03 Compositions/Home",component:i,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},o={args:{images:m},decorators:[a=>e.jsx("div",{className:"ts-story-wrap--narrow",children:e.jsx(a,{})})]},_=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{s as EmptyLibrary,o as NarrowWindow,r as WithLibrary,_ as __namedExportsOrder,S as default};
