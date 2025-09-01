import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0057b8] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column - Logo and Company Info */}
                    <div className="space-y-6 text-center lg:text-left">
                        {/* Make-A-Wish Logo */}
                        <div className="mb-8 flex justify-center lg:justify-start">
                            <Image
                                src="/logo.svg"
                                alt="Make-A-Wish Logo"
                                width={280}
                                height={80}
                                className="h-16 w-auto"
                            />
                        </div>

                        {/* Navigation Links - Mobile Only */}
                        <div className="lg:hidden space-y-6">
                            <div className="text-center space-y-4">
                                <div className="text-lg font-medium">
                                    <Link href="#" className="hover:underline">
                                        wishmaker.org
                                    </Link>
                                </div>
                                <div className="w-16 h-px bg-white mx-auto"></div>

                                <nav className="space-y-3 text-center">
                                    <div>
                                        <Link
                                            href="#"
                                            className="hover:underline block py-1"
                                        >
                                            Our History
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="/leadership"
                                            className="hover:underline block py-1"
                                        >
                                            Leadership
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="/become-a-national-partner"
                                            className="hover:underline block py-1"
                                        >
                                            Corporate Partners
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="/careers"
                                            className="hover:underline block py-1"
                                        >
                                            Careers
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="hover:underline block py-1"
                                        >
                                            Media Center
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="/contact-us"
                                            className="hover:underline block py-1"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="hover:underline block py-1"
                                        >
                                            Fraud Alerts
                                        </Link>
                                    </div>
                                </nav>
                                <div className="w-16 h-px bg-white mx-auto"></div>
                            </div>
                        </div>

                        {/* Copyright and Legal Info */}
                        <div className="space-y-3 text-sm leading-relaxed">
                            <p>©2006-2025 Make-A-Wish Foundation of America</p>
                            <p>
                                Make-A-Wish Foundation of America is an Arizona
                                nonprofit corporation exempt from federal income
                                tax under Section 501(c)(3) of the Internal
                                Revenue Code.
                            </p>
                            <p>
                                Federal Identification Number (EIN): 86-0481941
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-4 text-sm justify-center lg:justify-start">
                            <Link href="#" className="hover:underline">
                                Privacy Policy & Terms
                            </Link>
                            <span>|</span>
                            <Link href="#" className="hover:underline">
                                Financials
                            </Link>
                            <span>|</span>
                            <Link href="#" className="hover:underline">
                                FAQ
                            </Link>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <Image
                                src="/Most_Trusted_Nonprofit_Badge-2024-HORIZONTAL-RGB.avif"
                                alt="Most_Trusted_Nonprofit_Badge-2024-HORIZONTAL-RGB"
                                width={240}
                                height={60}
                            />
                        </div>
                    </div>

                    {/* Right Column - Navigation Links (Desktop Only) */}
                    <div className="hidden lg:block space-y-6">
                        <div className="text-right space-y-4">
                            <div className="text-lg font-medium">
                                <Link href="#" className="hover:underline">
                                    wishmaker.org
                                </Link>
                            </div>

                            <nav className="space-y-3 text-right">
                                <div>
                                    <Link
                                        href="#"
                                        className="hover:underline block py-1"
                                    >
                                        Our History
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/leadership"
                                        className="hover:underline block py-1"
                                    >
                                        Leadership
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/become-a-national-partner"
                                        className="hover:underline block py-1"
                                    >
                                        Corporate Partners
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/careers"
                                        className="hover:underline block py-1"
                                    >
                                        Careers
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="#"
                                        className="hover:underline block py-1"
                                    >
                                        Media Center
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/contact-us"
                                        className="hover:underline block py-1"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="#"
                                        className="hover:underline block py-1"
                                    >
                                        Fraud Alerts
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
