import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface CouncilMember {
    id: number;
    name: string;
    designation: string;
    details: string;
    category: string;
    image: string;
}

const councilMembers: CouncilMember[] = [
    {
        id: 1,
        name: "Dr. Hitesh Jani, Jamnagar, Gujarat",
        designation: "Former HoD,",
        details: "Deptt. of Panchkarma Jamnagar Ayurved University, Gujarat",
        category: "OUR PATRONS",
        image: "/images/hiteshjani.jpg"
    },
    {
        id: 2,
        name: "Dr. Manoj Dixit, Lucknow, Uttar Pradesh",
        designation: "Hod Dept. of Public Administration,",
        details: "Lucknow University",
        category: "OUR PATRONS",
        image: "/images/manojdixit.jpg"
    },
    {
        id: 3,
        name: "Dr. Jitendra Arya, Pune, Maharashtra",
        designation: "Founder-Health Naturally,",
        details: "Raigarh, Maharashtra",
        category: "OUR PATRONS",
        image: "/images/jitendraarya.jpg"
    },
    {
        id: 4,
        name: "Dr. Dr. M.K. Taneja, Uttar Pradesh",
        designation: "Member-Ministry of AYUSH, Govt. of India,",
        details: "Director- Indian Institute of Yoga & Naturopathy",
        category: "OUR PATRONS",
        image: "/images/mktaneja.jpg"
    },
    {
        id: 5,
        name: "Acharya Dr. Chandrashekhar Shastri, Uttar Pradesh",
        designation: "Founder Sripitambara Vidyapeeth, Uttar Pradesh",
        details: "",
        category: "OUR PATRONS",
        image: "/images/ChandrashekharShastri.jpg"
    },
    {
        id: 6,
        name: "Dr. R.S. Dawas, Delhi",
        designation: "Director-",
        details: "Delhi Institute of Naturopathy (DIN)",
        category: "OUR PATRONS",
        image: "/images/rsdawas.jpg"
    },
    {
        id: 7,
        name: "Acharya Dr. Vikrmaditya, Delhi",
        designation: "Director-",
        details: "Vivekanand Nature Cure Hospital & Yogashram",
        category: "OUR PATRONS",
        image: "/images/acharyavikrmaditya.jpg"
    },
    {
        id: 8,
        name: "Ashwin Dwivedi, Delhi",
        designation: "CEO-Aadi Infotech",
        details: "",
        category: "OUR PRESIDENT",
        image: "/images/ashwin.jpg"
    },
    {
        id: 9,
        name: "Dr. Ajay Gandhi, Mohali, Punjab",
        designation: "Senior Neurotherapist and President,",
        details: "LAJPATRAI MEHRA NEUROTHERAPY RESEARCH AND TRAINING INSTITUTE (LMNTRTI)CHANDIGARH",
        category: "GENERAL SECRETARY",
        image: "/images/ajaygandhi.jpg"
    },
    {
        id: 10,
        name: "Dr. Tapankumar Bhattacharya, Purulia, West Bengal",
        designation: "Senior Naturopath",
        details: "",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/tapan.jpg"
    },
    {
        id: 11,
        name: "Dr. Vandana Misra, Lucknow, Uttar Pradesh",
        designation: "Chief Nature Cure Consultant Kanchankaya Naturopathy,",
        details: "Yoga and Acupressure Treatment and treating Centre. Lucknow",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/vandanamisra.jpg"
    },
    {
        id: 12,
        name: "Yogacharya Dhakaram, Jaipur, Rajasthan",
        designation: "Founder-Yoga Peace & Ekam Yoga,",
        details: "Jaipur-Rajasthan",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/dhakaram.jpg"
    },
    {
        id: 13,
        name: "Dr. Ashraf Dar, Srinagar, J&K",
        designation: "Founder-Kashmir",
        details: "Institute of Yoga Naturopathy,Srinagar, Jammu & Kashmir",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/ashraf.jpg"
    },
    {
        id: 14,
        name: "Dr. Sankaran Manipuzha, Kannaur, Kerala",
        designation: "Senior Naturopath & Writer, Kerala",
        details: "",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/sankaran.jpg"
    },
    {
        id: 15,
        name: "Dr. Amarjeet Singh Ahluwalia, Jamnagar, Gujarat",
        designation: "Senior Naturopath,",
        details: "Jamnagar-Gujarat",
        category: "NATIONAL VICE PRESIDENT",
        image: "/images/amarjeet.jpg"
    },
    {
        id: 16,
        name: "Yogesh Gupta, Delhi",
        designation: "Managing Director,",
        details: "Samshudhi Residential Naturopathy and Panchkarma Hospital, Gurgaon",
        category: "EXECUTIVE MEMBER",
        image: "/images/yogesh.jpg"
    },
    {
        id: 17,
        name: "Prof. (Dr).Saraswati Kala, Delhi",
        designation: "HoD-Deptt. of Yoga Science Dean Humanities & Social Science,",
        details: "Guru Ramrai University-Dehradun,Director-Arogyam Yog Prakritik Chikitsa Kendra",
        category: "SECRETARY",
        image: "/images/saraswati.jpg"
    },
    {
        id: 18,
        name: "Veena Ghorai, Gurugram, Haryana",
        designation: "Founder-Shambhavi Yog",
        details: "",
        category: "SECRETARY",
        image: "/images/veena.jpg"
    },
    {
        id: 19,
        name: "Anurag, Delhi",
        designation: "Secretary-NIH, IT Head, Social Media Promoter, Graphics Designer",
        details: "",
        category: "SECRETARY",
        image: "/images/anurag.jpg"
    },
    {
        id: 20,
        name: "Advocate Kuldeep Chauhan, Delhi",
        designation: "Chartered Accountant-New Delhi",
        details: "",
        category: "TREASURER",
        image: "/images/kuldeep.jpg"
    },
    {
        id: 21,
        name: "Tejashwini Kashyap",
        designation: "Advocate, Delhi",
        details: "",
        category: "LEGAL ADVISOR",
        image: "/images/tejashwini.jpg"
    },
    {
        id: 22,
        name: "Dr. Meenakshi Sharma",
        designation: "Social Activist, Gurugram-Haryana",
        details: "",
        category: "TECHNICAL ADVISOR",
        image: "/images/meenakshi.jpg"
    },
    {
        id: 23,
        name: "Yogacharya Sohan Singh",
        designation: "Founder-Sohan Yoga, China",
        details: "",
        category: "COUNTRY HEAD",
        image: "/images/sohan.jpg"
    },
    {
        id: 24,
        name: "Dr. Alka Gupta",
        designation: "Founder-AGATH, Thailand",
        details: "",
        category: "INTERNATIONAL",
        image: "/images/alka.jpg"
    },
    {
        id: 25,
        name: "Panna Panchal",
        designation: "England",
        details: "",
        category: "INTERNATIONAL",
        image: "/images/panna.jpg"
    }
];

