import SignUpSection from "@/app/components/SignUpSection";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="relative h-[100%] ">
                {/* Background image */}
                <Image
                    src="/taylor-5-leukemia-go-to-my-favorite-theme-park-33.avif"
                    alt="Career background"
                    width={1920}
                    height={1080}
                    className="object-contain object-center w-full"
                />
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-center text-white pl-4 lg:pl-20 z-10">
                    <h1 className="text-md sm:text-lg md:text-4xl lg:text-6xl font-bold mb-4">
                        Your Life-Changing
                    </h1>
                    <h1 className="text-md sm:text-lg md:text-4xl lg:text-6xl font-bold mb-4">
                        Career Starts Here
                    </h1>
                </div>
            </div>
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
                            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl text-[#0057b8]">
                                Career Opportunities at Make-A-Wish America
                            </h2>
                            <p className="mt-4 text-sm md:text-2xl lg:text-3xl xl:text-6xl text-[#000000]">
                                Where Your Work Transforms Lives
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#ffffff] relative z-10 ">
                    <div className="absolute -top-10 lg:-top-20 2xl:-top-45  left-0 w-full h-[60px] md:h-[90px] lg:h-[120px] 2xl:h-[180px]">
                        <Image
                            src="/curveWhite.svg"
                            alt="Curved top shape"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="py-10  max-w-7xl px-6 mx-auto ">
                        <p className="md:text-xl lg:text-3xl leading-relaxed">
                            Say the name “Make-A-Wish” to a friend – or a
                            stranger – and it’s instantly greeted with a smile.
                            Sometimes with an emotional story of connection, or
                            even a personal account of joy and transformation.
                            To the world, our organization is a beacon of hope
                            for children with critical illnesses. For our staff,
                            Make-A-Wish also represents a community of caring
                            people working to create a positive turning point in
                            a child’s treatment journey that can give them a
                            better chance of surviving and thriving.
                        </p>
                        <p className="md:text-xl lg:text-3xl mt-10 leading-relaxed">
                            Our staff is proud to carry forward this
                            life-changing mission, as part of the world’s
                            largest wish-granting organization and most trusted
                            nonprofit operating locally in all 50 states. With a
                            continuous focus on professional development and an
                            emphasis on every individual’s leadership qualities,
                            each of us is passionate about granting wishes for
                            children with critical illnesses. Wishes are the
                            driving force behind everything we do, because every
                            wish experience can transform countless lives – even
                            yours.
                        </p>
                    </div>
                </div>
                {/* button */}
                <div className="lg:mt-10 mb-10 flex flex-col md:flex-row gap-5 justify-center items-center max-w-6xl mx-auto">
                    <div
                        className={`flex items-center justify-center bg-[#FF585D] rounded-full  mx-auto `}
                    >
                        <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] p-2 xl:py-6 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                            {/* Button text always on top */}
                            <span className="relative z-5 lg:px-5">
                                Open Roles at Make-A-Wish America
                            </span>
                        </button>
                    </div>

                    <div
                        className={`flex items-center justify-center bg-[#FF585D] rounded-full w-fit mx-auto `}
                    >
                        <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] p-2 xl:py-6 rounded-full  hover:bg-[#e54850] transition-colors duration-200">
                            {/* Button text always on top */}
                            <span className="relative z-5 lg:px-5">
                                Open Roles at Make-A-Wish Chapters
                            </span>
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto p-5">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold mb-4 text-[#0057b8]">
                            Wishes Need You
                        </h1>

                        <p className="lg:text-xl">
                            Our staff is made up of everyday heroes just like
                            you, whose talents and skills play a role in
                            bringing every child&apos;s wish to life. No matter
                            your role, your work at Make-A-Wish matters.
                            Here&apos;s why:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* First panel */}
                        <div className="relative  overflow-hidden shadow-lg">
                            <Image
                                src="/Mary Alice_9_Blood Disorder_to go to a dude ranch in Colorado_3.avif"
                                alt="Child with dog"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <h3 className="text-white text-3xl font-bold p-6">
                                    Every 20 minutes
                                </h3>
                            </div>
                        </div>

                        {/* Second panel */}
                        <div className="relative  overflow-hidden shadow-lg">
                            <Image
                                src="/Aiden and Jefferson after practice.avif"
                                alt="Child in wheelchair"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <h3 className="text-white text-3xl font-bold p-6">
                                    For every wish
                                </h3>
                            </div>
                        </div>

                        {/* Third panel */}
                        <div className="relative  overflow-hidden shadow-lg">
                            <Image
                                src="/Victoria_GA_south-korea.avif"
                                alt="Child playing with water"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <h3 className="text-white text-3xl font-bold p-6">
                                    9 out of 10 wish alum
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-5">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-[#0057b8]">
                        Who We Are
                    </h1>

                    <p className="lg:text-xl">
                        Our vision is to grant the wish of every eligible child.
                        Through our mission, we are uniting communities to grant
                        life-changing wishes. As the world’s largest
                        wish-granting organization, we strive to create a sense
                        of community and an environment where we warmly embrace
                        our wish families, volunteers, and colleagues. Joining
                        Make-A-Wish means becoming part of a mission that
                        believes in the power of a wish. Are you ready to be a
                        part of something extraordinary?
                    </p>
                </div>

                <div className=" overflow-hidden mt-10 md:mt-20">
                    <div className="grid grid-cols-3 gap-2 md:min-h-[600px]">
                        {/* First Column - Text and Integrity */}
                        <div className="flex flex-col gap-2">
                            {/* Values Introduction */}
                            <div className="p-1 md:p-8 flex-1 flex flex-col justify-center">
                                <h2 className="text-[#0057b8] text-sm md:text-xl lg:text-4xl  md:mb-6 leading-tight">
                                    Our Values
                                </h2>
                                <p className="text-gray-700 text-xs md:text-xl lg:text-2xl md:leading-relaxed">
                                    Our values are the basis for how we operate
                                    as an organization, and they are represented
                                    in everything we do.
                                </p>
                            </div>

                            {/* Integrity Card */}
                            <div className="bg-[#00bab3] p-1 md:p-8 flex-1 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white md:text-xl lg:text-3xl font-semibold">
                                    Integrity
                                </h3>
                                <svg
                                    viewBox="0 0 528 528"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="
    M341.8,237.8 l-7.9,41.6 c-0.9,4.7,1,9.4,4.9,12.3 s9,3.1,13.2,0.8 l37.1,-20.4 l37.1,20.4 c1.9,1,3.9,1.5,6,1.5 c2.5,0,5.1,-0.8,7.2,-2.4 c3.9,-2.8,5.8,-7.5,4.9,-12.3 l-7.9,-41.6 l30.9,-29 c3.5,-3.3,4.8,-8.2,3.3,-12.8 s-5.4,-7.8,-10.2,-8.4 l-42,-5.3 l-18,-38.3 c-2,-4.4,-6.3,-7.1,-11.1,-7.1 c-4.8,0,-9.1,2.7,-11.1,7.1 l-18,38.3 l-42,5.3 c-4.8,0.6,-8.7,3.8,-10.2,8.4 s-0.2,9.5,3.3,12.8 L341.8,237.8 Z M362.7,200.1 c5.7,-0.7,10.6,-4.3,13.1,-9.5 l13.2,-28 l13.2,28 c2.5,5.2,7.3,8.8,13.1,9.5 L446,204 l-22.6,21.2 c-4.2,3.9,-6.1,9.7,-5,15.4 l5.8,30.4 L397,256 c-5,-2.8,-11.1,-2.8,-16.1,0 l-27.1,14.9 l5.8,-30.4 c1.1,-5.7,-0.8,-11.4,-5,-15.4 L332,203.9 L362.7,200.1 Z M526,344.2 c-7,-13.9,-23.9,-19.4,-37.8,-12.5 L422.3,365 c-0.5,-17.1,-14.5,-30.8,-31.6,-30.8 h-68.2 c-12.3,-26.1,-38.9,-43.3,-68.1,-43.3 h-84.8 v-10.1 c0,-5,-4,-9,-9,-9 H80 c-5,0,-9,4,-9,9 v156 c0,5,4,9,9,9 h80.5 c5,0,9,-4,9,-9 v-8.5 l140.9,32.4 c6.8,1.6,13.6,2.3,20.5,2.3 c14.2,0,28.4,-3.3,41.2,-9.8 L513.5,382 c6.7,-3.4,11.7,-9.2,14,-16.3 C529.9,358.5,529.4,350.9,526,344.2 Z M151.5,427.8 H89 v-138 h62.5 V427.8 Z M510.5,360 c-0.9,2.6,-2.6,4.6,-5.1,5.9 L364,437.2 c-15.3,7.7,-32.9,9.8,-49.6,6 l-144.9,-33.4 V308.9 h84.8 c19.2,0,37,9.8,47.5,25.3 h-33.5 c-5,0,-9,4,-9,9 s4,9,9,9 h122.3 c7.5,0,13.6,6.1,13.6,13.6 c0,4.6,-2.3,8.7,-5.8,11.2 l-3.5,1.8 c-1.4,0.5,-2.8,0.7,-4.3,0.7 H267.1 c-5,0,-9,4,-9,9 s4,9,9,9 h123.5 c6.2,0,12,-1.8,16.8,-4.9 l88.8,-44.8 c5,-2.5,11.1,-0.5,13.6,4.5 C511.1,354.7,511.3,357.5,510.5,360 Z
  "
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        {/* Second Column - Two Cards */}
                        <div className="flex flex-col gap-2">
                            {/* Child Focus Card */}
                            <div className="bg-[#00bab3] p-1 md:p-8 flex-1 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white md:text-xl lg:text-3xl font-semibold">
                                    Child Focus
                                </h3>
                                <svg
                                    viewBox="0 0 534 534"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="
    M229.2,162.9 c26.7,0,48.5,-21.7,48.5,-48.5 S255.9,66,229.2,66 s-48.5,21.7,-48.5,48.5 S202.5,162.9,229.2,162.9 Z M229.2,84 c16.8,0,30.5,13.7,30.5,30.5 S246,145,229.2,145 s-30.5,-13.7,-30.5,-30.5 S212.4,84,229.2,84 Z M449.8,266.3 h-110 c-0.4,0,-0.8,0,-1.2,0 v-41.5 c0,-20.4,-16.6,-37,-37,-37 H156.9 c-20.4,0,-37,16.6,-37,37 v107.8 c0,18.2,14.8,33,33,33 h15.4 V525 c0,5,4,9,9,9 h103.8 c5,0,9,-4,9,-9 V365.6 h15.4 c1.3,0,2.6,-0.1,3.9,-0.2 v13.2 c0,15,12.2,27.3,27.3,27.3 h9.6 V525 c0,5,4,9,9,9 h79 c5,0,9,-4,9,-9 V405.9 h9.6 c15,0,27.3,-12.2,27.3,-27.3 v-82 C480.1,279.9,466.5,266.3,449.8,266.3 Z M305.5,347.6 h-15.4 v-96.3 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v105.3 l0,0 V516 h-33.9 V343.2 h-18 V516 h-33.9 V356.6 V250.1 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v97.5 h-15.4 c-8.3,0,-15,-6.7,-15,-15 V224.9 c0,-10.5,8.5,-19,19,-19 h144.6 c10.5,0,19,8.5,19,19 v48.4 c-6.8,5.6,-11.1,14,-11.1,23.4 v50.5 C308.2,347.5,306.9,347.6,305.5,347.6 Z M462.1,378.6 c0,5.1,-4.2,9.3,-9.3,9.3 h-9.3 v-71.1 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v78.1 c-0.2,0.7,-0.2,1.4,-0.2,2.1 v119 h-21.5 V386.7 h-18 V516 h-21.5 V396.9 v-81 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v72 h-9.6 c-5.1,0,-9.3,-4.1,-9.3,-9.3 v-25.5 V353 v-56.4 c0,-6.8,5.5,-12.3,12.3,-12.3 h110 c6.8,0,12.3,5.5,12.3,12.3 L462.1,378.6 L462.1,378.6 Z M394.8,241.8 c21.5,0,39,-17.5,39,-39 s-17.5,-39,-39,-39 s-39,17.5,-39,39 S373.2,241.8,394.8,241.8 Z M394.8,181.8 c11.6,0,21,9.4,21,21 s-9.4,21,-21,21 s-21,-9.4,-21,-21 C373.7,191.2,383.2,181.8,394.8,181.8 Z
  "
                                    ></path>
                                </svg>
                            </div>

                            {/* Community Card */}
                            <div className="bg-[#00bab3] p-1 md:p-8 flex-1 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white md:text-xl lg:text-3xl font-semibold">
                                    Community
                                </h3>
                                <svg
                                    viewBox="0 0 542 542"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="
    M300,252 c25,0,45.4,-20.3,45.4,-45.3 s-20.3,-45.4,-45.4,-45.4 s-45.4,20.3,-45.4,45.4 C254.6,231.7,275,252,300,252 Z M300,179.3 c15.1,0,27.4,12.3,27.4,27.4 S315.1,234,300,234 s-27.4,-12.3,-27.4,-27.4 C272.6,191.6,284.9,179.3,300,179.3 Z M440.1,252 c25,0,45.4,-20.3,45.4,-45.3 s-20.3,-45.4,-45.4,-45.4 s-45.4,20.3,-45.4,45.4 C394.8,231.7,415.1,252,440.1,252 Z M440.1,179.3 c15.1,0,27.4,12.3,27.4,27.4 S455.2,234,440.1,234 s-27.4,-12.3,-27.4,-27.4 C412.8,191.6,425.1,179.3,440.1,179.3 Z M506.7,273.5 H373.6 c-1.6,0,-3.1,0.1,-4.6,0.3 c-0.8,-0.2,-1.5,-0.3,-2.3,-0.3 H233.4 c-1.6,0,-3.1,0.1,-4.6,0.3 c-0.8,-0.2,-1.5,-0.3,-2.3,-0.3 H93.3 c-19.2,0,-34.8,15.6,-34.8,34.8 v99.2 c0,17.1,14,31.1,31.1,31.1 h22.5 c5,0,9,-4,9,-9 v-98.1 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v89.1 H89.6 c-7.2,0,-13.1,-5.9,-13.1,-13.1 v-99.2 c0,-9.2,7.5,-16.8,16.8,-16.8 H203 c-2.8,5,-4.3,10.7,-4.3,16.8 v99.2 c0,17.1,13.9,31.1,31.1,31.1 h22.5 c5,0,9,-4,9,-9 v-98.1 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v89.1 h-13.5 c-7.2,0,-13.1,-5.9,-13.1,-13.1 v-99.2 c0,-9.2,7.5,-16.8,16.8,-16.8 h109.7 c-2.8,5,-4.3,10.7,-4.3,16.8 v99.2 c0,17.1,14,31.1,31.1,31.1 h22.5 c5,0,9,-4,9,-9 v-98.1 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v89.1 H370 c-7.2,0,-13.1,-5.9,-13.1,-13.1 v-99.2 c0,-9.2,7.5,-16.8,16.8,-16.8 h133.2 c9.2,0,16.8,7.5,16.8,16.8 v99.2 c0,7.2,-5.9,13.1,-13.1,13.1 h-13.5 v-88 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v97 c0,5,4,9,9,9 h22.5 c17.1,0,31.1,-14,31.1,-31.1 v-99.2 C541.5,289.1,525.9,273.5,506.7,273.5 Z M159.9,252 c25,0,45.3,-20.3,45.3,-45.3 s-20.3,-45.4,-45.4,-45.4 s-45.3,20.3,-45.3,45.4 C114.5,231.7,134.9,252,159.9,252 Z M159.9,179.3 c15.1,0,27.4,12.3,27.4,27.4 S174.9,234,159.9,234 s-27.4,-12.3,-27.4,-27.4 C132.5,191.6,144.8,179.3,159.9,179.3 Z
  "
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        {/* Third Column - Two Cards */}
                        <div className="flex flex-col gap-2">
                            {/* Impact Card */}
                            <div className="bg-[#00bab3] p-1 md:p-8 flex-1 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white md:text-xl lg:text-3xl font-semibold">
                                    Impact
                                </h3>
                                <svg
                                    viewBox="0 0 544 544"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="
    M456.2,218.8 l-44.5,-39.3 c-0.4,-0.4,-0.6,-1,-0.5,-1.5 l9.3,-58.7 c0.8,-5.2,-1.4,-10.4,-5.8,-13.4 s-10,-3.2,-14.5,-0.5 L349,135.7 c-0.5,0.3,-1.1,0.3,-1.6,0.1 l-52.9,-27 l0,0 c-4.7,-2.4,-10.3,-1.9,-14.5,1.4 s-6.1,8.5,-4.9,13.7 l12.9,58 c0.1,0.6,0,1.2,-0.5,1.6 l-42,42 c-3.8,3.8,-5,9.2,-3.2,14.2 s6.2,8.4,11.5,8.9 l50.8,4.8 L110.8,529.8 c-2.8,4.1,-1.9,9.7,2.2,12.5 c1.6,1.1,3.4,1.6,5.2,1.6 c2.8,0,5.6,-1.3,7.4,-3.8 L318.9,264 l22.3,43.8 c2.3,4.6,7,7.4,12.1,7.4 c0.1,0,0.3,0,0.4,0 c5.3,-0.2,9.9,-3.3,12,-8.2 l23.6,-54.5 c0.2,-0.5,0.7,-0.9,1.3,-1 l58.7,-9.2 c5.2,-0.8,9.4,-4.5,10.9,-9.6 C461.8,227.7,460.2,222.3,456.2,218.8 Z M286.3,124.7 L286.3,124.7 L286.3,124.7 L286.3,124.7 Z M387.9,233.9 c-6.7,1.1,-12.3,5.4,-15,11.6 L353,291.4 l-22.7,-44.6 c-3.1,-6.1,-8.9,-10,-15.7,-10.7 l-49.8,-4.7 l35.4,-35.3 c4.8,-4.8,6.8,-11.6,5.3,-18.2 L294.6,129 l44.5,22.8 c6,3.1,13.1,2.9,19,-0.6 l43.1,-25.4 l-7.9,49.4 c-1.1,6.7,1.3,13.4,6.4,17.9 l37.5,33.1 L387.9,233.9 Z M226.3,171.2 c6.6,0,11.9,-5.3,11.9,-11.9 s-5.3,-11.9,-11.9,-11.9 s-11.9,5.3,-11.9,11.9 S219.7,171.2,226.3,171.2 Z M166.3,201.5 c0,6.6,5.3,11.9,11.9,11.9 s11.9,-5.3,11.9,-11.9 s-5.3,-11.9,-11.9,-11.9 C171.7,189.6,166.3,194.9,166.3,201.5 Z M480.6,348.7 c-2.8,-5.9,-10,-8.4,-15.9,-5.6 s-8.4,10,-5.6,15.9 s10,8.4,15.9,5.6 C481,361.8,483.5,354.7,480.6,348.7 Z M416.9,296.3 c-5.9,2.8,-8.4,10,-5.6,15.9 s10,8.4,15.9,5.6 s8.4,-10,5.6,-15.9 S422.9,293.4,416.9,296.3 Z M399.6,357.8 c-5.9,2.8,-8.4,10,-5.6,15.9 s10,8.4,15.9,5.6 s8.4,-10,5.6,-15.9 C412.6,357.5,405.5,355,399.6,357.8 Z M473,168 c5.9,-2.8,8.4,-10,5.6,-15.9 s-10,-8.4,-15.9,-5.6 s-8.4,10,-5.6,15.9 C460,168.4,467.1,170.9,473,168 Z M348.6,87.7 c5.9,-2.8,8.4,-10,5.6,-15.9 s-10,-8.4,-15.9,-5.6 s-8.4,10,-5.6,15.9 S342.6,90.5,348.6,87.7 Z
  "
                                    ></path>
                                </svg>
                            </div>

                            {/* Innovation Card */}
                            <div className="bg-[#00bab3] p-1 md:p-8 flex-1 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white md:text-xl lg:text-3xl font-semibold">
                                    Innovation
                                </h3>
                                <svg
                                    viewBox="0 0 554 554"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="
    M391.8,158.8 c-24.5,-25.1,-57,-39.1,-91.8,-39.3 h-0.1 c-34.7,0.2,-67.3,14.2,-91.8,39.3 c-24.2,24.9,-37.2,57.4,-36.5,91.6 c0.6,28.8,11,56.9,29.4,79.1 c15.1,18.3,23.4,41.1,23.4,64.1 v1.8 c0,16.4,13.4,29.8,29.8,29.8 h91.5 c16.4,0,29.8,-13.4,29.8,-29.8 v-1.8 c0,-23.1,8.3,-45.9,23.5,-64.1 c18.3,-22.2,28.8,-50.3,29.4,-79.1 C429,216.2,416,183.6,391.8,158.8 Z M410.3,250 c-0.5,25.1,-9.2,48.6,-25.2,68 c-17.8,21.5,-27.6,48.4,-27.6,75.6 v1.8 c0,6.5,-5.3,11.8,-11.8,11.8 h-91.5 c-6.5,0,-11.8,-5.3,-11.8,-11.8 v-1.8 c0,-27.2,-9.8,-54.1,-27.6,-75.6 c-16,-19.4,-24.7,-42.9,-25.2,-68 c-0.6,-29.4,10.6,-57.3,31.4,-78.7 c21.1,-21.6,49.1,-33.7,78.9,-33.9 c29.9,0.2,57.9,12.3,78.9,33.9 C399.8,192.7,410.9,220.6,410.3,250 Z M366.5,438.2 h-133 c-5,0,-9,4,-9,9 s4,9,9,9 h133 c5,0,9,-4,9,-9 S371.5,438.2,366.5,438.2 Z M366.5,469.4 h-133 c-5,0,-9,4,-9,9 s4,9,9,9 h133 c5,0,9,-4,9,-9 S371.5,469.4,366.5,469.4 Z M354.1,500.5 H245.9 c-3,0,-5.9,1.5,-7.5,4.1 c-1.7,2.5,-1.9,5.7,-0.7,8.5 C248.5,538,273,554,300.1,554 s51.6,-16.1,62.4,-40.9 c1.2,-2.8,0.9,-6,-0.7,-8.5 C360,502,357.1,500.5,354.1,500.5 Z M300,536 c-14.9,0,-28.6,-6.6,-38,-17.5 h76 C328.6,529.4,314.9,536,300,536 Z M300,102.5 c5,0,9,-4,9,-9 V55 c0,-5,-4,-9,-9,-9 s-9,4,-9,9 v38.5 C291,98.4,295,102.5,300,102.5 Z M145.5,238.9 H107 c-5,0,-9,4,-9,9 s4,9,9,9 h38.5 c5,0,9,-4,9,-9 S150.5,238.9,145.5,238.9 Z M492.9,238.9 h-38.5 c-5,0,-9,4,-9,9 s4,9,9,9 h38.5 c5,0,9,-4,9,-9 S497.9,238.9,492.9,238.9 Z M184.4,145.1 c1.8,1.8,4.1,2.6,6.4,2.6 s4.6,-0.9,6.4,-2.6 c3.5,-3.5,3.5,-9.2,0,-12.7 L170,105.2 c-3.5,-3.5,-9.2,-3.5,-12.7,0 s-3.5,9.2,0,12.7 L184.4,145.1 Z M415.6,350.8 c-3.5,-3.5,-9.2,-3.5,-12.7,0 s-3.5,9.2,0,12.7 l27.2,27.2 c1.8,1.8,4.1,2.6,6.4,2.6 s4.6,-0.9,6.4,-2.6 c3.5,-3.5,3.5,-9.2,0,-12.7 L415.6,350.8 Z M184.4,350.8 L157.2,378 c-3.5,3.5,-3.5,9.2,0,12.7 c1.8,1.8,4.1,2.6,6.4,2.6 s4.6,-0.9,6.4,-2.6 l27.2,-27.2 c3.5,-3.5,3.5,-9.2,0,-12.7 C193.6,347.3,187.9,347.3,184.4,350.8 Z M430,105.1 l-27.2,27.2 c-3.5,3.5,-3.5,9.2,0,12.7 c1.8,1.8,4.1,2.6,6.4,2.6 s4.6,-0.9,6.4,-2.6 l27.2,-27.2 c3.5,-3.5,3.5,-9.2,0,-12.7 C439.3,101.6,433.6,101.6,430,105.1 Z M272.4,168.2 c-22.3,7.8,-40.4,24.8,-49.6,46.6 c-1.9,4.6,0.2,9.9,4.8,11.8 c1.1,0.5,2.3,0.7,3.5,0.7 c3.5,0,6.8,-2.1,8.3,-5.5 c7.2,-17.1,21.5,-30.5,39,-36.6 c4.7,-1.6,7.2,-6.8,5.5,-11.5 C282.2,169.1,277,166.6,272.4,168.2 Z
  "
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40">
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-[#0057b8]">
                        The Impact of Our Work
                    </h1>

                    <Image
                        src="/impact-thumbnail.avif"
                        alt="The Impact of Our Work"
                        width={1000}
                        height={500}
                        className="max-w-4xl mx-auto object-contain object-center w-full mt-10"
                    />
                </div>
                <div className="mt-40">
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-[#0057b8]">
                        Additional Resources
                    </h1>
                    <div className="flex flex-wrap gap-4 justify-between mt-6">
                        <div className="flex items-center flex-1 justify-center bg-[#FF585D] rounded-full">
                            <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] px-8 py-4 rounded-full">
                                <span className="relative z-5">
                                    Our Mission
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center flex-1 justify-center bg-[#FF585D] rounded-full">
                            <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] px-8 py-4 rounded-full">
                                <span className="relative z-5">
                                    Our History
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center flex-1 justify-center bg-[#FF585D] rounded-full">
                            <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] px-8 py-4 rounded-full">
                                <span className="relative z-5">
                                    Follow on LinkedIn
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center flex-1 justify-center bg-[#FF585D] rounded-full">
                            <button className="relative overflow-hidden text-white font-semibold text-md xl:text-xl bg-[#FF585D] px-8 py-4 rounded-full">
                                <span className="relative z-5">
                                    Impact of Make-A-Wish
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-20">
                    <Image
                        src="/Kudos-Best-Culture-Awards-Badge-2023-Culture-Innovator-200x200px.png"
                        alt="The Impact of Our Work"
                        width={1920}
                        height={1080}
                        className="max-w-4xl mx-auto object-contain object-center h-[200px] w-full mt-10"
                    />
                </div>
            </div>
            <SignUpSection />
        </div>
    );
};

export default page;
