import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideNavigation from "../../components/SideNavigation";
import QuoteGallery from "../../components/QuoteGallery";
import SignUpSection from "@/app/components/SignUpSection";

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
                            Our History
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
                    className="hidden lg:block absolute w-40 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
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
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    Tens of thousands of volunteers, donors and
                                    supporters advance the Make-A-Wish® vision
                                    to grant the wish of every child diagnosed
                                    with a critical illness. In the U.S. and its
                                    territories, a wish is granted every 33
                                    minutes. A wish can be that spark that helps
                                    these children believe that anything is
                                    possible and gives them the strength to
                                    fight harder against their illnesses. This
                                    one belief guides us and inspires us to
                                    grant wishes that change the lives of the
                                    kids we serve.
                                </p>

                                <h1 className="text-lg md:text-2xl  text-[#0057b8] mb-6">
                                    Our History
                                </h1>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    For children diagnosed with critical
                                    illnesses, a wish come true can be a crucial
                                    turning point in their lives. A wish can be
                                    that spark that helps these children believe
                                    that anything is possible and gives them the
                                    strength to fight harder against their
                                    illnesses. This impact is why we are driven
                                    to make every one of these wishes come true.
                                </p>
                                <div className="flex flex-col md:flex-row md:items-stretch gap-5">
                                    <div className="md:flex-1">
                                        <h1 className="text-lg md:text-2xl  text-[#0057b8] mb-6">
                                            How It All Started: Chris&apos; Wish
                                        </h1>
                                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                            Make-A-Wish traces its inspiration
                                            to Christopher James Greicius, an
                                            energetic 7-year-old boy battling
                                            leukemia who wishes to be a police
                                            officer. In 1980, his Phoenix
                                            community came together to make his
                                            wish come true. Little did Chris
                                            know that his wish would create a
                                            movement that would transform
                                            millions of lives.
                                        </p>
                                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                            Today, Make-A-Wish has granted
                                            hundreds of thousands of
                                            life-changing wishes to children
                                            battling critical illnesses. Wishes
                                            that give families hope through dark
                                            times, strength to persevere and
                                            experiences that forever change
                                            their lives.
                                        </p>
                                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                            Thank you to his mother, Linda
                                            Pauling, the Greicius family and the
                                            founders for their tireless
                                            dedication to our mission.
                                        </p>
                                    </div>
                                    <div className="md:flex-1 relative self-stretch min-h-[260px]">
                                        <Image
                                            alt="Chris_Uniform_r"
                                            src="/Chris_Uniform_r.avif"
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover rounded"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <QuoteGallery />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-stretch gap-5 mt-10">
                                    <div className="md:flex-1 relative self-stretch min-h-[260px]">
                                        <Image
                                            alt="Chris_Uniform_r"
                                            src="/Frank_landscape2test.avif"
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <div className="md:flex-1">
                                        <h1 className="text-lg md:text-2xl  text-[#0057b8] mb-6">
                                            The First Wish Kid
                                        </h1>
                                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                            Frank &quot;Bopsy&quot; Salazar is
                                            the first official Make-A-Wish kid.
                                            He&apos;s 7 and has leukemia—just
                                            like Chris. So, the Phoenix Fire
                                            Department gives Bopsy an experience
                                            like Chris’; he becomes a member of
                                            the Engine 9 crew. Since the first
                                            wish is also the first Disney wish,
                                            the Anaheim Fire Department picks up
                                            the baton, taking Bopsy and his
                                            family around Southern California.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t-1 border-[#0057b8] mt-10"></div>

                                {/* Timeline */}
                                <section className="mt-10 px-4">
                                    <h2 className="text-2xl md:text-3xl text-[#0057b8] font-semibold mb-6">
                                        Timeline
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        For over 40 years, the Make-A-Wish has
                                        been granting life-changing wishes for
                                        children and families.
                                    </p>

                                    <div className="space-y-6">
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1980:
                                            </span>{" "}
                                            Chris Greicius’ wish to be a police
                                            officer is granted. His wish
                                            inspires the creation of
                                            Make-A-Wish.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1981:
                                            </span>{" "}
                                            Make-A-Wish grants its first
                                            official wish to Frank
                                            &quot;Bopsy&quot; Salazar.{" "}
                                            <em>NBC Magazine</em> story about
                                            Make-A-Wish leads to the formation
                                            of chapters in the U.S.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1983:
                                            </span>{" "}
                                            Make-A-Wish Foundation of America is
                                            incorporated. President Ronald
                                            Reagan grants the first presidential
                                            wish to Amy.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1985:
                                            </span>{" "}
                                            The “Stephanie in the Snow” video
                                            inspires the establishment of more
                                            chapters.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1988:
                                            </span>{" "}
                                            Reader’s Digest article, “They Bring
                                            Joy to Sick Kids,” generates
                                            international awareness of
                                            Make-A-Wish.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1990:
                                            </span>{" "}
                                            Make-A-Wish celebrates 10th birthday
                                            and 10,000 wishes granted.
                                            Make-A-Wish receives the Citation
                                            for Volunteer Action Award from
                                            President George H.W. Bush
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1993:
                                            </span>{" "}
                                            Make-A-Wish International is formed
                                            to serve countries outside of the
                                            U.S.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                1996:
                                            </span>{" "}
                                            The Make-A-Wish website, wish.org,
                                            goes live.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2000:
                                            </span>{" "}
                                            Make-A-Wish now serves every
                                            community in the U.S. Wishbone logo
                                            is replaced with a swirl and star
                                            logo. Over 75,000 wishes granted.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2004:
                                            </span>{" "}
                                            Make-A-Wish selected as one of
                                            “America’s Greatest Brands.”
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2010:
                                            </span>{" "}
                                            First World Wish Day is celebrated
                                            around the world. Over 198,000
                                            wishes granted.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2011:
                                            </span>{" "}
                                            Make-A-Wish commissions Wish Impact
                                            Study to assess the physical and
                                            emotional impact of wishes.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2018:
                                            </span>{" "}
                                            Make-A-Wish unveils brand refresh
                                            and establishes a permanent
                                            headquarters.
                                        </p>
                                        <p className="text-lg leading-8">
                                            <span className="font-semibold text-[#0057b8]">
                                                2020:
                                            </span>{" "}
                                            Make-A-Wish celebrates the 40th
                                            anniversary of our first wish.
                                        </p>
                                    </div>
                                </section>

                                {/* Local and Global Structure */}
                                <section className="mt-14 px-4">
                                    <h2 className="text-2xl md:text-3xl text-[#0057b8] font-semibold mb-8">
                                        Local and Global Structure
                                    </h2>

                                    <h3 className="text-xl md:text-2xl text-[#0057b8] font-semibold mb-4">
                                        Make-A-Wish America
                                    </h3>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Make-A-Wish is one united family. But
                                        it’s also a collection of independently
                                        chartered nonprofit organizations that
                                        stand committed to a shared vision and
                                        mission.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        The Make-A-Wish national office is based
                                        in Phoenix, where the organization was
                                        established in 1980. It establishes
                                        guidelines for wish-granting standards,
                                        raises funds at a national level,
                                        provides legal support, develops
                                        strategies to advance awareness and
                                        establishes the overall direction for
                                        the organization.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Chapters throughout the United States
                                        serve every community across the nation
                                        and its territories. Each has its own
                                        board of directors, staff and
                                        volunteers. Chapters are the force
                                        bringing the Make-A-Wish mission to
                                        life. For most wishes, it is local staff
                                        members and volunteers who meet wish
                                        kids and their families, are told of the
                                        child’s one true wish, and devote their
                                        energy to make each wish come true.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                                        The Make-A-Wish mission is too inspiring
                                        for just one country. Today, Make-A-Wish
                                        International is the hub for
                                        wish-granting activities in 50
                                        countries, outside of the United States,
                                        on six continents. Affiliates in each
                                        country bring the mission to life in
                                        communities around the globe.
                                    </p>

                                    <h3 className="text-xl md:text-2xl text-[#0057b8] font-semibold mb-4">
                                        Make-A-Wish International
                                    </h3>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        After the inception of Make-A-Wish
                                        America, interest in granting the wishes
                                        of children with critical illnesses
                                        quickly spread to other nations.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        In 1993, Make-A-Wish International was
                                        officially formed to serve the five
                                        countries outside the United States that
                                        were already granting wishes. Today,
                                        Make-A-Wish International has 40
                                        affiliates, serving children in 50
                                        countries on six continents.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Make-A-Wish International has the same
                                        mission as Make-A-Wish America — to
                                        grant the wishes of children with
                                        critical illnesses.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Make-A-Wish America grants the wishes of
                                        children in the United States and all of
                                        its territories and possessions, while
                                        Make-A-Wish International serves
                                        children outside the United States and
                                        its territories and possessions.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        With the help of generous donors and
                                        more than 27,000 volunteers worldwide,
                                        Make-A-Wish has collectively granted
                                        more than 585,000 wishes worldwide,
                                        making it the world’s largest
                                        wish-granting organization. For more
                                        information about Make-A-Wish
                                        International, please visit{" "}
                                        <span className="underline">
                                            worldwish.org
                                        </span>
                                        .
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 bg-[#fbd872] relative">
                {/* Left star */}
                <Image
                    src="/starsyell.svg"
                    alt="Star decoration left"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full left-4 top-1/2 transform -translate-y-1/2 md:left-10 lg:left-20"
                />

                {/* Right star */}
                <Image
                    src="/starsyell.svg"
                    alt="Star decoration right"
                    width={1920}
                    height={1080}
                    className="absolute w-40 h-20 md:w-80 md:h-full right-4 top-1/2 transform -translate-y-1/2 md:right-10 lg:right-20"
                />
                <div className="max-w-4xl mx-auto flex flex-col items-center px-4 pt-8">
                    <div>
                        <svg
                            viewBox="0 0 528 528"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 md:w-30"
                        >
                            <path
                                fill="#00bab3"
                                d="
    M341.785,237.791 l-7.941,41.582 c-0.905,4.738,0.955,9.442,4.857,12.278 c3.901,2.836,8.951,3.154,13.182,0.829 l37.092,-20.403 l37.094,20.402 c1.879,1.034,3.922,1.546,5.953,1.546 c2.538,0,5.059,-0.797,7.227,-2.372 c3.903,-2.836,5.764,-7.541,4.859,-12.278 l-7.941,-41.583 l30.865,-28.973 c3.519,-3.301,4.777,-8.202,3.287,-12.79 s-5.39,-7.813,-10.176,-8.416 l-42.002,-5.297 l-18.017,-38.308 c-2.052,-4.366,-6.325,-7.078,-11.148,-7.078 c-4.824,0,-9.097,2.712,-11.148,7.077 l-18.018,38.31 l-42.001,5.297 c-4.786,0.604,-8.686,3.828,-10.176,8.416 c-1.49,4.587,-0.231,9.488,3.286,12.789 L341.785,237.791 Z M362.743,200.088 c5.725,-0.722,10.606,-4.27,13.063,-9.491 l13.169,-28.001 l13.169,28.002 c2.455,5.221,7.338,8.769,13.062,9.49 l30.7,3.871 l-22.562,21.179 c-4.206,3.948,-6.07,9.688,-4.988,15.355 l5.805,30.394 l-27.115,-14.913 c-5.052,-2.779,-11.087,-2.779,-16.146,0 l-27.112,14.914 l5.805,-30.395 c1.083,-5.666,-0.782,-11.406,-4.989,-15.356 l-22.561,-21.177 L362.743,200.088 Z M525.986,344.215 c-6.982,-13.848,-23.926,-19.435,-37.771,-12.454 l-65.938,33.238 c-0.447,-17.063,-14.455,-30.81,-31.624,-30.81 H322.49 c-12.297,-26.123,-38.92,-43.276,-68.139,-43.276 h-84.837 v-10.123 c0,-4.97,-4.029,-9,-9,-9 H80 c-4.971,0,-9,4.03,-9,9 v155.997 c0,4.971,4.029,9,9,9 h80.515 c4.971,0,9,-4.029,9,-9 v-8.485 l140.856,32.435 c6.757,1.557,13.634,2.326,20.494,2.326 c14.234,0,28.398,-3.313,41.243,-9.788 l141.424,-71.289 c6.708,-3.382,11.697,-9.173,14.05,-16.307 C529.934,358.545,529.367,350.922,525.986,344.215 Z M151.515,427.787 H89 V289.791 h62.515 V427.787 Z M510.487,360.043 c-0.847,2.568,-2.643,4.652,-5.057,5.869 L364.007,437.2 c-15.294,7.71,-32.907,9.839,-49.597,5.995 l-144.896,-33.364 V308.913 h84.837 c19.235,0,36.992,9.771,47.492,25.276 h-33.473 c-4.97,0,-9,4.029,-9,9 s4.03,9,9,9 h122.283 c7.523,0,13.645,6.121,13.645,13.645 c0,4.613,-2.308,8.692,-5.823,11.163 l-3.533,1.781 c-1.35,0.448,-2.789,0.7,-4.288,0.7 H267.112 c-4.971,0,-9,4.03,-9,9 c0,4.971,4.029,9,9,9 h123.541 c6.181,0,11.949,-1.787,16.827,-4.864 l88.836,-44.78 c4.985,-2.511,11.085,-0.501,13.596,4.482 C511.13,354.731,511.334,357.476,510.487,360.043 Z
  "
                            ></path>
                        </svg>
                    </div>

                    <div className="mt-20 text-center max-w-4xl space-y-9 mb-9">
                        <h1 className="font-bold text-2xl md:text-4xl text-[#0057b8]">
                            Transform lives, one wish at a time.
                        </h1>
                        <Link href="/contact-us">
                            <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-3 px-8  lg:px-10 lg:text-lg xl:text-xl rounded-full">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <SignUpSection />
        </div>
    );
};

export default page;
