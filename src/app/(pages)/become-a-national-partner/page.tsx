import NavigationTabCorporate from "@/app/components/NavigationTabCorporate";
import SocialShare from "@/app/components/SocialShare";
import Image from "next/image";

const page = () => {
    return (
        <div>
            <div className="relative h-[90%] ">
                {/* Background image */}
                <Image
                    src="/Frankie_snow_CREDIT-Rachid-Photo_1_r.avif"
                    alt="Refer a child background"
                    width={1920}
                    height={1080}
                    className="object-contain object-center w-full"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50 z-0"></div>
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-center text-white pl-4 lg:pl-20 z-10">
                    <h1 className="text-md sm:text-lg md:text-4xl lg:text-5xl xl:text-5xl flex flex-col justify-center items-center  mb-4">
                        Become a National Partner
                    </h1>

                    {/* Buttons */}
                    <div className="flex-col sm:flex-row gap-4 mt-6 justify-center items-center hidden md:flex">
                        <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-4 px-8 lg:py-5 lg:px-10 lg:text-lg xl:text-xl rounded-full">
                            Start the Partnership Journey
                        </button>

                        {/* Social Share Component */}
                        <SocialShare />
                    </div>
                </div>
            </div>
            {/* social icons small screen  */}
            <div className="bg-[#0057b8]">
                <div className=" flex-col gap-4 p-10 justify-center items-center flex md:hidden">
                    <button className="bg-[#FF585D] hover:bg-[#eb4a4f] transition-all duration-150 text-white  py-4 px-8 rounded-full">
                        Refer a Child
                    </button>

                    {/* Social Share Component */}
                    <SocialShare />
                </div>
            </div>
            {/* referAchildNavigationTabs */}
            <NavigationTabCorporate />
        </div>
    );
};
export default page;
