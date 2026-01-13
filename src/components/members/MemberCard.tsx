import Image from "next/image";
import { User } from "lucide-react";

interface DatabaseMember {
    readonly id: number;
    readonly name: string;
    readonly member_number: string;
    readonly image_url: string;
}

interface MemberCardProps {
    readonly member: DatabaseMember;
}

export default function MemberCard({ member }: MemberCardProps) {
    return (
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow border border-gray-200 space-y-4 group hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                    {member.image_url ? (
                        <Image
                            src={member.image_url}
                            alt={`${member.name} - Professional Member`}
                            fill
                            sizes="128px"
                            unoptimized
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <User className="w-12 h-12 text-gray-400" />
                        </div>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-primary transition-colors">
                {member.name}
            </h3>

            <div className="w-full h-px bg-gray-200" />

            <div className="flex flex-col items-center text-gray-600">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    Member No.
                </span>
                <span className="font-medium">{member.member_number}</span>
            </div>
        </div>
    );
}

export type { DatabaseMember };
