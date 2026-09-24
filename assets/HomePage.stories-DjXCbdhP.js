import{j as o}from"./jsx-runtime-u17CrQMm.js";import{s as n,H as m}from"./HomePage-Vr6YAY6J.js";import"./EditorToolWindow-AgVTUdSe.js";import"./EditorWorkspace-Dtiea-W_.js";import"./StandaloneWorkspaces-Co6BW8B0.js";import"./ColorReplaceDialog-CBSzPO0K.js";import"./iframe-B4rjLAHZ.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-BuFBtPUo.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,x={title:"03 Compositions/Home",component:m,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>o.jsx("div",{style:{padding:"24px 0"},children:o.jsx(a,{})})]},r={args:{images:n}},s={args:{images:[]}},e={args:{images:n},decorators:[a=>o.jsx("div",{className:"ts-story-wrap--narrow",children:o.jsx(a,{})})]},w=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    images: []
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages
  },
  decorators: [Story => <div className="ts-story-wrap--narrow"><Story /></div>]
}`,...e.parameters?.docs?.source}}};export{s as EmptyLibrary,e as NarrowWindow,r as WithLibrary,w as __namedExportsOrder,x as default};
