import{j as a}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-BKDzkyeo.js";import"./TesseraCarouselLoader-v-IRCYUy.js";import"./TesseraSquareLoader-An1SDQw-.js";import"./TesseraBounceLoader-nksURFmw.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-DEZsG8Jk.js";import{F as s}from"./HomePage-Bw5dRt1s.js";import"./EditorToolWindow-DEw8uvpm.js";import"./EditorWorkspace-Dt-KlzbH.js";import"./StandaloneWorkspaces-DFB_nnSp.js";import"./ColorReplaceDialog-PneVrNvd.js";import"./iframe-BDPi7hz-.js";import"./preload-helper-PPVm8Dsz.js";import"./WorkbenchControls-WjQzSRjW.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,F={title:"02 Components/Content/Feature banner",component:s,tags:["autodocs"],args:{kind:"hero",title:"Пиксельная обработка",description:"Уменьшение изображений и выравнивание сетки.",actionLabel:"Открыть изображение…",onAction:i()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[n=>a.jsx("div",{className:"ts-story-wrap",children:a.jsx(n,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},u={},r={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"}},o={args:{kind:"background",title:"Удаление фона",description:"Прозрачный PNG из изображения с однотонным фоном.",actionLabel:"Удалить фон…"}},e={args:{kind:"icons",title:"Создание иконок",description:"ICO из исходника или готового результата.",actionLabel:"Создать иконку…"}},t={args:{kind:"animation",title:"Экспорт анимаций",description:"Aseprite → PNG + JSON. По одному или целой партией.",actionLabel:"Открыть конвертер…"},decorators:[n=>a.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:a.jsx(n,{})})]},w=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Экспорт анимаций',
    description: 'Aseprite → PNG + JSON. По одному или целой партией.',
    actionLabel: 'Открыть конвертер…'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'background',
    title: 'Удаление фона',
    description: 'Прозрачный PNG из изображения с однотонным фоном.',
    actionLabel: 'Удалить фон…'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'icons',
    title: 'Создание иконок',
    description: 'ICO из исходника или готового результата.',
    actionLabel: 'Создать иконку…'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Экспорт анимаций',
    description: 'Aseprite → PNG + JSON. По одному или целой партией.',
    actionLabel: 'Открыть конвертер…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...t.parameters?.docs?.source}}};export{r as Animation,o as BackgroundRemoval,u as Hero,e as Icons,t as Narrow,w as __namedExportsOrder,F as default};
