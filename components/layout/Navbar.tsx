"use client"

import useScroll from "@/lib/hooks/use-scroll"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Navbar() {
    const scrolled = useScroll(50);

    return (
        <>
            <div
                className={`fixed top-0 w-full flex justify-center ${
                    scrolled
                        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                        : "bg-white/0"
                }`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
                    <Link href="/" className="flex items-center font-display text-3xl font-semibold">
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={30}
                          height={30}
                          className="mr-2 rounded-sm"
                        ></Image>
                        <p>Gym<a className="text-purple-700">Track</a></p>
                    </Link>
                    <div>
                        
                            <SignInButton>
                                <Button className="p-1.5 text-xl pl-2 px-4 mr-4 font-semibold transition-all border border-purple-500 hover:bg-white hover:text-purple-700">Sign-in
                            </Button></SignInButton>
                        
                        <SignUpButton><Button className="p-1.5 text-xl pl-2 px-4 font-semibold transition-all border border-purple-500 hover:bg-white hover:text-purple-700">
                            
                                Sign-up</Button>
                            </SignUpButton>
                        
                    </div>
                </div>
            </div>
        </>
    )
}