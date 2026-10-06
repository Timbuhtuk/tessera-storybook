import{E as a}from"./EditorWorkspace-CqYXv06v.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-B2WyK89Q.js";import"./preload-helper-PPVm8Dsz.js";import"./EditorToolWindow-Bljn0QRP.js";import"./PrimitiveControls-Ck2PlTzb.js";const p={title:"03 Editor/Workspace",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"Editor based on MainWindow.xaml: file controls, input selection, tools, history, source, result, and preview backgrounds."}}},args:{stage:"source"}},e={name:"No file",args:{stage:"empty"}},r={name:"Source loaded",args:{stage:"source"}},s={name:"Result ready",args:{stage:"result"}},u=["Empty","SourceLoaded","ResultReady"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'No file',
  args: {
    stage: 'empty'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Source loaded',
  args: {
    stage: 'source'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Result ready',
  args: {
    stage: 'result'
  }
}`,...s.parameters?.docs?.source}}};export{e as Empty,s as ResultReady,r as SourceLoaded,u as __namedExportsOrder,p as default};
