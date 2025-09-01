"use client";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const hideFooter = pathname === "/impact";

    return (
        <>
            <div className="relative">
                <Header />
            </div>
            {children}
            {!hideFooter && <Footer />}
        </>
    );
}
