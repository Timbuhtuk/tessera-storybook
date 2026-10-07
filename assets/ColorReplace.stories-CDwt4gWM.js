import{C as a}from"./ColorReplaceDialog-DSsfUKtM.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-D0VROWwz.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"03 Editor/Color replacement",component:a,parameters:{layout:"centered",docs:{description:{component:"Manual HEX replacement dialog based on ColorReplaceWindow.xaml. Invalid HEX values disable the action."}}},args:{hasResult:!0}},e={name:"Result selected"},t={name:"No result",args:{hasResult:!1}},c=["WithResult","WithoutResult"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Result selected'
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'No result',
  args: {
    hasResult: false
  }
}`,...t.parameters?.docs?.source}}};export{e as WithResult,t as WithoutResult,c as __namedExportsOrder,n as default};
