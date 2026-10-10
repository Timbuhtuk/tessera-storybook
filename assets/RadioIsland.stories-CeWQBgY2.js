import{w as n}from"./elementThemes-ERLxJ9va.js";import{T as m}from"./TesseraRadioIsland-B2Qgdidj.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-BSezqzAL.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"03 Elements/Selection/Radio island",component:m,tags:["autodocs"],args:{label:"Period",options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]},parameters:{docs:{description:{component:"Three radio buttons with a moving indicator, adapted from Uiverse.io by _7948. Native radio inputs support Tab and arrow keys and remain focusable."}}}},e={name:"Day"},a={name:"Week",args:{defaultValue:"week"}},r={name:"Disabled",args:{defaultValue:"month",disabled:!0}},t={...e,name:"Light",decorators:[n("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[n("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...e,name:"Contrast",decorators:[n("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},h=["Day","Week","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Day'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Week',
  args: {
    defaultValue: 'week'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    defaultValue: 'month',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Day,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Day,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Day,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};export{o as Contrast,s as Dark,e as Day,r as Disabled,t as Light,a as Week,h as __namedExportsOrder,p as default};
