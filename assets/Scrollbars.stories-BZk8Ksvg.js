import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as i}from"./elementThemes-ERLxJ9va.js";import{T as c}from"./TesseraScrollArea-BngJWlN9.js";const g={title:"03 Elements/Layout/Scrollbars",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Scroll through long content by dragging the thumb, using the mouse wheel, or focusing the area and using the keyboard."}}}},r={name:"Vertical",args:{direction:"vertical","aria-label":"Vertical scrolling"},render:l=>e.jsxs("div",{className:"ts-scroll-demo",children:[e.jsx("h2",{children:"Vertical scrolling"}),e.jsx("p",{children:"Rows stay inside the viewport, and the scrollbar remains visible against the dark background."}),e.jsx(c,{...l,children:e.jsx("div",{className:"ts-scroll-demo__rows",children:Array.from({length:14},(m,a)=>e.jsxs("div",{children:["Item ",String(a+1).padStart(2,"0"),e.jsx("span",{children:"384 × 256 px"})]},a))})})]})},s={name:"Horizontal",args:{direction:"horizontal","aria-label":"Horizontal scrolling"},render:l=>e.jsxs("div",{className:"ts-scroll-demo",children:[e.jsx("h2",{children:"Horizontal scrolling"}),e.jsx("p",{children:"Cards keep their size while content moves within the frame."}),e.jsx(c,{...l,children:e.jsx("div",{className:"ts-scroll-demo__tiles",children:Array.from({length:8},(m,a)=>e.jsxs("div",{children:[e.jsx("strong",{children:String(a+1).padStart(2,"0")}),e.jsx("span",{children:"Frame"})]},a))})})]})},t={...r,name:"Light",decorators:[i("light")],parameters:{layout:"fullscreen",elementTheme:!0}},n={...r,name:"Dark",decorators:[i("dark")],parameters:{layout:"fullscreen",elementTheme:!0}},o={...r,name:"Contrast",decorators:[i("contrast")],parameters:{layout:"fullscreen",elementTheme:!0}},u=["Vertical","Horizontal","Light","Dark","Contrast"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Vertical,
  name: 'Light',
  decorators: [withElementTheme('light')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Vertical,
  name: 'Dark',
  decorators: [withElementTheme('dark')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Vertical,
  name: 'Contrast',
  decorators: [withElementTheme('contrast')],
  parameters: {
    layout: 'fullscreen',
    elementTheme: true
  }
}`,...o.parameters?.docs?.source}}};export{o as Contrast,n as Dark,s as Horizontal,t as Light,r as Vertical,u as __namedExportsOrder,g as default};
