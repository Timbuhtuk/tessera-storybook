import{T as s}from"./TesseraSwitchBox-CTRqZFEy.js";import"./jsx-runtime-u17CrQMm.js";const o={title:"02 Components/Selection/SwitchBox",component:s,tags:["autodocs"],args:{label:"Показывать сетку"},parameters:{docs:{description:{component:"Отдельный переключатель на основе checkbox с ролью switch. Светлая основа и тёмный подвижный элемент адаптированы к монохромной теме Tessera."}}}},e={name:"Выключен"},r={name:"Включён",args:{defaultChecked:!0}},a={name:"Недоступен",args:{disabled:!0,defaultChecked:!0}},c=["Off","On","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Выключен'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Включён',
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Недоступен',
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};export{a as Disabled,e as Off,r as On,c as __namedExportsOrder,o as default};
