import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as o}from"./TesseraImageFrame-CfCeuBZf.js";const m={title:"02 Components/Content/Image frame",component:o,tags:["autodocs"],args:{placeholderLabel:"Empty image frame",aspectRatio:"4 / 3",fit:"cover"},argTypes:{fit:{control:"select",options:["contain","cover"]}},decorators:[t=>r.jsx("div",{style:{width:"min(360px, calc(100vw - 48px))"},children:r.jsx(t,{})})],parameters:{docs:{description:{component:"An image frame with a transparent surface and white corner-to-corner diagonals when empty. Pass src and alt to display an image; aspectRatio and fit control its shape and crop."}}}},a={name:"Empty"},e={name:"Wide",args:{aspectRatio:"16 / 9"}},s={name:"With image",args:{src:"./assets/landscape.png",alt:"Pixel landscape"}},p=["Empty","Wide","WithImage"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Empty'
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Wide',
  args: {
    aspectRatio: '16 / 9'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With image',
  args: {
    src: './assets/landscape.png',
    alt: 'Pixel landscape'
  }
}`,...s.parameters?.docs?.source}}};export{a as Empty,e as Wide,s as WithImage,p as __namedExportsOrder,m as default};
