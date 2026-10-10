import{t as n}from"./elementThemes-k_0SeAcy.js";import{T as d}from"./TesseraRadioIsland-Bgp8AXJq.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DRJfAxjU.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"03 Elements/Selection/Radio island",component:d,tags:["autodocs"],args:{label:"Period",options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]},parameters:{docs:{description:{component:"Three radio buttons with a moving indicator, adapted from Uiverse.io by _7948. Native radio inputs support Tab and arrow keys and remain focusable."}}}},e={name:"Day"},a={name:"Week",args:{defaultValue:"week"}},r={name:"Disabled",args:{defaultValue:"month",disabled:!0}},s=n("light",e),o=n("dark",e),t=n("contrast",e),g=["Day","Week","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"themedStory('light', Day)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"themedStory('dark', Day)",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"themedStory('contrast', Day)",...t.parameters?.docs?.source}}};export{t as Contrast,o as Dark,e as Day,r as Disabled,s as Light,a as Week,g as __namedExportsOrder,u as default};
