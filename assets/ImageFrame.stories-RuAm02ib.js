import{j as c}from"./jsx-runtime-u17CrQMm.js";import{t as m}from"./elementThemes-Cd_46aMK.js";import{T as i}from"./TesseraImageFrame-CfCeuBZf.js";const u={title:"03 Elements/Content/Image frame",component:i,tags:["autodocs"],args:{placeholderLabel:"Empty image frame",aspectRatio:"4 / 3",fit:"cover"},argTypes:{fit:{control:"select",options:["contain","cover"]}},decorators:[(n,p)=>p.parameters.elementTheme?c.jsx(n,{}):c.jsx("div",{style:{width:"min(360px, calc(100vw - 48px))"},children:c.jsx(n,{})})],parameters:{docs:{description:{component:"An image frame with a transparent surface and white corner-to-corner diagonals when empty. Pass src and alt to display an image; aspectRatio and fit control its shape and crop."}}}},e={name:"Empty"},a={name:"Wide",args:{aspectRatio:"16 / 9"}},r={name:"With image",args:{src:"./assets/landscape.png",alt:"Pixel landscape"}},s=m("light",e),t=m("dark",e),o=m("contrast",e),h=["Empty","Wide","WithImage","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Empty'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Wide',
  args: {
    aspectRatio: '16 / 9'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With image',
  args: {
    src: './assets/landscape.png',
    alt: 'Pixel landscape'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"themedStory('light', Empty)",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"themedStory('dark', Empty)",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"themedStory('contrast', Empty)",...o.parameters?.docs?.source}}};export{o as Contrast,t as Dark,e as Empty,s as Light,a as Wide,r as WithImage,h as __namedExportsOrder,u as default};
