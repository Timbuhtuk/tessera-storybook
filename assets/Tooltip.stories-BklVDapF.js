import{j as r}from"./jsx-runtime-u17CrQMm.js";import{w as m}from"./elementThemes-ERLxJ9va.js";import{T as i}from"./TesseraTooltip-BuWwWNkG.js";import"./iframe-BSezqzAL.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"03 Elements/Feedback/Tooltip",component:i,tags:["autodocs"],args:{content:"Some tooltip",fontSize:18,children:r.jsx("button",{type:"button",className:"ts-control-button",children:"Hover or focus"})},argTypes:{children:{control:!1},fontSize:{control:{type:"range",min:12,max:36,step:1}}},parameters:{layout:"centered",docs:{description:{component:"A keyboard-accessible tooltip that stays hidden until hover or focus. The leader-line variant scales its geometry with the text and draws the anchor, diagonal, horizontal line, and label in sequence."}}},decorators:[(c,l)=>l.parameters.elementTheme?r.jsx(c,{}):r.jsx("div",{style:{minWidth:440,minHeight:210,display:"grid",placeItems:"end start",padding:24},children:r.jsx(c,{})})]},e={name:"Panel"},a={name:"Leader line",args:{variant:"leader"}},t={name:"Leader line · Large text",args:{variant:"leader",fontSize:28}},n={...e,name:"Light",decorators:[m("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[m("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...e,name:"Contrast",decorators:[m("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},T=["Panel","Leader","LeaderLarge","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Panel'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Leader line',
  args: {
    variant: 'leader'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Leader line · Large text',
  args: {
    variant: 'leader',
    fontSize: 28
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Panel,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Panel,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Panel,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};export{o as Contrast,s as Dark,a as Leader,t as LeaderLarge,n as Light,e as Panel,T as __namedExportsOrder,f as default};