const SectionHeading = ({ title }: { title: string }) => (
    <div className="mb-6 mt-12 first:mt-0">
        <h2 className="text-lg font-bold text-secondary tracking-wide uppercase border-l-4 border-primary pl-3">
            {title}
        </h2>
    </div>
);

const MemberCard = ({ member }: { member: CouncilMember }) => (
    <div className="bg-primary/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-8 border border-primary/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
        {/* Member Image */}
        <div className="relative lg:size-36 size-28 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            </div>
        </div>

        {/* Member Info */}
        <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-secondary mb-1">
                {member.name}
            </h3>
            <p className="text-base font-semibold text-primary mb-3">
                {member.designation}
            </p>
            {member.details && (
                <p className="text-gray-600 leading-relaxed uppercase text-[10px] md:text-xs">
                    {member.details}
                </p>
            )}
        </div>
    </div>
);

export default function CentralCouncilBoardPage() {
    const categories = [
        "OUR PATRONS",
        "OUR PRESIDENT",
        "GENERAL SECRETARY",
        "NATIONAL VICE PRESIDENT",
        "EXECUTIVE MEMBER",
        "SECRETARY",
        "TREASURER",
        "LEGAL ADVISOR",
        "TECHNICAL ADVISOR",
        "COUNTRY HEAD",
        "INTERNATIONAL"
    ];

    const newLocal = "max-w-7xl mx-auto px-4 py-12 sm:py-16";
    return (
        <>
            <Breadcrumb />

            <section className={newLocal}>
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-5xl font-black text-zinc-900"
                    >
                        Central <span className="text-primary italic">Council</span> Board
                    </h2>
                </div>

                {/* Categories and Cards */}
                <div className="space-y-12">
                    {categories.map((category) => {
                        const membersInCategory = councilMembers.filter(m => m.category === category);
                        if (membersInCategory.length === 0) return null;

                        return (
                            <section key={category}>
                                <SectionHeading title={category} />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                                    {membersInCategory.map((member) => (
                                        <MemberCard key={member.id} member={member} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
