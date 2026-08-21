import React from "react";

const base={fontFamily:"var(--font-text)",fontWeight:"var(--weight-medium)",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-1)",borderRadius:"var(--radius-sm)",border:"1px solid transparent",cursor:"pointer",textDecoration:"none",transition:"var(--transition-control)",letterSpacing:"0.005em",whiteSpace:"nowrap"};
const sizes={sm:{fontSize:"var(--size-caption)",padding:"var(--space-075) var(--space-15)",minHeight:32},md:{fontSize:"var(--size-small)",padding:"10px var(--space-25)",minHeight:44},lg:{fontSize:"var(--size-body)",padding:"var(--space-15) var(--space-4)",minHeight:52}};
const variants={
  primary:{background:"var(--action-primary)",color:"var(--text-inverse)",boxShadow:"var(--shadow-xs)"},
  secondary:{background:"var(--surface-raised)",color:"var(--text-heading)",borderColor:"var(--border-default)",boxShadow:"var(--shadow-xs)"},
  quiet:{background:"transparent",color:"var(--text-link)"},
  onDark:{background:"var(--paper)",color:"var(--bark-900)"}
};
const hovers={
  primary:{background:"var(--action-primary-hover)"},
  secondary:{background:"var(--surface-sunken)",borderColor:"var(--border-strong)"},
  quiet:{background:"var(--surface-accent-soft)"},
  onDark:{background:"var(--paper-2)"}
};

export function Button({variant="primary",size="md",disabled=false,fullWidth=false,href,type="button",children,style,onClick,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const s={...base,...sizes[size],...variants[variant],...(hover&&!disabled?hovers[variant]:null),
    ...(press&&!disabled?{transform:"translateY(1px)"}:null),
    ...(disabled?{opacity:0.45,cursor:"not-allowed",boxShadow:"none"}:null),
    ...(fullWidth?{width:"100%"}:null),...style};
  const handlers={onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false);},onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false)};
  if(href&&!disabled) return <a href={href} style={s} {...handlers} {...rest}>{children}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} style={s} {...handlers} {...rest}>{children}</button>;
}
