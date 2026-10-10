import{j as r}from"./jsx-runtime-u17CrQMm.js";import{t as c}from"./elementThemes-Cd_46aMK.js";import{T as m}from"./TesseraTooltip-BY20mLLT.js";import"./iframe-DeWJawhK.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"03 Elements/Feedback/Tooltip",component:m,tags:["autodocs"],args:{content:"Some tooltip",fontSize:18,children:r.jsx("button",{type:"button",className:"ts-control-button",children:"Hover or focus"})},argTypes:{children:{control:!1},fontSize:{control:{type:"range",min:12,max:36,step:1}}},parameters:{layout:"centered",docs:{description:{component:"A keyboard-accessible tooltip that stays hidden until hover or focus. The leader-line variant scales its geometry with the text and draws the anchor, diagonal, horizontal line, and label in sequence."}}},decorators:[(i,d)=>d.parameters.elementTheme?r.jsx(i,{}):r.jsx("div",{style:{minWidth:440,minHeight:210,display:"grid",placeItems:"end start",padding:24},children:r.jsx(i,{})})]},e={name:"Panel"},a={name:"Leader line",args:{variant:"leader"}},t={name:"Leader line · Large text",args:{variant:"leader",fontSize:28}},o=c("light",e),s=c("dark",e),n=c("contrast",e),S=["Panel","Leader","LeaderLarge","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"themedStory('light', Panel)",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"themedStory('dark', Panel)",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"themedStory('contrast', Panel)",...n.parameters?.docs?.source}}};export{n as Contrast,s as Dark,a as Leader,t as LeaderLarge,o as Light,e as Panel,S as __namedExportsOrder,L as default};
