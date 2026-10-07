import{j as t}from"./jsx-runtime-u17CrQMm.js";import"./ControlGallery-B9hb2VCN.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-jn81uMSm.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-DshhWDuG.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-sx8Vk2qf.js";import{F as s}from"./EmptyLibrary-Cf_r-p_x.js";import"./EditorToolWindow-BLka0m-j.js";import"./EditorWorkspace-CW6gb7ql.js";import"./iframe-C63QsrbA.js";import"./ColorReplaceDialog-DWTnA3d9.js";import"./preload-helper-PPVm8Dsz.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,A={title:"02 Components/Content/Feature banner",component:s,tags:["autodocs"],args:{kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:c()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[i=>t.jsx("div",{className:"ts-story-wrap",children:t.jsx(i,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},e={},r={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},o={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},a={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},n={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[i=>t.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:t.jsx(i,{})})]},L=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Animation,o as BackgroundRemoval,e as Hero,a as Icons,n as Narrow,L as __namedExportsOrder,A as default};
