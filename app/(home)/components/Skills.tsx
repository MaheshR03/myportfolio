"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from '../../../components/ui/card-hover-effect';
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFlask, SiGit, SiHtml5, SiCss3, SiC } from'react-icons/si';

export default function Skills(){
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind CSS",
            Icon: SiTailwindcss,
        },
        {
            text: "JavaScript",
            Icon: SiJavascript,
        },
        {
            text: "TypeScript",
            Icon: SiTypescript,
        },
        {
            text: "Python",
            Icon: SiPython,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Express",
            Icon: SiExpress,
        },
        {
            text: "MongoDB",
            Icon: SiMongodb,
        },
        {
            text: "PostgreSQL",
            Icon: SiPostgresql,
        },
        {
            text: "Flask",
            Icon: SiFlask,
        },
        {
            text: "Git",
            Icon: SiGit,
        },
        {
            text: "HTML5",
            Icon: SiHtml5,
        },
        {
            text: "CSS3",
            Icon: SiCss3,
        },
        {
            text: "C",
            Icon: SiC,
        },
    ];
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 🛠️" className="flex flex-col items-center justify-center" />
            <HoverEffect items={skills}/>
        </div>
    );
}