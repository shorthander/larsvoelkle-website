import React from "react";

/** Label + hint + error wrapper shared by every form control. */
export function Field({label,hint,error,required=false,htmlFor,children,style,...rest}){
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-1)",...style}} {...rest}>
      {label?<label htmlFor={htmlFor} style={{fontFamily:"var(--font-text)",fontSize:"var(--size-caption)",fontWeight:"var(--weight-medium)",color:"var(--text-heading)",letterSpacing:"0.01em"}}>{label}{required?<span style={{color:"var(--feedback-critical)",marginLeft:4}}>*</span>:null}</label>:null}
      {children}
      {error?<span style={{fontSize:"var(--size-caption)",color:"var(--feedback-critical)"}}>{error}</span>
        :hint?<span style={{fontSize:"var(--size-caption)",color:"var(--text-muted)"}}>{hint}</span>:null}
    </div>
  );
}
