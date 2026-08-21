import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Accordion({items=[],defaultOpen=0,style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  return (
    <div style={{borderTop:"1px solid var(--border-subtle)",...style}} {...rest}>
      {items.map((it,i)=>{const isOpen=open===i;return (
        <div key={i} style={{borderBottom:"1px solid var(--border-subtle)"}}>
          <button onClick={()=>setOpen(isOpen?-1:i)} aria-expanded={isOpen}
            style={{width:"100%",display:"flex",gap:"var(--space-3)",alignItems:"center",justifyContent:"space-between",background:"none",border:0,padding:"var(--space-3) 0",cursor:"pointer",textAlign:"left",fontFamily:"var(--font-display)",fontSize:"var(--size-h4)",color:"var(--text-heading)"}}>
            <span>{it.question}</span>
            <span style={{color:"var(--moss-600)",transform:isOpen?"rotate(180deg)":"none",transition:"transform var(--dur-base) var(--ease-calm)"}}><Icon name="chevron-down" size={20}/></span>
          </button>
          {isOpen?<div style={{paddingBottom:"var(--space-3)",fontSize:"var(--size-small)",color:"var(--text-muted)",lineHeight:"var(--leading-body)",maxWidth:"var(--measure-prose)"}}>{it.answer}</div>:null}
        </div>
      );})}
    </div>
  );
}
