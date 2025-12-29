import AboutNIH from "@/components/about/AboutNIH";
import VisionMissionSplit from "@/components/about/VisionMissionSplit";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | NIH Health - National Institute of Holistic Health",
    description: "Learn about our journey, vision, and mission to promote physical, mental, and spiritual harmony through holistic health practices.",
};

export default function AboutPage() {
    return (
        <>
            <AboutNIH />
            <VisionMissionSplit />

            {/* Final CTA Section */}
            <section className="sm:py-16 py-12 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Join the <span className="text-primary italic">Movement</span></h2>
                        <p className="max-w-2xl mx-auto text-lg mb-12 text-white/80">
                            Become a part of the global community dedicated to reclaiming balance and vitality through holistic wisdom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                                Get Membership
                            </button>
                            <button className="bg-white hover:bg-white/90 text-secondary px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
