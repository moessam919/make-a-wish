"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
    "/Chris_Uniform_r.avif",
    "/Nominee-in-hallway_R.avif",
    "/Landscape-Girl-2.avif",
];

const QuoteGallery = () => {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (
        <section className="max-w-5xl mx-auto mt-16">
            {/* Quote */}
            <div className="text-center px-4">
                <div className="text-[#0057b8] text-5xl md:text-6xl font-serif select-none">
                    “”
                </div>
                <p className="mt-4 text-xl md:text-2xl italic text-[#0057b8] leading-relaxed">
                    He was only seven years, 269 days old when he died. But he
                    taught me about being a man, even though he was only a boy.
                    And because of meeting him, I&apos;m an entirely different
                    man.
                </p>
                <div className="mt-6 text-sm text-gray-700">
                    <div className="font-semibold">Tommy Austin</div>
                    <div>Make-A-Wish co-founder</div>
                </div>
            </div>

            <hr className="my-8 border-gray-300" />

            {/* Image slider */}
            <div className="relative">
                <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded">
                    <Image
                        src={images[index]}
                        alt="Make-A-Wish history image"
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Prev */}
                <button
                    aria-label="Previous image"
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF585D] text-white grid place-items-center shadow hover:bg-[#eb4a4f]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Next */}
                <button
                    aria-label="Next image"
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF585D] text-white grid place-items-center shadow hover:bg-[#eb4a4f]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default QuoteGallery;
