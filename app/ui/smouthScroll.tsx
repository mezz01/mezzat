"use client"

import ReactLenis from "@studio-freight/react-lenis/types"

export default function SmouthScroll({children : ReactNode}){
    return(
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
    )
}