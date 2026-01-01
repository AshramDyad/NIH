"use client";

import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

export default function MuskaanContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-primary">
            Muskaan
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            The Twinning Project
          </p>
        </div>

        {/* Content Card */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-6">
          {/* Description */}
          <div className="text-lg text-zinc-600 leading-relaxed">
            <p>
              Muskaan- The twinning endeavour
            </p>
          </div>

          {/* PDF Download Link */}
          <div className="pt-4 border-t border-zinc-200">
            <Link
              href="/pdfs/muskaan-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full py-4 px-6 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-all rounded-lg hover:bg-zinc-50"
            >
              <FileText className="h-6 w-6 flex-shrink-0" />
              <span>Click here</span>
              <Download className="ml-auto h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </article>

      </div>
    </section>
  );
}
