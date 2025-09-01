"use client";
import { useState } from "react";
import SignUpSection from "./SignUpSection";
import Image from "next/image";

const NavigationTabs = () => {
    const [activeTab, setActiveTab] = useState("eligible");

    return (
        <div>
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 w-full mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex sm:space-x-8 overflow-auto">
                        <button
                            onClick={() => setActiveTab("eligible")}
                            className={`py-3 px-4 w-full sm:w-auto border-b-4 font-medium text-sm md:text-base lg:text-lg sm:py-4 md:py-5 whitespace-nowrap ${
                                activeTab === "eligible"
                                    ? "border-[#FF585D] text-[#0057b8]"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Who is eligible?
                        </button>
                        <button
                            onClick={() => setActiveTab("whoCanRefer")}
                            className={`py-3 px-4 w-full sm:w-auto border-b-4 font-medium text-sm md:text-base lg:text-lg sm:py-4 md:py-5 whitespace-nowrap ${
                                activeTab === "whoCanRefer"
                                    ? "border-[#FF585D] text-[#0057b8]"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Who can refer a child?
                        </button>
                        <button
                            onClick={() => setActiveTab("process")}
                            className={`py-3 px-4 w-full sm:w-auto border-b-4 font-medium text-sm md:text-base lg:text-lg sm:py-4 md:py-5 whitespace-nowrap ${
                                activeTab === "process"
                                    ? "border-[#FF585D] text-[#0057b8]"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            What&apos;s the process?
                        </button>
                        <button
                            onClick={() => setActiveTab("wishFor")}
                            className={`py-3 px-4 w-full sm:w-auto border-b-4 font-medium text-sm md:text-base lg:text-lg sm:py-4 md:py-5 whitespace-nowrap ${
                                activeTab === "wishFor"
                                    ? "border-[#FF585D] text-[#0057b8]"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            What can a child wish for?
                        </button>
                        <button
                            onClick={() => setActiveTab("contact")}
                            className={`py-3 px-4 w-full sm:w-auto border-b-4 font-medium text-sm md:text-base lg:text-lg sm:py-4 md:py-5 whitespace-nowrap ${
                                activeTab === "contact"
                                    ? "border-[#FF585D] text-[#0057b8]"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                            Contact your local chapter
                        </button>
                    </nav>
                </div>
            </div>
            {/* Tab Content */}
            <div className="">
                <div>
                    {activeTab === "eligible" && (
                        <div className="border-b-2 border-[#bbbcbc] pt-10">
                            <div className="max-w-4xl mx-auto px-4 py-8 ">
                                <h2 className="text-2xl font-bold mb-8 text-[#0057b8]">
                                    Who is eligible?
                                </h2>
                                <p className="mb-4 text-xl">
                                    At Make-A-Wish®, the health and safety of
                                    our wish children and their families is our
                                    highest priority. We rely on the expertise
                                    of the pediatricians and pediatric
                                    specialists who are part of our National
                                    Medical Advisory Council and more than 200
                                    chapter-specific medical advisors that help
                                    guide us with eligibility and wish safety
                                    precautions.
                                </p>
                                <p className="text-xl">
                                    If you have a child that you are considering
                                    referring for a wish, please do not wait.
                                    Just knowing that a wish is coming is very
                                    powerful.
                                </p>
                            </div>
                            <div className="2xl:h-[900px]">
                                <div className="relative w-full h-[60vh]">
                                    {/* Background image */}
                                    <Image
                                        src="/DC - Washington - Alex Odett-7-Pokemon Go_0.avif"
                                        alt="Refer a child background"
                                        fill
                                        priority
                                        className="object-cover w-full"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white pl-4 lg:pl-20 z-10">
                                        <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl mb-4">
                                            Who is eligible?
                                        </h1>

                                        {/* Buttons */}
                                        <p>
                                            Children must meet these criteria at
                                            the time of referral:
                                        </p>

                                        <ul className="list-disc max-w-xl mx-auto my-6 pl-8">
                                            <li className="mb-2">
                                                Diagnosed with a critical
                                                illness, i.e., a progressive,
                                                degenerative or malignant
                                                condition that is placing the
                                                child&apos;s life in jeopardy
                                            </li>
                                            <li className="mb-2">
                                                Older than 2½ years and younger
                                                than 18
                                            </li>
                                            <li className="mb-2">
                                                Has not received a wish from
                                                another wish-granting
                                                organization
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
                                <h1 className="text-md text-[#0057b8] sm:text-lg md:text-3xl  mb-4">
                                    Make-A-Wish accepts referrals from:
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-6">
                                    <div>
                                        <ul className="list-none">
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Medical Professionals such
                                                    as providers (doctor, nurse
                                                    practitioner or physician
                                                    assistant), nurses, social
                                                    workers or child-life
                                                    specialists
                                                </span>
                                            </li>
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Family members with detailed
                                                    knowledge of the
                                                    child&apos;s current medical
                                                    condition
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-none">
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Parents or legal guardians
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-10 mb-10">
                                <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-4 px-8 rounded-full">
                                    Refer
                                </button>
                                <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-4 px-8 rounded-full">
                                    Refiera{" "}
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "whoCanRefer" && (
                        <div className="border-b-2 border-[#bbbcbc] pt-10">
                            <div className="max-w-4xl mx-auto px-4 py-8 ">
                                <h2 className="text-2xl font-bold mb-8 text-[#0057b8]">
                                    Your Health & Safety is Our Highest Priority
                                </h2>
                                <p className="mb-4 text-xl">
                                    At Make-A-Wish®, the health and safety of
                                    our wish children and their families is our
                                    highest priority. We rely on the expertise
                                    of the pediatricians and pediatric
                                    specialists who are part of our National
                                    Medical Advisory Council and more than 200
                                    chapter-specific medical advisors that help
                                    guide us with eligibility and wish safety
                                    precautions.
                                </p>
                                <p className="text-xl">
                                    If you have a child that you are considering
                                    referring for a wish, please do not wait.
                                    Just knowing that a wish is coming is very
                                    powerful.
                                </p>
                            </div>
                            <div className="2xl:h-[900px]">
                                <div className="relative w-full h-[60vh]">
                                    {/* Background image */}
                                    <Image
                                        src="/Nominee-in-hallway_R.avif"
                                        alt="Refer a child background"
                                        fill
                                        priority
                                        className="object-cover w-full"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white pl-4 lg:pl-20 z-10 px-4 text-center">
                                        <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl mb-4">
                                            Who can refer a child?
                                        </h1>

                                        {/* Buttons */}
                                        <p className="mb-10">
                                            Every day, we rely on wish referrals
                                            from caring individuals to help us
                                            reach more kids with critical
                                            illnesses and grant their
                                            life-changing wishes. Learn more
                                            about the requirements for referring
                                            a child.
                                        </p>
                                        <p>
                                            Please note: if you are not an
                                            approved referral source (see
                                            below), the form you complete is not
                                            an official referral – it is a
                                            request to receive additional
                                            information. Make-A-Wish will only
                                            call the families of approved
                                            referral sources. If you are not
                                            eligible to refer a child, please
                                            share the referral inquiry form with
                                            the family or ask them to visit our
                                            website.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
                                <h1 className="text-md text-[#0057b8] sm:text-lg md:text-3xl text-center  mb-4">
                                    To respect the privacy of families we serve,
                                    children who may be eligible to receive a
                                    wish can be referred by:
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-6">
                                    <div>
                                        <ul className="list-none">
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Medical Professionals such
                                                    as providers (doctor, nurse
                                                    practitioner or physician
                                                    assistant), nurses, social
                                                    workers or child-life
                                                    specialists
                                                </span>
                                            </li>
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Family members with detailed
                                                    knowledge of the
                                                    child&apos;s current medical
                                                    condition
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-none">
                                            <li className="flex items-start mb-6">
                                                <span className="text-[#FF585D] text-2xl mr-3">
                                                    •
                                                </span>
                                                <span>
                                                    Parents or legal guardians
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "process" && (
                        <div className="border-b-2 border-[#bbbcbc] pt-10">
                            <div className="max-w-4xl mx-auto px-4 py-8 ">
                                <h2 className="text-2xl font-bold mb-8 text-[#0057b8]">
                                    Your Health & Safety is Our Highest Priority
                                </h2>
                                <p className="mb-4 text-xl">
                                    At Make-A-Wish®, the health and safety of
                                    our wish children and their families is our
                                    highest priority. We rely on the expertise
                                    of the pediatricians and pediatric
                                    specialists who are part of our National
                                    Medical Advisory Council and more than 200
                                    chapter-specific medical advisors that help
                                    guide us with eligibility and wish safety
                                    precautions.
                                </p>
                                <p className="text-xl">
                                    If you have a child that you are considering
                                    referring for a wish, please do not wait.
                                    Just knowing that a wish is coming is very
                                    powerful.
                                </p>
                            </div>
                            <div className="2xl:h-[900px]">
                                <div className="relative w-full h-[60vh]">
                                    {/* Background image */}
                                    <Image
                                        src="/Landscape-Image-8.avif"
                                        alt="Refer a child background"
                                        fill
                                        priority
                                        className="object-cover w-full"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white pl-4 lg:pl-20 z-10 px-4 text-center">
                                        <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl mb-4">
                                            What&apos;s the process?
                                        </h1>

                                        {/* Buttons */}
                                        <p className="mb-10">
                                            Do you know a child battling a
                                            critical illness who could benefit
                                            from a life-changing wish? There are
                                            two ways to refer a child: you can
                                            submit an online referral or share
                                            the referral inquiry form with the
                                            family. Please note: if you are not
                                            an approved referral source, the
                                            form you complete is not an official
                                            referral – it is a request to
                                            receive additional information.
                                        </p>
                                        <p>
                                            Outside of the U.S.? Learn more
                                            about referring a child residing
                                            outside the U.S. here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "wishFor" && (
                        <div className="border-b-2 border-[#bbbcbc] pt-10">
                            <div className="max-w-4xl mx-auto px-4 py-8 ">
                                <h2 className="text-2xl font-bold mb-8 text-[#0057b8]">
                                    Your Health & Safety is Our Highest Priority
                                </h2>
                                <p className="mb-4 text-xl">
                                    At Make-A-Wish®, the health and safety of
                                    our wish children and their families is our
                                    highest priority. We rely on the expertise
                                    of the pediatricians and pediatric
                                    specialists who are part of our National
                                    Medical Advisory Council and more than 200
                                    chapter-specific medical advisors that help
                                    guide us with eligibility and wish safety
                                    precautions.
                                </p>
                                <p className="text-xl">
                                    If you have a child that you are considering
                                    referring for a wish, please do not wait.
                                    Just knowing that a wish is coming is very
                                    powerful.
                                </p>
                            </div>
                            <div className="2xl:h-[900px]">
                                <div className="relative w-full h-[60vh]">
                                    {/* Background image */}
                                    <Image
                                        src="/Landscape-Girl-2.avif"
                                        alt="Refer a child background"
                                        fill
                                        priority
                                        className="object-cover w-full"
                                    />
                                    {/* Black overlay */}
                                    <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white pl-4 lg:pl-20 z-10 px-4 text-center">
                                        <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl mb-4">
                                            What can a child wish for?
                                        </h1>

                                        {/* Buttons */}
                                        <p className="mb-10">
                                            The child&apos;s imagination is
                                            always the driving force in
                                            determining, designing and
                                            coordinating a life-changing wish
                                            experience. Whether it’s a wish to
                                            be a superhero, a wish for a
                                            treehouse or a trip to scuba dive a
                                            coral reef, each wish is only
                                            limited by the child’s imagination.
                                        </p>
                                        <p>
                                            Make-A-Wish has the unique ability
                                            to transform a child and family’s
                                            life during some of their most
                                            difficult trials. A wish helps a
                                            child look past his or her
                                            limitations, it helps a family
                                            overcome anxiety and brings entire
                                            communities together in an
                                            experience of hope and joy. That is
                                            why wishes matter. That is why we
                                            grant wishes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "contact" && (
                        <div className="border-b-2 border-[#bbbcbc] pt-10">
                            <div className="max-w-4xl mx-auto px-4 py-8 ">
                                <h2 className="text-2xl font-bold mb-8 text-[#0057b8]">
                                    Your Health & Safety is Our Highest Priority
                                </h2>
                                <p className="mb-4 text-xl">
                                    At Make-A-Wish®, the health and safety of
                                    our wish children and their families is our
                                    highest priority. We rely on the expertise
                                    of the pediatricians and pediatric
                                    specialists who are part of our National
                                    Medical Advisory Council and more than 200
                                    chapter-specific medical advisors that help
                                    guide us with eligibility and wish safety
                                    precautions.
                                </p>
                                <p className="text-xl">
                                    If you have a child that you are considering
                                    referring for a wish, please do not wait.
                                    Just knowing that a wish is coming is very
                                    powerful.
                                </p>
                            </div>

                            <div className="flex items-center justify-center py-10">
                                <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-4 px-8 lg:py-5 lg:px-10 lg:text-lg xl:text-xl rounded-full">
                                    Find My Chapter
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col items-center px-4 pt-8">
                <div>
                    <svg
                        viewBox="0 0 523 523"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 md:w-50"
                    >
                        <path
                            fill="#00bab3"
                            d="
    M242.892,211.928 c1.801,0.992,3.761,1.482,5.708,1.482 c2.434,0,4.851,-0.766,6.93,-2.275 c3.743,-2.72,5.528,-7.231,4.659,-11.773 l-6.59,-34.509 l25.614,-24.043 c3.374,-3.166,4.581,-7.865,3.151,-12.264 c-1.429,-4.4,-5.169,-7.493,-9.758,-8.071 l-34.856,-4.396 l-14.951,-31.792 v0 c-1.969,-4.186,-6.065,-6.786,-10.692,-6.786 h-0.001 c-4.626,0,-8.723,2.602,-10.688,6.786 l-14.952,31.792 l-34.858,4.396 c-4.587,0.58,-8.326,3.673,-9.755,8.071 c-1.429,4.398,-0.222,9.098,3.15,12.263 l25.615,24.044 l-6.59,34.506 c-0.869,4.543,0.916,9.055,4.657,11.774 c3.743,2.721,8.586,3.026,12.641,0.795 l30.782,-16.932 L242.892,211.928 Z M184.177,189.817 l4.373,-22.898 c1.008,-5.269,-0.726,-10.605,-4.638,-14.276 l-16.998,-15.957 l23.131,-2.917 c5.32,-0.67,9.86,-3.968,12.143,-8.821 l9.921,-21.098 l9.923,21.099 c2.283,4.853,6.822,8.15,12.142,8.82 l23.131,2.917 l-16.999,15.957 c-3.912,3.671,-5.646,9.008,-4.637,14.273 l4.373,22.901 l-20.43,-11.237 c-4.697,-2.582,-10.307,-2.583,-15.008,0.001 L184.177,189.817 Z M428.371,306.273 c-6.126,0,-11.83,1.831,-16.605,4.964 c-5.297,-8.906,-15.014,-14.89,-26.106,-14.89 c-7.69,0,-14.718,2.88,-20.073,7.611 c-5.562,-6.231,-13.648,-10.164,-22.64,-10.164 c-4.399,0,-8.579,0.948,-12.356,2.639 v-81.719 c0,-16.739,-13.617,-30.356,-30.355,-30.356 c-16.739,0,-30.356,13.618,-30.356,30.356 v87.876 c-13.941,-15.883,-32.519,-25.135,-42.586,-25.135 c-14.748,0,-26.745,11.998,-26.745,26.745 c0,6.539,2.381,12.813,6.705,17.705 c0.005,0.006,0.008,0.013,0.014,0.018 c5.466,6.401,19.656,27.122,19.656,45.864 c0,40.818,20.269,80.861,54.217,107.113 c1.623,1.255,3.042,2.796,4.174,4.519 l0.143,0.217 c3.779,5.724,5.777,12.591,5.777,19.859 V513.5 c0,4.971,4.029,9,9,9 c4.971,0,9,-4.029,9,-9 v-14.003 c0,-10.806,-3.028,-21.103,-8.756,-29.778 c-0.016,-0.023,-0.068,-0.103,-0.083,-0.125 c-2.269,-3.451,-5.042,-6.456,-8.242,-8.931 c-11.08,-8.567,-47.229,-40.585,-47.229,-92.874 c0,-29.151,-22.991,-56.408,-23.969,-57.554 c-0.029,-0.033,-0.061,-0.062,-0.09,-0.096 c-0.024,-0.027,-0.044,-0.058,-0.069,-0.084 c-1.449,-1.608,-2.247,-3.687,-2.247,-5.854 c0,-4.822,3.923,-8.745,8.745,-8.745 c8.238,0,42.586,20.721,42.586,51.914 c0,4.97,4.029,9,9,9 c4.97,0,9,-4.03,9,-9 V214.715 c0,-6.813,5.542,-12.356,12.356,-12.356 c6.812,0,12.355,5.543,12.355,12.356 v109.436 c0,4.971,4.029,9,9,9 s9,-4.029,9,-9 c0,-6.813,5.543,-12.356,12.356,-12.356 s12.356,5.543,12.356,12.356 c0,0.307,0.016,0.61,0.046,0.909 c-0.029,0.544,-0.046,1.092,-0.046,1.643 c0,4.971,4.029,9,9,9 s9,-4.029,9,-9 c0,-6.812,5.543,-12.355,12.356,-12.355 c6.812,0,12.355,5.543,12.355,12.355 v8.046 c0,0.212,0.017,0.421,0.032,0.629 c-0.018,0.416,-0.032,0.832,-0.032,1.252 c0,4.971,4.03,9,9,9 s9,-4.029,9,-9 c0,-6.813,5.543,-12.356,12.356,-12.356 c6.812,0,12.356,5.543,12.356,12.356 v91.069 c0,14.972,-4.337,29.471,-12.542,41.931 c-5.766,8.759,-8.814,18.72,-8.814,28.804 V513.5 c0,4.971,4.029,9,9,9 s9,-4.029,9,-9 v-15.066 c0,-6.556,2.022,-13.094,5.848,-18.904 c10.146,-15.407,15.509,-33.33,15.509,-51.83 V336.63 C458.728,319.892,445.109,306.273,428.371,306.273 Z
  "
                        ></path>
                    </svg>
                </div>

                <div className="mt-20 text-center max-w-4xl space-y-9 mb-9">
                    <h1 className="font-bold text-2xl text-[#0057b8]">
                        Start the Referral Process
                    </h1>
                    <p className="text-xl text-[#0057b8] leading-8">
                        Please note: We recommend completing the form using an
                        updated web browser, such as Google Chrome or Microsoft
                        Edge, for an optimized experience.
                    </p>

                    <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-3 px-8  lg:px-10 lg:text-lg xl:text-xl rounded-full">
                        Refer a Child
                    </button>
                </div>
            </div>
            <SignUpSection />
        </div>
    );
};

export default NavigationTabs;
