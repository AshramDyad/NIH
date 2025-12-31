"use client";

import Image from "next/image";

export default function PrincipalMessageContent() {
    const message = [
        "Dear Parents and Students,",
        "Welcome to the new session 2025-26! We start our Silver Jubilee year celebrations this year!",
        "I feel a deep sense of satisfaction at the way our children are growing… and the way parents come forward to support school initiatives. May this never change!",
        "I hope this session sees not just more rewards, recognitions and achievements but also more harmony, cooperation and understanding among all stakeholders and greater happiness all around!",
        "Let us continue our quest for Excellence through our motto-Service Before Self."
    ];

    return (
        <section className="sm:py-16 py-12 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        Director <span className="text-secondary italic">Principal Message</span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row lg:gap-10 gap-8 items-start mt-8">
                    {/* Profile Sidebar */}
                    <div className="md:w-1/3 w-full md:sticky top-24">
                        <div className="relative group">
                            <div className="bg-white shadow-sm border border-zinc-100 lg:p-6 p-4 rounded-2xl overflow-hidden">
                                {/* Photo Placeholder/Image Container */}
                                <div className="aspect-square w-full bg-zinc-100 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/about-the-school/aditi-misra.jpg"
                                        alt="Ms. Aditi Misra"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        unoptimized
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="mt-2">
                                        <h2 className="text-2xl font-bold text-primary leading-tight">
                                            Ms. <span className="text-zinc-900">Aditi Misra</span>
                                        </h2>
                                        <p className="text-secondary font-bold mt-1">
                                            Director Principal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Area */}
                    <div className="md:w-2/3 w-full">

                        <div className="space-y-6">
                            <div className="space-y-4">
                                {message.map((para, index) => (
                                    <p key={index} className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            <div className="bg-white rounded-4xl overflow-hidden">
                                <div className="aspect-video relative">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"

                                        src="https://www.youtube.com/embed/r8LbLO3zQdY?si=piQn2WzLGuCE1WTq"
                                        title="Message from the Director Principal"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
