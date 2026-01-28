import { Metadata } from "next";
import YPMApplicationForm from "@/components/members/YPMApplicationForm";

export const metadata: Metadata = {
    title: "Registered Yoga/Naturopathy Professional Members | NIH Health",
    description: "Apply for Yoga/Naturopathy Professional Membership at National Institute of Holistic Health.",
};

export default function RegisteredYogaNaturopathyProfessionalPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white sm:py-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            <span className="text-primary italic">Membership-Yoga/Naturopathy </span>
                            and <span className="text-secondary italic">other Drugless System </span>Professionals
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Apply to become a certified professional and advance the science and practice
                            of Yoga and Naturopathy for a healthier society.
                        </p>
                    </div>
                </div>
            </section>

            {/* YPM Membership Info Section */}
            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Membership Info */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100">
                                <h3 className="text-2xl font-black text-secondary mb-4">
                                    MEMBERSHIP
                                </h3>
                                <p className="text-zinc-700 leading-relaxed">
                                    A Yoga Volunteer Member is any person who wishes to contribute to the
                                    overall development of Yoga and National Institute of Holistic Health (NIH).
                                    A Yoga Volunteer member need not have any prequalification in yoga.
                                    The Yoga Volunteer Membership is free for 1 year.
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100">
                                <h3 className="text-2xl font-black text-secondary mb-4">
                                    BENEFITS
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A NIH Yoga Professional member would be provided a Unique ID and an ID Card.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A NIH member is entitled to a free copy of quarterly e-magazine.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A YPM will be eligible for discounts on Events/Conferences/Seminars.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="bg-white py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <YPMApplicationForm />
                    </div>
                </div>
            </section>
        </>
    );
}
