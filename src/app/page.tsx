import Image from "next/image";
import SignUpSection from "./components/SignUpSection";

export default function Home() {
    return (
        <div className="relative">
            <div
                className={`p-4 xl:p-8 flex items-center justify-center bg-[#8dc8e8] transition-all duration-400`}
            >
                <Image
                    src="/maw-star.avif"
                    alt="tv"
                    width={1920}
                    height={1080}
                    className="object-contain mr-2 w-3 xl:w-8"
                />
                <div className="flex items-center">
                    <span className="underline text-[#1164be] xl:text-3xl">
                        Did you see us on TV?
                    </span>
                </div>
                <Image
                    src="/maw-star.avif"
                    alt="tv"
                    width={1920}
                    height={1080}
                    className="object-contain ml-2 w-3 xl:w-8"
                />
            </div>
            {/* hero section */}
            <div className="">
                <div className="relative h-[400px] xl:h-[800px] 2xl:h-[1000px] bg-[url('/andrew-hero-psd-fix.png')] bg-cover bg-center">
                    {/* Left overlay */}
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 to-transparent"></div>

                    {/* Hero content */}
                    <div className="relative flex flex-col h-full justify-between">
                        <div className="relative flex flex-col p-5 md:p-16">
                            <h1 className="text-2xl w-4/5 md:text-3xl xl:text-6xl font-bold  text-white">
                                Create brighter tomorrows
                                <span className="block">
                                    for wish kids today.
                                </span>
                            </h1>

                            <div
                                className={`flex items-center justify-center bg-[#FF585D] rounded-full w-fit xl:max-w-sm mt-5 xl:mt-10`}
                            >
                                <button className="relative overflow-hidden text-white font-semibold w-full text-xl xl:text-5xl bg-[#FF585D] p-4 xl:py-6 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                                    {/* Button text always on top */}
                                    <span className="relative z-5 lg:px-5">
                                        Donate Now
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col xl:gap-5 p-5 gap-2 md:gap-0 md:px-16 md:py-0 xl:py-10">
                            <p className="text-[#fbd872] text-xl xl:text-4xl ">
                                I wish to have a
                                <span className="block">
                                    {" "}
                                    backyard golf course
                                </span>
                            </p>
                            <p className="text-white text-xl xl:text-4xl ">
                                Andrew, 4<span className="block">leukemia</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row h-full lg:h-[500px] xl:h-[800px]">
                <div className="w-full lg:w-1/2 2xl:w-[95%]">
                    <Image
                        src="/Mary Alice_9_Blood Disorder_to go to a dude ranch in Colorado_3.avif"
                        alt="Mary Alice at dude ranch"
                        width={1920}
                        height={1080}
                        className="w-full h-[400px] lg:h-full object-cover object-top"
                        priority
                    />
                </div>

                <div className="w-full lg:w-1/2 bg-[#0057b8] p-6 lg:p-12 flex items-center justify-center h-full relative">
                    <div className="absolute top-0 left-10 w-fit h-full">
                        <Image
                            src="/stars.svg"
                            alt="stars Logo"
                            width={1920}
                            height={1080}
                            className="w-98"
                        />
                    </div>

                    {/* Mobile top curve - only shows on mobile */}
                    <div className="absolute -top-16 left-0 w-fit h-[65px] z-10 lg:hidden">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1280 90"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M640.00039,0 C372.465227,0 136.971084,35.781 0,90 L1280.00078,90 C1143.0297,35.781 907.535554,0 640.00039,0 Z"
                                fill="#0057b8"
                            />
                        </svg>
                    </div>

                    {/* Curved shape - positioned on top for mobile, left for lg+ */}
                    <div className="absolute -top-100 lg:top-0 lg:-left-24 w-full lg:w-auto h-full lg:h-full z-10">
                        <svg
                            className="hidden lg:block lg:h-full lg:w-32 "
                            viewBox="0 0 100 200"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 0 L100 200 L60 200 C40 180 20 160 10 140 C0 120 0 80 10 60 C20 40 40 20 60 0 Z"
                                fill="rgba(0, 87, 184, 1)"
                            />
                        </svg>
                    </div>
                    <div className="text-white w-[80%] relative z-5">
                        <Image
                            src="/MAW_Trips_Transform_LOGO_RGB_REV.avif"
                            alt="Make-A-Wish Trips That Transform Logo"
                            width={1920}
                            height={1080}
                            className="w-98"
                        />
                        <h2 className="text-2xl lg:text-3xl mb-4">
                            This August, give a child a world of hope with a
                            life-changing trip.
                        </h2>
                        <p className="text-md lg:text-md mb-4">
                            Travel wishes need YOU. With more than 75% of wishes
                            involving travel, Make-A-Wish needs more than 3.2
                            billion airline miles and points to cover travel
                            wishes each year.
                        </p>
                        <div
                            className={`flex items-center justify-center bg-[#FF585D] rounded-full w-fit mx-auto lg:mx-0 lg:max-w-sm mt-5 xl:mt-10`}
                        >
                            <button className="relative overflow-hidden text-white font-semibold w-full text-xl xl:text-xl bg-[#FF585D] p-4 xl:py-6 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                                {/* Button text always on top */}
                                <span className="relative z-5 lg:px-5">
                                    Donate Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#dcf0fb] flex flex-col justify-center items-center py-15">
                <h2 className="text-[#0057b8] text-xl lg:text-4xl">
                    Your Gift Grants Wishes
                </h2>
                <div
                    className={`flex items-center justify-center bg-[#FF585D] rounded-full w-fit mx-auto lg:mx-0 lg:max-w-sm mt-5 xl:mt-10`}
                >
                    <button className="relative overflow-hidden text-white font-semibold w-full text-xl xl:text-lg bg-[#FF585D] p-4 xl:py-4 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                        {/* Button text always on top */}
                        <span className="relative z-5 lg:px-5">Donate Now</span>
                    </button>
                </div>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row-reverse h-full lg:h-[500px] xl:h-[800px]">
                    <div className="w-full lg:w-1/2 2xl:w-[95%]">
                        <Image
                            src="/Aiden and Jefferson after practice.avif"
                            alt="Aiden and Jefferson after practice"
                            width={1920}
                            height={1080}
                            className="w-full h-[400px] lg:h-full object-cover object-top"
                            priority
                        />
                    </div>

                    <div className="w-full lg:w-1/2 bg-[#0057b8] p-6 lg:p-12 flex items-center justify-center h-full relative">
                        <div className="absolute top-0 left-10 w-fit h-full">
                            <Image
                                src="/stars.svg"
                                alt="stars Logo"
                                width={1920}
                                height={1080}
                                className="w-98"
                            />
                        </div>

                        {/* Mobile top curve - only shows on mobile */}
                        <div className="absolute -top-16 left-0 w-fit h-[65px] z-10 lg:hidden">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 1280 90"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M640.00039,0 C372.465227,0 136.971084,35.781 0,90 L1280.00078,90 C1143.0297,35.781 907.535554,0 640.00039,0 Z"
                                    fill="#0057b8"
                                />
                            </svg>
                        </div>

                        {/* Curved shape - positioned on top for mobile, right for lg+ */}
                        <div className="absolute -top-100 lg:top-0 lg:-right-24 w-full lg:w-auto h-full lg:h-full z-10">
                            <svg
                                className="hidden lg:block lg:h-full lg:w-32"
                                viewBox="0 0 100 200"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 0 L0 200 L40 200 C60 180 80 160 90 140 C100 120 100 80 90 60 C80 40 60 20 40 0 Z"
                                    fill="rgba(0, 87, 184, 1)"
                                />
                            </svg>
                        </div>
                        <div className="text-white w-[80%] relative z-5">
                            <Image
                                src="/ESPN_Logo_Red_1200x720.png"
                                alt="ESPN_Logo_Red  Logo"
                                width={1920}
                                height={1080}
                                className="w-98"
                            />
                            <h2 className="text-2xl lg:text-3xl mb-4">
                                Watch Athletes Transform Lives on ESPN® &quot;My
                                Wish&quot;
                            </h2>
                            <p className="text-md lg:text-md mb-4">
                                Experience an in-depth journey into the lives of
                                wish kids as their wishes to meet their sports
                                heroes come true as seen on ESPN&apos;s &quot;My
                                Wish&quot; on SportsCenter.
                            </p>
                            <div
                                className={`flex items-center justify-center bg-[#FF585D] rounded-full w-fit mx-auto lg:mx-0 lg:max-w-sm mt-5 xl:mt-10 mb-10 lg:mb-0`}
                            >
                                <button className="relative overflow-hidden text-white font-semibold w-full text-xl xl:text-xl bg-[#FF585D] p-4 xl:py-6 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                                    {/* Button text always on top */}
                                    <span className="relative z-5 lg:px-5">
                                        Learn More
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="">
                <div className="max-w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-auto lg:h-[400px]">
                        {/* Left Column - Two Rows */}
                        <div className="flex flex-col">
                            {/* First Stat - Yellow */}
                            <div className="bg-[#fbd872] p-8 lg:p-6 flex items-center flex-1">
                                <div className="flex items-center lg:justify-around space-x-6">
                                    <div className="">
                                        <Image
                                            src="/icon2.svg"
                                            alt="ESPN_Logo_Red  Logo"
                                            width={1920}
                                            height={1080}
                                            className="w-15"
                                        />
                                    </div>
                                    <div className="lg:w-[50%] lg:mt-10">
                                        <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                                            302
                                        </div>
                                        <div className="text-md lg:text-xl text-black leading-tight">
                                            wishes were granted last week
                                            because of donors like you
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Stat - Teal */}
                            <div className="bg-[#00bab3] p-8 lg:p-6 flex items-center flex-1">
                                <div className="flex items-center lg:justify-around space-x-6">
                                    <div className="">
                                        <Image
                                            src="/icon3.svg"
                                            alt="ESPN_Logo_Red  Logo"
                                            width={1920}
                                            height={1080}
                                            className="w-15"
                                        />
                                    </div>
                                    <div className="lg:w-[50%] lg:mt-10">
                                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                            99%
                                        </div>
                                        <div className="text-lg lg:text-xl text-white leading-tight">
                                            of doctors say wishes help relieve a
                                            family from traumatic stress
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - One Row */}
                        <div className="bg-[#9edafb] p-8 lg:p-12 flex  lg:items-center lg:justify-center">
                            <div className="flex lg:flex-col lg:justify-center lg:text-center items-center space-x-6">
                                <div className="">
                                    <Image
                                        src="/icon.svg"
                                        alt="ESPN_Logo_Red  Logo"
                                        width={1920}
                                        height={1080}
                                        className="w-15"
                                    />
                                </div>
                                <div className="lg:w-[50%] lg:mt-10">
                                    <div className="text-4xl lg:text-6xl font-bold text-black mb-2">
                                        87%
                                    </div>
                                    <div className="text-lg lg:text-xl text-black leading-tight">
                                        of alumni say their wish was a turning
                                        point in their treatment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SignUpSection />
        </div>
    );
}
