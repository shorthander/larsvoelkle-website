import React from "react";

export function Switch({label,checked=false,onChange,disabled=false,style,...rest}){
  return (
    <label style={{display:"inline-flex",gap:"var(--space-15)",alignItems:"center",fontFamily:"var(--font-text)",fontSize:"var(--size-small)",color:disabled?"var(--text-subtle)":"var(--text-body)",cursor:disabled?"not-allowed":"pointer",...style}}>
      <span onClick={()=>!disabled&&onChange&&onChange(!checked)} role="switch" aria-checked={checked}
        style={{width:42,height:24,flex:"0 0 auto",borderRadius:"var(--radius-pill)",background:checked?"var(--action-primary)":"var(--stone-300)",padding:2,display:"flex",alignItems:"center",transition:"background-color var(--dur-base) var(--ease-calm)",opacity:disabled?0.5:1}}>
        <span style={{width:20,height:20,borderRadius:"var(--radius-pill)",background:"var(--paper)",boxShadow:"var(--shadow-xs)",transform:checked?"translateX(18px)":"translateX(0)",transition:"transform var(--dur-base) var(--ease-calm)"}}/>
      </span>
      {label}
    </label>
  );
}
