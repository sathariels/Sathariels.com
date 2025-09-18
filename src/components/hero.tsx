import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Featured Artwork */}
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <ImageWithFallback
              src={imageUrl}
              alt="Featured animation artwork by Sathariels"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
        
        {/* Copyright and Navigation Dots */}
        <div className="flex items-center justify-between mt-8 px-4">
          <p className="text-xs text-gray-400">
            Copyright © All rights reserved.
          </p>
          
          {/* Navigation Dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}