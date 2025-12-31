/**
 * School Profile Content Component
 * Displays the embedded PDF viewer and download button
 */

import { Download } from "lucide-react"
import Link from "next/link";

export default function SchoolProfileContent() {
    return (
        <section className="sm:py-16 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        School <span className="text-secondary italic">Profile</span>
                    </h1>
                </div>

                <div className="mt-8">
                    {/* PDF Viewer Container */}
                    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden mb-6">
                        <div className="p-4 md:p-6">
                            <iframe
                                className="w-full rounded-lg"
                                style={{ height: '450px' }}
                                src="https://online.anyflip.com/hjco/runv/index.html"
                                title="School Profile PDF Viewer"
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-popups"
                                allowFullScreen
                                frameBorder="0"
                            />
                        </div>
                    </div>

                    {/* Download Section */}
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl md:text-3xl font-black text-zinc-900">
                                Download School Profile
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Access the complete school profile document in PDF format for offline viewing.
                            </p>
                            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                                <Link
                                    href="/pdfs/School-Profile-2024-25.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3"
                                    aria-label="Download School Profile PDF"
                                >
                                    <Download className="w-6 h-6" />
                                    <span>Download PDF</span>
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
