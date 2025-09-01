"use client";
import {
    ChevronDown,
    Facebook,
    Instagram,
    Search,
    X,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DonateButn from "./DonateButn";

const DcNav = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100); // Adjust this value as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="">
            {/* Links - Always static */}
            <div className="relative hidden lg:block">
                {isSearchOpen && (
                    <div className="absolute inset-0 bg-[#004796] z-20 flex items-center justify-between px-6">
                        <input
                            type="text"
                            placeholder="Enter Search Term..."
                            className=" w-full bg-[#004796] text-white text-2xl border-b-2 border-white py-2 px-4 outline-none placeholder-white/70"
                            autoFocus
                        />
                        <button onClick={toggleSearch} className="ml-4">
                            <X className="text-white cursor-pointer hover:text-[#ff585d] transform duration-200" />
                        </button>
                    </div>
                )}

                {/* Top links section - always visible and static */}
                <div className="bg-white p-4 ">
                    {/* links */}
                    <div className="lg:max-w-7xl mx-auto flex">
                        <div className="w-1/2 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#0057b8] text-md font-bold ">
                                    <Link
                                        href="/contact-us"
                                        className="flex justify-between hover:underline"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold">
                                    <Link
                                        href="/"
                                        className="flex justify-between hover:underline"
                                    >
                                        En Español
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold">
                                    <Link
                                        href="/"
                                        className="flex justify-between hover:underline"
                                    >
                                        Local Chapters
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold">
                                    <Link
                                        href="/careers"
                                        className="flex justify-between hover:underline"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li className="text-[#0057b8] text-md font-bold group relative">
                                    <button className="flex items-center gap-2 focus:outline-none group-hover:text-[#ff585d] transition-colors duration-300">
                                        About Us
                                        <ChevronDown
                                            size={20}
                                            className="transform transition-transform duration-300 group-hover:rotate-180"
                                        />
                                    </button>

                                    {/* Dropdown menu */}
                                    <div className="absolute left-0 mt-2 bg-white shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[200px] transition-all duration-300 origin-top">
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="block px-4 py-2 text-[#0057b8] text-md hover:bg-gray-200 hover:text-[#ff585d] transition-colors duration-200"
                                                >
                                                    Our History
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/mission"
                                                    className="block px-4 py-2 text-[#0057b8] text-md hover:bg-gray-200 hover:text-[#ff585d] transition-colors duration-200"
                                                >
                                                    Our Mission
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/our-stories"
                                                    className="block px-4 py-2 text-[#0057b8] text-md hover:bg-gray-200 hover:text-[#ff585d] transition-colors duration-200"
                                                >
                                                    Our Stories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/managing-our-funds"
                                                    className="block px-4 py-2 text-[#0057b8] text-md hover:bg-gray-200 hover:text-[#ff585d] transition-colors duration-200"
                                                >
                                                    Managing Our Funds
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/leadership"
                                                    className="block px-4 py-2 text-[#0057b8] text-md hover:bg-gray-200 hover:text-[#ff585d] transition-colors duration-200"
                                                >
                                                    Leadership
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* icons */}
                        <div className="flex items-center justify-end gap-6 w-1/2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 50 50"
                                className="fill-[#0057B8] hover:fill-[#ff585d] transition-colors duration-300 cursor-pointer"
                            >
                                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                            </svg>
                            <Facebook
                                size={30}
                                className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer"
                            />
                            <Instagram
                                size={30}
                                className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer"
                            />
                            <Youtube
                                size={30}
                                className="text-[#0057B8] hover:text-[#ff585d] transition-colors duration-300 cursor-pointer"
                            />
                            <button onClick={toggleSearch}>
                                <Search
                                    size={30}
                                    className="text-[#0057B8] cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo section - Only this becomes fixed when scrolling */}
            <div
                className={`bg-[#0057b8] transition-all duration-300 hidden lg:block ${
                    isScrolled
                        ? "fixed top-0 left-0 right-0 z-50 shadow-lg p-2"
                        : ""
                }`}
            >
                <div className="lg:max-w-7xl mx-auto flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <Link href="/">
                            <Image
                                width={1920}
                                height={1080}
                                src="/logo.svg"
                                alt="logo"
                                className={`object-contain transition-all duration-300 ${
                                    isScrolled ? "w-48" : "w-64"
                                }`}
                            />
                        </Link>
                    </div>

                    {/* links */}
                    <div>
                        <ul className="flex items-center justify-center gap-12">
                            <Link
                                href="/impact"
                                className="text-white text-xl font-bold   "
                            >
                                <li
                                    className={`hover:bg-[#004796] transition-colors duration-300 ${
                                        isScrolled ? "py-6 px-4" : "py-10 px-4"
                                    }`}
                                >
                                    Impact of a Wish
                                </li>
                            </Link>

                            {/* DROPDOWN - Click to toggle */}
                            <li className="relative">
                                <button
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    className="text-white text-xl font-bold block"
                                >
                                    <div
                                        className={`hover:bg-[#004796] transition-colors duration-300 flex items-center ${
                                            isScrolled
                                                ? "py-6 px-4"
                                                : "py-10 px-4"
                                        }`}
                                    >
                                        Get Involved
                                        <ChevronDown
                                            size={20}
                                            className={`ml-2 transform transition-transform duration-300 ${
                                                isDropdownOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                </button>

                                {/* Dropdown menu */}
                                <div
                                    className={`absolute left-0 top-full bg-white shadow-lg z-10 min-w-[250px] transition-all duration-300 origin-top ${
                                        isDropdownOpen
                                            ? "opacity-100 visible transform scale-y-100"
                                            : "opacity-0 invisible transform scale-y-0"
                                    }`}
                                >
                                    <div className="w-full h-full">
                                        <ul className="py-1">
                                            <li className="hover:bg-gray-100">
                                                <Link
                                                    href="/fundraising"
                                                    className="block px-4 py-3 text-[#0057b8] text-lg font-semibold transition-colors duration-200 w-full"
                                                >
                                                    Fundraise
                                                </Link>
                                            </li>
                                            <li className="hover:bg-gray-100">
                                                <Link
                                                    href="/volunteer"
                                                    className="block px-4 py-3 text-[#0057b8] text-lg font-semibold transition-colors duration-200 w-full"
                                                >
                                                    Volunteer
                                                </Link>
                                            </li>
                                            <li className="hover:bg-gray-100">
                                                <Link
                                                    href="/become-a-national-partner"
                                                    className="block px-4 py-3 text-[#0057b8] text-lg font-semibold transition-colors duration-200 w-full"
                                                >
                                                    Corporate Partners
                                                </Link>
                                            </li>
                                            <li className="hover:bg-gray-100">
                                                <Link
                                                    href="/your-wish-journey-continues"
                                                    className="block px-4 py-3 text-[#0057b8] text-lg font-semibold transition-colors duration-200 w-full"
                                                >
                                                    Wish Alumni Community
                                                </Link>
                                            </li>
                                            <li className="hover:bg-gray-100">
                                                <Link
                                                    href="/other-ways-to-support"
                                                    className="block px-4 py-3 text-[#0057b8] text-lg font-semibold transition-colors duration-200 w-full"
                                                >
                                                    Other Ways to Support
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <Link
                                href="/refer-a-child"
                                className="text-white text-xl font-bold "
                            >
                                <li
                                    className={`hover:bg-[#004796] transition-colors duration-300 ${
                                        isScrolled ? "py-6 px-4" : "py-10 px-4"
                                    }`}
                                >
                                    Refer a Child
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <DonateButn width="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DcNav;
