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
                            Our Stories
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
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
                                    Make-A-Wish traces its inspiration to Chris
                                    Greicius, a child with leukemia who wished
                                    to be a police officer. In 1980, a community
                                    came together and made his wish come true.
                                    The impact of his wish was felt throughout
                                    his community and was the inspiration for
                                    what is now Make-A-Wish. Today, it is our
                                    vision at Make-A-Wish to develop the
                                    resources to grant the wish of every
                                    eligible child.
                                </p>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
                                    Wishes can change the odds for children
                                    fighting their illness. A wish helps kids
                                    look past their limitations, families
                                    overcome anxiety and entire communities
                                    experience joy. Most importantly, wishes can
                                    improve a child’s quality of life.
                                    Experience the power of imagination and the
                                    strength that comes from it. At Make-A-Wish,
                                    life-changing wishes start with you.
                                </p>

                                <h1 className="text-2xl md:text-3xl text-[#0057b8] mb-6">
                                    Our Wish Kids
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    A wish come true helps children feel
                                    stronger, more energetic, more willing and
                                    able to battle their critical illnesses. For
                                    many, the wish marks a turning point in the
                                    fight against their illnesses. Doctors,
                                    nurses and other health professionals say
                                    the wish experience works in concert with
                                    medicine to make their patients feel better
                                    emotionally and even physically. That is why
                                    wishes matter. That is why we grant wishes.
                                    Experience the stories of those who know
                                    firsthand the power of hope and
                                    transformation.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                    {/* Article 1 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Isaiah_15_nervous system disorder_have a backyard basketball court_1.avif"
                                                alt="Family on basketball court"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                #HighFiveIsaiah - Basketball
                                                Wish Brings Newfound Confidence
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 2 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Claire_11_cancer_go to saint thomas_3.avif"
                                                alt="Girl jumping on beach"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Claire&apos;s Wish Creates a
                                                Turning Point and Restores Hope
                                                for Brighter Days Ahead
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 3 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Johnny_17_congenital heart disease_be a law enforcement officer_1.avif"
                                                alt="Boy in police car"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Johnny&apos;s Law Enforcement
                                                Wish Commands a Bright Future
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 4 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Lynetta Williams.avif"
                                                alt="Two girls in pink dresses"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Lynetta&apos;s Wish Marks a
                                                Turning Point that Restored Her
                                                Hope for Brighter Days Ahead
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 5 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Dayonie1.avif"
                                                alt="Boy on play structure"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Dayonie&apos;s Wish is a
                                                Constant Source of Joy and
                                                Togetherness for the Entire
                                                Family
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 6 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Amelia_4_leukemia_to be a zookeeper for a day_CENTRAL AND NORTH FLORIDA_1 (1).avif"
                                                alt="Girl with giraffe"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Amelia&apos;s Wish Helps Create
                                                a Turning Point in Her Treatment
                                                Journey
                                            </h3>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-2xl md:text-3xl text-[#0057b8] mb-6 mt-10">
                                    Donors & Volunteers
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    Wishes come true because of caring actions.
                                    Contributions of time, talent and money
                                    allow us to transform lives, one wish at a
                                    time. Wishes come true because of the caring
                                    actions of volunteers, donors, medical
                                    professionals and communities who come
                                    together for one purpose: To create
                                    life-changing wishes for children with
                                    critical illnesses.
                                </p>
                                <h1 className="text-2xl md:text-3xl text-[#0057b8] mb-6">
                                    Our Donors
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    Make-A-Wish appreciates every donor,
                                    regardless of the amount they contribute. We
                                    also recognize those whose gifts make an
                                    extraordinary number of wishes come true.
                                </p>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    Read about a few of our donors, why they are
                                    so committed to helping grant wishes and the
                                    impact they are having on our mission.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                    {/* Article 1 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/allen_donor_cover_r.avif"
                                                alt="Family on basketball court"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Ned and Suzie Allen
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                In honor of their grandson, Ned
                                                and Suzie Allen are transforming
                                                tragedy into hope for wish kids.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 2 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Jeff_Ikler_Donor.avif"
                                                alt="Girl jumping on beach"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Jeff Ikler
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                Jeff has dedicated his life to
                                                helping others and leaving a
                                                lasting gift of hope for future
                                                wish kids.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 3 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/mdrt_donor.avif"
                                                alt="Boy in police car"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Million Dollar Round Table s a
                                                Bright Future
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                One little girl&apos;s wish
                                                spurs a lasting partnership.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-2xl md:text-3xl text-[#0057b8] mb-6 mt-10">
                                    Our Volunteers
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    Make-A-Wish is able to fulfill its mission
                                    because of its volunteers. Each year, nearly
                                    40,000 volunteers contribute to our mission
                                    of granting wishes. Read how people just
                                    like you create a lasting impact on wish
                                    kids and families.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                    {/* Article 1 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Noah_2_r.avif"
                                                alt="Family on basketball court"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Abe Savage
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                Abe brought his company and
                                                friends together to make
                                                Noah&apos;s wish come true.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 2 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Dana_Miller_r.avif"
                                                alt="Girl jumping on beach"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Dana Miller
                                            </h3>
                                            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                                                I got involved with Make-A-Wish
                                                after my brother&apos;s wish to
                                                meet Sammy Sosa of the Chicago
                                                Cubs was granted in May 2001.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 3 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Volunteer_Story_Jim-and-Kathy-2_R.avif"
                                                alt="Boy in police car"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Jim and Kathy Donovan
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                For Jim and Kathy, there is
                                                nothing more powerful than
                                                seeing the results of their
                                                wish-granting efforts.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="text-2xl md:text-3xl text-[#0057b8] mb-6 mt-10">
                                    Our Medical Professionals
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    The dedicated medical professionals that
                                    refer their patients to Make-A-Wish play a
                                    critical role in our wish process. By
                                    referring a child, they help us get closer
                                    to achieving our vision of granting every
                                    eligible child&apos;s wish. Read about the
                                    medical professionals that have impacted the
                                    lives of wish children and the Make-A-Wish
                                    mission.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
                                    {/* Article 1 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/Angelina 1.avif"
                                                alt="Family on basketball court"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Dr. Blaine John
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                Dr. Blaine John, Angelina’s
                                                physician, performed three
                                                open-heart surgeries on her
                                                before she turned 5.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Article 2 */}
                                    <div className="bg-white overflow-hidden flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src="/JPEG[1].avif"
                                                alt="Girl jumping on beach"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#0057b8] mb-3 line-clamp-2">
                                                Dr. Jen Pratt
                                            </h3>
                                            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                                                From magic to medicine, 2020
                                                marks 25 years since Dr.
                                                Pratt&apos;s wish was granted.
                                                Now, she refers her patients to
                                                Make-A-Wish.
                                            </p>
                                            <Link
                                                href="#"
                                                className="text-[#0057b8] hover:text-[#003d82] font-medium transition-colors duration-200 mt-auto"
                                            >
                                                Read More &gt;
                                            </Link>
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
