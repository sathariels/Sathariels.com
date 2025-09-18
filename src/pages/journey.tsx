import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const journeyData = [
  {
    id: 1,
    title: "First Steps",
    description: "My very first animation attempt - a simple bouncing ball. Learning the basics of timing and spacing.",
    date: "Early 2020",
    complexity: "Beginner",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1665217101903-923e53b74b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBiZWdpbm5lciUyMGJvdW5jaW5nJTIwYmFsbHxlbnwxfHx8fDE3NTc1NjcwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    side: "right"
  },
  {
    id: 2,
    title: "Character Movement",
    description: "First attempt at character animation - a simple walk cycle. Discovering the principles of animation.",
    date: "Mid 2020",
    complexity: "Beginner",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=600",
    side: "left"
  },
  {
    id: 3,
    title: "Facial Expression",
    description: "Exploring facial animation and emotion. Learning to convey feeling through subtle movements.",
    date: "Late 2020",
    complexity: "Intermediate",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=600",
    side: "right"
  },
  {
    id: 4,
    title: "Scene Composition",
    description: "First multi-character scene with camera movement. Understanding staging and cinematography.",
    date: "Early 2021",
    complexity: "Intermediate",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=600",
    side: "left"
  },
  {
    id: 5,
    title: "Narrative Storytelling",
    description: "First short film with complete narrative arc. Combining all learned techniques into cohesive storytelling.",
    date: "Mid 2021",
    complexity: "Advanced",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1649838515193-20e0c16dff07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeSUyMGZpbG18ZW58MXx8fHwxNzU3NTY3MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    side: "right"
  },
  {
    id: 6,
    title: "Advanced Techniques",
    description: "Exploring complex animation with particle effects, lighting, and advanced rigging systems.",
    date: "Late 2021",
    complexity: "Advanced",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1707418763466-116f0309873c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBhZHZhbmNlZCUyMGVmZmVjdHN8ZW58MXx8fHwxNzU3NTY3MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    side: "left"
  },
  {
    id: 7,
    title: "Professional Work",
    description: "Current professional-level animation showcasing mastery of all animation principles and advanced storytelling.",
    date: "2022 - Present",
    complexity: "Professional",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1730641884360-0f6bb86e70e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBwcm9mZXNzaW9uYWwlMjBxdWFsaXR5fGVufDF8fHx8MTc1NzU2NzAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    side: "right"
  }
];

const complexityColors = {
  "Beginner": "bg-green-100 text-green-800",
  "Intermediate": "bg-yellow-100 text-yellow-800", 
  "Advanced": "bg-orange-100 text-orange-800",
  "Professional": "bg-purple-100 text-purple-800"
};

export function JourneyPage() {
  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="w-full px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 tracking-wider text-gray-700">
            ANIMATION JOURNEY
          </h1>
          <p className="text-gray-600 leading-relaxed">
            A visual chronicle of my growth as an animator, from first attempts to professional work. 
            Each piece represents a milestone in understanding the craft of bringing stories to life through motion.
          </p>
        </div>
      </section>

      {/* Timeline Tree */}
      <section className="w-full px-6 pb-16">
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-green-300 via-orange-300 to-purple-400 h-full z-0"></div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {journeyData.map((item, index) => (
              <div key={item.id} className="relative mb-16 last:mb-0">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-20"></div>
                
                {/* Content Container */}
                <div className={`flex items-center ${
                  item.side === 'right' ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Content Card */}
                  <div className={`w-full max-w-md ${
                    item.side === 'right' ? 'ml-8 pl-8' : 'mr-8 pr-8'
                  }`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      {/* Video Preview */}
                      <div className="relative aspect-video bg-gray-100 group cursor-pointer">
                        <ImageWithFallback
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-gray-800 border-t-transparent border-b-transparent ml-1"></div>
                          </div>
                        </div>

                        {/* Complexity Badge */}
                        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${complexityColors[item.complexity]}`}>
                          {item.complexity}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="tracking-wide text-gray-800">{item.title}</h3>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className={`absolute top-2 w-8 h-px bg-gray-300 ${
                  item.side === 'right' 
                    ? 'left-1/2 transform translate-x-2' 
                    : 'right-1/2 transform -translate-x-2'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Growth Indicators */}
          <div className="absolute right-0 top-0 hidden lg:block">
            <div className="space-y-4 text-xs text-gray-500">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-300 rounded-full mr-2"></div>
                <span>Learning Fundamentals</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></div>
                <span>Building Skills</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-300 rounded-full mr-2"></div>
                <span>Advanced Techniques</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                <span>Professional Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="w-full px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 tracking-wider text-gray-700">
            THE JOURNEY CONTINUES
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Each animation in this journey represents countless hours of learning, experimenting, and pushing 
            creative boundaries. From those first wobbly attempts to current professional work, every piece 
            has taught me something new about the art of storytelling through motion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-medium text-orange-400 mb-2">3+ Years</div>
              <div className="text-sm text-gray-600">Dedicated Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-orange-400 mb-2">50+ Hours</div>
              <div className="text-sm text-gray-600">Animation Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-medium text-orange-400 mb-2">∞</div>
              <div className="text-sm text-gray-600">Stories to Tell</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}