import{j as r}from"./jsx-runtime-u17CrQMm.js";import{e as n,a as l,w as i}from"./elementThemes-CLG6AAb2.js";import{T as t}from"./PrimitiveControls-CRIQKLnM.js";import"./iframe-WG8-P6qI.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"03 Elements/Inputs/Password field",component:t,tags:["autodocs"],decorators:[i("dark")],argTypes:{...l,showPasswordToggle:{control:"boolean"}},args:{...n,label:"Password",type:"password",defaultValue:"tessera-demo",autoComplete:"off",showPasswordToggle:!0},render:o=>r.jsx("div",{style:{maxWidth:360},children:r.jsx(t,{...o})}),parameters:{layout:"fullscreen",docs:{description:{component:"A password field with an optional visibility button. The button changes the input type without clearing its value and announces its current action to assistive technology."}}}},e={name:"With reveal button"},s={name:"Classic",args:{showPasswordToggle:!1}},a={name:"Disabled",args:{disabled:!0}},h=["WithReveal","Classic","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'With reveal button'
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Classic',
  args: {
    showPasswordToggle: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};export{s as Classic,a as Disabled,e as WithReveal,h as __namedExportsOrder,g as default};
