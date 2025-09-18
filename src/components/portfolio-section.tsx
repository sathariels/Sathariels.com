import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioSectionProps {
  title: string;
  items: PortfolioItem[];
  id: string;
  linkPath?: string; // Optional path for linking to detail pages
}

export function PortfolioSection({ title, items, id, linkPath }: PortfolioSectionProps) {
  return (
    <section id={id} className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 tracking-wider text-gray-700">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const content = (
              <>
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm tracking-wide text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                </div>
              </>
            );

            if (linkPath) {
              return (
                <Link key={item.id} to={`${linkPath}/${item.id}`} className="group cursor-pointer">
                  {content}
                </Link>
              );
            }

            return (
              <div key={item.id} className="group cursor-pointer">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}