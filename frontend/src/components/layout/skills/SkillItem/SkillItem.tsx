"use client";
import React from 'react'
import Image from "next/image";

export type SkillItemProps = { 
    SkillName: string 
    ImageSrc: string 
} 

export const SkillItem = React.forwardRef<HTMLDivElement, SkillItemProps>( (props, ref) => { 
    return <div ref={ref} className="rounded-xl gap-2 flex items-center justify-center flex-col w-25 h-25 bg-[#00000051] overflow-hidden"> 
        <Image 
            src={props.ImageSrc}
            width={42}
            height={42}
            alt="Picture of skill"
        />
        <div>{props.SkillName}</div>
    </div>
})
SkillItem.displayName = "SkillItemComponent"