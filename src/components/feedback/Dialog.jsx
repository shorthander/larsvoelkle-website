import React from "react";
import { IconButton } from "../core/IconButton.jsx";

export function Dialog({open=true,title,onClose,footer,width=520,children,style,...rest}){
  if(!open) return null;
  return (
    <div style={{position:"fixed",inset:0,display:"grid",placeItems:"center",background:"color-mix(in oklab,var(--bark-950) 42%,transparent)",backdropFilter:"blur(3px)",padding:"var(--space-4)",zIndex:40}} onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}
        style={{width:"100%",maxWidth:width,background:"var(--surface-raised)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-lg)",padding:"var(--space-4)",...style}} {...rest}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"var(--space-3)",marginBottom:"var(--space-2)"}}>
          <h3 style={{margin:0}}>{title}</h3>
          {onClose?<IconButton icon="x" label="Schließen" variant="quiet" size="sm" onClick={onClose}/>:null}
        </div>
        <div style={{fontSize:"var(--size-small)",color:"var(--text-muted)",lineHeight:"var(--leading-body)"}}>{children}</div>
        {footer?<div style={{display:"flex",gap:"var(--space-15)",justifyContent:"flex-end",marginTop:"var(--space-4)"}}>{footer}</div>:null}
      </div>
    </div>
  );
}
