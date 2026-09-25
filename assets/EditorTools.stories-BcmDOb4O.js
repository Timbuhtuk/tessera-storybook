import{E as m}from"./EditorToolWindow-CuXXiA7-.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Ce8sO1K-.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-ChUJKnVr.js";const f={title:"04 Editor/Tool panels",component:m,parameters:{layout:"centered",docs:{description:{component:"Окна инструментов из MainWindow.EditorTools.cs и MainWindow.xaml. Параметры интерактивны; обработка выполняется в приложении Tessera."}}},args:{tool:"profile",sourceReady:!0,hasResult:!1,alignedResult:!1}},e={name:"Готовые режимы",args:{tool:"profile"}},o={name:"Без исходника",args:{tool:"profile",sourceReady:!1}},r={name:"Размер и кадр",args:{tool:"size"}},u={name:"Палитра",args:{tool:"color"}},a={name:"Сглаживание 3×3",args:{tool:"smoothing"}},s={name:"Сетка",args:{tool:"grid"}},n={name:"Сетка после выравнивания",args:{tool:"grid",alignedResult:!0}},t={name:"Инфо без результата",args:{tool:"info"}},c={name:"Инфо с результатом",args:{tool:"info",hasResult:!0}},S=["ReadyModes","NoSource","Size","Palette","Smoothing","Grid","AlignedGrid","InfoEmpty","InfoResult"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Готовые режимы',
  args: {
    tool: 'profile'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Без исходника',
  args: {
    tool: 'profile',
    sourceReady: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Размер и кадр',
  args: {
    tool: 'size'
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Палитра',
  args: {
    tool: 'color'
  }
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Сглаживание 3×3',
  args: {
    tool: 'smoothing'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Сетка',
  args: {
    tool: 'grid'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Сетка после выравнивания',
  args: {
    tool: 'grid',
    alignedResult: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Инфо без результата',
  args: {
    tool: 'info'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Инфо с результатом',
  args: {
    tool: 'info',
    hasResult: true
  }
}`,...c.parameters?.docs?.source}}};export{n as AlignedGrid,s as Grid,t as InfoEmpty,c as InfoResult,o as NoSource,u as Palette,e as ReadyModes,r as Size,a as Smoothing,S as __namedExportsOrder,f as default};
