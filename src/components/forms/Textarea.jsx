import React from "react";
const shell={fontFamily:"var(--font-text)",fontSize:"var(--size-small)",color:"var(--text-body)",background:"var(--surface-raised)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-sm)",padding:"11px var(--space-15)",width:"100%",transition:"var(--transition-control)",outline:"none"};
export function Textarea({rows=5,invalid=false,disabled=false,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <textarea rows={rows} disabled={disabled} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
    style={{...shell,resize:"vertical",lineHeight:"var(--leading-body)",
      ...(invalid?{borderColor:"var(--feedback-critical)"}:null),
      ...(focus?{borderColor:"var(--moss-500)",boxShadow:"var(--shadow-focus)"}:null),
      ...(disabled?{background:"var(--surface-muted)",cursor:"not-allowed"}:null),...style}} {...rest}/>;
}
