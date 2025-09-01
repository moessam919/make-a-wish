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
                    className="absolute w-48 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
                />

                {/* Right star */}
                <Image
                    src="/startWhite.svg"
                    alt="Star decoration right"
                    width={1920}
                    height={1080}
                    className="absolute w-48 h-20 md:w-80 md:h-full right-4 top-1/2 transform -translate-y-1/2 md:right-10 lg:right-20"
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
                            National Leadership
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
                    className="hidden lg:block absolute w-48 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
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
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0057b8] mb-8">
                                    National Board of Directors
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
                                    {/* Reba Dominski */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/R. Dominksi.avif"
                                                alt="Reba Dominski"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Reba Dominski
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 mb-1">
                                                (Board Chair)
                                            </p>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                Senior EVP, Chief Social
                                                Responsibility Officer and
                                                President, U.S. Bank Foundation
                                            </p>
                                        </div>
                                    </div>

                                    {/* Orlando Ashford */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/_M0I7226.avif"
                                                alt="Orlando Ashford"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Orlando Ashford
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                Strategic Advisor, Fanatics
                                            </p>
                                        </div>
                                    </div>

                                    {/* Scooter Braun */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/Scooter Braun 2022 - Credit Bradford Rogne_0.avif"
                                                alt="Scooter Braun"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Scooter Braun
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                Founder of SB Projects
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phil Colaco */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/PCC.avif"
                                                alt="Phil Colaco"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Phil Colaco
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                CEO, Deloitte Corporate Finance
                                                LLC (Retired)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dr. Shirley Davis */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/Dr. S. Davis.avif"
                                                alt="Dr. Shirley Davis"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Dr. Shirley Davis
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                President & CEO of SDS Global
                                                Enterprises, Inc.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Josh D'Amaro */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/MicrosoftTeams-image (2).avif"
                                                alt="Josh D'Amaro"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Josh D&apos;Amaro
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                Chairman, Disney Experiences
                                            </p>
                                        </div>
                                    </div>

                                    {/* Doug Eckrote */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/eckrote.avif"
                                                alt="Doug Eckrote"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Doug Eckrote
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                SVP & COO, Zones LLC
                                            </p>
                                        </div>
                                    </div>

                                    {/* Whitney Eichinger */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-48 h-48 md:w-48 md:h-48  overflow-hidden mb-4">
                                            <Image
                                                src="/Whitney Eichinger.avif"
                                                alt="Whitney Eichinger"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-48 md:w-48">
                                            <h3 className="text-lg md:text-xl font-bold text-[#0057b8] mb-2">
                                                Whitney Eichinger
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                                Senior Vice President & Chief
                                                Communications Officer,
                                                Southwest Airlines
                                            </p>
                                        </div>
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
