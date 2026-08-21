import React from "react";

export function Quote({children,attribution,role,tone="paper",style,...rest}){
  const light=tone==="inverse";
  return (
    <figure style={{margin:0,padding:"var(--space-4) 0 0",borderTop:`1px solid ${light?"var(--border-inverse)":"var(--rule-hairline)"}`,...style}} {...rest}>
      <blockquote style={{margin:0,fontFamily:"var(--font-display)",fontSize:"var(--size-h3)",lineHeight:"var(--leading-heading)",fontStyle:"italic",fontWeight:"var(--weight-light)",color:light?"var(--paper)":"var(--text-heading)",maxWidth:"38ch"}}>{children}</blockquote>
      {attribution?<figcaption style={{marginTop:"var(--space-3)",fontFamily:"var(--font-text)",fontSize:"var(--size-caption)",color:light?"var(--moss-200)":"var(--text-muted)"}}>{attribution}{role?<span style={{color:light?"var(--moss-300)":"var(--text-subtle)"}}> · {role}</span>:null}</figcaption>:null}
    </figure>
  );
}
