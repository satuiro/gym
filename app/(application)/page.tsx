"use client"

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    return (
        <div className=" w-full max-w-xl px-5 xl:px-0">
            <h1 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
                Unleash Your <a className="text-purple-700">Potential:</a> Empowering Your Fitness Journey <a className="text-purple-700">One Rep</a> at a Time!
            </h1> 
            <div className="flex flex-col items-center py-3">
            <Button className="text-2xl font-semibold w-4/12 h-4/12 transition-all border border-purple-500 hover:bg-white hover:text-purple-700"
                onClick={() => router.push("/dashboard")}
            >
                <ArrowRightIcon className="mr-2 h-6 w-7" /> Get started
            </Button></div>
        </div>
    )
}