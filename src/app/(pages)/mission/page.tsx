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
                            Our Mission
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
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0057b8] mb-6">
                                    A wish experience can be a game-changer for
                                    a child with a critical illness.
                                </h1>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    This one belief guides us in everything we
                                    do at Make-A-Wish. It inspires us to grant
                                    life-changing wishes for children going
                                    through so much. It compels us to be
                                    creative in exceeding the expectations of
                                    every wish kid. It drives us to make our
                                    donated resources go as far as possible.
                                    Most of all, it&apos;s the founding
                                    principle of our vision to grant the wish of
                                    every eligible child.
                                </p>

                                <p className="text-lg font-semibold text-gray-700 mb-8">
                                    This is our mission:
                                </p>

                                <div className="bg-[#dcf0fb] h-120 flex flex-col justify-center items-center gap-20 mb-8">
                                    <svg
                                        viewBox="0 0 539 539"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-40"
                                    >
                                        <path
                                            fill="#f9b15d"
                                            d="
    M495.729,158.626 c3.951,-3.707,5.366,-9.21,3.693,-14.363 c-1.674,-5.154,-6.054,-8.776,-11.43,-9.454 l-62.187,-7.842 c-0.783,-0.099,-1.451,-0.584,-1.787,-1.299 l-26.675,-56.72 l0,0 c-2.307,-4.903,-7.104,-7.948,-12.522,-7.947 c-5.418,0,-10.215,3.046,-12.52,7.947 l-26.675,56.719 c-0.337,0.715,-1.006,1.201,-1.789,1.3 l-62.186,7.842 c-5.375,0.678,-9.754,4.3,-11.428,9.451 c-1.675,5.152,-0.261,10.656,3.689,14.364 l45.699,42.898 c0.576,0.54,0.831,1.325,0.684,2.1 l-11.758,61.566 c-1.018,5.32,1.073,10.604,5.455,13.789 c4.383,3.186,10.054,3.543,14.805,0.932 l54.917,-30.208 c0.692,-0.38,1.519,-0.381,2.211,0 l54.92,30.207 c2.11,1.162,4.403,1.736,6.686,1.736 c2.85,0,5.68,-0.896,8.113,-2.664 c4.385,-3.184,6.477,-8.468,5.46,-13.791 l-11.758,-61.569 c-0.148,-0.774,0.107,-1.559,0.683,-2.1 L495.729,158.626 Z M381.056,76.608 l0.005,0.009 C381.059,76.615,381.058,76.611,381.056,76.608 L381.056,76.608 Z M437.713,188.398 c-5.098,4.784,-7.356,11.739,-6.044,18.602 l10.097,52.87 l-47.163,-25.941 c-6.123,-3.367,-13.433,-3.368,-19.56,0 l-47.162,25.942 L337.978,207 c1.312,-6.865,-0.948,-13.819,-6.045,-18.602 l-39.244,-36.838 l53.402,-6.735 c6.934,-0.875,12.85,-5.172,15.825,-11.498 l22.907,-48.708 l22.907,48.708 c2.974,6.325,8.889,10.623,15.824,11.498 l53.402,6.735 L437.713,188.398 Z M285.415,306.843 c-4.071,-2.851,-9.685,-1.861,-12.534,2.21 L121.787,524.838 c-2.852,4.071,-1.861,9.684,2.21,12.534 c1.571,1.101,3.371,1.628,5.154,1.628 c2.837,0,5.63,-1.338,7.38,-3.838 l151.094,-215.785 C290.477,315.306,289.486,309.694,285.415,306.843 Z M221.343,266.301 c1.571,1.1,3.371,1.628,5.154,1.628 c2.837,0,5.63,-1.338,7.38,-3.838 l33.484,-47.821 c2.852,-4.071,1.861,-9.684,-2.21,-12.534 c-4.071,-2.852,-9.685,-1.862,-12.534,2.209 l-33.484,47.821 C216.281,257.838,217.271,263.45,221.343,266.301 Z M201.642,294.437 c-4.072,-2.851,-9.685,-1.862,-12.534,2.21 l-87.584,125.083 c-2.852,4.071,-1.861,9.684,2.21,12.535 c1.571,1.1,3.371,1.628,5.154,1.628 c2.837,0,5.63,-1.338,7.38,-3.839 l87.584,-125.083 C206.703,302.9,205.713,297.288,201.642,294.437 Z M272.35,464.205 c-4.071,-2.852,-9.684,-1.861,-12.534,2.21 l-33.484,47.821 c-2.852,4.071,-1.861,9.684,2.21,12.534 c1.571,1.101,3.371,1.628,5.154,1.628 c2.837,0,5.63,-1.338,7.38,-3.838 l33.484,-47.82 C277.411,472.668,276.421,467.057,272.35,464.205 Z M389.959,296.241 c-4.071,-2.851,-9.685,-1.861,-12.534,2.21 l-87.584,125.083 c-2.852,4.071,-1.861,9.684,2.21,12.534 c1.571,1.101,3.371,1.629,5.154,1.629 c2.837,0,5.63,-1.338,7.38,-3.838 l87.584,-125.084 C395.021,304.704,394.03,299.092,389.959,296.241 Z
  "
                                        ></path>
                                    </svg>
                                    <h1 className="text-xl md:text-2xl text-center text-[#0057b8] px-5 md:px-20">
                                        Together, we create life-changing wishes
                                        for children with critical illnesses.
                                    </h1>
                                </div>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    Wishes are more than just a nice thing. And
                                    they are far more than gifts, or singular
                                    events in time. Wishes impact everyone
                                    involved—wish kids, volunteers, donors,
                                    sponsors, medical professionals and
                                    communities. For wish kids, just the act of
                                    making their wish come true can give them
                                    the courage to comply with their medical
                                    treatments. Parents might finally feel like
                                    they can be optimistic. And still others
                                    might realize all they have to offer the
                                    world through volunteer work or
                                    philanthropy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
