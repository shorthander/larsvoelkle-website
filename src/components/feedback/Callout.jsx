import React from "react";
import { Icon } from "../core/Icon.jsx";

const tones={
  calm:{bg:"var(--surface-accent-soft)",border:"var(--moss-100)",fg:"var(--moss-700)",icon:"leaf"},
  info:{bg:"var(--feedback-info-soft)",border:"var(--lake-300)",fg:"var(--lake-700)",icon:"info"},
  caution:{bg:"var(--feedback-caution-soft)",border:"var(--ember-200)",fg:"var(--ember-700)",icon:"triangle-alert"},
  critical:{bg:"var(--feedback-critical-soft)",border:"#E3BCB0",fg:"var(--feedback-critical)",icon:"circle-alert"}
};

export function Callout({tone="calm",title,icon,children,style,...rest}){
  const t=tones[tone];
  return (
    <div style={{display:"flex",gap:"var(--space-2)",background:t.bg,border:`1px solid ${t.border}`,borderRadius:"var(--radius-md)",padding:"var(--space-25) var(--space-3)",...style}} {...rest}>
      <span style={{color:t.fg,marginTop:2}}><Icon name={icon||t.icon} size={20}/></span>
      <div>
        {title?<div style={{fontFamily:"var(--font-text)",fontWeight:"var(--weight-medium)",fontSize:"var(--size-small)",color:"var(--text-heading)",marginBottom:2}}>{title}</div>:null}
        <div style={{fontSize:"var(--size-small)",color:"var(--text-muted)",lineHeight:"var(--leading-body)"}}>{children}</div>
      </div>
    </div>
  );
}
