import { PortfolioSection } from "../components/portfolio-section";

export function AnimationPage() {
  const animationWorks = [
    {
      id: "1",
      title: "Character Animation",
      category: "2D Animation",
      imageUrl: "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "2", 
      title: "Storyboard Sequence",
      category: "Visual Development",
      imageUrl: "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "3",
      title: "Character Design Sheet", 
      category: "Character Design",
      imageUrl: "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "4",
      title: "Motion Graphics",
      category: "Digital Animation",
      imageUrl: "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBjaGFyYWN0ZXIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3NTY2MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "5",
      title: "Short Film Project",
      category: "Narrative Animation",
      imageUrl: "https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkfGVufDF8fHx8MTc1NzU2NjIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "6",
      title: "Character Turnaround",
      category: "3D Modeling",
      imageUrl: "https://images.unsplash.com/photo-1629766234099-1f7d8c9da723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwZGVzaWdufGVufDF8fHx8MTc1NzU2NjIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <main>
      <PortfolioSection 
        title="ANIMATION" 
        items={animationWorks}
        id="animation"
        linkPath="/animation"
      />
    </main>
  );
}