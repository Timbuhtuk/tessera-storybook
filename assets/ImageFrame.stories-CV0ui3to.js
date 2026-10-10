import{a as r,e as t,w as o}from"./elementThemes-CLG6AAb2.js";import{T as n}from"./TesseraImageFrame-CfCeuBZf.js";import"./jsx-runtime-u17CrQMm.js";const i={title:"03 Elements/Content/Image frame",component:n,tags:["autodocs"],args:{...t,placeholderLabel:"Empty image frame",aspectRatio:"4 / 3",fit:"cover"},argTypes:{...r,fit:{control:"select",options:["contain","cover"]}},decorators:[o("dark")],parameters:{layout:"fullscreen",docs:{description:{component:"An image frame with a transparent surface and white corner-to-corner diagonals when empty. Pass src and alt to display an image; aspectRatio and fit control its shape and crop."}}}},e={name:"Empty"},a={name:"Wide",args:{aspectRatio:"16 / 9"}},s={name:"With image",args:{src:"./assets/landscape.png",alt:"Pixel landscape"}},d=["Empty","Wide","WithImage"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Empty'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Wide',
  args: {
    aspectRatio: '16 / 9'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With image',
  args: {
    src: './assets/landscape.png',
    alt: 'Pixel landscape'
  }
}`,...s.parameters?.docs?.source}}};export{e as Empty,a as Wide,s as WithImage,d as __namedExportsOrder,i as default};
