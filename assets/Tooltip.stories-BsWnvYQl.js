import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as o}from"./TesseraTooltip-BCbXE1vV.js";import"./iframe-Bzj1X2JX.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"02 Components/Feedback/Tooltip",component:o,tags:["autodocs"],args:{content:"Some tooltip",fontSize:18,children:t.jsx("button",{type:"button",className:"ts-control-button",children:"Hover or focus"})},argTypes:{children:{control:!1},fontSize:{control:{type:"range",min:12,max:36,step:1}}},parameters:{layout:"centered",docs:{description:{component:"A keyboard-accessible tooltip that stays hidden until hover or focus. The leader-line variant scales its geometry with the text and draws the anchor, diagonal, horizontal line, and label in sequence."}}},decorators:[n=>t.jsx("div",{style:{minWidth:440,minHeight:210,display:"grid",placeItems:"end start",padding:24},children:t.jsx(n,{})})]},e={name:"Panel"},a={name:"Leader line",args:{variant:"leader"}},r={name:"Leader line · Large text",args:{variant:"leader",fontSize:28}},m=["Panel","Leader","LeaderLarge"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{a as Leader,r as LeaderLarge,e as Panel,m as __namedExportsOrder,l as default};
