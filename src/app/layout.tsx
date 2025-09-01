import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

// Lato (Sans-Serif)
const lato = Lato({
    variable: "--font-lato",
    weight: ["400", "700"],
    subsets: ["latin"],
});

// Merriweather (Serif)
const merriweather = Merriweather({
    variable: "--font-merriweather",
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Wish Clone",
    description: "Make-A-Wish style website built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${lato.variable} ${merriweather.variable} antialiased`}
            >
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
