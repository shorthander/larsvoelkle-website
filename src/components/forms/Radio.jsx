import React from "react";

export function Radio({label,name,value,checked,defaultChecked,onChange,disabled=false,style,...rest}){
  return (
    <label style={{display:"inline-flex",gap:"var(--space-15)",alignItems:"center",fontFamily:"var(--font-text)",fontSize:"var(--size-small)",color:disabled?"var(--text-subtle)":"var(--text-body)",cursor:disabled?"not-allowed":"pointer",...style}}>
      <span style={{width:20,height:20,flex:"0 0 auto",borderRadius:"var(--radius-pill)",border:`1px solid ${checked?"var(--action-primary)":"var(--border-strong)"}`,background:"var(--surface-raised)",display:"grid",placeContent:"center",transition:"var(--transition-control)"}}>
        {checked?<span style={{width:10,height:10,borderRadius:"var(--radius-pill)",background:"var(--action-primary)"}}/>:null}
      </span>
      <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled}
        style={{position:"absolute",opacity:0,width:0,height:0}} {...rest}/>
      {label}
    </label>
  );
}
