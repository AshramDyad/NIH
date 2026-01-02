"use client"

import Image from 'next/image';
import { Youtube, FileText, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/about-dps/sk-1.jpg', alt: 'Shiksha Kendra - Image 1', caption: 'Shiksha Kendra' },
  { src: '/images/about-dps/sk-2.jpg', alt: 'Shiksha Kendra - Image 2', caption: 'Shiksha Kendra' },
  { src: '/images/about-dps/sk-3.jpg', alt: 'Shiksha Kendra - Image 3', caption: 'Shiksha Kendra' },
  { src: '/images/about-dps/sk-4.jpg', alt: 'Shiksha Kendra - Image 4', caption: 'Shiksha Kendra' },
];

export default function ShikshaKendraContent() {

  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Shiksha <span className="text-primary italic">Kendra</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            A School for Nonformal Education
          </p>
        </div>

        <div className="space-y-8">
          {/* Rabindranath Tagore Quote */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
            <blockquote className="text-lg md:text-xl text-zinc-700 italic leading-relaxed">
              &quot;I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy&quot;.
            </blockquote>
            <footer className="mt-2 text-right font-semibold text-secondary">
              - Rabindranath Tagore
            </footer>
          </article>

          {/* First Narrative Section */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
            <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
              <p>
                My husband and I, always wanted to give back to the community in one way or the other. We understand that community collaborative endeavours have immense potential to bring about desirable changes. The best way to tap this potential, I thought was to channelizing the children (future torch bearers) in the right direction by educating them. In view of this, we opened the doors of Delhi Public School, Gurgaon on 6th May, 2003 for children of economically weaker section and fondly named it Shiksha Kendra. It started with 50 students and 2 teachers but with Aditi, a leader with empathy, love, warmth and a profound social conscious, it gives me immense satisfaction to see 1350+ students now in Shiksha Kendra getting ready to face a challenge called &apos;Life&apos;.
              </p>
              <p>
                I never promised myself that I would remove all their problems but I do tell myself every day that I will be a part of the solution and would strive to make an effective and meaningful impact in their lives through Shiksha Kendra and the skilling centre &apos;Pravah&apos;. &apos;Pravah&apos; aims to facilitate skill development and empowering youth towards economic sustainability. We are providing employment opportunities to all who are being trained at the centre.
              </p>
              <p>
                Pravah is our endeavour to provide a structured, sustainable and scalable framework to the unemployed youth from marginalized families adding to the workforce of the nation which is an emerging power. I feel blessed that my two children Devyani and Varun also support me in these two endeavourswholeheartedly. We are doing our bit, join us in these two endeavours to convert them into &apos;movements&apos;. . .
              </p>
            </div>
          </article>

          {/* Image Gallery */}
          <article>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </article>

          {/* Mahatma Gandhi Quote */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
            <p className="text-xl font-bold text-zinc-900 leading-relaxed">
              &quot; The best way to find yourself is to lose yourself in the service of others&quot;- Mahatma Gandhi.
            </p>
          </article>

          {/* Second Narrative Section */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
            <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
              <p>
                The words so well said and true. They have been made a reality by two people who are committed to bring about a change in the lives of the less privileged children of our society. Mrs.& Mr. Ravi Jaipuria opened the doors of DPS Gurgaon, to the children of the neighbouring villages on 6th May 2003. It was called &quot;SHIKSHA KENDRA&quot; The education programme, aims at assisting these children, to develop themselves into educated, confident and responsible citizens, equipped to walk the world with pride. DPS infrastructure and other resources are available to the students of Shiksha Kendra. Books stationery, uniform, a midday snack and transportation is provided free of cost..
              </p>
              <p>
                In this endeavour, the parent community has always been there to support the school at every step. The students indulge in various fund raising activities voluntarily for Shiksha Kendra. Reading material, toys, stationery, uniforms and woolens are donated by the parents every year. DPS Shiksha Kendra is our pride and commitment, hence nothing but the best is made available to the students.
              </p>
            </div>
          </article>

          {/* Resources Section */}
          <article className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PDF Link */}
              <Link
                href="/pdfs/shiksha-kendra-report.pdf"
                target="_blank"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Click here for more information</span>
                <Download className="ml-auto h-5 w-5" />
              </Link>

              {/* Archive Section */}
              <Link
                href="/pdfs/Gandagi-Mukt-Mera-Gaon-Events.pdf"
                target="_blank"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Gandagi Mukt Bharat campaign</span>
                <Download className="ml-auto h-5 w-5" />
              </Link>
            </div>

            {/* Additional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/about-dps/pravah"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Pravah - An Initiative Of Ms Dhara Jaipuria</span>
                <ExternalLink className="ml-auto h-5 w-5" />
              </Link>

              <Link
                href="/about-dps/muskaan"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Muskaan - The Twinning Project</span>
                <ExternalLink className="ml-auto h-5 w-5" />
              </Link>

              <Link
                href="https://youtu.be/29Pw41oM8VY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span>Inauguration Event 12-8-2020</span>
                <ExternalLink className="ml-auto h-5 w-5" />
              </Link>

              <Link
                href="https://youtu.be/N3zA-z54ac8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span>Tree plantation on 12-8-2020</span>
                <ExternalLink className="ml-auto h-5 w-5" />
              </Link>

              <Link
                href="https://youtu.be/jAvWSHRREKI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full py-2 text-lg font-medium text-zinc-900 hover:text-primary border-b-2 border-zinc-200 hover:border-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span>Tree plantation on 12-8-2020</span>
                <ExternalLink className="ml-auto h-5 w-5" />
              </Link>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
