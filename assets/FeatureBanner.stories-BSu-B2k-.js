import{j as t}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-CQT3mZXs.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-BmOJziPR.js";import"./TesseraScrollArea-BngJWlN9.js";import"./PrimitiveControls-BpipbczG.js";import{F as i}from"./EmptyLibrary-CsdITQcd.js";import"./EditorToolWindow-BDK_1R2p.js";import"./EditorWorkspace-DQfjw3rc.js";import"./iframe-Ct7Dvhuz.js";import"./ColorReplaceDialog-Cng42vfw.js";import"./preload-helper-PPVm8Dsz.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,S={title:"02 Components/Content/Feature banner",component:i,tags:["autodocs"],args:{kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:c()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[s=>t.jsx("div",{className:"ts-story-wrap",children:t.jsx(s,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},e={},r={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},o={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},a={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},n={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[s=>t.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:t.jsx(s,{})})]},f=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...n.parameters?.docs?.source}}};export{r as Animation,o as BackgroundRemoval,e as Hero,a as Icons,n as Narrow,f as __namedExportsOrder,S as default};
