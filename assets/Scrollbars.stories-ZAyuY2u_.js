import{j as r}from"./jsx-runtime-u17CrQMm.js";import{t as l}from"./elementThemes-Cd_46aMK.js";import{T as c}from"./TesseraScrollArea-BngJWlN9.js";const g={title:"03 Elements/Layout/Scrollbars",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Scroll through long content by dragging the thumb, using the mouse wheel, or focusing the area and using the keyboard."}}}},e={name:"Vertical",args:{direction:"vertical","aria-label":"Vertical scrolling"},render:i=>r.jsxs("div",{className:"ts-scroll-demo",children:[r.jsx("h2",{children:"Vertical scrolling"}),r.jsx("p",{children:"Rows stay inside the viewport, and the scrollbar remains visible against the dark background."}),r.jsx(c,{...i,children:r.jsx("div",{className:"ts-scroll-demo__rows",children:Array.from({length:14},(d,a)=>r.jsxs("div",{children:["Item ",String(a+1).padStart(2,"0"),r.jsx("span",{children:"384 × 256 px"})]},a))})})]})},s={name:"Horizontal",args:{direction:"horizontal","aria-label":"Horizontal scrolling"},render:i=>r.jsxs("div",{className:"ts-scroll-demo",children:[r.jsx("h2",{children:"Horizontal scrolling"}),r.jsx("p",{children:"Cards keep their size while content moves within the frame."}),r.jsx(c,{...i,children:r.jsx("div",{className:"ts-scroll-demo__tiles",children:Array.from({length:8},(d,a)=>r.jsxs("div",{children:[r.jsx("strong",{children:String(a+1).padStart(2,"0")}),r.jsx("span",{children:"Frame"})]},a))})})]})},t=l("light",e),o=l("dark",e),n=l("contrast",e),u=["Vertical","Horizontal","Light","Dark","Contrast"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  args: {
    direction: 'vertical',
    'aria-label': 'Vertical scrolling'
  },
  render: args => <div className="ts-scroll-demo">\r
        <h2>Vertical scrolling</h2>\r
        <p>Rows stay inside the viewport, and the scrollbar remains visible against the dark background.</p>\r
        <TesseraScrollArea {...args}><div className="ts-scroll-demo__rows">{Array.from({
          length: 14
        }, (_, index) => <div key={index}>Item {String(index + 1).padStart(2, '0')}<span>384 × 256 px</span></div>)}</div></TesseraScrollArea>\r
    </div>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    direction: 'horizontal',
    'aria-label': 'Horizontal scrolling'
  },
  render: args => <div className="ts-scroll-demo">\r
        <h2>Horizontal scrolling</h2>\r
        <p>Cards keep their size while content moves within the frame.</p>\r
        <TesseraScrollArea {...args}><div className="ts-scroll-demo__tiles">{Array.from({
          length: 8
        }, (_, index) => <div key={index}><strong>{String(index + 1).padStart(2, '0')}</strong><span>Frame</span></div>)}</div></TesseraScrollArea>\r
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"themedStory('light', Vertical)",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"themedStory('dark', Vertical)",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"themedStory('contrast', Vertical)",...n.parameters?.docs?.source}}};export{n as Contrast,o as Dark,s as Horizontal,t as Light,e as Vertical,u as __namedExportsOrder,g as default};
