import React from "react";
import { Icon } from "./Icon.jsx";

const sizes={sm:{box:32,icon:16},md:{box:44,icon:20},lg:{box:52,icon:24}};

export function IconButton({icon,label,variant="secondary",size="md",disabled=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const d=sizes[size];
  const tone=variant==="quiet"?{background:"transparent",color:"var(--text-muted)",borderColor:"transparent"}
    :variant==="onDark"?{background:"color-mix(in oklab,var(--paper) 14%,transparent)",color:"var(--paper)",borderColor:"color-mix(in oklab,var(--paper) 28%,transparent)"}
    :{background:"var(--surface-raised)",color:"var(--text-heading)",borderColor:"var(--border-default)"};
  const hoverTone=variant==="quiet"?{background:"var(--surface-muted)",color:"var(--text-heading)"}
    :variant==="onDark"?{background:"color-mix(in oklab,var(--paper) 24%,transparent)"}
    :{background:"var(--surface-sunken)",borderColor:"var(--border-strong)"};
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:d.box,height:d.box,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-sm)",border:"1px solid transparent",cursor:disabled?"not-allowed":"pointer",transition:"var(--transition-control)",...tone,...(hover&&!disabled?hoverTone:null),...(disabled?{opacity:0.45}:null),...style}} {...rest}>
      <Icon name={icon} size={d.icon}/>
    </button>
  );
}
