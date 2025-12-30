import { ArrowRightCircle } from "lucide-react";

const awards = [
    "Yog Acharya (Honorary Doctorate) honored in Paravidya Conference organized in 1989 at New Delhi.",
    "JEEWAN GAURAV SAMMAN in Naturopathy at Solapur, Maharasthra.",
    "PRAKRITIK CHIKITSA SHIROMANI SAMMAN by Delhi Institute of Naturopathy at New Delhi.",
    "BEST HOSPITAL ADMINISTRATOR AWARD in New Delhi.",
    "BEST NGO AWARD for the Promotion and Propagation of Naturopathy by Lok Sabha Speaker in 2020 at New Delhi",
    "KARM YODDHA SAMMAN by Uttar Pradesh Yoga Association-2020"
];

const lectures = [
    "INTERNATIONAL CONFERENCE ON YOGA organized by Dr. Rammanohar Lohia Awadh University, Ayodhya, Uttar Pradesh in June, 2020.",
    "WEBINAR ON YOGA organized by DHING College, Guwahati University, Assam in September, 2020.",
    "WEBINAR ON YOGA & NATUROPATHY organized by Shri Guru Ram Rai University, Dehradun, Uttrakhand in November, 2020."
];

export default function ChairmanAwards() {
    return (
        <section className="sm:pb-16 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Awards Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black text-primary">
                            Awards:
                        </h1>

                        <div className="space-y-6">
                            {awards.map((award, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <ArrowRightCircle className="w-6 h-6 text-secondary" />
                                    </div>
                                    <p className="text-zinc-600 font-medium leading-relaxed">
                                        {award}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lectures Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black text-secondary">
                            Lectures Delivered:
                        </h1>

                        <div className="space-y-6">
                            {lectures.map((lecture, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <ArrowRightCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-zinc-600 font-medium leading-relaxed">
                                        {lecture}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
