"use client";

import React from "react";
import Link from "next/link";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleDownloadResume = () => {
        try {
            const link = document.createElement('a');
            link.href = '/Mahesh_R_Resume.pdf';
            link.download = 'Mahesh_R_Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('Resume download started');
        } catch (error) {
            console.error('Error downloading resume:', error);
            window.open('/Mahesh_R_Resume.pdf', '_blank');
        }
    };

    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7x1 font-bold">
                    Nice to meet you! 
                    👋<br/> <span className="underline underline-offset-8 decoration-green-500">{"I'm Mahesh R."}</span></h1> 
                <p className="md:w-96 text-lg text-gray-300">{"Based in Bangalore, I'm a Fullstack developer passionate about programming and tech."}</p>
                <Link href={"mailto:maheshr3002@gmail.com"} className="inline-block group">
                    <Title text="Contact Me 📬" />
                </Link>
            </div>
            <div className="relative">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-24 h-24 rounded-2xl bg-green-500"></div>
                        <div className="w-24 h-24 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-24 h-24 rounded-2xl bg-indigo-500"></div>
                        <div className="w-24 h-24 rounded-full bg-green-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                    <div 
                        onClick={handleDownloadResume} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="cursor-pointer"
                    >
                        <MovingBorderBtn 
                            borderRadius="0.5rem" 
                            className="p-3 font-semibold"
                        >
                            <p className="transition-all duration-300">
                                {isHovered ? "📄 Download Resume" : "📢 Available for work"}
                            </p>
                        </MovingBorderBtn>
                    </div>
                </div>
            </div>
        </div>
    );
}
