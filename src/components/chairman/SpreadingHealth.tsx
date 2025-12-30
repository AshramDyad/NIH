import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function SpreadingHealth() {
    return (
        <section className="sm:py-16 py-12 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        Cities visited for Social as well <br />
                        <span className="text-primary italic">Health Awareness activities:</span>
                    </h2>

                    <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
                        In India, I've visited most of the states to propagate Yoga, Naturopathy and social activities through conferences, seminars, camps & meetings with NGO's, Govt officers as well as Ministers.
                    </p>

                    <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                        <Link href="https://www.facebook.com/vinod.kashyap1">Dr. Vinod Kashyap</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
