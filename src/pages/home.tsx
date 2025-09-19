import { Hero } from "../components/hero";
import exampleImage from 'figma:asset/f2a5316497a1274e66949af035dee5c65b392421.png';

export function HomePage() {
  return (
    <main>
      <Hero imageUrl={exampleImage} />
    </main>
  );
}