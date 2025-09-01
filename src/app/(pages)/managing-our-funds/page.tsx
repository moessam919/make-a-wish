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
                            Managing Our Funds
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
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
                                    Make-A-Wish America proudly manages and
                                    safeguards the generous contributions of
                                    individual donors, corporations and other
                                    organizations. We also support local
                                    Make-A-Wish chapters in their day-to-day
                                    work granting life-changing wishes. This
                                    includes helping chapters develop resources,
                                    administer programs and referrals and
                                    navigate policies and guidelines.
                                </p>
                                <Image
                                    src="/MAW_FY21_Operational_Charts_1920p_LEGENDS.avif"
                                    alt="Curved top shape"
                                    width={1920}
                                    height={1080}
                                    className="object-cover"
                                />

                                <div className="mt-12">
                                    {/* National Office Section */}
                                    <div className="mb-12">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#0057b8] mb-4">
                                            National Office
                                        </h2>
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                                            DOWNLOADS
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/Annual_Report_FY24_FINAL.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2024 Annual Report (PDF |
                                                    11 MB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/Public Inspection - MAWFA - 08.31.2024 Form 990.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2024 Form 990 (PDF | 404
                                                    KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/SIGNED Public_Inspection_-_MAWFA_-_08.31.2023_Form_990.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2023 Form 990 (PDF | 558
                                                    KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/Annual_Report_FY23_FINAL_Spreads.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2023 Annual Report (PDF |
                                                    13.3 MB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/PDF Final Report of Make-A-Wish Foundation of America (1).pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2022-2023 Make-A-Wish
                                                    America Financial Statement
                                                    (PDF | 504 KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/Annual_Report_FY22_FINAL_FullQuality.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2022 Annual Report (PDF |
                                                    20 MB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/Public Inspection - MAWFA - 08.31.2022 Form 990.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2022 Form 990 (PDF | 387
                                                    KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/PDF Final Report of Make-A-Wish Foundation of America.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2021-2022 Make-A-Wish
                                                    America Financial Statement
                                                    (PDF | 517 KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/2020 MAWF of America Form 990 (Public Disclosure).pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2021 Form 990 (PDF | 457
                                                    KB)
                                                </Link>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="/MAW_Annual_Report_FY21_FINAL_Digital_Spreads_0.pdf"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    FY 2021 Annual Report (PDF
                                                    File | 2.9MB)
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Archive Section */}
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#0057b8] mb-4">
                                            Archive
                                        </h2>
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                                            DOWNLOADS
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <Link
                                                    href="#"
                                                    className="text-[#0057b8] underline hover:no-underline transition-all duration-200"
                                                >
                                                    Financial Statements
                                                    2007-2020
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col  justify-center mt-20 w-90 mx-auto">
                                    <Image
                                        src="/Untitled design (7).avif"
                                        alt="Curved top shape"
                                        width={1920}
                                        height={1080}
                                        className="object-cover w-90"
                                    />

                                    <h1 className="text-lg md:text-xl text-[#0057b8] mb-4">
                                        Better Business Bureau
                                    </h1>
                                    <p className="text-lg md:text-xl  text-gray-700 mb-6 leading-relaxed">
                                        We are proud that Make-A-Wish America is
                                        an accredited charity under the BBB Wise
                                        Giving Alliance&apos;s Standards for Ch
                                    </p>
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
