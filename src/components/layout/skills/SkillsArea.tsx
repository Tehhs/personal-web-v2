"use client";
import { useState, useRef, useEffect } from "react";
import { SkillItem } from "./SkillItem/SkillItem";
import {useInView, motion} from 'framer-motion'
import styled from "styled-components";

export const RandomText = (charNumbers: number) => { 
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < charNumbers; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const SkillOptions = [
    {
        Key: "dfajlnfwe",
        SkillName:"React",
        ImageSrc:"/skills/react.svg"
    }
]

export const SkillsArea : React.FC = () => { 
    

    const firstSkillListingElement = useRef<HTMLDivElement>(null)
    const isFirstElementInView = useInView(firstSkillListingElement, {once: false})
    
    const [skills, setSkills] = useState([
        // {
        //     Key: "dfajlnfwe",
        //     SkillName:"React",
        //     ImageSrc:"/skills/react.svg"
        // }
    ])

    const [renderInitialSkills, setRenderInitialSkills] = useState(true)
    const [initialSkills, _] = useState([
        ...Array(10).fill({
            Key: "dfajlnfwe",
            SkillName:"React",
            ImageSrc:"/skills/react.svg"
        })
    ])

    useEffect(()=>{
            setInterval(() => {
                AppendSkill()
            }, 5000)
    }, [])

    const AppendSkill = () => { 
        setSkills((prev) => {
            return [ ...prev, {
                Key: RandomText(10),
                SkillName: RandomText(10),
                ImageSrc: "/skills/react.svg"
            }]
        })
    }
    
    

    return <div> 
        <div>
            this is the skills area 
        </div>
        <div className="relative w-full overflow-hidden w-full h-[20rem]">
            {
                [...skills.map( (skill, i) => {
                    return <MoveContainer key={skill.Key} i={skill.Key} onAnimationEnd={(element)=>{
                        element.target.style['opacity'] = '0%'
                        setSkills((SKILLS)=>{
                            return SKILLS.filter( (s) => s != skill)
                        })
                    }}>
                        <SkillItem 
                            SkillName={skill.SkillName}
                            ImageSrc={skill.ImageSrc}
                        />
                    </MoveContainer>
                }),
                <MoveContainer key={"iniasdtial"} i={"iasdnitial"} className="flex flex-row gap-20" onAnimationEnd={(element)=>{
                    element.target.style['opacity'] = '0%'
                    setRenderInitialSkills(false) 
                }}>
                    {
                        renderInitialSkills && initialSkills.map(initialSkill => { 
                            return <SkillItem
                                SkillName={initialSkill.SkillName}
                                ImageSrc={initialSkill.ImageSrc}
                            />
                        })
                    }
                </MoveContainer>
                ]
            }
        </div>
    </div>

}

export const MoveContainer = styled.div<{i:any}>`

    @keyframes mmm${props => props.i ?? 0} { 
        from { 
            margin-left: -20rem; 
            color: pink;
        }
        to { 
            margin-left: 1500px;
            color: yellow; 
        }
    }
    position: absolute; 

    animation: mmm${props => props.i ?? 0} 50s linear 1;
    color: green;

`