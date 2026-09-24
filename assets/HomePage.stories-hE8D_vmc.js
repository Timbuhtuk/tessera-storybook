import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-PLkS2jBb.js";import{s as m,H as n}from"./HomePage-C7qwJEcK.js";import"./EditorToolWindow-BHHbSZuO.js";import"./EditorWorkspace-BjUQkulr.js";import"./StandaloneWorkspaces--M5Hins2.js";import"./ColorReplaceDialog-CebSOVbt.js";import"./iframe-D8ONQbMf.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-BlgwH80-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,w={title:"03 Compositions/Home",component:n,tags:["autodocs"],args:{onAction:t(),onImageOpen:t()},parameters:{layout:"fullscreen",docs:{description:{component:"Composition based on the supplied Tessera home screen. Resize the canvas to inspect the responsive layout. The Storybook buttons are demonstration actions."}}},decorators:[a=>o.jsx("div",{style:{padding:"24px 0"},children:o.jsx(a,{})})]},r={args:{images:m}},s={args:{images:[]}},e={args:{images:m},decorators:[a=>o.jsx("div",{className:"ts-story-wrap--narrow",children:o.jsx(a,{})})]},S=["WithLibrary","EmptyLibrary","NarrowWindow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
