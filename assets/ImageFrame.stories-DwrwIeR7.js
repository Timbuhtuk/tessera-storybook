import{j as o}from"./jsx-runtime-u17CrQMm.js";import{w as m}from"./elementThemes-ERLxJ9va.js";import{T as i}from"./TesseraImageFrame-CfCeuBZf.js";const h={title:"03 Elements/Content/Image frame",component:i,tags:["autodocs"],args:{placeholderLabel:"Empty image frame",aspectRatio:"4 / 3",fit:"cover"},argTypes:{fit:{control:"select",options:["contain","cover"]}},decorators:[(c,p)=>p.parameters.elementTheme?o.jsx(c,{}):o.jsx("div",{style:{width:"min(360px, calc(100vw - 48px))"},children:o.jsx(c,{})})],parameters:{docs:{description:{component:"An image frame with a transparent surface and white corner-to-corner diagonals when empty. Pass src and alt to display an image; aspectRatio and fit control its shape and crop."}}}},e={name:"Empty"},a={name:"Wide",args:{aspectRatio:"16 / 9"}},r={name:"With image",args:{src:"./assets/landscape.png",alt:"Pixel landscape"}},t={...e,name:"Light",decorators:[m("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[m("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},n={...e,name:"Contrast",decorators:[m("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},g=["Empty","Wide","WithImage","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Empty,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Empty,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Empty,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...n.parameters?.docs?.source}}};export{n as Contrast,s as Dark,e as Empty,t as Light,a as Wide,r as WithImage,g as __namedExportsOrder,h as default};
