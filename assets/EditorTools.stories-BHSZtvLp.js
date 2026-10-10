import{E as m}from"./EditorToolWindow-BIw2L81J.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DeWJawhK.js";import"./preload-helper-PPVm8Dsz.js";import"./PrimitiveControls-CvaOikjl.js";const f={title:"04 Workflows/Editor/Tool panels",component:m,parameters:{layout:"centered",docs:{description:{component:"Tool panels based on MainWindow.EditorTools.cs and MainWindow.xaml. Settings are interactive; processing runs in the Tessera app."}}},args:{tool:"profile",sourceReady:!0,hasResult:!1,alignedResult:!1}},e={name:"Presets",args:{tool:"profile"}},o={name:"No source",args:{tool:"profile",sourceReady:!1}},r={name:"Size and framing",args:{tool:"size"}},s={name:"Palette",args:{tool:"color"}},a={name:"3×3 smoothing",args:{tool:"smoothing"}},n={name:"Grid",args:{tool:"grid"}},t={name:"Aligned grid",args:{tool:"grid",alignedResult:!0}},i={name:"Info without result",args:{tool:"info"}},c={name:"Info with result",args:{tool:"info",hasResult:!0}},S=["ReadyModes","NoSource","Size","Palette","Smoothing","Grid","AlignedGrid","InfoEmpty","InfoResult"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Presets',
  args: {
    tool: 'profile'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'No source',
  args: {
    tool: 'profile',
    sourceReady: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Size and framing',
  args: {
    tool: 'size'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Palette',
  args: {
    tool: 'color'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '3×3 smoothing',
  args: {
    tool: 'smoothing'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Grid',
  args: {
    tool: 'grid'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Aligned grid',
  args: {
    tool: 'grid',
    alignedResult: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Info without result',
  args: {
    tool: 'info'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Info with result',
  args: {
    tool: 'info',
    hasResult: true
  }
}`,...c.parameters?.docs?.source}}};export{t as AlignedGrid,n as Grid,i as InfoEmpty,c as InfoResult,o as NoSource,s as Palette,e as ReadyModes,r as Size,a as Smoothing,S as __namedExportsOrder,f as default};
