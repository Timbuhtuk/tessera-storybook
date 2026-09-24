import{j as t}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-yvlevW4V.js";import{F as s}from"./HomePage-DBLOHk6m.js";import"./EditorToolWindow-Zz0ZWCfo.js";import"./EditorWorkspace-CdaC0rn6.js";import"./StandaloneWorkspaces-CXbJUwNE.js";import"./ColorReplaceDialog-B6BH2b07.js";import"./iframe-Dz8yKLuy.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-omAcrxnx.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,k={title:"02 Components/Content/Feature banner",component:s,tags:["autodocs"],args:{kind:"hero",title:"Пиксельная обработка",description:"Уменьшение изображений и выравнивание сетки.",actionLabel:"Открыть изображение…",onAction:i()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[n=>t.jsx("div",{className:"ts-story-wrap",children:t.jsx(n,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},u={},r={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"}},e={args:{kind:"background",title:"Удаление фона",description:"Прозрачный PNG из изображения с однотонным фоном.",actionLabel:"Удалить фон…"}},o={args:{kind:"icons",title:"Создание иконок",description:"ICO из исходника или готового результата.",actionLabel:"Создать иконку…"}},a={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"},decorators:[n=>t.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:t.jsx(n,{})})]},C=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Экспорт анимаций',
    description: 'Aseprite → PNG + JSON. По одному или целой партией.',
    actionLabel: 'Открыть конвертер…'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'background',
    title: 'Удаление фона',
    description: 'Прозрачный PNG из изображения с однотонным фоном.',
    actionLabel: 'Удалить фон…'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'icons',
    title: 'Создание иконок',
    description: 'ICO из исходника или готового результата.',
    actionLabel: 'Создать иконку…'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Экспорт анимаций',
    description: 'Aseprite → PNG + JSON. По одному или целой партией.',
    actionLabel: 'Открыть конвертер…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...a.parameters?.docs?.source}}};export{r as Animation,e as BackgroundRemoval,u as Hero,o as Icons,a as Narrow,C as __namedExportsOrder,k as default};
