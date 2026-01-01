/**
 * DPS Society Content Component
 * Displays information about DPS Society, Chairman, and Vice Chairman
 */

import Image from 'next/image';

export default function DpsSocietyContent() {
    return (
        <section className="sm:py-16 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        DPS <span className="text-primary italic">Society</span>
                    </h1>
                </div>

                <div className="mt-8 space-y-8">
                    {/* DPS Society Introduction */}
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-4">
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            <strong className="text-zinc-900">The DPS Society (DPSS)</strong> is a non-profit, non-proprietary educational body widely recognized for its selfless and unstinting committed to excellence in education.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            <strong className="text-zinc-900">The DPSS</strong> established its first school in 1949 at Mathura Road in New Delhi. Today it has more than 100 schools in India and abroad apart from 9 core schools and its affiliates in Delhi alone.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            DPSS under the able guidance of stalwart like <strong className="text-zinc-900">Mr. B.K. Chaturvedi</strong>, Chairman and <strong className="text-zinc-900">Mr. V. K. Shunglu</strong>, Vice Chairman DPSS seeks to provide holistic and quality education to all members of society. This is suitably reflected in its motto &apos;Service before Self&apos;. DPS Schools have produced self confident, self-reliant individuals who are versatile and endowed with a spirit of adventure and creativity. The Council of Educational Planning and Training (CEPT) encourages and promotes innovative trends in education that help both the teachers and the students. The Council of Environment Education and Culture (CEEC) helps children in all DPS Schools to value, conserve and preserve their natural environment. The Arts and Heritage Council, the Media, Publication, Sports and Health divisions also foster quality education.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            The DPSS has initiated the setting up of Shiksha Kendras that enable children from the underprivileged sections of society to be educated and empowered. Projects like the EDULINKS (Satellite based collaborative learning) and LEAP (Learning Exchange and Association Platform) have linked together various DPS Schools.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Thus DPS Society has proved that with determination, good management, right vision and altruism one can produce global citizens with the right moral fiber, who are ready to be the torchbearers of the 21st Century.
                        </p>
                    </div>

                    {/* Mr. B. K. Chaturvedi Profile */}
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6">
                            <div className="w-full md:w-64 flex-shrink-0">
                                <Image
                                    src="/images/bk-chaturvedi.jpg"
                                    alt="Mr. B. K. Chaturvedi - Chairman of the DPS Society"
                                    width={256}
                                    height={320}
                                    className="w-full h-auto rounded-xl object-cover shadow-md"
                                    priority
                                />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">
                                        Mr. B. K. Chaturvedi
                                    </h3>
                                    <p className="text-lg text-primary font-semibold">
                                        ( Chairman of the DPS Society )
                                    </p>
                                </div>
                                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                                    <p>
                                        Mr. B.K. Chaturvedi assumed the charge of the Chairman of The DPS Society with effect from 01 August, 2023. He was formerly the Vice Chairman of The Delhi Public Society (DPSS) and a long-standing esteemed member.
                                    </p>
                                    <p>
                                        A distinguished former IAS Officer (UP Cadre-1966), Mr. Chaturvedi ascended to the esteemed position of the Cabinet Secretary to the Government of India in his illustrious career spanning five decades. In recognition of his exceptional contributions to the field of Public Administration, Shri B. K. Chaturvedi was honoured with the Padma Bhushan by the President of India in 2010. Throughout his distinguished career, he also served as a member of the Planning Commission, Government of India, and the 13th Finance Commission.
                                    </p>
                                    <p>
                                        Shri B. K. Chaturvedi holds a Master&apos;s degree in Physics from Allahabad University. He pursued higher studies in Public Administration at the University of Manchester. After joining the Civil Services, he served in various key roles, including Secretary in the Ministries of HRD, Petroleum and Finance, Executive Director of the Trade Development Authority, and Chairman of the State Trading Corporation of India. Significant economic reforms were implemented during his tenure. He has also been a member of the UNICEF and UNDP boards.
                                    </p>
                                    <p>
                                        A distinguished scholar, Shri B. K. Chaturvedi has authored two books and contributed numerous papers to national and international journals, covering topics such as planning, energy, transport, and public administration.
                                    </p>
                                    <p>
                                        We feel blessed to have him as our guide and mentor.
                                    </p>
                                    <p className="font-semibold text-zinc-900">
                                        Mr Chaturvedi, has been honoured with the prestigious PADMA BHUSHAN award in 2010.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mr. V. K. Shunglu Profile */}
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6">
                            <div className="w-full md:w-64 flex-shrink-0">
                                <Image
                                    src="/images/vk-shunglu.jpg"
                                    alt="Mr. V. K. Shunglu - Vice Chairman of the DPS Society"
                                    width={256}
                                    height={320}
                                    className="w-full h-auto rounded-xl object-cover shadow-md"
                                />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">
                                        Mr. V. K. Shunglu
                                    </h3>
                                    <p className="text-lg text-primary font-semibold">
                                        ( Vice Chairman of the DPS Society )
                                    </p>
                                    <p className="text-zinc-600">
                                        Member, The DPS Society since 1998
                                    </p>
                                </div>
                                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                                    <p>
                                        A postgraduate in History from the University of Delhi, Mr Shunglu joined the Indian Administrative Service in 1962. Mr Shunglu worked as Special Secretary in the Ministry of Power, and Secretary in the Departments of Company Affairs, in the Ministry of Health and Family Welfare and in the Department of Industrial Policy and Promotion.
                                    </p>
                                    <p>
                                        Mr Shunglu has worked with Asian Development Bank in Manila and at the Economic Development Institute of the World Bank. He also worked as Comptroller and Auditor General of India.
                                    </p>
                                    <p>
                                        He has held the position of Chairman of the UN Board of Auditors General and is currently a member of the UN Panel of External Auditors. He is a Member of the Governing Board of International Organization of Supreme Audit Institutions (INTOSAI) and Chairman of INTOSAI Standing Committee on EDP Audit. He took over as Secretary General of Asian Organization of the Supreme Audit Institution.
                                    </p>
                                    <p>
                                        He continues to be External Auditor to the World Tourism Organization, Madrid, the International Centre for Genetic Engineering and Biotechnology, Trieste and the Organization for Prevention of Chemical Weapons headquar­tered at The Hague. Recently, Mr Shunglu was appointed as the External Auditor of the International Maritime Organization headquartered at London and of the Food and Agriculture Organization at Rome.
                                    </p>
                                    <p className="font-semibold text-zinc-900">
                                        Mr Shunglu, has been honoured with the prestigious PADMA BHUSHAN award in 2019.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* School Philosophy Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
                        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
                            School Philosophy
                        </h3>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                            The schools of the DPS Society are centres where:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    We aim to preserve and enhance the highest standards of excellence and prepare generations for the 21st century.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    DPS students are helped to master the expanding horizons of technology as also become the repository of a deep commitment to Indian ethos and culture in its pristine form.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    DPS students are equipped to access the best opportunities of growth and advancement by being prepared linguistically and culturally for them. The concept of enlightened citizen of the world will be the backdrop of all their endeavours.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    DPS students will be carefully sensitised to environmental concerns, the feeling of nationalism and communal harmony.
                                </p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    DPS schools are available to the best minds at the most reasonable and affordable cost. No deserving and talented child will find the doors of DPS closed because of financial disability. Special efforts are made through resource centres for children with special needs. Education of the marginalised children is being ensured through non formal learning centres, DPS Shiksha Kendras.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
