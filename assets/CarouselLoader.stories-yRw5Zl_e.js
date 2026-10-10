import{w as n}from"./elementThemes-ERLxJ9va.js";import{T as o}from"./TesseraCarouselLoader-a2hs1RfB.js";import"./jsx-runtime-u17CrQMm.js";const l={title:"03 Elements/Feedback/Carousel loader",component:o,tags:["autodocs"],args:{label:"Processing"},parameters:{docs:{description:{component:"Three moving columns adapted from Uiverse.io by StealthWorm. Reduced motion displays a still state."}}}},e={name:"Animated"},r={name:"Paused",args:{paused:!0}},a={...e,name:"Light",decorators:[n("light")],parameters:{layout:"fullscreen",elementTheme:!0}},t={...e,name:"Dark",decorators:[n("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Contrast",decorators:[n("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},u=["Animated","Paused","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Animated'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Paused',
  args: {
    paused: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Animated,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};export{e as Animated,s as Contrast,t as Dark,a as Light,r as Paused,u as __namedExportsOrder,l as default};
