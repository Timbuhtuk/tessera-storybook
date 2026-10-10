import{j as r}from"./jsx-runtime-u17CrQMm.js";import{T as i}from"./TesseraScrollArea-BngJWlN9.js";const c={title:"03 Elements/Layout/Scrollbars",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Scroll through long content by dragging the thumb, using the mouse wheel, or focusing the area and using the keyboard."}}}},s={name:"Vertical",args:{direction:"vertical","aria-label":"Vertical scrolling"},render:n=>r.jsxs("div",{className:"ts-scroll-demo",children:[r.jsx("h2",{children:"Vertical scrolling"}),r.jsx("p",{children:"Rows stay inside the viewport, and the scrollbar remains visible against the dark background."}),r.jsx(i,{...n,children:r.jsx("div",{className:"ts-scroll-demo__rows",children:Array.from({length:14},(l,e)=>r.jsxs("div",{children:["Item ",String(e+1).padStart(2,"0"),r.jsx("span",{children:"384 × 256 px"})]},e))})})]})},a={name:"Horizontal",args:{direction:"horizontal","aria-label":"Horizontal scrolling"},render:n=>r.jsxs("div",{className:"ts-scroll-demo",children:[r.jsx("h2",{children:"Horizontal scrolling"}),r.jsx("p",{children:"Cards keep their size while content moves within the frame."}),r.jsx(i,{...n,children:r.jsx("div",{className:"ts-scroll-demo__tiles",children:Array.from({length:8},(l,e)=>r.jsxs("div",{children:[r.jsx("strong",{children:String(e+1).padStart(2,"0")}),r.jsx("span",{children:"Frame"})]},e))})})]})},d=["Vertical","Horizontal"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as Horizontal,s as Vertical,d as __namedExportsOrder,c as default};
