import React from "react";

const tones={
  moss:{background:"var(--moss-50)",color:"var(--moss-700)",borderColor:"var(--moss-100)"},
  bark:{background:"var(--bark-50)",color:"var(--bark-700)",borderColor:"var(--bark-100)"},
  ember:{background:"var(--ember-100)",color:"var(--ember-700)",borderColor:"var(--ember-200)"},
  outline:{background:"transparent",color:"var(--text-muted)",borderColor:"var(--border-default)"}
};

export function Tag({tone="moss",children,style,...rest}){
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-05)",fontFamily:"var(--font-text)",fontSize:"var(--size-caption)",lineHeight:1,padding:"var(--space-075) var(--space-15)",borderRadius:"var(--radius-pill)",border:"1px solid transparent",...tones[tone],...style}} {...rest}>{children}</span>;
}
