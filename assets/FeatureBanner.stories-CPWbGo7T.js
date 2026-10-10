import{j as e}from"./jsx-runtime-u17CrQMm.js";import{t as p}from"./elementThemes-Cd_46aMK.js";import"./ControlGallery-CiR_XM_W.js";import"./TesseraCarouselLoader-a2hs1RfB.js";import"./TesseraSquareLoader-CsdPxYVf.js";import"./TesseraBounceLoader-BPDPNxb7.js";import"./TesseraSwitchBox-CTRqZFEy.js";import"./TesseraRadioIsland-Dma8JaQ6.js";import"./TesseraScrollArea-BngJWlN9.js";import"./TesseraTooltip-BY20mLLT.js";import"./TesseraImageFrame-CfCeuBZf.js";import"./PrimitiveControls-CvaOikjl.js";import{F as l}from"./EmptyLibrary-DDhnw6Na.js";import"./EditorToolWindow-BIw2L81J.js";import"./EditorWorkspace-Dx9TfR9y.js";import"./iframe-DeWJawhK.js";import"./ColorReplaceDialog-BpIKxGeb.js";import"./ThemeElements-CBvOsJ6h.js";import"./LightWorkspace-CeoiSNtL.js";import"./DepthWorkspace-ByTXLVtZ.js";import"./preload-helper-PPVm8Dsz.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,R={title:"03 Elements/Content/Feature banner",component:l,tags:["autodocs"],args:{kind:"hero",title:"Pixel processing",description:"Downscale images and align the pixel grid.",actionLabel:"Open image…",onAction:u()},argTypes:{kind:{control:"select",options:["hero","animation","background","icons"]}},decorators:[(o,d)=>d.parameters.elementTheme?e.jsx(o,{}):e.jsx("div",{className:"ts-story-wrap",children:e.jsx(o,{})})],parameters:{docs:{description:{component:"One title, one sentence and one action. Art is decorative and scales with nearest-neighbor sampling."}}}},r={},a={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"}},t={args:{kind:"background",title:"Background removal",description:"Create a transparent PNG from a solid-color background.",actionLabel:"Remove background…"}},n={args:{kind:"icons",title:"Icon creation",description:"Create an ICO from a source image or processed result.",actionLabel:"Create icon…"}},s={args:{kind:"animation",title:"Animation export",description:"Aseprite → PNG + JSON. Convert one file or a whole batch.",actionLabel:"Open converter…"},decorators:[o=>e.jsx("div",{className:"ts-story-wrap ts-story-wrap--narrow",children:e.jsx(o,{})})]},i=p("light",r),c=p("dark",r),m=p("contrast",r),E=["Hero","Animation","BackgroundRemoval","Icons","Narrow","Light","Dark","Contrast"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"themedStory('light', Hero)",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"themedStory('dark', Hero)",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"themedStory('contrast', Hero)",...m.parameters?.docs?.source}}};export{a as Animation,t as BackgroundRemoval,m as Contrast,c as Dark,r as Hero,n as Icons,i as Light,s as Narrow,E as __namedExportsOrder,R as default};
