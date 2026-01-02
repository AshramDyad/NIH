"use client"

import ImageGallery from './ImageGallery';

const galleryImages = [
  { src: '/images/about-dps/pravah/1.jpg', alt: 'Pravah - Image 1', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/2.jpg', alt: 'Pravah - Image 2', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/3.jpg', alt: 'Pravah - Image 3', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/4.jpg', alt: 'Pravah - Image 4', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/5.jpg', alt: 'Pravah - Image 5', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/6.jpg', alt: 'Pravah - Image 6', caption: 'Pravah' },
  { src: '/images/about-dps/pravah/7.jpg', alt: 'Pravah - Image 7', caption: 'Pravah' },
];

export default function PravahContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-secondary">
            Pravah
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
            An Initiative Of Ms Dhara Jaipuria
          </p>
        </div>

        <div className="space-y-8">
          {/* Description Section */}
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
            <div className="text-lg text-zinc-600 leading-relaxed">
              <p>
                &apos;Pravah&apos; aims at skill development and empowering the youth towards economic sustainability. The centre is providing employment opportunities to the underprivileged who are being trained at Pravah .Till date more than 1000 have been trained and more than 40% have been suitably employed. Pravah is our endeavour to provide a structured, sustainable and scalable framework to the unemployed youth from marginalized families adding to the workforce of the nation which is an emerging power.
              </p>
            </div>
          </article>

          {/* Image Gallery */}
          <ImageGallery images={galleryImages} />
        </div>

      </div>
    </section>
  );
}
