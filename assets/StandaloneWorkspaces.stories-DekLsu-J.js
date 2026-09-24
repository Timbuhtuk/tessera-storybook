import{S as t}from"./StandaloneWorkspaces-pOn4kg1z.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-BO9makw1.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-iMq_EqPc.js";const g={title:"05 Workspaces/Standalone tools",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Экраны по BackgroundWorkspace.xaml, IconWorkspace.xaml и AsepriteWorkspace.xaml. Доступность сохранения и отмены повторяет состояния исходного приложения."}}},args:{kind:"background",stage:"ready"}},a={name:"Удаление фона · пусто",args:{kind:"background",stage:"empty"}},e={name:"Удаление фона · готово",args:{kind:"background",stage:"ready"}},n={name:"Иконки · пусто",args:{kind:"icons",stage:"empty"}},u={name:"Иконки · готово",args:{kind:"icons",stage:"ready"}},r={name:"Анимация · пусто",args:{kind:"animation",stage:"empty"}},s={name:"Анимация · готово",args:{kind:"animation",stage:"ready"}},o={name:"Анимация · обработка",args:{kind:"animation",stage:"busy"}},k=["BackgroundEmpty","BackgroundReady","IconsEmpty","IconsReady","AnimationEmpty","AnimationReady","AnimationBusy"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Удаление фона · пусто',
  args: {
    kind: 'background',
    stage: 'empty'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Удаление фона · готово',
  args: {
    kind: 'background',
    stage: 'ready'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Иконки · пусто',
  args: {
    kind: 'icons',
    stage: 'empty'
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Иконки · готово',
  args: {
    kind: 'icons',
    stage: 'ready'
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Анимация · пусто',
  args: {
    kind: 'animation',
    stage: 'empty'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Анимация · готово',
  args: {
    kind: 'animation',
    stage: 'ready'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Анимация · обработка',
  args: {
    kind: 'animation',
    stage: 'busy'
  }
}`,...o.parameters?.docs?.source}}};export{o as AnimationBusy,r as AnimationEmpty,s as AnimationReady,a as BackgroundEmpty,e as BackgroundReady,n as IconsEmpty,u as IconsReady,k as __namedExportsOrder,g as default};
