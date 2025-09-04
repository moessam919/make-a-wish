"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ContactUsBtnProps {
    width?: string;
}

const ContactUsBtn: React.FC<ContactUsBtnProps> = ({ width = "w-full" }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const animationInterval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => setIsAnimating(true), 100);
        }, 3000);

        return () => clearInterval(animationInterval);
    }, []);

    return (
        <div
            className={`flex items-center justify-center ${width} bg-[#FF585D] lg:rounded-full`}
        >
            <Link href="/contact-us" className="w-full">
                <button className="relative overflow-hidden text-white font-semibold w-full text-xl bg-[#FF585D] p-4 hover:lg:py-10 lg:rounded-full hover:lg:rounded-[0px]  hover:bg-[#e54850] transition-colors duration-200">
                    {isAnimating && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                            <div className="animate-spin-and-grow">
                                <Image
                                    src="/singleStar.svg"
                                    alt="star"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    )}

                    {/* Button text always on top */}
                    <span className="relative z-10 lg:px-5">Contact Us</span>

                    <style jsx global>{`
                        @keyframes spin-and-grow {
                            0% {
                                transform: rotate(0deg) scale(0.1);
                                opacity: 0;
                            }
                            50% {
                                transform: rotate(180deg) scale(5);
                                opacity: 0.8;
                            }
                            100% {
                                transform: rotate(360deg) scale(10);
                                opacity: 0;
                            }
                        }

                        .animate-spin-and-grow {
                            animation: spin-and-grow 2s ease-out forwards;
                        }
                    `}</style>
                </button>
            </Link>
        </div>
    );
};

export default ContactUsBtn;