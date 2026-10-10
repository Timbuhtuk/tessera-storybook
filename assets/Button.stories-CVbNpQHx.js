import{w as n}from"./elementThemes-ERLxJ9va.js";import{T as m}from"./ControlGallery-DPrsW1zh.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-B2Qgdidj.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BuWwWNkG.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-DFA3x-Hn.js";import"./EmptyLibrary-DmY1vQ0B.js";import"./jsx-runtime-u17CrQMm.js";import"./EditorToolWindow-kpp6pEHn.js";import"./EditorWorkspace-Don-PsCu.js";import"./iframe-BSezqzAL.js";import"./ColorReplaceDialog-XP4BlnNF.js";import"./ThemeElements-BJ9cPqzh.js";import"./LightWorkspace-6ivyFL_j.js";import"./DepthWorkspace-CkP_n7iq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,x={title:"03 Elements/Actions/Button",component:m,tags:["autodocs"],args:{children:"Open image…",variant:"secondary",onClick:c()},argTypes:{variant:{control:"radio",options:["primary","secondary"]}},parameters:{docs:{description:{component:"Actions have visible text, a minimum 40 px target, hover border, keyboard focus, pressed and disabled states."}}}},e={},r={args:{variant:"primary"}},a={args:{disabled:!0}},t={...e,name:"Light",decorators:[n("light")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...e,name:"Dark",decorators:[n("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Contrast",decorators:[n("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},B=["Secondary","Primary","Disabled","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Secondary,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Secondary,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Secondary,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};export{s as Contrast,o as Dark,a as Disabled,t as Light,r as Primary,e as Secondary,B as __namedExportsOrder,x as default};
