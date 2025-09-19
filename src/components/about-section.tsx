export function AboutSection() {
  return (
    <section id="about" className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 tracking-wider text-gray-700">
          ABOUT
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            Sathariels is a creative artist specializing in character design and animation. 
            With a passion for bringing characters to life through visual storytelling, 
            each piece is crafted with attention to detail and creative vision.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            From concept sketches to fully animated sequences, the work explores 
            the intersection of traditional artistry and modern digital techniques, 
            creating memorable characters that resonate with audiences.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8">
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
  );
}