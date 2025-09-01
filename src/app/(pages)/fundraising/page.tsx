import SignUpSection from "@/app/components/SignUpSection";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="relative bg-[url('/Victoria_GA_south-korea.avif')] bg-cover bg-center bg-no-repeat h-[600px] ">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                    <p className="text-lg md:text-xl mb-6 max-w-2xl">
                        <Link
                            href="/get-involved"
                            className="hover:underline transition-all duration-200"
                        >
                            Get Involved
                        </Link>
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Help Grant Wishes in Your Community
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl">
                        Your passion can transform lives.
                    </p>
                </div>
            </div>
            <div className="relative bg-[#dcf0fb] w-full">
                {/* Curved top shape */}
                <div className="absolute -top-30 2xl:-top-45  left-0 w-full h-[120px] 2xl:h-[180px]">
                    <Image
                        src="/TopCurveWhite.svg"
                        alt="Curved top shape"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* FAQ Content */}
                <div className="relative pb-16 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg md:text-3xl  text-[#0057b8] leading-relaxed">
                            Join thousands of others and help us make every wish
                            come true.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="bg-gray-100 py-16 px-4">
                        <div className="max-w-7xl mx-auto bg-[#dcf0fb] p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 md:mb-20">
                                {/* Start Your Own Fundraiser Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/Jazmyn_smile_land_CREDIT_Anthony-Mazur_r.avif"
                                            alt="Smiling woman"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Start Your Own Fundraiser
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            Celebrate your birthday, challenge
                                            your co-workers or honor a loved
                                            one.
                                            <strong>
                                                {" "}
                                                Your fundraiser
                                            </strong>{" "}
                                            reflects what you care about. We
                                            simply provide the website and tools
                                            to help you succeed.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Start a Fundraiser
                                        </button>
                                    </div>
                                </div>

                                {/* Walk for Wishes Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/031_JG5D1667_r.avif"
                                            alt="Person jumping against blue sky"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Walk for Wishes
                                            <sup className="text-sm">®</sup>
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            <strong>
                                                Walk With Me. Wish With Me.
                                            </strong>{" "}
                                            Join your community in a
                                            family-friendly event that turns
                                            steps into life-changing wishes.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Register for a Walk
                                        </button>
                                    </div>
                                </div>

                                {/* Become a Wish Hero Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/FY21-Wish Heroes-Hero_Kaheem.avif"
                                            alt="Young child flexing muscles"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Become a Wish Hero
                                            <sup className="text-sm">SM</sup>
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            <strong>Wish Heroes</strong> create
                                            hope and possibility. The Wish Hero
                                            campaign celebrates our biggest and
                                            brightest stars who tell their story
                                            and invite their networks to donate
                                            and help make more wishes come true.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 md:mb-20">
                                {/* Start Your Own Fundraiser Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/Jazmyn_smile_land_CREDIT_Anthony-Mazur_r.avif"
                                            alt="Smiling woman"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Start Your Own Fundraiser
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            Celebrate your birthday, challenge
                                            your co-workers or honor a loved
                                            one.
                                            <strong>
                                                {" "}
                                                Your fundraiser
                                            </strong>{" "}
                                            reflects what you care about. We
                                            simply provide the website and tools
                                            to help you succeed.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Start a Fundraiser
                                        </button>
                                    </div>
                                </div>

                                {/* Walk for Wishes Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/031_JG5D1667_r.avif"
                                            alt="Person jumping against blue sky"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Walk for Wishes
                                            <sup className="text-sm">®</sup>
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            <strong>
                                                Walk With Me. Wish With Me.
                                            </strong>{" "}
                                            Join your community in a
                                            family-friendly event that turns
                                            steps into life-changing wishes.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Register for a Walk
                                        </button>
                                    </div>
                                </div>

                                {/* Become a Wish Hero Card */}
                                <div className="bg-white  shadow-lg overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <Image
                                            src="/FY21-Wish Heroes-Hero_Kaheem.avif"
                                            alt="Young child flexing muscles"
                                            className="w-full h-64 object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Camera className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Become a Wish Hero
                                            <sup className="text-sm">SM</sup>
                                        </h3>
                                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                                            <strong>Wish Heroes</strong> create
                                            hope and possibility. The Wish Hero
                                            campaign celebrates our biggest and
                                            brightest stars who tell their story
                                            and invite their networks to donate
                                            and help make more wishes come true.
                                        </p>
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SignUpSection />
                <div></div>
            </div>
        </div>
    );
};

export default page;
