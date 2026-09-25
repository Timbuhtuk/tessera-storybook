import{C as u}from"./ColorReplaceDialog-D6hbdYzs.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-B6BCAVW5.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"04 Editor/Color replacement",component:u,parameters:{layout:"centered",docs:{description:{component:"Диалог ручной замены по HEX из ColorReplaceWindow.xaml. Некорректный HEX блокирует действие."}}},args:{hasResult:!0}},e={name:"Результат выбран"},r={name:"Нет результата",args:{hasResult:!1}},c=["WithResult","WithoutResult"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Результат выбран'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Нет результата',
  args: {
    hasResult: false
  }
}`,...r.parameters?.docs?.source}}};export{e as WithResult,r as WithoutResult,c as __namedExportsOrder,n as default};
