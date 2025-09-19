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
              I go by Sathariels, and most of what I make blends design, games, and tech into something creative. I like experimenting — whether that’s coding tools, building out small engines, or sketching concepts that later turn into something bigger. For me, it’s less about sticking to one lane and more about seeing how far I can push an idea across different mediums.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              A lot of my work lives online: dev logs, posts, and write-ups where I break down what I’m building or exploring. I enjoy making things people can actually use or learn from — articles, prototypes, little projects that spark ideas for others. Sharing the process matters just as much as the final product, because that’s where the fun and community really come in.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              At the core, I just like creating worlds and systems, whether they’re drawn, coded, or written. Each project is a chance to test something new and to see if I can make it feel alive, useful, or just cool to interact with. That mix of curiosity and experimentation is what keeps me moving from one project to the next.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">SPECIALIZATION</h3>
                <p className="text-xs text-gray-500">Software Engineering</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">EXPERIENCE</h3>
                <p className="text-xs text-gray-500">1+ years of Modeling</p>
              </div>

              <div className="text-center">
                <h3 className="text-sm tracking-wide text-gray-800 mb-2">TOOLS</h3>
                <p className="text-xs text-gray-500">Maya & Roblox Studio</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center space-x-8">
            <div className="text-center">
              <h3 className="text-sm tracking-wide text-gray-800 mb-2">CONTACT</h3>
              <p className="text-xs text-gray-500">nithilan.kumaran@gmail.com</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm tracking-wide text-gray-800 mb-2">LOCATION</h3>
              <p className="text-xs text-gray-500">Madison, Wisconsin</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
