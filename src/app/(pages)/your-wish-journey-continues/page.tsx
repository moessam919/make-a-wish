import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="w-full">
                <div className="grid grid-cols-4 gap-0 relative ">
                    {/* Row 1 */}
                    <Tile src="/brad-2.jpeg" alt="Alumni collage" />
                    <Tile
                        src="/japanese-tea-garden-standing-2.avif"
                        alt="Alumni collage"
                    />
                    <Tile src="/img-7510.avif" alt="Alumni collage" />
                    <Tile
                        src="/microsoftteams-image-20.avif"
                        alt="Alumni collage"
                    />

                    {/* Row 2 */}
                    <Tile
                        src="/dsc-4322-2.avif"
                        alt="Alumni collage"
                        gradient="bottom"
                    />
                    <Tile src="/siblings-shot.avif" alt="Alumni collage" />

                    {/* Text overlay tile */}
                    <Tile
                        src="/wishalum-josh-2-2.avif"
                        alt="Alumni collage"
                    ></Tile>

                    <Tile
                        src="/sammie-10-cancer-disneyworldresort-smile-cc.avif"
                        alt="Alumni collage"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-end justify-end p-4 sm:p-6 md:p-8">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-serif font-semibold leading-tight drop-shadow-md">
                            A Wish is Forever...
                        </h2>
                        <p className="mt-3 text-white text-base sm:text-lg md:text-2xl font-medium drop-shadow">
                            Welcome to the Make-A-Wish
                        </p>
                        <p className="text-white text-base sm:text-lg md:text-2xl font-medium drop-shadow">
                            Alumni Community
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 md:py-14">
                <p className=" text-lg md:text-3xl leading-relaxed text-gray-800">
                    Every child and family who experiences the incredible impact
                    of a wish also becomes part of a diverse and powerful
                    community of wish alumni. With more than 375,000 wish alumni
                    and their families across the U.S., we invite you to
                    discover the many ways you can connect with others like you
                    and get involved to make other wishes possible.
                </p>
                <div className="text-center">
                    <h2 className="mt-10 md:mt-14 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#0A4DB3]">
                        Join the Wish-It-Forward™ Movement
                    </h2>
                </div>

                <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="rounded-3xl bg-[#0A4DB3] text-white p-6 md:p-10 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-semibold font-serif">
                                    Start a Fundraiser
                                </h3>
                                <p className="mt-6 text-xl font-semibold">
                                    Raise money your way.
                                </p>
                                <p className="mt-4 max-w-xl text-lg leading-relaxed">
                                    Share your wish story and inspire your
                                    community to donate.
                                </p>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-[#FF6B6B] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl font-semibold shadow-md hover:opacity-90 transition"
                                    >
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                                <Image
                                    src="/img-7510.avif"
                                    alt="Fundraiser"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl bg-[#05A9A1] text-white p-6 md:p-10 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-semibold font-serif">
                                    Rally Your School
                                </h3>
                                <p className="mt-6 text-xl font-semibold">
                                    Engage your peers.
                                </p>
                                <p className="mt-4 max-w-xl text-lg leading-relaxed">
                                    Host a Wish Week® with Kids For Wish Kids®
                                    or Wishmakers on Campus®.
                                </p>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-[#FF6B6B] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl font-semibold shadow-md hover:opacity-90 transition"
                                    >
                                        Support at School
                                    </a>
                                </div>
                            </div>
                            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                                <Image
                                    src="/microsoftteams-image-20.avif"
                                    alt="Rally your school"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}

                    <div className="rounded-3xl bg-[#05A9A1] text-white p-6 md:p-10 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-semibold font-serif">
                                    Rally Your School
                                </h3>
                                <p className="mt-6 text-xl font-semibold">
                                    Engage your peers.
                                </p>
                                <p className="mt-4 max-w-xl text-lg leading-relaxed">
                                    Host a Wish Week® with Kids For Wish Kids®
                                    or Wishmakers on Campus®.
                                </p>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-[#FF6B6B] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl font-semibold shadow-md hover:opacity-90 transition"
                                    >
                                        Support at School
                                    </a>
                                </div>
                            </div>
                            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                                <Image
                                    src="/microsoftteams-image-20.avif"
                                    alt="Rally your school"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}

                    <div className="rounded-3xl bg-[#0A4DB3] text-white p-6 md:p-10 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-semibold font-serif">
                                    Start a Fundraiser
                                </h3>
                                <p className="mt-6 text-xl font-semibold">
                                    Raise money your way.
                                </p>
                                <p className="mt-4 max-w-xl text-lg leading-relaxed">
                                    Share your wish story and inspire your
                                    community to donate.
                                </p>
                                <div className="mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-[#FF6B6B] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-2xl font-semibold shadow-md hover:opacity-90 transition"
                                    >
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                                <Image
                                    src="/img-7510.avif"
                                    alt="Fundraiser"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <h2 className="text-lg md:text-2xl">
                        Interested in connecting with our wish alumni team or
                        finding your local chapter?
                    </h2>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-[#FF6B6B] text-white font-semibold px-8 md:px-12 xl:px-16 py-3 md:py-4 text-lg md:text-2xl shadow-md hover:opacity-90 transition"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-full bg-[#FF6B6B] text-white font-semibold px-8 md:px-12 xl:px-16 py-3 md:py-4 text-lg md:text-2xl shadow-md hover:opacity-90 transition"
                        >
                            Find Your Chapter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

type TileProps = {
    src: string;
    alt: string;
    gradient?: "none" | "bottom";
};

const Tile = ({ src, alt, gradient = "none" }: TileProps) => {
    return (
        <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 w-full overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" priority />
            {gradient === "bottom" && (
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            )}
        </div>
    );
};

export default page;
