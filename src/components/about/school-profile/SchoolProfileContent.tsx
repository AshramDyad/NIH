/**
 * School Profile Content Component
 * Displays the embedded PDF viewer and download button
 */

export default function SchoolProfileContent() {
    return (
        <section className="py-8 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
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
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-zinc-900">
                            Download School Profile
                        </h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto">
                            Access the complete school profile document in PDF format for offline viewing.
                        </p>
                        <a
                            href="/pdfs/School-Profile-2024-25.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-lg shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
                            aria-label="Download School Profile PDF"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                                aria-hidden="true"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 15 15 15 12 21" />
                            </svg>
                            <span>Download PDF</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
