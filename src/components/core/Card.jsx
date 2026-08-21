import React from "react";

const tones={
  paper:{background:"var(--surface-card)",border:"1px solid var(--border-subtle)"},
  sunken:{background:"var(--surface-sunken)",border:"1px solid transparent"},
  moss:{background:"var(--surface-accent-soft)",border:"1px solid var(--moss-100)"},
  inverse:{background:"var(--surface-inverse)",border:"1px solid var(--border-inverse)",color:"var(--text-inverse)"}
};
const pads={none:0,sm:"var(--space-3)",md:"var(--space-4)",lg:"var(--space-5)"};

export function Card({tone="paper",padding="md",elevated=false,interactive=false,as="div",children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const Tag=as;
  return (
    <Tag onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{borderRadius:"var(--radius-lg)",padding:pads[padding],boxShadow:elevated?"var(--shadow-md)":"var(--shadow-none)",transition:"box-shadow var(--dur-base) var(--ease-calm),transform var(--dur-base) var(--ease-calm),border-color var(--dur-base) var(--ease-calm)",...tones[tone],...(interactive?{cursor:"pointer"}:null),...(interactive&&hover?{boxShadow:"var(--shadow-lg)",transform:"translateY(-2px)"}:null),...style}} {...rest}>
      {children}
    </Tag>
  );
}
