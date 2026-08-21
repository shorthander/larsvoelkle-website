import React from "react";

/** No logo file was supplied. The brand mark is the name set in Newsreader. */
export function Wordmark({size="md",tone="dark",subline="Systemischer Coach",style,...rest}){
  const scale={sm:{name:"1.0625rem",sub:"0.6875rem"},md:{name:"1.375rem",sub:"0.75rem"},lg:{name:"2rem",sub:"0.8125rem"}}[size];
  const color=tone==="light"?"var(--paper)":"var(--text-heading)";
  const subColor=tone==="light"?"var(--text-inverse-muted)":"var(--text-muted)";
  return (
    <span style={{display:"inline-flex",flexDirection:"column",gap:2,lineHeight:1.1,...style}} {...rest}>
      <span style={{fontFamily:"var(--font-display)",fontSize:scale.name,fontWeight:"var(--weight-regular)",letterSpacing:"-0.01em",color}}>Lars Völkle</span>
      {subline?<span style={{fontFamily:"var(--font-text)",fontSize:scale.sub,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:subColor}}>{subline}</span>:null}
    </span>
  );
}
