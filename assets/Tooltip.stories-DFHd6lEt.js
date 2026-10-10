import{j as t}from"./jsx-runtime-u17CrQMm.js";import{a as o,e as n,w as s}from"./elementThemes-CLG6AAb2.js";import{T as l}from"./TesseraTooltip-CIgMc2Vv.js";import"./iframe-DF46Z44t.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"03 Elements/Feedback/Tooltip",component:l,tags:["autodocs"],args:{...n,content:"Some tooltip",fontSize:18,children:t.jsx("button",{type:"button",className:"ts-control-button",children:"Hover or focus"})},argTypes:{...o,children:{control:!1},fontSize:{control:{type:"range",min:12,max:36,step:1}}},parameters:{layout:"fullscreen",docs:{description:{component:"A keyboard-accessible tooltip that stays hidden until hover or focus. The leader-line variant scales its geometry with the text and draws the anchor, diagonal, horizontal line, and label in sequence."}}},decorators:[s("dark")]},e={name:"Panel"},a={name:"Leader line",args:{variant:"leader"}},r={name:"Leader line · Large text",args:{variant:"leader",fontSize:28}},g=["Panel","Leader","LeaderLarge"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Panel'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Leader line',
  args: {
    variant: 'leader'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Leader line · Large text',
  args: {
    variant: 'leader',
    fontSize: 28
  }
}`,...r.parameters?.docs?.source}}};export{a as Leader,r as LeaderLarge,e as Panel,g as __namedExportsOrder,u as default};
