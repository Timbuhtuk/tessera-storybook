import{j as a}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-CqbPvftw.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-CI21xiOq.js";import{F as s}from"./HomePage-CHKBykGF.js";import"./EditorToolWindow-DRtJrvUK.js";import"./EditorWorkspace-DohvSV7s.js";import"./StandaloneWorkspaces-Bw1qPZSY.js";import"./ColorReplaceDialog-BP8RYOpg.js";import"./iframe-hNe2M4pi.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-Cfb4I1MF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,N={title:"02 Components/Content/Feature banner",component:s,tags:["autodocs"],args:{kind:"hero",title:"Пиксельная обработка",description:"Уменьшение изображений и выравнивание сетки.",actionLabel:"Открыть изображение…",onAction:i()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[n=>a.jsx("div",{className:"ts-story-wrap",children:a.jsx(n,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},u={},r={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"}},e={args:{kind:"background",title:"Удаление фона",description:"Прозрачный PNG из изображения с однотонным фоном.",actionLabel:"Удалить фон…"}},o={args:{kind:"icons",title:"Создание иконок",description:"ICO из исходника или готового результата.",actionLabel:"Создать иконку…"}},t={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"},decorators:[n=>a.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:a.jsx(n,{})})]},b=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Экспорт анимаций',
    description: 'Aseprite → PNG + JSON. По одному или целой партией.',
    actionLabel: 'Открыть конвертер…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...t.parameters?.docs?.source}}};export{r as Animation,e as BackgroundRemoval,u as Hero,o as Icons,t as Narrow,b as __namedExportsOrder,N as default};
