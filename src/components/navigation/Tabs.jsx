import React from "react";

export function Tabs({items=[],value,onChange,style,...rest}){
  return (
    <div role="tablist" style={{display:"flex",gap:"var(--space-4)",borderBottom:"1px solid var(--border-subtle)",...style}} {...rest}>
      {items.map(it=>{const id=typeof it==="string"?it:it.value;const label=typeof it==="string"?it:it.label;const active=id===value;
        return (
          <button key={id} role="tab" aria-selected={active} onClick={()=>onChange&&onChange(id)}
            style={{background:"none",border:0,borderBottom:`2px solid ${active?"var(--action-primary)":"transparent"}`,padding:"var(--space-15) 0",marginBottom:-1,fontFamily:"var(--font-text)",fontSize:"var(--size-small)",fontWeight:active?"var(--weight-medium)":"var(--weight-regular)",color:active?"var(--text-heading)":"var(--text-muted)",cursor:"pointer",transition:"var(--transition-control)"}}>{label}</button>
        );})}
    </div>
  );
}
