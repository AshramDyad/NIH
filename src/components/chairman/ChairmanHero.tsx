import { Quote } from "lucide-react";
import Image from "next/image";

export default function ChairmanHero() {
    return (
        <section className="relative sm:py-16 py-12 bg-white overflow-hidden border-b border-slate-50">
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Content */}
                    <div className="flex-1 space-y-6 ext-center lg:text-left">
                        <div className="space-y-4">
                            <div
                                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm uppercase tracking-widest border border-primary/20"
                            >
                                <span>About the Chairman</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                                Dr. Vinod Kashyap <span className="text-primary italic">Chairman</span>
                            </h1>
                            <span className="text-secondary font-bold text-lg">
                                35 Years of Experience
                            </span>
                        </div>

                        <div className="space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                            <div className="relative">
                                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-slate-100 -z-10" />
                                <p className="md:text-xl text-lg font-bold text-secondary/90 leading-relaxed italic text-center lg:text-left">
                                    &quot;ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु। <br />
                                    मा कश्चित् दुःख भाग्भवेत्॥ ॐ शान्तिः शान्तिः शान्तिः॥&quot;
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-primary font-black text-sm mb-2">हिन्दी भावार्थ</p>
                                <p className="text-slate-600 font-bold italic md:text-xl text-lg leading-relaxed">
                                    सभी सुखी होवें, सभी रोगमुक्त रहें, सभी का जीवन मंगलमय बनें और कोई भी दुःख का भागी न बने। हे भगवन हमें ऐसा वर दो!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Portrait */}
                    <div className="relative">
                        {/* Elegant geometric frame */}
                        <div className="absolute -inset-4 border border-slate-100 rounded-[3rem] -rotate-3" />
                        <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] rotate-3" />

                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-[1.02]">
                            <Image
                                src="/images/drvinod.jpg"
                                alt="Dr. Vinod Kashyap - Chairman"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
