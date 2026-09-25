import{j as u}from"./jsx-runtime-u17CrQMm.js";import{T as n}from"./TesseraScrollArea-BngJWlN9.js";const t={title:"02 Components/Layout/Scrollbars",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Прокрутка длинного содержимого. Перетаскивайте ползунок, используйте колесо мыши или клавиатуру после перехода в область."}}}},e={name:"Вертикальный",args:{direction:"vertical","aria-label":"Вертикальная прокрутка"},render:a=>u.jsxs("div",{className:"ts-scroll-demo",children:[u.jsx("h2",{children:"Вертикальная прокрутка"}),u.jsx("p",{children:"Строки остаются в области, полоса прокрутки всегда различима на тёмном фоне."}),u.jsx(n,{...a,children:u.jsx("div",{className:"ts-scroll-demo__rows",children:Array.from({length:14},(o,r)=>u.jsxs("div",{children:["Элемент ",String(r+1).padStart(2,"0"),u.jsx("span",{children:"384 × 256 px"})]},r))})})]})},s={name:"Горизонтальный",args:{direction:"horizontal","aria-label":"Горизонтальная прокрутка"},render:a=>u.jsxs("div",{className:"ts-scroll-demo",children:[u.jsx("h2",{children:"Горизонтальная прокрутка"}),u.jsx("p",{children:"Карточки сохраняют размер; содержимое перемещается внутри рамки."}),u.jsx(n,{...a,children:u.jsx("div",{className:"ts-scroll-demo__tiles",children:Array.from({length:8},(o,r)=>u.jsxs("div",{children:[u.jsx("strong",{children:String(r+1).padStart(2,"0")}),u.jsx("span",{children:"Кадр"})]},r))})})]})},d=["Vertical","Horizontal"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Вертикальный',
  args: {
    direction: 'vertical',
    'aria-label': 'Вертикальная прокрутка'
  },
  render: args => <div className="ts-scroll-demo">\r
        <h2>Вертикальная прокрутка</h2>\r
        <p>Строки остаются в области, полоса прокрутки всегда различима на тёмном фоне.</p>\r
        <TesseraScrollArea {...args}><div className="ts-scroll-demo__rows">{Array.from({
          length: 14
        }, (_, index) => <div key={index}>Элемент {String(index + 1).padStart(2, '0')}<span>384 × 256 px</span></div>)}</div></TesseraScrollArea>\r
    </div>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Горизонтальный',
  args: {
    direction: 'horizontal',
    'aria-label': 'Горизонтальная прокрутка'
  },
  render: args => <div className="ts-scroll-demo">\r
        <h2>Горизонтальная прокрутка</h2>\r
        <p>Карточки сохраняют размер; содержимое перемещается внутри рамки.</p>\r
        <TesseraScrollArea {...args}><div className="ts-scroll-demo__tiles">{Array.from({
          length: 8
        }, (_, index) => <div key={index}><strong>{String(index + 1).padStart(2, '0')}</strong><span>Кадр</span></div>)}</div></TesseraScrollArea>\r
    </div>
}`,...s.parameters?.docs?.source}}};export{s as Horizontal,e as Vertical,d as __namedExportsOrder,t as default};
