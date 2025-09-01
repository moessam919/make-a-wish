"use client";
import {
    ChevronRight,
    Facebook,
    Instagram,
    Menu,
    Search,
    Youtube,
    X,
} from "lucide-react";
import Image from "next/image";
import DonateButn from "./DonateButn";
import Link from "next/link";
import { useState, useEffect } from "react";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* mobile nav */}
            <div
                className={`lg:hidden flex w-[100%] transition-all duration-300 ${
                    isScrolled
                        ? "fixed top-0 left-0 right-0 z-50 shadow-lg"
                        : ""
                }`}
            >
                {/* Logo + Menu */}
                <div className="flex justify-between items-center w-full bg-[#0057b8] p-4">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={120}
                        height={200}
                        className="object-contain"
                    />

                    <button onClick={toggleMenu} className="relative">
                        <div
                            className={`transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-0 rotate-90 scale-0"
                                    : "opacity-100 rotate-0 scale-100"
                            }`}
                        >
                            <Menu className="text-white size-9" />
                        </div>
                        <div
                            className={`absolute top-0 left-0 transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-100 rotate-0 scale-100"
                                    : "opacity-0 rotate-90 scale-0"
                            }`}
                        >
                            <X className="text-white size-9" />
                        </div>
                    </button>
                </div>

                {/* Donate */}
                <DonateButn width="w-[40%]" />
            </div>

            {/* navLinks Mobile */}
            {isMenuOpen && (
                <div
                    className={`fixed left-0 right-0 bottom-0 bg-white z-10 overflow-y-auto animate-fadeIn lg:hidden ${
                        isScrolled ? "top-[60px]" : "top-[60px]"
                    }`}
                >
                    <div className="flex flex-col justify-between w-full p-4">
                        <div className="w-full relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full p-2 border border-gray-300 "
                            />
                            <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#206cc1]" />
                        </div>
                        {/* links */}
                        <div className="mt-4">
                            <ul className="w-full space-y-6">
                                <li className="text-[#0057b8] text-xl font-bold  border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/impact"
                                        className="flex justify-between"
                                    >
                                        Impact of a Wish
                                        <ChevronRight />
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-xl font-bold border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/"
                                        className="flex justify-between"
                                    >
                                        Get Involved
                                        <ChevronRight />
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-xl font-bold border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/refer-a-child"
                                        className="flex justify-between"
                                    >
                                        Refer a Child
                                        <ChevronRight />
                                    </Link>
                                </li>
                            </ul>

                            {/* social icaons */}

                            <div className="flex items-center justify-center gap-6 mt-6">
                                <Instagram className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 50 50"
                                    className="fill-[#0057B8] hover:fill-[#ff585d] transition-colors duration-300 cursor-pointer"
                                >
                                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                </svg>
                                <Youtube className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer" />
                                <Facebook className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer" />
                            </div>

                            {/* links */}
                            <ul className="w-full space-y-6 mt-10">
                                <li className="text-[#0057b8] text-md font-bold  border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/contact-us"
                                        className="flex justify-between"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/"
                                        className="flex justify-between"
                                    >
                                        En Español
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/"
                                        className="flex justify-between"
                                    >
                                        Local Chapters
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold border-b border-b-gray-400 pb-4">
                                    <Link
                                        href="/careers"
                                        className="flex justify-between"
                                    >
                                        Careers
                                    </Link>
                                </li>
                            </ul>

                            {/* about us links */}
                            <ul className="w-full space-y-5">
                                <li className="text-[#0057b8] text-sm font-bold bg-gray-200 px-2 pt-2">
                                    About Us
                                </li>

                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/about-us"
                                        className="flex justify-between"
                                    >
                                        Our History
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/mission"
                                        className="flex justify-between"
                                    >
                                        Our Mission
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/our-stories"
                                        className="flex justify-between"
                                    >
                                        Our Stories
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/managing-our-funds"
                                        className="flex justify-between"
                                    >
                                        Managing Our Funds
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/leadership"
                                        className="flex justify-between"
                                    >
                                        Leadership
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/"
                                        className="flex justify-between"
                                    >
                                        Social
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold ml-5">
                                    <Link
                                        href="/careers"
                                        className="flex justify-between"
                                    >
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
