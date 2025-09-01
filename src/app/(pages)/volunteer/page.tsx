import SignUpSection from "@/app/components/SignUpSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="relative">
            {" "}
            <div className="relative h-[90%]">
                {/* Background image */}
                <Image
                    src="/Bowde_treehouse_land_PosterImage_hero_R.avif"
                    alt="Refer a child background"
                    width={1920}
                    height={1080}
                    className="object-contain object-center w-full"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white pl-4 lg:pl-20 z-10">
                    <p className="text-lg md:text-xl mb-6 max-w-2xl">
                        <Link
                            href="/get-involved"
                            className="hover:underline transition-all duration-200"
                        >
                            Get Involved
                        </Link>
                    </p>
                    <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl mb-4 max-w-4xl text-center">
                        Volunteer with Make-A-Wish® and join a caring community
                        of more than 24,000 volunteers who transform lives
                    </h1>

                    <p className="text-lg">
                        You can make wishes come true. Starting today!
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row min-h-[600px] pb-">
                {/* Left section - Blue text area */}
                <div className="flex-1 bg-white px-8  lg:px-16 py-12 lg:py-16 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-3xl  font-normal text-[#0057b8] mb-8 leading-tight">
                        Your time and talents are critical to bringing strength
                        and hope to wish kids.
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                        Make-A-Wish volunteers consider their work impactful and
                        meaningful. By helping us get closer to granting the
                        wish of every eligible child, our volunteers are at the
                        heart of every wish experience. Volunteers even have the
                        freedom to choose when and how they would like to
                        transform lives in their communities.
                    </p>
                </div>

                {/* Right section - Yellow CTA area */}
                <div className="flex-1 bg-[#fbd872] px-8 lg:px-16 py-12 lg:py-16 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl lg:text-2xl text-[#0057b8] mb-8 leading-tight">
                        Discover how you can make an impact on wish kids in your
                        community.
                    </h3>
                    <Link
                        href="/local-chapters"
                        className="bg-[#FF585D] hover:bg-red-600 text-white font-semibold py-4 px-12 rounded-full text-lg transition-colors duration-200 inline-block"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="bg-[#0057b8] relative z-10">
                <div className="absolute -top-10 lg:-top-20 2xl:-top-45  left-0 w-full h-[60px] md:h-[90px] lg:h-[120px] 2xl:h-[180px]">
                    <Image
                        src="/curveblue.svg"
                        alt="Curved top shape"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-center pt-10 lg:pt-0">
                    <h1 className="text-white text-2xl lg:text-3xl  font-bold">
                        Volunteer Opportunities
                    </h1>
                </div>
                <div className="px-8 lg:px-16 py-12 lg:py-16">
                    {/* First Row - Three volunteer roles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-center max-w-7xl mx-auto">
                        {/* Wish Granter */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6 ">
                                Wish Granter
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                Wish granters meet with wish kids and their
                                families and help children determine a wish.
                                They also work alongside Make-A-Wish staff and
                                wish families during the wish process.
                            </p>
                        </div>

                        {/* Translator/Interpreter */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-white">
                                Translator/Interpreter
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                A translator/interpreter accompanies trained
                                wish granters on wish family visits to
                                facilitate clear communication. They may also
                                help with translating documents and other
                                material.
                            </p>
                        </div>

                        {/* Office Volunteer */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-white">
                                Office Volunteer
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                Office volunteers assist chapter staff with
                                miscellaneous tasks including phone calls, wish
                                research, data entry, filing and mailings.
                            </p>
                        </div>
                    </div>

                    {/* Second Row - Additional volunteer opportunities */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
                        {/* Special Events Volunteer */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6 ">
                                Special Events Volunteer
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                Help organize and execute fundraising events,
                                community outreach programs, and awareness
                                campaigns that support our mission.
                            </p>
                        </div>

                        {/* Wish Escort */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-white">
                                Wish Escort
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                Accompany wish families on their wish
                                experiences, providing support and ensuring
                                everything goes smoothly during their special
                                moments.
                            </p>
                        </div>

                        {/* Community Outreach */}
                        <div className="bg-[#0150a9]  p-8 text-center ">
                            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6 ">
                                Community Outreach
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed text-white">
                                Represent Make-A-Wish at community events,
                                schools, and organizations to raise awareness
                                and recruit new volunteers and supporters.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right star */}
                <Image
                    src="/stars.svg"
                    alt="Star decoration right"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full right-4 -bottom-10  md:right-10 lg:right-20 -z-1"
                />
            </div>
            <div className="relative">
                <div className="bg-white py-16 px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#0057b8] mb-4">
                                Volunteer Stories
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Discover the incredible impact our volunteers
                                make in the lives of wish kids and their
                                families.
                            </p>
                        </div>

                        {/* Three Story Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Story 1 - Wish kids' joy keeps volunteers coming back for more */}
                            <div className="bg-white  overflow-hidden ">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/031_JG5D1667_r.avif"
                                        alt="Volunteers with wish kid"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#0057b8] mb-3">
                                        Wish kids&apos; joy keeps volunteers
                                        coming back for more
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        For Jim and Kathy Donovan, there is
                                        nothing more powerful than seeing the
                                        results of their wish granting efforts.
                                    </p>
                                    <Link
                                        href="/volunteer/stories/jim-kathy-donovan"
                                        className="text-[#0057b8] font-semibold hover:underline inline-flex items-center"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Story 2 - There is a wish awaiting your talents */}
                            <div className="bg-white  overflow-hidden ">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/Aiden and Jefferson after practice.avif"
                                        alt="Volunteers with wish family"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#0057b8] mb-3">
                                        There is a wish awaiting your talents
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Abe knew he wanted to do something big –
                                        bringing a construction company and
                                        friends together to make Noah&apos;s
                                        wish possible.
                                    </p>
                                    <Link
                                        href="/volunteer/stories/abe-noah-wish"
                                        className="text-[#0057b8] font-semibold hover:underline inline-flex items-center"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Story 3 - One volunteer can transform the lives of hundreds of wish kids */}
                            <div className="bg-white  overflow-hidden ">
                                <div className="aspect-video relative">
                                    <Image
                                        src="/FY21-Wish Heroes-Hero_Kaheem.avif"
                                        alt="Volunteer with wish kid"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#0057b8] mb-3">
                                        One volunteer can transform the lives of
                                        hundreds of wish kids
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Ken Kieffer has granted wishes since
                                        1997. He even stays connected to
                                        families long after a wish comes true.
                                    </p>
                                    <Link
                                        href="/volunteer/stories/ken-kieffer"
                                        className="text-[#0057b8] font-semibold hover:underline inline-flex items-center"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SignUpSection />
            </div>
        </div>
    );
};

export default page;
