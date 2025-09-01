"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Our History", href: "/about-us" },
    { label: "Our Mission", href: "/mission" },
    { label: "Our Stories", href: "/our-stories" },
    { label: "Managing Our Funds", href: "/managing-our-funds" },
    { label: "Leadership", href: "/leadership" },
    { label: "Social", href: "/social" },
    { label: "Careers", href: "/careers" },
];

const SideNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="w-full lg:w-80">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-6">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                    <span className="text-gray-700 font-medium">
                        Select a page
                    </span>
                    <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.href + index}
                                href={item.href}
                                className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors ${
                                    index !== navItems.length - 1
                                        ? "border-b border-gray-200"
                                        : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <div className="sticky top-6 border border-gray-300 rounded-lg shadow-sm">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href + index}
                            href={item.href}
                            className={`block px-4 py-3 transition-colors ${
                                index !== navItems.length - 1
                                    ? "border-b border-gray-200"
                                    : ""
                            } ${
                                pathname === item.href
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideNavigation;
