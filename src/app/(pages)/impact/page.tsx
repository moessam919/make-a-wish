"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Menu, X, PlayCircle } from "lucide-react";

interface SectionData {
    title: string;
    intro: {
        title: string;
        subtitle: string;
        bgColor: string;
    };
    video: {
        title: string;
        description: string;
        videoId: string;
        videoUrl: string;
        thumbnail: string;
    };
}

interface VideoPopupState {
    isOpen: boolean;
    videoId: string | null;
}

const VideoShowcaseApp = () => {
    const [currentSection, setCurrentSection] = useState<number>(-1); // Start with introduction
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Disabled initially
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [videoPopup, setVideoPopup] = useState<VideoPopupState>({
        isOpen: false,
        videoId: null,
    });
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showScrollIndicator, setShowScrollIndicator] =
        useState<boolean>(true);
    const [slideDirection, setSlideDirection] = useState<string>("");
    const [hasStarted, setHasStarted] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastScrollTime = useRef<number>(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const sections: SectionData[] = [
        {
            title: "Strength",
            intro: {
                title: "Building Inner Strength",
                subtitle:
                    "Empowering children to overcome challenges with resilience and courage",
                bgColor: "from-blue-900/80 to-blue-700/80",
            },
            video: {
                title: "Watch Sarah's Journey of Strength",
                description:
                    "See how we helped Sarah find the courage to face her treatment with a smile",
                videoId: "strength-video",
                videoUrl: "/2343086208.mp4",
                thumbnail:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0iIzMzNzNkYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJlYXV0aWZ1bCBWaWRlbyBUaHVtYm5haWw8L3RleHQ+PC9zdmc+",
            },
        },
        {
            title: "Hope",
            intro: {
                title: "Inspiring Hope",
                subtitle:
                    "Creating moments of joy and possibility in the darkest times",
                bgColor: "from-purple-900/80 to-purple-700/80",
            },
            video: {
                title: "Marcus's Wish Come True",
                description:
                    "Experience the magic when hope becomes reality for children like Marcus",
                videoId: "hope-video",
                videoUrl: "/1150549457.mp4",
                thumbnail:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0iIzc5MzNkYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvcGUgVmlkZW8gU3Rvcnk8L3RleHQ+PC9zdmc+",
            },
        },
        {
            title: "Transformation",
            intro: {
                title: "Life Transformation",
                subtitle:
                    "Witnessing incredible changes in the lives of brave children",
                bgColor: "from-emerald-900/80 to-emerald-700/80",
            },
            video: {
                title: "Transformation Stories",
                description:
                    "See how wishes create lasting positive change in children's lives",
                videoId: "transformation-video",
                videoUrl: "/1150549717.mp4",
                thumbnail:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0iIzEwOTk2OCIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFtYXppbmcgVHJhbnNmb3JtYXRpb248L3RleHQ+PC9zdmc+",
            },
        },
        {
            title: "Community",
            intro: {
                title: "Building Community",
                subtitle: "Together we create a network of support and love",
                bgColor: "from-rose-900/80 to-rose-700/80",
            },
            video: {
                title: "Our Community Impact",
                description:
                    "Discover how our community comes together to make dreams come true",
                videoId: "community-video",
                videoUrl: "/1150549523.mp4",
                thumbnail:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0iI2JmMTI2NyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbW11bml0eSBUb2dldGhlcjwvdGV4dD48L3N2Zz4=",
            },
        },
    ];

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 1000) return; // Throttle scroll

            lastScrollTime.current = now;

            if (e.deltaY > 0) {
                // Scroll down
                if (currentSection === -1) {
                    // From introduction to first section
                    setSlideDirection("down");
                    setHasStarted(true);
                    setIsPlaying(true);
                    setTimeout(() => {
                        setCurrentSection(0);
                        setCurrentSlide(0);
                    }, 50);
                } else if (currentSlide === 0) {
                    setSlideDirection("down");
                    setTimeout(() => setCurrentSlide(1), 50);
                } else if (currentSection < sections.length - 1) {
                    setSlideDirection("down");
                    setTimeout(() => {
                        setCurrentSection(currentSection + 1);
                        setCurrentSlide(0);
                    }, 50);
                }
            } else {
                // Scroll up
                if (currentSection === 0 && currentSlide === 0) {
                    // Back to introduction
                    setSlideDirection("up");
                    setHasStarted(false);
                    setIsPlaying(false);
                    setTimeout(() => {
                        setCurrentSection(-1);
                        setCurrentSlide(0);
                    }, 50);
                } else if (currentSlide === 1) {
                    setSlideDirection("up");
                    setTimeout(() => setCurrentSlide(0), 50);
                } else if (currentSection > 0) {
                    setSlideDirection("up");
                    setTimeout(() => {
                        setCurrentSection(currentSection - 1);
                        setCurrentSlide(1);
                    }, 50);
                }
            }

            // Hide scroll indicator after first scroll from introduction
            if (showScrollIndicator && currentSection === -1) {
                setShowScrollIndicator(false);
            }
        };

        window.addEventListener("wheel", handleScroll as EventListener, {
            passive: true,
        });
        return () =>
            window.removeEventListener("wheel", handleScroll as EventListener);
    }, [currentSection, currentSlide, showScrollIndicator, sections.length]);

    useEffect(() => {
        // Only auto-advance on intro slides, and only after user has started
        if (!isPlaying || !hasStarted || currentSection === -1) return;

        // Don't auto-advance on video slides - let user manually scroll
        if (currentSlide === 1) return;

        const interval = setInterval(() => {
            setSlideDirection("down");
            setTimeout(() => setCurrentSlide(1), 50);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentSection, currentSlide, isPlaying, hasStarted]);

    // Clear slide direction after animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideDirection("");
        }, 600);
        return () => clearTimeout(timer);
    }, [slideDirection]);

    const currentSectionData =
        currentSection >= 0 ? sections[currentSection] : null;
    const isVideoSlide = currentSlide === 1;
    const isIntroduction = currentSection === -1;

    const handleSectionClick = (index: number) => {
        setSlideDirection(index > currentSection ? "down" : "up");
        setHasStarted(true);
        setIsPlaying(true);
        setTimeout(() => {
            setCurrentSection(index);
            setCurrentSlide(0);
            setIsMobileMenuOpen(false);
        }, 50);
    };

    const openVideoPopup = (videoId: string) => {
        setIsPlaying(false); // Pause auto-scroll when video popup opens
        setVideoPopup({ isOpen: true, videoId });
    };

    const closeVideoPopup = () => {
        setIsPlaying(hasStarted); // Resume auto-scroll only if user has started
        setVideoPopup({ isOpen: false, videoId: null });
    };

    return (
        <div
            className="h-[calc(100vh-7vh)] lg:h-[calc(100vh-18vh)] 2xl:h-[calc(100vh-13vh)] relative overflow-hidden bg-gray-900"
            ref={containerRef}
        >
            {/* Mobile Menu Button */}
            {isMobile && (
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="fixed top-25 left-4 z-50 bg-black/30 backdrop-blur-md border border-white/20 p-3 rounded-lg text-white hover:bg-black/50 transition-all duration-300"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            )}

            {/* Mobile Play/Pause Controls */}
            {isMobile && (
                <div className="fixed top-25 right-4 z-40">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-black/30 backdrop-blur-md border border-white/20 p-3 rounded-lg text-white hover:bg-black/50 transition-all duration-300"
                    >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                </div>
            )}

            {/* Glassy Side Navigation with Video Preview */}
            <div
                className={`fixed left-0 top-0 h-full bg-black/20 backdrop-blur-xl border-r border-white/10 z-30 transition-all duration-500 ${
                    isMobile
                        ? isMobileMenuOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                        : "translate-x-0"
                } ${isMobile ? "w-80" : "w-80"} ${
                    isIntroduction
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
            >
                {/* Background Video Preview */}
                {/* {isVideoSlide && !isIntroduction && currentSectionData && (
                    <div className="absolute inset-0 overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-30"
                        >
                            <source
                                src={currentSectionData.video.videoUrl}
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                    </div>
                )} */}

                <div className="relative z-10 flex flex-col justify-between h-full p-8">
                    {/* Navigation Items */}
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        {sections.map((section, index) => (
                            <button
                                key={section.title}
                                onClick={() => handleSectionClick(index)}
                                className={`text-left text-white text-xl font-light transition-all duration-500 hover:text-blue-400 group ${
                                    currentSection === index
                                        ? "text-blue-400 text-2xl font-normal"
                                        : ""
                                }`}
                            >
                                <div className="relative">
                                    {section.title}
                                    <div
                                        className={`h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 mt-2 ${
                                            currentSection === index
                                                ? "w-full shadow-lg shadow-blue-400/50"
                                                : "w-0 group-hover:w-1/2"
                                        }`}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Desktop Play/Pause Controls in Sidebar */}
                    {!isMobile && !isIntroduction && (
                        <div className="mt-auto">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                {isPlaying ? (
                                    <Pause size={20} />
                                ) : (
                                    <Play size={20} />
                                )}
                                <span className="text-sm font-medium">
                                    {isPlaying ? "Pause" : "Play"}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 h-full ${
                    isMobile || isIntroduction ? "ml-0" : ""
                }`}
            >
                <div className="h-full relative overflow-hidden">
                    {/* Background Video for Video Slides */}
                    {isVideoSlide && !isIntroduction && currentSectionData && (
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source
                                    src={currentSectionData.video.videoUrl}
                                    type="video/mp4"
                                />
                            </video>
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    )}

                    {/* Gradient Background for Intro Slides and Introduction */}
                    {(!isVideoSlide || isIntroduction) && (
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${
                                isIntroduction
                                    ? "from-indigo-900 via-purple-900 to-pink-900"
                                    : currentSectionData?.intro.bgColor
                            }`}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                        backgroundSize: "50px 50px",
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Slide Container with Vertical Animation */}
                    <div className="relative z-10 h-full">
                        <div
                            className={`h-full flex flex-col justify-center transition-all duration-600 ease-out ${
                                slideDirection === "down"
                                    ? "transform -translate-y-full"
                                    : slideDirection === "up"
                                    ? "transform translate-y-full"
                                    : "transform translate-y-0"
                            }`}
                        >
                            {/* Slide Content */}
                            <div className="text-center text-white px-4 max-w-7xl mx-auto">
                                {isIntroduction ? (
                                    // Introduction Section
                                    <div className="space-y-12 animate-fade-in">
                                        <div className="space-y-8">
                                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                                Together, we create
                                                life-changing wishes for
                                                children with critical
                                                illnesses.
                                            </h1>
                                            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
                                                Every child deserves the chance
                                                to dream, hope, and believe in
                                                magic. Join us on a journey of
                                                transformation through the power
                                                of community and compassion.
                                            </p>
                                        </div>

                                        {/* <button
                                            onClick={() => {
                                                setSlideDirection("down");
                                                setHasStarted(true);
                                                setIsPlaying(true);
                                                setTimeout(() => {
                                                    setCurrentSection(0);
                                                    setCurrentSlide(0);
                                                }, 50);
                                            }}
                                            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-full font-semibold text-xl transition-all duration-500 hover:scale-105 shadow-2xl flex items-center gap-4 mx-auto"
                                        >
                                            <PlayCircle
                                                size={28}
                                                className="group-hover:scale-110 transition-transform duration-300"
                                            />
                                            Begin Journey
                                        </button> */}
                                    </div>
                                ) : !isVideoSlide ? (
                                    // Intro Slide
                                    <div
                                        className={`space-y-8 animate-fade-in ${
                                            isMobile || isIntroduction
                                                ? "ml-0"
                                                : "ml-80"
                                        }`}
                                    >
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                            {currentSectionData?.intro.title}
                                        </h1>
                                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
                                            {currentSectionData?.intro.subtitle}
                                        </p>
                                    </div>
                                ) : (
                                    // Video Slide
                                    <div
                                        className={`space-y-12 animate-fade-in ${
                                            isMobile || isIntroduction
                                                ? "ml-0"
                                                : "ml-80"
                                        }`}
                                    >
                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                {
                                                    currentSectionData?.video
                                                        .title
                                                }
                                            </h2>
                                            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
                                                {
                                                    currentSectionData?.video
                                                        .description
                                                }
                                            </p>
                                        </div>

                                        <button
                                            onClick={() =>
                                                openVideoPopup(
                                                    currentSectionData?.video
                                                        .videoId || ""
                                                )
                                            }
                                            className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white px-12 py-6 rounded-full font-semibold text-xl transition-all duration-500 hover:scale-105 shadow-2xl flex items-center gap-4 mx-auto"
                                        >
                                            <PlayCircle
                                                size={28}
                                                className="group-hover:scale-110 transition-transform duration-300"
                                            />
                                            Watch Full Story
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Popup */}
            {videoPopup.isOpen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden">
                        <button
                            onClick={closeVideoPopup}
                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                        >
                            <X size={24} />
                        </button>
                        <video
                            autoPlay
                            controls
                            className="w-full h-full"
                            src={
                                sections.find(
                                    (s) =>
                                        s.video.videoId === videoPopup.videoId
                                )?.video.videoUrl
                            }
                        />
                    </div>
                </div>
            )}

            {/* Scroll Indicator - Only show on introduction */}
            {isIntroduction && (
                <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce flex flex-col md:flex-row items-center  gap-10 z-20">
                    <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto relative">
                        <div className="w-1 h-3 bg-white/80 rounded-full mx-auto mt-2 animate-pulse"></div>
                    </div>
                    <p className="text-sm  font-light">
                        Scroll down to explore our impact
                    </p>
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default VideoShowcaseApp;
