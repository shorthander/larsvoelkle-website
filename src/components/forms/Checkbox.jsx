import React from "react";

export function Checkbox({label,checked,defaultChecked,onChange,disabled=false,style,...rest}){
  return (
    <label style={{display:"inline-flex",gap:"var(--space-15)",alignItems:"flex-start",fontFamily:"var(--font-text)",fontSize:"var(--size-small)",color:disabled?"var(--text-subtle)":"var(--text-body)",cursor:disabled?"not-allowed":"pointer",lineHeight:"var(--leading-tight)",...style}}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled}
        style={{appearance:"none",width:20,height:20,flex:"0 0 auto",marginTop:1,borderRadius:"var(--radius-xs)",border:"1px solid var(--border-strong)",background:"var(--surface-raised)",cursor:"inherit",display:"grid",placeContent:"center",transition:"var(--transition-control)"}} {...rest}/>
      <span style={{transform:"translateY(1px)"}}>{label}</span>
      <style>{`label > input[type=checkbox]:checked{background:var(--action-primary);border-color:var(--action-primary)}label > input[type=checkbox]:checked::after{content:"";width:10px;height:6px;border-left:2px solid var(--paper);border-bottom:2px solid var(--paper);transform:rotate(-45deg) translateY(-1px)}`}</style>
    </label>
  );
}
