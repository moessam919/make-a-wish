import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import SignUpSection from "@/app/components/SignUpSection";

const page = () => {
    return (
        <div>
            <div className="relative bg-[url('/Victoria_GA_south-korea.avif')] bg-cover bg-center bg-no-repeat h-[500px] ">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl">
                        Thank you for your interest in Make-A-Wish®.
                    </p>
                    <p className="text-base md:text-md mb-10">
                        Click{" "}
                        <Link
                            href="/local-chapters"
                            className="underline hover:text-blue-300 transition-colors"
                        >
                            here
                        </Link>{" "}
                        to find your local chapter or for National and
                        International Office contact details.
                    </p>
                </div>
            </div>

            {/* FAQ Section with curved top */}
            <div className="relative bg-[#dcf0fb] w-full">
                {/* Left star */}
                <Image
                    src="/startWhite.svg"
                    alt="Star decoration left"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full left-4 top-10 transform -translate-y-1/2 md:left-10 lg:left-20"
                />

                {/* Right star */}
                <Image
                    src="/startWhite.svg"
                    alt="Star decoration right"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full right-4 top-10 transform -translate-y-1/2 md:right-10 lg:right-20"
                />

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
                            Feel free to review the{" "}
                            <Link
                                href="/faq"
                                className="underline font-bold hover:text-blue-800"
                            >
                                Frequently Asked Questions
                            </Link>{" "}
                            (FAQ) a topic below for answers to some of the most
                            commonly asked questions. If your area of interest
                            is not addressed, we look forward to hearing from
                            you.
                        </p>
                    </div>
                </div>

                {/* form */}

                <ContactForm />

                <SignUpSection />
                <div></div>
            </div>
        </div>
    );
};

export default page;
