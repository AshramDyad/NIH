import type { Metadata } from 'next';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { CheckCircle2, Mail } from 'lucide-react';
import { FaAngleRight, FaKey, FaLock, FaStar } from "react-icons/fa";
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { helpConfig } from '@/config/sidebar/helpConfig';


export const metadata: Metadata = {
    title: 'Help - NIH',
    description: 'Get help with NIH portal features, login instructions, password recovery, and support contact information.',
};

interface FeatureItem {
    title: string;
    description: string;
}

interface LoginStepUser {
    role: string;
    format: string;
    example: string;
}

interface LoginStep {
    step: string;
    description: string;
    users?: LoginStepUser[];
}

interface ForgotPasswordStep {
    step: string;
    description: string;
}

interface SupportInfo {
    title: string;
    items: string[];
}

const features: FeatureItem[] = [
    {
        title: 'ATTENDANCE',
        description: 'for daily viewing of your ward',
    },
    {
        title: 'CALENDAR',
        description: 'to view upcoming Events, holidays and happenings at school',
    },
    {
        title: 'SYLLABUS',
        description: 'can be viewed for the whole year',
    },
    {
        title: 'CIRCULAR',
        description: 'board displays all the important Notices for the parents',
    },
    {
        title: 'PHOTO GALLERY',
        description: 'shows the photographs of the events happening at school',
    },
    {
        title: 'FEES',
        description: 'can be paid online through NET BANKING / Credit Card / Debit Card and receipt is also generated online',
    },
];

const loginSteps: LoginStep[] = [
    {
        step: 'Click On Login.',
        description: '',
    },
    {
        step: 'Enter Your Userid',
        description: '',
        users: [
            { role: 'For Parent', format: '"P^regn.no."', example: 'Pxxxxx' },
            { role: 'For Student', format: '"S^regn.no."', example: 'Sxxxxx' },
            { role: 'For Alumni', format: '"A^regn.no."', example: 'Axxxxx' },
            { role: 'For Staff', format: 'first name last name', example: '' },
        ],
    },
    {
        step: 'Enter your Password(Password is Case Sensitive).',
        description: '',
    },
    {
        step: 'Enter captcha code & Click on Sign.',
        description: '',
    },
    {
        step: 'For further help click on "HELP" button in the Portal.',
        description: '',
    },
];

const forgotPasswordSteps: ForgotPasswordStep[] = [
    {
        step: 'Click on login',
        description: '',
    },
    {
        step: 'Choose Parent - Click on "Forget Userid".',
        description: '',
    },
    {
        step: 'Enter your Ward\'s First name, Date of Birth, Registered Mobile Number.',
        description: '',
    },
    {
        step: 'Click on "Reset".',
        description: '',
    },
    {
        step: 'You will receive a Default Password on your registered Mobile Number using which you can login in the System',
        description: '',
    },
];

const supportInfo: SupportInfo = {
    title: 'For More Support: Kindly Write at dpsgurgaon2@gmail.com With the Following Information.',
    items: [
        'Query name : E-mail id to be registered/change in alert mobile no/forgotten password',
        'Admission/Registration number',
        'Child name',
        'Class & Section',
    ],
};

export default function HelpPage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={helpConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />

            <div className="bg-gradient-to-b from-orange-50/30 via-white to-green-50/20 py-12 sm:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Page Header with Gradient */}
                    <div className="text-center mb-10">
                        <div className="inline-block">
                            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                                Help Center
                            </h1>
                        </div>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about using the DPS Portal
                        </p>
                    </div>

                    {/* Key Features Section */}
                    <section id="features" className="mb-10">
                        <div className="relative bg-white rounded-2xl shadow-md border border-gray-200/50 overflow-hidden">
                            {/* Gradient accent bar */}
                            {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f3972a] to-[#155b2e]"></div> */}

                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f3972a] to-[#e08520] flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">
                                            <FaStar className='text-white size-5' />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                                        Key Features of DPS Portal
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-4 p-4 rounded-xl border cursor-pointer border-gray-200/50"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="size-10 rounded-lg bg-gradient-to-br from-green-200 to-green-50 flex items-center justify-center transition-transform">
                                                    <CheckCircle2 className="w-5 h-5 text-[#155b2e]" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-[#155b2e] mb-1 text-base">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Login Instructions Section */}
                    <section id="login" className="mb-10">
                        <div className="relative bg-white rounded-2xl shadow-md border border-gray-200/50 overflow-hidden">
                            {/* Gradient accent bar */}
                            {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#155b2e] to-[#f3972a]"></div> */}

                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#155b2e] to-[#1a7a3e] flex items-center justify-center">
                                        <span className="text-white text-xl">
                                            <FaLock className='size-5' />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                                        How to Login?
                                    </h2>
                                </div>

                                <div className="space-y-5">
                                    {loginSteps.map((step, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f3972a] to-[#e08520] flex items-center justify-center text-white font-bold text-sm shadow-md">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-800 font-medium leading-relaxed">
                                                        {step.step}
                                                    </p>
                                                    {step.users && (
                                                        <div className="space-y-5 p-4 mt-4">
                                                            {step.users.map((user, userIndex) => (
                                                                <div key={userIndex} className="flex items-start gap-3">
                                                                    <span className="text-[#f3972a] font-bold text-sm mt-0.5">
                                                                        <FaAngleRight className='size-5' />
                                                                    </span>
                                                                    <p className="text-gray-700 text-sm leading-relaxed">
                                                                        <span className="font-semibold text-[#155b2e]">{user.role}:</span>{' '}
                                                                        <span className="text-gray-600 font-mono text-xs bg-white px-2 py-0.5 rounded border border-gray-200">
                                                                            {user.format}
                                                                        </span>
                                                                        {user.example && (
                                                                            <span className="text-gray-500 ml-2">Example: {user.example}</span>
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Two Column Layout for Forgot Password and Support */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Forgot Password Section */}
                        <div id="forgot-password" className="relative bg-white rounded-2xl shadow-md border border-gray-200/50 overflow-hidden h-full">
                            {/* Gradient accent bar */}
                            {/* <div className="absolute top-0 le/ft-0 right-0 h-1 bg-gradient-to-r from-[#f3972a] to-[#ff6b35]"></div> */}

                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f3972a] to-[#e08520] flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">
                                            <FaKey className='text-white size-5' />
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                        Forgot Password?
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {forgotPasswordSteps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f3972a] to-[#e08520] flex items-center justify-center text-white font-bold text-xs">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-sm leading-relaxed pt-0.5">
                                                {step.step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Support Contact Section */}
                        <div id="support" className="relative bg-gradient-to-br from-[#155b2e] to-[#1a7a3e] rounded-2xl shadow-xl overflow-hidden h-full">
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                            Need More Support?
                                        </h2>
                                        <p className="text-green-100 text-sm">
                                            Contact us with the following information
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {supportInfo.items.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#f3972a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-xs font-bold">{index + 1}</span>
                                            </div>
                                            <p className="text-white/90 text-sm leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <p className="text-white font-semibold mb-1 text-sm">Email us at:</p>
                                    <a
                                        href="mailto:dpsgurgaon2@gmail.com"
                                        className="text-[#f3972a] hover:text-[#ff9d3d] font-bold text-lg transition-colors inline-flex items-center gap-2 group"
                                    >
                                        dpsgurgaon2@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
