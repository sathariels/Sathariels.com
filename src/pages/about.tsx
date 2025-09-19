export function AboutPage() {
  return (
    <main>
      <section className="w-full px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-8 tracking-wider text-gray-700">
            ABOUT
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Sathariels is a creative artist specializing in character design and animation. 
              With a passion for bringing characters to life through visual storytelling, 
              each piece is crafted with attention to detail and creative vision.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              From concept sketches to fully animated sequences, the work explores 
              the intersection of traditional artistry and modern digital techniques, 
              creating memorable characters that resonate with audiences.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              The creative process involves deep research into character psychology, 
              environmental storytelling, and the subtle nuances that make animated 
              characters feel authentic and relatable. Each project is an opportunity 
              to push the boundaries of visual narrative and explore new techniques 
              in digital artistry.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">SPECIALIZATION</h3>
                <p className="text-xs text-gray-500">Character Design & Animation</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">EXPERIENCE</h3>
                <p className="text-xs text-gray-500">5+ Years in Digital Art</p>
              </div>

              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">TOOLS</h3>
                <p className="text-xs text-gray-500">Digital & Traditional Media</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center space-x-8">
            <div className="text-center">
              <h3 className="text-sm tracking-wide text-gray-800 mb-2">CONTACT</h3>
              <p className="text-xs text-gray-500">hello@sathariels.com</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm tracking-wide text-gray-800 mb-2">LOCATION</h3>
              <p className="text-xs text-gray-500">Creative Studio</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}