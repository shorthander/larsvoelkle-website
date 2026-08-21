import React from "react";

export function SectionHeading({eyebrow,title,lead,align="left",tone="dark",level="h2",style,...rest}){
  const Tag=level;
  const light=tone==="light";
  return (
    <header style={{display:"flex",flexDirection:"column",gap:"var(--space-15)",textAlign:align,alignItems:align==="center"?"center":"flex-start",...style}} {...rest}>
      {eyebrow?<span style={{fontFamily:"var(--font-text)",fontSize:"var(--size-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",fontWeight:"var(--weight-medium)",color:light?"var(--moss-200)":"var(--text-muted)"}}>{eyebrow}</span>:null}
      <Tag style={{margin:0,color:light?"var(--paper)":"var(--text-heading)",maxWidth:"22ch"}}>{title}</Tag>
      {lead?<p style={{margin:0,fontSize:"var(--size-lead)",lineHeight:"var(--leading-lead)",color:light?"var(--text-inverse-muted)":"var(--text-muted)",maxWidth:"var(--measure-lead)"}}>{lead}</p>:null}
    </header>
  );
}
