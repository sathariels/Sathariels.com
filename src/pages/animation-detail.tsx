import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const animationData: Record<string, {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
  stills: string[];
  awards?: string[];
}> = {
  "1": {
    id: "1",
    title: "Character Animation",
    category: "2D Animation",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "A dynamic character animation showcasing fluid movement and expressive storytelling. This piece explores the nuances of character personality through motion, featuring hand-drawn animation techniques combined with digital compositing. The animation demonstrates advanced principles of timing, spacing, and anticipation to create believable character interactions.",
    stills: [
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400"
    ],
    awards: ["Best Animation 2023", "Audience Choice Award", "Technical Excellence"]
  },
  "2": {
    id: "2",
    title: "Storyboard Sequence",
    category: "Visual Development",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "A comprehensive storyboard sequence that demonstrates visual narrative flow and cinematographic storytelling. This project showcases the pre-production process of animation, featuring detailed shot compositions, camera movements, and pacing considerations that form the foundation of compelling animated sequences.",
    stills: [
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400"
    ]
  },
  "3": {
    id: "3", 
    title: "Character Design Sheet",
    category: "Character Design",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "An in-depth character design exploration featuring turnarounds, expressions, and pose studies. This comprehensive design sheet demonstrates the development process from initial sketches to final character models, showcasing the attention to detail required for consistent character animation across multiple scenes and sequences.",
    stills: [
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400"
    ]
  },
  "4": {
    id: "4",
    title: "Motion Graphics",
    category: "Digital Animation", 
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "A sophisticated motion graphics piece combining typography, geometric elements, and smooth transitions. This project demonstrates mastery of digital animation tools and techniques, creating engaging visual content that effectively communicates complex ideas through motion design and visual storytelling.",
    stills: [
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400"
    ]
  },
  "5": {
    id: "5",
    title: "Short Film Project", 
    category: "Narrative Animation",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "A complete short film showcasing narrative storytelling through animation. This project demonstrates end-to-end production skills, from concept development and storyboarding to final animation and post-production. The film explores themes of identity and belonging through carefully crafted visual metaphors and character development.",
    stills: [
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400"
    ],
    awards: ["Film Festival Selection", "Best Short Animation", "Director's Choice"]
  },
  "6": {
    id: "6",
    title: "Character Turnaround", 
    category: "3D Modeling",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", 
    description: "A detailed 3D character turnaround showcasing modeling, texturing, and rigging techniques. This project demonstrates proficiency in 3D character creation workflows, from sculpting and retopology to UV mapping and material creation, resulting in a production-ready character asset suitable for animation.",
    stills: [
      "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=400"
    ]
  }
};

export function AnimationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const animation = id ? animationData[id] : null;

  if (!animation) {
    return (
      <main className="w-full px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 tracking-wider text-gray-700">Animation Not Found</h1>
          <Link to="/animation" className="text-orange-400 hover:text-orange-500 transition-colors">
            ← Back to Animation
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full">
      {/* Back Navigation */}
      <div className="w-full px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/animation" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Animation
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <section className="w-full px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full aspect-video"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23374151' viewBox='0 0 24 24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E"
            >
              <source src={animation.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Award Laurels Overlay */}
            {animation.awards && (
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                {animation.awards.slice(0, 2).map((award, index) => (
                  <div 
                    key={index}
                    className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
                  >
                    {award}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="w-full px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-2 tracking-wider text-gray-700">
            {animation.title}
          </h1>
          <p className="text-sm text-gray-500 tracking-wide">{animation.category}</p>
        </div>
      </section>

      {/* Stills Gallery */}
      <section className="w-full px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {animation.stills.map((still, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={still} 
                  alt={`${animation.title} still ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="mb-6 tracking-wider text-gray-700 text-center">
              {animation.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-center">
              {animation.description}
            </p>
            
            {animation.awards && animation.awards.length > 2 && (
              <div className="mt-8 text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-4">RECOGNITION</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {animation.awards.slice(2).map((award, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}