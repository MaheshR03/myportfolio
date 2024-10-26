import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://github.com/MaheshR03",
            label: "Github",
            Icon: SiGithub
            
        },
        {
            link: "https://www.linkedin.com/in/mahesh-r-179068294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            label: "Linkedin",
            Icon: SiLinkedin
        },
        {
            link: "https://x.com/_maxx_xr?t=G6-GL16P4Rob7A_nmdAWtA&s=08",
            label: "X",
            Icon: SiX
        }
    ];

    return ( 
        <nav className={cn("py-10 flex justify-between items-center", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500">Mahesh R 👨🏻‍💼</h1>
            <div className="flex items-center gap-5">
                {socials.map((social,index) => {
                    const Icon = social.Icon;
                    return ( 
                        <Link href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );    
                })}
            </div>
        </nav>
    );
}