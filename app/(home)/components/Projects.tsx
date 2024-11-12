import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, SiPython, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";

export default function Projects(){
    const projects = [
        {
            title: "AI-driven bot for tailored customer service and effective sales engagement",
            tech: [SiHtml5, SiCss3, SiJavascript, SiPhp],
            link: "https://github.com/Ad1tyaNarayana/hacktathon-HAL04",
            cover: "/AI_chatbot.png",
            background: "bg-indigo-500",
        },
        {
            title: "Equihealth - Visualization of healthcare disparity across india using a prediction model",
            tech: [SiReact, SiPython, SiHtml5, SiCss3],
            link: "https://github.com/MaheshR03",
            cover: "/Equihealth.png",
            background: "bg-green-500",
        },
        {
            title: "A MERN stack Netflix Clone styled with tailwindCSS",
            tech: [SiReact, SiJavascript, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss],
            link: "https://netflix-clone-lkqt.onrender.com",
            cover: "/Netflix_clone.png",
            background: "bg-indigo-500",
        },
        {
            title: "Caffiend - A coffee tracking app with ReactJS, FantaCSS and Firebase",
            tech: [SiReact, SiJavascript, SiHtml5, SiTailwindcss],
            link: "https://caffiend-coffeetracker.vercel.app/",
            cover: "/Caffiend.png",
            background: "bg-green-500",
        },
        {
            title: "Freescribe - React web based transcription & translation app that uses web workers to run ML models in the browser",
            tech: [SiReact, SiJavascript, SiHtml5, SiTailwindcss],
            link: "https://free-scribe-alpha.vercel.app/",
            cover: "/Freescribe.png",
            background: "bg-indigo-500",
        },
        {
            title: "Pokédex - A ReactJS Pokédex styled with FantaCSS",
            tech: [SiReact, SiJavascript, SiHtml5, SiTailwindcss],
            link: "https://pokedex-pokemon-list.vercel.app/",
            cover: "/Pokedex.png",
            background: "bg-green-500",
        },
        {
            title: "fitforge - The ultimate gym training app built with ReactJS and tailwindCSS",
            tech: [SiReact, SiJavascript, SiHtml5, SiTailwindcss],
            link: "https://fitforge-seven.vercel.app/",
            cover: "/Fitfforge.png",
            background: "bg-indigo-500",
        },
        {
            title: "Lego Uni - Responsive University Website",
            tech: [SiHtml5, SiCss3],
            link: "https://maheshr03.github.io/My-First-Website/",
            cover: "/Lego_uni.png",
            background: "bg-green-500",
        }
    ];
    return (
        <div className="py-10 p-5 sm:p-0">
            <Title text="Projects 🎨" className="flex flex-col items-center justify-center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md",project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                <div className="space-y-5">
                                    <h1 className="text-2x1 font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon,index) => {
                                            return <Icon className="w-8 h-8" key={index} />;
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}