import{w as n}from"./elementThemes-ERLxJ9va.js";import{T as m}from"./PrimitiveControls-DFA3x-Hn.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-BSezqzAL.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"03 Elements/Selection/Checkbox",component:m,tags:["autodocs"],args:{label:"Show grid"},parameters:{docs:{description:{component:"Diagonal fill adapted from Uiverse.io by Nawsome to Tessera colors and square geometry. The native checkbox retains keyboard support."}}}},e={name:"Animated"},r={name:"Checked",args:{defaultChecked:!0}},a={name:"Disabled",args:{disabled:!0}},t={...e,name:"Light",decorators:[n("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[n("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...e,name:"Contrast",decorators:[n("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},h=["Animated","Checked","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Animated'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Checked',
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};export{e as Animated,r as Checked,o as Contrast,s as Dark,a as Disabled,t as Light,h as __namedExportsOrder,p as default};
