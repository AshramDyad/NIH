import { ArrowRightCircle } from "lucide-react";

export default function ChairmanContributions() {
    const contributions = [
        "Working in the field of Naturopathy since 1991",
        "Organised National Conference on Naturopathy for 2500 delegates from all over India in 2001 at Talkatora Indoor Stadium, New Delhi.",
        "Every year Organized Doctors Management Training camp (Residential) since 2003 to 2014 for 600-700 Naturopathies.",
        "Organised International Conference on Yoga-Naturopathy in Benagaluru Karnataka) in the Janurary, 2012 for 5000 delegates from 30 countries.",
        "Organized 3 days Holistic Health Mela in December 2015 at Vivekanand Hospital and Yogashram in Delhi where more than 10000 visitors every day.",
        "Former Administrative officer-Balaji Nirogdham (a 150 bedded indoor Nature Cure Hospital in Delhi)",
        "Former Chief Medical officer-Vivekanand Nature cure Hospital & Yogashram, Delhi.",
        "Former Joint General Secretary and Founder Trustee–International Naturopathy Organisation (INO)"
    ];

    return (
        <section className="sm:py-16 py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Section mimicking the image's structure but with premium styling */}
                <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-black text-secondary">
                        Unique contributions:
                    </h1>
                </div>
                {/* Contributions List */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                    {contributions.map((text, idx) => (
                        <div
                            key={idx}
                            className="flex gap-4"
                        >
                            <div className="flex-shrink-0 mt-0.5">
                                <ArrowRightCircle className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-zinc-600 font-medium leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
