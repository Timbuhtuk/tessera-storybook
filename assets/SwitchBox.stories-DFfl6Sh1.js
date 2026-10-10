import{t as c}from"./elementThemes-k_0SeAcy.js";import{T as n}from"./TesseraSwitchBox-CTRqZFEy.js";import"./jsx-runtime-u17CrQMm.js";const p={title:"03 Elements/Selection/SwitchBox",component:n,tags:["autodocs"],args:{label:"Show grid"},parameters:{docs:{description:{component:"A separate checkbox-based switch. Its light base stays still while the dark element moves between states."}}}},e={name:"Off"},r={name:"On",args:{defaultChecked:!0}},a={name:"Disabled",args:{disabled:!0,defaultChecked:!0}},s=c("light",e),t=c("dark",e),o=c("contrast",e),u=["Off","On","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"themedStory('light', Off)",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"themedStory('dark', Off)",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"themedStory('contrast', Off)",...o.parameters?.docs?.source}}};export{o as Contrast,t as Dark,a as Disabled,s as Light,e as Off,r as On,u as __namedExportsOrder,p as default};
