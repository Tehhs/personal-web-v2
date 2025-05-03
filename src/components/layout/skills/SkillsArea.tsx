"use client";
import { useState, useRef, useEffect } from "react";
import { SkillItem } from "./SkillItem/SkillItem";
import {useInView, motion} from 'framer-motion'

export const RandomText = (charNumbers: number) => { 
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;':,.<>?";
    let result = "";
    for (let i = 0; i < charNumbers; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const SkillsArea : React.FC = () => { 
    

    const firstSkillListingElement = useRef<HTMLDivElement>(null)
    const isFirstElementInView = useInView(firstSkillListingElement, {once: false})
    
    const [skills, setSkills] = useState([
        {
            Key: "dfajlnfwe",
            SkillName:"React",
            ImageSrc:"/skills/react.svg"
        }
    ])

    useEffect(()=>{
            setInterval(() => {
                AppendSkill()
            }, 5000)
        
    }, [])

    const AppendSkill = () => { 
        setSkills((prev) => {
            return [{
                Key: RandomText(10),
                SkillName: RandomText(10),
                ImageSrc: "/skills/react.svg"
            }, ...prev]
        })
    }
    
    

    return <div> 
        <div>
            this is the skills area 
        </div>
        <div className="flex gap-5 overflow-hidden">
            {
                skills.map( (skill, i) => {
                    return <motion.div
                        key={skill.Key}
                        initial={{x: -100}}
                        animate={{x: 2000}}
                        transition= {{duration: 100}}
                        className="absolute"
                    >
                        <SkillItem 
                            SkillName={skill.SkillName}
                            ImageSrc={skill.ImageSrc}
                        />
                    </motion.div>
                })
            }
        </div>
    </div>

}