import { PortfolioSection } from "../components/portfolio-section";

export function PersonalPage() {
  const personalWorks = [
    {
      id: "4",
      title: "Digital Illustration",
      category: "Personal Project", 
      imageUrl: "https://images.unsplash.com/photo-1634035302742-91206968e455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc1NzQ0ODExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "5",
      title: "Concept Art",
      category: "Exploration", 
      imageUrl: "https://images.unsplash.com/photo-1729710877400-70809cd6d214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0JTIwYXJ0JTIwc2tldGNofGVufDF8fHx8MTc1NzU2NjIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "6",
      title: "Creative Artwork",
      category: "Mixed Media",
      imageUrl: "https://images.unsplash.com/photo-1648555412975-cfe0576b2f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzU3NTY2MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "7",
      title: "Abstract Study",
      category: "Experimental",
      imageUrl: "https://images.unsplash.com/photo-1634035302742-91206968e455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc1NzQ0ODExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "8",
      title: "Portrait Series",
      category: "Character Study",
      imageUrl: "https://images.unsplash.com/photo-1729710877400-70809cd6d214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0JTIwYXJ0JTIwc2tldGNofGVufDF8fHx8MTc1NzU2NjIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "9",
      title: "Environment Design",
      category: "World Building",
      imageUrl: "https://images.unsplash.com/photo-1648555412975-cfe0576b2f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzU3NTY2MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <main>
      <PortfolioSection 
        title="PERSONAL WORK" 
        items={personalWorks}
        id="personal"
      />
    </main>
  );
}