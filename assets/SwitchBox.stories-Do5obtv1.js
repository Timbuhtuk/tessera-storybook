import{w as o}from"./elementThemes-ERLxJ9va.js";import{T as m}from"./TesseraSwitchBox-CTRqZFEy.js";import"./jsx-runtime-u17CrQMm.js";const u={title:"03 Elements/Selection/SwitchBox",component:m,tags:["autodocs"],args:{label:"Show grid"},parameters:{docs:{description:{component:"A separate checkbox-based switch. Its light base stays still while the dark element moves between states."}}}},e={name:"Off"},r={name:"On",args:{defaultChecked:!0}},a={name:"Disabled",args:{disabled:!0,defaultChecked:!0}},t={...e,name:"Light",decorators:[o("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[o("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},n={...e,name:"Contrast",decorators:[o("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},i=["Off","On","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Off'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'On',
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Off,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Off,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Off,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...n.parameters?.docs?.source}}};export{n as Contrast,s as Dark,a as Disabled,t as Light,e as Off,r as On,i as __namedExportsOrder,u as default};
