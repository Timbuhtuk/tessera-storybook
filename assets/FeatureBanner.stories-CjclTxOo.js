import{j as r}from"./jsx-runtime-u17CrQMm.js";import{w as p}from"./elementThemes-ERLxJ9va.js";import"./ControlGallery-DPrsW1zh.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-B2Qgdidj.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BuWwWNkG.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-DFA3x-Hn.js";import{F as d}from"./EmptyLibrary-DmY1vQ0B.js";import"./EditorToolWindow-kpp6pEHn.js";import"./EditorWorkspace-Don-PsCu.js";import"./iframe-BSezqzAL.js";import"./ColorReplaceDialog-XP4BlnNF.js";import"./ThemeElements-BJ9cPqzh.js";import"./LightWorkspace-6ivyFL_j.js";import"./DepthWorkspace-CkP_n7iq.js";import"./preload-helper-PPVm8Dsz.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,D={title:"03 Elements/Content/Feature banner",component:d,tags:["autodocs"],args:{kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:u()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[(o,l)=>l.parameters.elementTheme?r.jsx(o,{}):r.jsx("div",{className:"ts-story-wrap",children:r.jsx(o,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},e={},a={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},t={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},n={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},s={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[o=>r.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:r.jsx(o,{})})]},i={...e,name:"Light",decorators:[p("light")],parameters:{layout:"fullscreen",elementTheme:!0}},c={...e,name:"Dark",decorators:[p("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},m={...e,name:"Contrast",decorators:[p("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},G=["Hero","Animation","BackgroundRemoval","Icons","Narrow","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'background',
    title: 'Background removal',
    description: 'Create a transparent PNG from a solid-color background.',
    actionLabel: 'Remove background…'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'icons',
    title: 'Icon creation',
    description: 'Create an ICO from a source image or processed result.',
    actionLabel: 'Create icon…'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Hero,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Hero,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Hero,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...m.parameters?.docs?.source}}};export{a as Animation,t as BackgroundRemoval,m as Contrast,c as Dark,e as Hero,n as Icons,i as Light,s as Narrow,G as __namedExportsOrder,D as default};
