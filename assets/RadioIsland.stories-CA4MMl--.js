import{T as s}from"./TesseraRadioIsland-D7HNd2UA.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DgSZ1wrk.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"02 Components/Selection/Radio island",component:s,tags:["autodocs"],args:{label:"Период",options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}]},parameters:{docs:{description:{component:"Три радиокнопки с движущимся индикатором по референсу Uiverse.io by _7948. Клавиши Tab и стрелки работают через обычные radio input; скрытые элементы остаются доступными для фокуса."}}}},e={name:"День"},a={name:"Неделя",args:{defaultValue:"week"}},r={name:"Недоступен",args:{defaultValue:"month",disabled:!0}},d=["Day","Week","Disabled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'День'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Неделя',
  args: {
    defaultValue: 'week'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Недоступен',
  args: {
    defaultValue: 'month',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};export{e as Day,r as Disabled,a as Week,d as __namedExportsOrder,m as default};
