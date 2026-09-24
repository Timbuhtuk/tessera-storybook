import{E as s}from"./EditorWorkspace-CdaC0rn6.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Dz8yKLuy.js";import"./preload-helper-PPVm8Dsz.js";import"./EditorToolWindow-Zz0ZWCfo.js";import"./WorkbenchControls-omAcrxnx.js";const p={title:"04 Editor/Workspace",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"Редактор из MainWindow.xaml: файл, выбор основы обработки, инструменты, история, исходник, результат и варианты фона предпросмотра."}}},args:{stage:"source"}},e={name:"Без файла",args:{stage:"empty"}},r={name:"Исходник открыт",args:{stage:"source"}},a={name:"Результат готов",args:{stage:"result"}},d=["Empty","SourceLoaded","ResultReady"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Без файла',
  args: {
    stage: 'empty'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Исходник открыт',
  args: {
    stage: 'source'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Результат готов',
  args: {
    stage: 'result'
  }
}`,...a.parameters?.docs?.source}}};export{e as Empty,a as ResultReady,r as SourceLoaded,d as __namedExportsOrder,p as default};
