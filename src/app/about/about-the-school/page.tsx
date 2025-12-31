import { Metadata } from "next";
import Image from "next/image";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { aboutDSPConfig } from "@/config/sidebar/aboutDSPConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
    title: "About the School | NIH Health",
    description: "Learn about the mission, history, and leadership of our school. Discover our commitment to 'Service before Self' and holistic development.",
};

export default function AboutTheSchoolPage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDSPConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />

            <section className="sm:py-16 py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div>

                        {/* Header Section */}
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                                About the <span className="text-primary italic">School</span>
                            </h1>
                        </div>

                        <div className="flex flex-col md:flex-row lg:gap-10 gap-8 mt-8">

                            {/* Left Column: Content */}
                            <div className="md:w-2/3 w-full space-y-4 text-zinc-700">

                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        &apos;Service before Self&apos;, the motto of DPS is a reflection of its ethos and a desire to usher in a new era of knowledge with a belief that every child, however different has the right to education.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        A mission to give equal opportunities to each stakeholder for personal growth through &apos;value added&apos; education.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        A mission to arm the students with special skills to enable them to be successful in every sphere of life.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        A mission to make each child into a wholesome human being, who will essentially believe and work towards &apos;Service before Self&apos;.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        A mission to be an integral part of the community - reaching out to every part of it and enriching it in our own special way.
                                    </p>
                                </div>

                                <div className="pt-4 space-y-4 border-t border-zinc-200">
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        Delhi Public School, Sector 45, Gurgaon was instituted in the memory of an exceptional human being Smt. Mala Jaipuria who held close to her heart the spreading of value based education to every site of the country. The vision to commemorate her memory through a chain of exceptional schools was that of Mr. Ravi Jaipuria, the well known industrialist, educationist and philanthropist and that of his wife Mrs. Dhara Jaipuria also committed to the cause of quality education.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        DPS, Sector 45, Gurgaon is a bright and shining star in the galaxy of DPS schools. It was inaugurated on April 29th 2002.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        DPS, Sector 45, Gurgaon is affiliated to C.B.S.E. and provides quality education to the students from class Pre-Nursery to XII.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        At DPS, Sector 45, Gurgaon we aim at the &apos;Holistic Development&apos; of each child by inculcating &apos;Core Values&apos; at every stage through the right blend of academics, activities and sports.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        DPS, Sector 45, Gurgaon seeks to draw out maximum benefits from education without missing out on the fun and sweetness of childhood. Learning at DPS, Sector 45, Gurgaon is interactive and tactile. DPS, Sector 45, Gurgaon believes in producing creative thinkers. We teach our children how to think and not what to think. All experiences are drawn from the real world. Each precious individual will comfortably create his/her own niche, will discover talents, nurture skills, find his/her forte and most importantly will be groomed to become life long learner.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        The school has a capable and committed teaching staff that believes that effective learning can only take place if there is a harmonious partnership between the home and school.
                                    </p>
                                </div>

                                <div className="pt-4 space-y-4 border-t border-zinc-200">
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        An alumna of DPS herself, Ms. Jaipuria is a young and enthusiastic educationist. Her belief in relevant education for the children of today led her to spearhead many innovative educational programmes. She seeks to enhance the joy of learning among the young and views education as an opportunity for lifelong learning and as a means of fostering unity in diversity. She is an active member of various educational boards.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        The joint venture of Jaipurias with the DPS Society was a well thought out deliberation to bring in the new insight into various aspects of learning &amp; returning it to the community at the same time.
                                    </p>
                                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                                        DPS Gurgaon, under the dynamic patronage of Mr. Ravi Jaipuria &amp; Ms. Dhara Jaipuria has blossomed not only as a premier educational institution but also as a school with a difference. The school, for Jaipurias, has never meant to be a fixed goal but a dynamic concept, ever growing and ever evolving into newer dimensions.
                                    </p>
                                    <p className="text-xl font-serif text-zinc-800 py-4">
                                        &quot;Our school is a blueprint for the new generation, accurate, specific and a blend of Indian values reinforced by our global experience acquired over the years.&quot;
                                    </p>
                                    <p className="text-right font-bold text-zinc-900">
                                        - Ms. Dhara Jaipuria, Mr. Ravi Jaipuria
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Images */}
                            <div className="md:w-1/3 w-full space-y-6">
                                <div className="md:sticky top-24 space-y-6">
                                    <div className="bg-white shadow-sm border border-zinc-100 lg:p-6 p-4 rounded-2xl overflow-hidden">
                                        <div className="aspect-square w-full bg-zinc-100 rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/MS-DEVYANI-JAIPURIA.jpg"
                                                alt="Ms. Devyani Jaipuria"
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
                                                    Ms. <span className="text-zinc-900">Devyani Jaipuria</span>
                                                </h2>
                                                <p className="text-secondary font-bold mt-1">
                                                    Pro-Vice Chairperson
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white shadow-sm border border-zinc-100 lg:p-6 p-4 rounded-2xl overflow-hidden">
                                        <div className="aspect-square w-full bg-zinc-100 rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/jaipuria_sir.jpg"
                                                alt="Mr. Ravi Jaipuria"
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
                                                    Mr. <span className="text-zinc-900">Ravi Jaipuria</span>
                                                </h2>
                                                <p className="text-secondary font-bold mt-1">
                                                    Patron
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white shadow-sm border border-zinc-100 lg:p-6 p-4 rounded-2xl overflow-hidden">
                                        <div className="aspect-square w-full bg-zinc-100 rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/dhara_mam.jpg"
                                                alt="Ms. Dhara Jaipuria"
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
                                                    Ms. <span className="text-zinc-900">Dhara Jaipuria</span>
                                                </h2>
                                                <p className="text-secondary font-bold mt-1">
                                                    Member Managing Committee
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
