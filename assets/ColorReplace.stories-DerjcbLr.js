import{C as t}from"./ColorReplaceDialog-DoTQuEQX.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DRJfAxjU.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"04 Workflows/Editor/Color replacement",component:t,parameters:{layout:"centered",docs:{description:{component:"Manual HEX replacement dialog based on ColorReplaceWindow.xaml. Invalid HEX values disable the action."}}},args:{hasResult:!0}},e={name:"Result selected"},s={name:"No result",args:{hasResult:!1}},c=["WithResult","WithoutResult"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Result selected'
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'No result',
  args: {
    hasResult: false
  }
}`,...s.parameters?.docs?.source}}};export{e as WithResult,s as WithoutResult,c as __namedExportsOrder,n as default};
