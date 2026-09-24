import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./WindowsControlGallery-B_EK7dhA.js";import{s as m,H as n}from"./HomePage-BjTNC9Yd.js";import"./EditorToolWindow-fmHo7jG2.js";import"./EditorWorkspace-B0KxpJW2.js";import"./StandaloneWorkspaces-C4SeMBV6.js";import"./ColorReplaceDialog-B8yl3uRV.js";import"./iframe-DskY2-KD.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-B7NOf1ZZ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,w={title:"03 Compositions/Home",component:n,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>o.jsx("div",{style:{padding:"24px 0"},children:o.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},e={args:{images:m},decorators:[a=>o.jsx("div",{className:"ts-story-wrap--narrow",children:o.jsx(a,{})})]},S=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{s as EmptyLibrary,e as NarrowWindow,r as WithLibrary,S as __namedExportsOrder,w as default};
