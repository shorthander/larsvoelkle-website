import React from "react";

const CDN="https://unpkg.com/lucide-static@0.469.0/icons/";

/** Lucide outline icons, masked so they inherit currentColor. */
export function Icon({name,size=20,strokeColor="currentColor",style,...rest}){
  const url=`url("${CDN}${name}.svg")`;
  return (
    <span role="img" aria-hidden="true" style={{display:"inline-block",width:size,height:size,flex:"0 0 auto",background:strokeColor,WebkitMaskImage:url,maskImage:url,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskSize:"contain",maskSize:"contain",...style}} {...rest}/>
  );
}
