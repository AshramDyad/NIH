import type { Metadata } from 'next';
import AssociateCenterApplicationForm from '@/components/members/AssociateCenterApplicationForm';

export const metadata: Metadata = {
    title: 'Associate Centre Application | NIH',
    description: 'Apply for Associate Centre registration with NIH',
};

export default function CentresInstitutePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-secondary mb-4">
                        Associate Centre Application
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Register your OPD/IPD Hospital/Centre with the National Institute of Health
                    </p>
                </div>

                <AssociateCenterApplicationForm />
            </div>
        </div>
    );
}
