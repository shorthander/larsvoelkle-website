import React from "react";
const shell={fontFamily:"var(--font-text)",fontSize:"var(--size-small)",color:"var(--text-body)",background:"var(--surface-raised)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-sm)",padding:"11px var(--space-15)",width:"100%",transition:"var(--transition-control)",outline:"none"};
export function Select({options=[],disabled=false,invalid=false,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return (
    <div style={{position:"relative",width:"100%"}}>
      <select disabled={disabled} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{...shell,appearance:"none",paddingRight:"var(--space-5)",cursor:disabled?"not-allowed":"pointer",
          ...(invalid?{borderColor:"var(--feedback-critical)"}:null),
          ...(focus?{borderColor:"var(--moss-500)",boxShadow:"var(--shadow-focus)"}:null),
          ...(disabled?{background:"var(--surface-muted)",color:"var(--text-subtle)"}:null),...style}} {...rest}>
        {options.map(o=>{const v=typeof o==="string"?o:o.value;const l=typeof o==="string"?o:o.label;return <option key={v} value={v}>{l}</option>;})}
      </select>
      <span aria-hidden="true" style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"var(--text-muted)",fontSize:11}}>▼</span>
    </div>
  );
}
