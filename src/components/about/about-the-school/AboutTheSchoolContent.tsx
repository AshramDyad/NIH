/**
 * About The School Content Component
 * Displays information about the school mission, leadership team profiles
 */
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LeadershipProfile {
    name: string;
    role: string;
    yearsWithDPS: string;
    imageSrc: string;
    imageAlt: string;
    schooling: string[];
    qualifications: string[];
    awards: Record<string, string[]>;
}

interface LeadershipProfileCardProps {
    profile: LeadershipProfile;
    sectionTitle: string;
}

function LeadershipProfileCard({ profile, sectionTitle }: LeadershipProfileCardProps) {
    const [openAwardYear, setOpenAwardYear] = useState<string | null>(null);

    // Sort awards by year in descending order (latest year first)
    const sortedAwards = Object.entries(profile.awards).sort((a, b) => {
        const yearA = parseInt(a[0]) || 0;
        const yearB = parseInt(b[0]) || 0;
        return yearB - yearA; // Descending order: larger years first
    });

    return (
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
                    {sectionTitle}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 mt-8">
                    <div className="w-full md:w-64 flex-shrink-0">
                        <Image
                            src={profile.imageSrc}
                            alt={profile.imageAlt}
                            width={256}
                            height={320}
                            className="w-full h-auto rounded-xl object-cover shadow-md"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-2">
                                {profile.name} <span className="text-lg md:text-xl font-semibold text-primary">{profile.role}</span>
                            </h3>
                            <p className="text-lg text-zinc-600">No. of years with DPS - {profile.yearsWithDPS}</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-medium text-zinc-900 mb-2">Schooling</h4>
                                {profile.schooling.map((school, index) => (
                                    <p key={index} className="text-lg text-zinc-600">{school}</p>
                                ))}
                            </div>

                            <div>
                                <h4 className="text-lg font-medium text-zinc-900 mb-2">Educational Qualification</h4>
                                <ul className="space-y-2 text-lg text-zinc-600">
                                    {profile.qualifications.map((qualification, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="text-primary">•</span>
                                            <p>{qualification}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {Object.keys(profile.awards).length > 0 && (
                    <div className="mt-8">
                        <h4 className="text-lg font-medium text-zinc-900 mb-2">Awards & Commendations</h4>
                        <div className="space-y-3">
                            {sortedAwards.map(([year, awards]) => (
                                <div key={year}>
                                    {renderAwardsSection(year, awards, openAwardYear === year, () => {
                                        setOpenAwardYear(openAwardYear === year ? null : year);
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

function renderAwardsSection(year: string, awards: string[], isOpen: boolean, onToggle: () => void) {
    return (
        <div className="border border-zinc-200 rounded-lg overflow-hidden">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between cursor-pointer bg-zinc-50 px-4 py-3 font-semibold text-zinc-900  hover:bg-zinc-100 transition-colors"
                aria-expanded={isOpen}
            >
                <span>{year}</span>
                <span className="text-primary text-lg font-semibold">
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 bg-white">
                            <ul className="space-y-2 text-zinc-600">
                                {awards.map((award, index) => (
                                    <li key={index} className="flex gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <p>{award}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function AboutTheSchoolContent() {
    const leadershipProfiles: LeadershipProfile[] = [
        {
            name: 'Ms. Aditi Misra',
            role: '( Director Principal )',
            yearsWithDPS: '40',
            imageSrc: '/images/about-the-school/aditi-misra.jpg',
            imageAlt: 'Ms. Aditi Misra - Director Principal',
            schooling: ['DPS, R.K. Puram, New Delhi'],
            qualifications: [
                'M.Ed, Annamalai University',
                'M.A. History, Delhi University',
                'B.Ed, Annamalai University',
                'B.A. History, Delhi University'
            ],
            awards: {
                '2024': [
                    'Certified as a \'Great Manager to Work With\' for the period of December 2024 to January 2026 by Great Manager Institute',
                    'REX Karmaveer Puraskaar \'Maharatna प्रेरणा Prerna\' Global Awards for Social Justice & Citizen Action, by (International Confederation of NGOs)',
                    'Education World India School Grand Jury Ranking (EWIS) 2024-25 Awards - #Ranked No. 1 School for extraordinary leadership',
                    'Honoured as the Best Participating School for their Students\' excellent participation in Unified Council Olympiads 2023-24 by Unified Council',
                    'Ranked #1 in Haryana and Ranked #1 in Gurugram under the category – \'Mental & Emotional Well-Being Services\' by North India Schools Merit Awards 2024-25 – Education Today on 30th August',
                    'Star Principal Award for School Excellence by BW BUSINESSWORLD on 28th August',
                    'Advantage School Certificate & Coordinator Certificate 2023-24 by British Council',
                    'Excellence in Educational Leadership at Global Educator Fest 2024 by SCOO NEWS',
                    '\'Design Leadership Award for Principals\' in acknowledgement of your visionary leadership and commitment to innovation in education by ARCH College of Design & Business on 29th July',
                    'Outstanding Creative School Award by ARCH College of Design and Business on 29th July',
                    'Best International Principal Award 2023-24 by Science Olympiad Foundation',
                    'iCongo – Karmaveer Chakra Award for Global Student Storytelling Fellowship by REX (International Confederation of NGOs) on 15th March',
                    'ESG Circle of Excellence Award for giving back to community –Shiksha Kendra & PRAVAAH by Varun Beverages Limited on 15th January'
                ],
                '2023': [
                    'Silver Socially Responsible School Global Sustainability Award by ARCedtech Solutions Pvt. Limited on 16th October',
                    'Excellence in Experiential Learning by FICCI ARISE on 13th December',
                    'Youth Leader Together Towards Tomorrow – Harmony 2023 by The Global Education & Leadership Foundation on 10th December',
                    'IDA Awards Education 2023- Leading Individual School by Indian Didactics Association on November',
                    'School of Eminence Rating: A+ 2023-24 - Education World on 13th October',
                    'Excellence in Community - Education World',
                    'Ranked #1 in Quality in Education Category, CBSE Schools in Haryana by North India Schools Merit Awards 2023-24 – Education Today on 31st August',
                    'Appreciation certificate by British Council to deliver Cambridge Exam 2022-2023 for the development of student\'s language skills.'
                ],
                '2022': [
                    'EDUCO Premium Partner School on 19th November by Goethe-Institute / Max Mueller Bhavan',
                    'Best Zonal Principal Award – Haryana Zone – 2021-22 by Science Olympiad Foundation(SOF)',
                    'Education World India School Grand Jury Ranking (EWIS) 2022-23 Awards-Top 10 School for extraordinary leadership',
                    'IDA Education Award in Category 1: Early Learning for Leading Individual School Winner – Delhi Public School, Sector 45 ,Gurgaon',
                    'Education Today Awards-Ranked No.1 by The North India\'s School in "Teachers Advancement& Well-Being" in Haryana on 11th October',
                    'Award from Jewels of India 2022 / SCOO NEWS changing Teachers Lives Every day, Every way!',
                    'Exceptional Schools of India 2002-SCOO NEWS',
                    'Inspiration Academic Consultants-Certificate of Appreciation'
                ],
                '2021': [
                    'Certificate of Achievement 1st International RWYC Conference',
                    '1st CV Raman Education Award for \'Excellence in Leadership\' for exemplary leadership in education.',
                    'Teachers Day Award-Recovering and Revitalizing Education for the COVID 19 Generation by International Institute of Hotel Management (IIHM)',
                    'Golden Door Awards-Truth & Integrity of the Written Word- Champions of Change',
                    'Global Educators Award by the WISE Foundation for pioneering work on SDGs Awareness through Jal initiative, Sabla Project and International Student Exchange'
                ],
                '2020': [
                    'Impactful School Leader Award by IPN Foundation'
                ],
                '2019': [
                    'Rex Karmaveer Puraskaar Maharatna Award recipient 2019',
                    'Award for Best Teaching Practices by the District Administration, Gurugram on 26th January 2019.'
                ],
                '2018': [
                    'Award for initiatives and invaluable contributions in reinventing schools for all round development of schools students on 3rd August\'18.'
                ],
                '2017': [
                    'Life Empowerment Awards of Principal Leadership for Outstanding Endeavors held at the India International Centre, New Delhi.',
                    'Progressive Principals of INDIA 2017 by National Convention of eduLEADERS.',
                    'South Asia Education Summit Award 2017 for Outstanding Contribution to the Local Community.',
                    'BEST INTERNATIONAL PRINCIPAL AWARD- 2016- 17 by SOF.'
                ],
                '2016': [
                    'iCongo-KARMAVEER PURASKAAR Global Awards For Social Justice & Citizen Action,by REX (International Confederation of NGOs).'
                ],
                '2015': [
                    'CBSE National Award 2014 for her excellent work in the field of education.',
                    'Madhu Memorial Education Society Award for Excellent Efforts in the field of Academic honoured by Prof. Sh Kaptan Singh Solanki Ji, Hon\'ble Governor of Haryana Punjab & Chandigarh U.T',
                    'Excellence award for contribution in the field of Education and social up-liftment of Gurgaon by Council for Economic & Scientific Studies.',
                    'Honoured with International School Award by the British Council for expanding the vision of the school by including activities involving global dimensions.'
                ],
                '2005': [
                    'Jagrit Alokdeep from DPS Society'
                ],
                '2003': [
                    'Avantika Peace Award'
                ],
                '1983 – 1985': [
                    'Scholarship for Classical Dance Sahitya Kala Parishad, Delhi'
                ]
            }
        },
        {
            name: 'Ms. Sapna Dhawan',
            role: ' ( Dean Student Welfare)',
            yearsWithDPS: '23',
            imageSrc: '/images/about-the-school/sapna-dhawan.jpg',
            imageAlt: 'Ms. Sapna Dhawan - Dean Student Welfare',
            schooling: ['Central School, Jammu and Delhi'],
            qualifications: [
                'M.Sc Chemistry, Jammu University',
                'B.Ed, Jammu University'
            ],
            awards: {
                '2021': [
                    'Vice- President Reconnecting with your Culture (RWYC) Asia & India',
                    'Progressive Educator Award-KIDEX'
                ],
                '2020': [
                    'Certificate of Achievement -The Finland Education Learning Module 21st Century Competences and Learning -ALO Finland'
                ],
                '2019': [
                    'Leadership Excellence Award-Thailand for Excellance in Student Well Being and Happiness',
                    'Rex Karmaveer Puraskaar Jyoti Award Recipient -iCongo'
                ],
                '2018': [
                    'Futuristic Faculty of India Award- Rethink India'
                ],
                '2016': [
                    'Rex Karamveer Global Fellow Award Recipient-iCongo'
                ]
            }
        },
        {
            name: 'Ms. Arpna Gupta',
            role: ' ( Vice Principal- Sector 45 )',
            yearsWithDPS: '20',
            imageSrc: '/images/about-the-school/arpana-gupta.jpg',
            imageAlt: 'Ms. Arpna Gupta - Vice Principal Sector 45',
            schooling: ['DAV Public School Palampur'],
            qualifications: [
                'M.Sc ( Organic Chemistry ) Himachal Pradesh University Shimla',
                'B.Ed. Jammu University',
                'B.Sc.( Medical ) DAV College Kangra'
            ],
            awards: {
                '2021': [
                    'Teachers Day Award- IIHM'
                ],
                '2018': [
                    'Futuristic Faculty of India Award- Rethink India'
                ],
                '2014': [
                    '6th International Conference on Excellance in School Education- IIT, Delhi',
                    'SPACE School Graduate-NASA'
                ]
            }
        },
        {
            name: 'Ms. Rati Chugh',
            role: ' ( About the Offg. Vice Principal-<br /> Sector 40 & 47 )',
            yearsWithDPS: '22',
            imageSrc: '/images/about-the-school/RatiChugh.jpg',
            imageAlt: 'Ms. Rati Chugh - Offg. Vice Principal Sector 40 & 47',
            schooling: ['Delhi Public School, R.K Puram'],
            qualifications: [
                'B.Com (Hons): Jesus and Mary College, Delhi University',
                'M. Com: Delhi university',
                'B. Ed: Guru Gobind Singh Indraprastha University'
            ],
            awards: {
                '2020': [
                    'Certificate of Achievement -The Finland Education Learning Module 21st Century Competences and Learning -ALO Finland'
                ],
                '2018': [
                    'Futuristic Faculty of India Award- Rethink India'
                ]
            }
        },
        {
            name: 'Ms S. Anjum',
            role: ' ( Dean Academics )',
            yearsWithDPS: '18',
            imageSrc: '/images/about-the-school/Dean-Academics.jpg',
            imageAlt: 'Ms S. Anjum - Dean Academics',
            schooling: ['K.V Bangalore', 'K.V Allahabad'],
            qualifications: [
                'M.Sc Chemistry, Kanpur University',
                'B.Ed, Kanpur University',
                'B.Sc, Kanpur University'
            ],
            awards: {
                '2020': [
                    'Teachers Day Award- IIHM',
                    'Certificate of Achievement -The Finland Education Learning Module 21st Century Competences and Learning -ALO Finland'
                ],
                '2018': [
                    'Futuristic Faculty of India Award- Rethink India'
                ]
            }
        },
        {
            name: 'Ms. Harpreet Joshi',
            role: ' ( About the Dean Academics )',
            yearsWithDPS: '19',
            imageSrc: '/images/about-the-school/HarpreetJoshi.jpg',
            imageAlt: 'Ms. Harpreet Joshi - Dean Academics',
            schooling: ['Mira Model School, Janak Puri,  New Delhi'],
            qualifications: [
                'B.Sc (Hons.) Physics,  Delhi University',
                'M.Sc Physics,  Delhi University',
                'B.Ed, Annamalai University'
            ],
            awards: {
                '2020': [
                    'Teachers Day Award- IIHM',
                    'Certificate of Achievement -The Finland Education Learning Module 21st Century Competences and Learning -ALO Finland'
                ],
                '2018': [
                    'Futuristic Faculty of India Award- Rethink India'
                ]
            }
        },
        {
            name: 'Ms. Nishi Dhanjal',
            role: '(Head Mistress- Senior School IX-XII)',
            yearsWithDPS: '23',
            imageSrc: '/images/about-the-school/Nishi-Dhanjal.jpg',
            imageAlt: 'Ms. Nishi Dhanjal - Head Mistress Senior School IX-XII',
            schooling: ['Dwarka Prasad Inter College - Allahabad'],
            qualifications: [
                'M.Ed - Bhartiya Shiksha Parishad',
                'M.A - Allahabad University',
                'B.Ed - Mahila Gram Vidyapith, Allahabad',
                'B.A - Allahabad University'
            ],
            awards: {
                '2021': [
                    'Teachers Day Award- IIHM'
                ],
                '2020': [
                    'Certificate of Achievement -The Finland Education Learning Module 21st Century Competences and Learning -ALO Finland'
                ]
            }
        },
        {
            name: 'Ms. Shaifali  Bhatt',
            role: '<br />(Headmistress, Middle School)',
            yearsWithDPS: '23',
            imageSrc: '/images/about-the-school/Ms-Shaifali--Bhatt.jpg',
            imageAlt: 'Ms. Shaifali Bhatt - Headmistress, Middle School',
            schooling: ['Mira Model School, Janakpuri,New Delhi'],
            qualifications: [
                'Bachelor in Elementary Education (B El.Ed)  from Jesus and Mary College',
                'M.Sc(Mathematics) from Madurai Kamaraj University',
                'Awards : Teachers day award by I.I.H.M'
            ],
            awards: {
                '2025': [
                    'Kalam Memorial Teacher\'s Award'
                ]
            }
        },
        {
            name: 'Ms. Kanu Chopra',
            role: '(Headmistress - Junior wing)',
            yearsWithDPS: '19',
            imageSrc: '/images/about-the-school/Ms-Kanu-Chopra.jpg',
            imageAlt: 'Ms. Kanu Chopra - Headmistress - Junior wing',
            schooling: ['K. V. Bakloh Cantt.'],
            qualifications: [
                'M. A- Guru Nanak Dev University, Amritsar',
                'B.A - Guru Nanak Dev University, Amritsar',
                'B.Ed - Jammu University'
            ],
            awards: {
                '2024': [
                    'Microsoft Innovative Educator Expert – 2024'
                ]
            }
        },
        {
            name: 'Shradha Bhatnagar',
            role: '<br />(Headmistress - Infant and Primary Wing)',
            yearsWithDPS: '14',
            imageSrc: '/images/about-the-school/Shradha-Bhatnagar.jpg',
            imageAlt: 'Shradha Bhatnagar - Headmistress - Infant and Primary Wing',
            schooling: ['GGSSS No. 1, New Delhi'],
            qualifications: [
                'M.Com - Delhi University',
                'B.Com - Delhi University',
                'B.Ed - Delhi University'
            ],
            awards: {
                '2024': [
                    'Microsoft Innovative Educator Expert - 2024'
                ]
            }
        }
    ];

    const sectionTitles = [
        'About the Director Principal',
        'About the Dean Student Welfare',
        'About the Vice Principal- Sector 45',
        'About the Offg. Vice Principal- Sector 40 & 47',
        'About the Dean Academics',
        'About the Dean Academics',
        'About the Head Mistress (Senior School IX-XII)',
        'About the Headmistress - Middle School',
        'About the Headmistress - Junior wing',
        'About the Headmistress - Infant and Primary Wing'
    ];

    return (
        <section className="sm:py-16 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        About the <span className="text-primary italic">School</span>
                    </h1>
                </div>

                <div className="mt-8 space-y-12">
                    {/* Our Mission Section */}
                    <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-8 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
                            Our Mission
                        </h2>
                        <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                            <p>&apos;Service before Self&apos;, the motto of DPS is a reflection of its ethos and a desire to usher in a new era of knowledge with a belief that every child, however different has the right to education.</p>
                            <p>A mission to give equal opportunities to each stakeholder for personal growth through &apos;value added&apos; education.</p>
                            <p>A mission to arm the students with special skills to enable them to be successful in every sphere of life.</p>
                            <p>A mission to make each child into a wholesome human being, who will essentially believe and work towards &apos;Service before Self&apos;.</p>
                            <p>A mission to be an integral part of the community - reaching out to every part of it and enriching it in our own special way.</p>
                            <p>Delhi Public School, Sector 45, Gurgaon was instituted in the memory of an exceptional human being Smt. Mala Jaipuria who held close to her heart the spreading of value based education to every site of the country. The vision to commemorate her memory through a chain of exceptional schools was that of Mr. Ravi Jaipuria, the well known industrialist, educationist and philanthropist and that of his wife Mrs. Dhara Jaipuria also committed to the cause of quality education.</p>
                            <p>DPS, Sector 45, Gurgaon is a bright and shining star in the galaxy of DPS schools. It was inaugurated on April 29th 2002.</p>
                            <p>DPS, Sector 45, Gurgaon is affiliated to C.B.S.E. and provides quality education to the students from class Pre-Nursery to XII.</p>
                            <p>At DPS, Sector 45, Gurgaon we aim at the &apos;Holistic Development&apos; of each child by inculcating &apos;Core Values&apos; at every stage through the right blend of academics, activities and sports.</p>
                            <p>DPS, Sector 45, Gurgaon seeks to draw out maximum benefits from education without missing out on the fun and sweetness of childhood. Learning at DPS, Sector 45, Gurgaon is interactive and tactile. DPS, Sector 45, Gurgaon believes in producing creative thinkers. We teach our children how to think and not what to think. All experiences are drawn from the real world. Each precious individual will comfortably create his/her own niche, will discover talents, nurture skills, find his/her forte and most importantly will be groomed to become life long learner.</p>
                            <p>The school has a capable and committed teaching staff that believes that effective learning can only take place if there is a harmonious partnership between the home and school.</p>
                        </div>
                    </article>

                    {/* Ms. Devyani Jaipuria - Pro-Vice Chairperson */}
                    <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6">
                            <div className="w-full md:w-64 flex-shrink-0">
                                <Image
                                    src="/images/about-the-school/MS-DEVYANI-JAIPURIA.jpg"
                                    alt="Ms. Devyani Jaipuria - Pro-Vice Chairperson"
                                    width={256}
                                    height={320}
                                    className="w-full h-auto rounded-xl object-cover shadow-md"
                                />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">
                                        Ms. Devyani Jaipuria
                                    </h3>
                                    <p className="text-lg text-primary font-semibold">
                                        Pro-Vice Chairperson
                                    </p>
                                </div>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    An alumna of DPS herself, Ms. Jaipuria is a young and enthusiastic educationist. Her belief in relevant education for the children of today led her to spearhead many innovative educational programmes. She seeks to enhance the joy of learning among the young and views education as an opportunity for lifelong learning and as a means of fostering unity in diversity. She is an active member of various educational boards.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Mr. Ravi Jaipuria & Mrs. Dhara Jaipuria */}
                    <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="p-4 md:p-8 space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-64 flex-shrink-0">
                                    <Image
                                        src="/images/about-the-school/jaipuria_sir.jpg"
                                        alt="Mr. Ravi Jaipuria - Patron"
                                        width={256}
                                        height={320}
                                        className="w-full h-auto rounded-xl object-cover shadow-md"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900">
                                        Mr. Ravi Jaipuria
                                    </h3>
                                    <p className="text-lg text-primary font-semibold">
                                        Patron
                                    </p>
                                </div>
                                <div className="w-full md:w-64 flex-shrink-0">
                                    <Image
                                        src="/images/about-the-school/dhara_mam.jpg"
                                        alt="Mrs. Dhara Jaipuria - Member Managing Committee"
                                        width={256}
                                        height={320}
                                        className="w-full h-auto rounded-xl object-cover shadow-md"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900">
                                        Mrs. Dhara Jaipuria
                                    </h3>
                                    <p className="text-lg text-primary font-semibold">
                                        Member Managing Committee
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4 text-lg text-zinc-600 leading-relaxed">
                                <p>The joint venture of Jaipurias with the DPS Society was a well thought out deliberation to bring in the new insight into various aspects of learning & returning it to the community at the same time.</p>
                                <p>DPS Gurgaon, under the dynamic patronage of Mr. Ravi Jaipuria & Ms. Dhara Jaipuria has blossomed not only as a premier educational institution but also as a school with a difference. The school, for Jaipurias, has never meant to be a fixed goal but a dynamic concept, ever growing and ever evolving into newer dimensions.</p>
                                <p>&quot;Our school is a blueprint for the new generation, accurate, specific and a blend of Indian values reinforced by our global experience acquired over the years.&quot;</p>
                                <p className="font-semibold text-zinc-900">- Ms. Dhara Jaipuria, Mr. Ravi Jaipuria</p>
                            </div>
                        </div>
                    </article>

                    {/* Leadership Profiles - Data Driven */}
                    {leadershipProfiles.map((profile, index) => (
                        <LeadershipProfileCard
                            key={index}
                            profile={profile}
                            sectionTitle={sectionTitles[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
