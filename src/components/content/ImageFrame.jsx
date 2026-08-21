import React from "react";

/** Placeholder-aware image frame. Without src it renders a labelled sand plate — never a drawn illustration. */
export function ImageFrame({src,alt="",ratio="4 / 3",radius="var(--radius-lg)",caption,scrim=false,placeholder="Bild",style,children,...rest}){
  return (
    <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--space-15)",...style}} {...rest}>
      <div style={{position:"relative",aspectRatio:ratio,borderRadius:radius,overflow:"hidden",background:"var(--surface-muted)",boxShadow:"var(--shadow-inset-hairline)"}}>
        {src?<img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          :<span style={{position:"absolute",inset:0,display:"grid",placeContent:"center",fontFamily:"var(--font-text)",fontSize:"var(--size-caption)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--stone-400)"}}>{placeholder}</span>}
        {scrim?<span style={{position:"absolute",inset:0,background:"var(--scrim-bottom)"}}/>:null}
        {children?<div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"var(--space-4)"}}>{children}</div>:null}
      </div>
      {caption?<figcaption style={{fontSize:"var(--size-caption)",color:"var(--text-muted)"}}>{caption}</figcaption>:null}
    </figure>
  );
}
