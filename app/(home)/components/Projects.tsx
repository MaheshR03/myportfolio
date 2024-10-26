import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiPhp } from "react-icons/si";
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
            cover: "/project1.png",
            background: "bg-indigo-500",
        },
        {
            title: "Lego Uni - Responsive University Website",
            tech: [SiHtml5, SiCss3, SiPhp],
            link: "https://maheshr03.github.io/My-First-Website/",
            cover: "/project2.png",
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