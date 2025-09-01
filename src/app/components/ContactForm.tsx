import React from "react";

const ContactForm = () => {
    return (
        <div className="bg-[#dcf0fb] pt-16 pb-2 px-6">
            {/* Contact Form Section */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-white shadow-lg py-8 px-15">
                    <div className="mb-6">
                        <p className="text-lg font-bold text-gray-600">
                            <span className="text-red-500">*</span> Indicates
                            required field
                        </p>
                    </div>

                    <form className="space-y-6">
                        {/* Area of Interest */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Area of Interest{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            >
                                <option value="">- Select -</option>
                                <option value="volunteer">Volunteer</option>
                                <option value="donate">Donate</option>
                                <option value="wish-referral">
                                    Wish Referral
                                </option>
                                <option value="media">Media</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Title
                            </label>
                            <select className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select title</option>
                                <option value="mr">Mr.</option>
                                <option value="mrs">Mrs.</option>
                                <option value="ms">Ms.</option>
                                <option value="dr">Dr.</option>
                            </select>
                        </div>

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                    First{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                    Middle
                                </label>
                                <input
                                    type="text"
                                    placeholder="M. I."
                                    className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                    Last <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Email Address{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your_email@domain.com"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="000-000-0000"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Street Address 1 */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Street Address 1
                            </label>
                            <input
                                type="text"
                                placeholder="0000 Ne 00 Ave"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Street Address 2 */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Street Address 2
                            </label>
                            <input
                                type="text"
                                placeholder="#00"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                State
                            </label>
                            <select className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Please select</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                {/* Add more states as needed */}
                            </select>
                        </div>

                        {/* Zip Code */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                placeholder="00000"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Questions or Comments */}
                        <div>
                            <label className="block text-lg font-bold text-[#0057b8] mb-2">
                                Questions or Comments{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Enter your message here"
                                className="w-full px-4 py-4 text-lg font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                                required
                            ></textarea>
                            <p className="text-base font-semibold text-gray-500 mt-1">
                                1000 character(s) remaining
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition-colors duration-200 text-xl"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
