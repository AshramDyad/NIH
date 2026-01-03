import Image from "next/image";

// Inline type for image data
type ImageItem = {
  src: string;
  alt: string;
};

export default function DanishImmersiveExchangeContent() {
  // Image data with inline type annotation
  const images: ImageItem[] = [
    { src: "/images/indo-danish-exchange2024/1.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2024/2.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2024/3.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2024/4.webp", alt: "Danish Immersive Exchange Programme" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Danish Immersive Exchange Programme 2024">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Danish Immersive Exchange <span className="text-primary italic">Programme 2024</span>
          </h1>
        </div>

        {/* Content Sections - EXACT text from old HTML */}
        <div className="space-y-6 mx-auto mt-8">
          {/* First Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The first rhythm of the Indo Danish exchange program between Delhi Public School, Gurgaon and Aalborg Katedralskole, Denmark was successfully culminated in April 2024. The exchange initiated by the Danish Embassy in 2022, with special focus on social inclusion and environment protection dimensions of sustainable development marked the beginning of a transformative journey for both Indian and Danish students. The immersive exchange program spanned over three years encompassing virtual engagements, reciprocal visits and research-based projects. Through online presentations and correspondence, students delved into the rich history and culture of India and Denmark, resulting in a shared understanding of humanity.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            After a visit of the Danish students to India in October 2023 last year wherein they experienced in abundance the feel of India, 19 Indian students with their teacher coordinators embarked on a series of enriching experiences in Denmark April this year. They received a warm welcome and to start with engaged in school tour, sports activities, lessons at school, presentations on Aalborg's education system and 'Selfie Safari' to know the city better. Cultural exploration continued through the stay with visits to various museums, a Danish dairy farm and Aalborg primary schools showcasing Danish art, history and education system. Students also visited a waste management centre and Aalborg University. These visits gave them insights into sustainable fuel production and sustainable development initiatives taken at different levels.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            A day at the Grenen peninsula, where the North Sea and Baltic Sea meet was thoroughly enjoyed by both Indians and Danes and strengthened their bonding further. In Aarhus, students delved deeper into Danish culture, exploring the open-air museum 'Den Gamle By' highlighting the Danish town life in the 18th Century. The Aros Aarhus Art Museum and its Rainbow Panorama Sky Walk was certainly an experience the Indian students would cherish. The Indian students also got an opportunity to visit the Danish Parliament, in Copenhagen led by the former Development Minister Mr. Christian Friis, fostering deeper understanding and connections between the political systems of the two countries.
          </p>

          {/* Fourth Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            A beautiful cultural evening marked the curtain call to the first rhythm. The Indian students presented a movie 'Denmark through my eyes' to share their experiences. A musical and Dance extravaganza showcased by Danes and Indians together, was a true celebration of the vibrant tapestry of traditions and rich cultural heritage of Denmark and India.
          </p>

          {/* Fifth Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The Indo Danish exchange program not only fostered cultural appreciation but also promoted global citizenship and collaboration, laying the foundation for future partnerships and mutual understanding between the two countries.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}  
                  className="w-full sm:h-80 object-cover scale-100 hover:scale-105 transition-transform duration-150 ease-linear"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
