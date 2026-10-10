import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-BZCl8a9v.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-DdahH16Y.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BndECQ2O.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-DPaMrh7D.js";import{F as s}from"./EmptyLibrary-cgtN7B4V.js";import"./EditorToolWindow-DpY-F6G_.js";import"./EditorWorkspace-D3XvzOak.js";import"./iframe-Cfd6kAov.js";import"./ColorReplaceDialog-CcGpjnBf.js";import"./ThemeElements-DGUr6B0c.js";import"./LightWorkspace-DljGFPiI.js";import"./DepthWorkspace-DEJg316G.js";import"./preload-helper-PPVm8Dsz.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,_={title:"03 Elements/Content/Feature banner",component:s,tags:["autodocs"],args:{kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:c()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[i=>n.jsx("div",{className:"ts-story-wrap",children:n.jsx(i,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},r={},e={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},o={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},a={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},t={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[i=>n.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:n.jsx(i,{})})]},P=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'background',
    title: 'Background removal',
    description: 'Create a transparent PNG from a solid-color background.',
    actionLabel: 'Remove background…'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'icons',
    title: 'Icon creation',
    description: 'Create an ICO from a source image or processed result.',
    actionLabel: 'Create icon…'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...t.parameters?.docs?.source}}};export{e as Animation,o as BackgroundRemoval,r as Hero,a as Icons,t as Narrow,P as __namedExportsOrder,_ as default};
