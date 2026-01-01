import Image from 'next/image';
import type { GalleryImage } from './types';

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 1 | 2 | 3 | 4;
}

/**
 * Reusable image gallery component with responsive grid layout
 */
export default function ImageGallery({ images, columns = 4 }: ImageGalleryProps) {
  const gridCols = columns === 1 ? 'grid-cols-1' :
                    columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
                    columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={`grid gap-6 ${gridCols}`}>
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
          {image.caption && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-lg font-semibold text-white px-4 text-center">
                {image.caption}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
