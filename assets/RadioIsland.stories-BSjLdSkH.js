import{T as o}from"./TesseraRadioIsland-C3KArogv.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-C7etXYN5.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"02 Components/Selection/Radio island",component:o,tags:["autodocs"],args:{label:"Period",options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]},parameters:{docs:{description:{component:"Three radio buttons with a moving indicator, adapted from Uiverse.io by _7948. Native radio inputs support Tab and arrow keys and remain focusable."}}}},e={name:"Day"},a={name:"Week",args:{defaultValue:"week"}},r={name:"Disabled",args:{defaultValue:"month",disabled:!0}},m=["Day","Week","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{e as Day,r as Disabled,a as Week,m as __namedExportsOrder,i as default};
