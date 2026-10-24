import{j as n}from"./jsx-runtime-u17CrQMm.js";import{a as s,e as c,w as p}from"./elementThemes-CLG6AAb2.js";import"./ControlGallery-DZEfWzkp.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-Bk1I3s5N.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BgWxk56w.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-CqX6tXNN.js";import{F as m}from"./EmptyLibrary-gMKuPgGX.js";import"./EditorToolWindow-Bvs_PnVR.js";import"./EditorWorkspace-RlDX1doo.js";import"./iframe-DifJK8lF.js";import"./ColorReplaceDialog-CGw8YJyJ.js";import"./ThemeElements-C--n2UJP.js";import"./LightWorkspace-CaNnMa8F.js";import"./DepthWorkspace-D0DYY_Td.js";import"./preload-helper-PPVm8Dsz.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,G={title:"03 Elements/Content/Feature banner",component:m,tags:["autodocs"],args:{...c,kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:d()},argTypes:{...s,kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[p("dark")],parameters:{layout:"fullscreen",docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},e={},r={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},o={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},t={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},a={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[i=>n.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:n.jsx(i,{})})]},I=["Hero","Animation","BackgroundRemoval","Icons","Narrow"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'icons',
    title: 'Icon creation',
    description: 'Create an ICO from a source image or processed result.',
    actionLabel: 'Create icon…'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'animation',
    title: 'Animation export',
    description: 'Aseprite → PNG + JSON. Convert one file or a whole batch.',
    actionLabel: 'Open converter…'
  },
  decorators: [Story => <div className="ts-story-wrap ts-story-wrap--narrow"><Story /></div>]
}`,...a.parameters?.docs?.source}}};export{r as Animation,o as BackgroundRemoval,e as Hero,t as Icons,a as Narrow,I as __namedExportsOrder,G as default};
