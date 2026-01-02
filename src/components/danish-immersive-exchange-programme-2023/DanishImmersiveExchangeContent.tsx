import Image from "next/image";

// Inline type for image data
type ImageItem = {
  src: string;
  alt: string;
};

export default function DanishImmersiveExchangeContent() {
  // Image data with inline type annotation
  const images: ImageItem[] = [
    { src: "/images/indo-danish-exchange2023/1.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/2.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/3.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/4.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/5.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/6.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/7.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/8.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/9.webp", alt: "Danish Immersive Exchange Programme" },
    { src: "/images/indo-danish-exchange2023/10.webp", alt: "Danish Immersive Exchange Programme" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Danish Immersive Exchange Programme 2023">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Danish Immersive Exchange <span className="text-primary italic">Programme</span>
          </h1>
        </div>

        {/* Content Sections - EXACT text from old HTML */}
        <div className="space-y-6 mx-auto mt-8">
          {/* First Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The students of Delhi Public School, Sector 45, Gurgaon welcomed their Danish partners from Aalborg Katedralskoleon on 25th October'23. Eighteen students along with their accompanying teacher coordinators, Mr. Torben Ole Hjorth and Mr. Rasmus Damkilde participated in the First Rhythm of the Indo-Danish Student Cultural Exchange Programme which was in alignment with SDG goals.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The Danish students were given a warm, traditional welcome at the school where they met the Director Principal, Ms. Aditi Misra. They also interacted with the host students and the students of the Shiksha Kendra, an afternoon school for under privileged children. SDG 10 aims to reduce income inequality and SDG 4 aims to ensure quality education for all.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            During their stay, the Danish students attended classes, yoga and meditation sessions (SDG 3- Good Health and Well Being) and played friendly sports matches. They attended sessions on clay modelling and screen printing- traditional Indian art forms. The students of both schools discussed measures taken in the two partner countries to control carbon footprint (SDG 13- climate change). The students attended a musical extravaganza put up by Class VII showcasing dances from different parts of India. Towards the end of the visit, the Danish students presented 'India through my lens' where they shared their experiences.
          </p>

          {/* Fourth Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            They visited DPS International School and interacted with students who spoke to them about how SDGs were being promoted in their school. The host families invited them home for a traditional Indian dinner. The students of both schools visited the cultural heritage cities of Jaipur, Agra and Delhi (SDG 11.4- Safeguarding world heritage).During their stay, the Danish students were invited for lunch by the current Danish Ambassador to India, H.E. Freddy Svane.
          </p>

          {/* Fifth Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The finale of the one week Indo-Danish Cultural Exchange '23 was the Farewell Ceremony hosted by DPS Gurgaon on 31st Oct '23. Director Principal, Ms Aditi Misra extended a warm welcome to the participating school. In her address, she emphasised on celebrating and learning from the differences between the two countries. She thanked the parents for helping the school hold the Exchange and applauded the students for being exemplary. The Danish and Indian National Anthems were sung with patriotic fervor, symbolic of the friendly ties between the two countries. The highlight of the evening was the music and dance performances of the students to foot-tapping popular Indian songs. The Exchange promised to be the beginning of a long lasting friendship between the two schools (SDG 17- Partnership for goals).
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
                  className="w-full h-80 object-cover scale-100 hover:scale-105 transition-transform duration-150 ease-linear"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
