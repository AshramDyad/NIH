import Image from 'next/image';
import type { GalleryImage } from './types';

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export default function ImageGallery({ images, columns = { mobile: 'grid-cols-1', tablet: 'md:grid-cols-2', desktop: 'lg:grid-cols-4' } }: ImageGalleryProps) {
  return (
    <article>
      <div className={`grid gap-6 ${columns.mobile} ${columns.tablet} ${columns.desktop}`}>
        {images.map((image, index) => (
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
  );
}
