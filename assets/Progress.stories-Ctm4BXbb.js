import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DifJK8lF.js";import{b as r,c as l}from"./PrimitiveControls-CqX6tXNN.js";import{a as c,e as m,w as d}from"./elementThemes-CLG6AAb2.js";import"./preload-helper-PPVm8Dsz.js";function g(){const[s,o]=i.useState(62);return e.jsxs("section",{className:"ts-control-sample",style:{width:"min(720px, 100%)",margin:"0 auto"},children:[e.jsxs("div",{className:"ts-control-sample__head",children:[e.jsx("h2",{children:"Progress variants"}),e.jsx("code",{children:"Cells / Signal"})]}),e.jsxs("div",{className:"ts-control-sample__body",children:[e.jsx(r,{label:"Processing images · Cells",value:s,variant:"cells"}),e.jsx(r,{label:"Processing images · Signal",value:s,variant:"signal"}),e.jsx(l,{label:"Change demo value",value:s,onChange:o})]})]})}const j={title:"03 Elements/Feedback/Progress bar",component:r,tags:["autodocs"],decorators:[d("dark")],args:{...m,label:"Processing images",value:62,max:100,variant:"cells"},argTypes:{...c,variant:{control:"radio",options:["classic","cells","signal"]}},parameters:{layout:"fullscreen",docs:{description:{component:"Determinate progress with two Tessera variants: 20 precise Cells and an animated Signal. The classic variant remains the default for existing consumers. Omitting value shows the shared indeterminate state."}}}},a={render:()=>e.jsx(g,{})},n={render:s=>e.jsx("div",{style:{width:"min(720px, 100%)",margin:"0 auto"},children:e.jsx(r,{...s})})},t={args:{variant:"signal"},render:s=>e.jsx("div",{style:{width:"min(720px, 100%)",margin:"0 auto"},children:e.jsx(r,{...s})})},S=["Comparison","Cells","Signal"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ProgressComparison />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 'min(720px, 100%)',
    margin: '0 auto'
  }}><TesseraProgress {...args} /></div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'signal'
  },
  render: args => <div style={{
    width: 'min(720px, 100%)',
    margin: '0 auto'
  }}><TesseraProgress {...args} /></div>
}`,...t.parameters?.docs?.source}}};export{n as Cells,a as Comparison,t as Signal,S as __namedExportsOrder,j as default};
