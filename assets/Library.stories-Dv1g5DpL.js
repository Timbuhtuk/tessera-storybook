import{j as n}from"./jsx-runtime-u17CrQMm.js";import{w as m}from"./elementThemes-ERLxJ9va.js";import"./ControlGallery-DPrsW1zh.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-B2Qgdidj.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BuWwWNkG.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-DFA3x-Hn.js";import{L as p,E as l}from"./EmptyLibrary-DmY1vQ0B.js";import"./EditorToolWindow-kpp6pEHn.js";import"./EditorWorkspace-Don-PsCu.js";import"./iframe-BSezqzAL.js";import"./ColorReplaceDialog-XP4BlnNF.js";import"./ThemeElements-BJ9cPqzh.js";import"./LightWorkspace-6ivyFL_j.js";import"./DepthWorkspace-CkP_n7iq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,v={title:"03 Elements/Data/Library card",component:p,tags:["autodocs"],args:{image:"./assets/landscape.png",fileName:"landscape.png",width:384,height:256,results:4,onOpen:d()},decorators:[(i,c)=>c.parameters.elementTheme?n.jsx(i,{}):n.jsx("div",{style:{width:420},children:n.jsx(i,{})})],parameters:{docs:{description:{component:"The whole card is a keyboard-accessible button. The image uses contain fitting and nearest-neighbor sampling."}}}},e={},r={args:{fileName:"landscape-with-a-long-versioned-file-name-for-export.png",results:0}},t={render:()=>n.jsx(l,{})},a={...e,name:"Light",decorators:[m("light")],parameters:{layout:"fullscreen",elementTheme:!0}},s={...e,name:"Dark",decorators:[m("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...e,name:"Contrast",decorators:[m("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},F=["WithResults","LongFileName","EmptyState","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'landscape-with-a-long-versioned-file-name-for-export.png',
    results: 0
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyLibrary />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...WithResults,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...WithResults,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...WithResults,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};export{o as Contrast,s as Dark,t as EmptyState,a as Light,r as LongFileName,e as WithResults,F as __namedExportsOrder,v as default};
