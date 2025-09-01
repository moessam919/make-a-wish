import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideNavigation from "../../components/SideNavigation";

const page = () => {
    return (
        <div>
            <div className="bg-[#dcf0fb] relative  pb-5 md:pb-10 lg:pb-25 2xl:pb-50">
                {/* Left star */}
                <Image
                    src="/startWhite.svg"
                    alt="Star decoration left"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
                />

                {/* Right star */}
                <Image
                    src="/startWhite.svg"
                    alt="Star decoration right"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full right-4 top-1/2 transform -translate-y-1/2 md:right-10 lg:right-20"
                />

                <div className="py-16 px-4 sm:px-6 lg:py-10 lg:px-8 relative z-10">
                    <div className="text-center">
                        <p className="text-lg md:text-lg mb-6 text-[#0057b8]">
                            <Link
                                href="/about-us"
                                className="hover:underline transition-all duration-200"
                            >
                                About Us
                            </Link>
                        </p>
                        <p className="mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#0057b8]">
                            Social Media
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff] relative z-10">
                <div className="absolute -top-10 lg:-top-20 2xl:-top-45  left-0 w-full h-[60px] md:h-[90px] lg:h-[120px] 2xl:h-[180px]">
                    <Image
                        src="/curveWhite.svg"
                        alt="Curved top shape"
                        fill
                        className="object-cover"
                    />
                </div>

                <Image
                    src="/startWhite.svg"
                    alt="Star decoration left"
                    width={1920}
                    height={1080}
                    className="hidden lg:blockabsolute w-40 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
                />

                <div className="py-10 max-w-7xl px-6 mx-auto">
                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Column - Side Navigation */}
                        <div className="w-full lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-30 self-start">
                            <SideNavigation />
                        </div>

                        {/* Right Column - Content */}
                        <div className="flex-1">
                            <div className="bg-white">
                                <div className="text-center mb-12">
                                    <p className="text-lg md:text-xl lg:text-3xl text-[#0057b8] leading-relaxed max-w-4xl mx-auto">
                                        Keep up with the latest inspirational
                                        stories from our community and help
                                        support the Make-A-Wish community.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                    {/* Facebook */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-52 md:h-32 bg-[#1877f2]  flex items-center justify-center mb-4">
                                            <svg
                                                className="w-12 h-12 md:w-16 md:h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.528l-.552 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                            Facebook
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-800 mb-3">
                                            @makeawish
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#0057b8] hover:underline transition-all duration-200"
                                        >
                                            Follow Us on Facebook &gt;
                                        </Link>
                                    </div>

                                    {/* Twitter */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-52 md:h-32 bg-[#1da1f2]  flex items-center justify-center mb-4">
                                            <svg
                                                className="w-12 h-12 md:w-16 md:h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                            Twitter
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-800 mb-3">
                                            @makeawish
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#0057b8] hover:underline transition-all duration-200"
                                        >
                                            Follow Us on Twitter &gt;
                                        </Link>
                                    </div>

                                    {/* Instagram */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-52 md:h-32 bg-[#ffb54a] flex items-center justify-center mb-4">
                                            <Image
                                                src="/Instagram.avif"
                                                alt="Instagram"
                                                width={1920}
                                                height={1080}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                            Instagram
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-800 mb-3">
                                            @makeawishamerica
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#0057b8] hover:underline transition-all duration-200"
                                        >
                                            Follow Us on Instagram &gt;
                                        </Link>
                                    </div>

                                    {/* YouTube */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-52 md:h-32 bg-[#ff595d]  flex items-center justify-center mb-4">
                                            <svg
                                                className="w-12 h-12 md:w-16 md:h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.452L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                            YouTube
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-800 mb-3">
                                            youtube.com/makeawish
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#0057b8] hover:underline transition-all duration-200"
                                        >
                                            Subscribe to Our Channel &gt;
                                        </Link>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 md:w-52 md:h-32 bg-[#01bab4]  flex items-center justify-center mb-4">
                                            <svg
                                                className="w-12 h-12 md:w-16 md:h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.528-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                            LinkedIn
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-800 mb-3">
                                            linkedin.com/company/make-a-wish-foundation
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#0057b8] hover:underline transition-all duration-200"
                                        >
                                            Connect on LinkedIn &gt;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
