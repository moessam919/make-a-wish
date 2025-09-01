import React from "react";

const SignUpSection = () => {
    return (
        <div className=" bg-[#dcf0fb] py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0057b8] mb-2">
                        Sign up for our newsletter
                    </h2>
                </div>
                <div className="flex w-full lg:min-w-[500px] max-w-xl">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-l-full text-gray-700 placeholder-gray-500 bg-white border-none outline-none text-lg"
                    />
                    <button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-r-full transition-colors duration-200 whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpSection;
