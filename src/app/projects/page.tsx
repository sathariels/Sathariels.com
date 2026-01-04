import ProjectsPage from "@/components/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Sathariels",
    description: "Explore my portfolio of creative works, digital art, 3D designs, and web development projects.",
    keywords: ["projects", "portfolio", "digital art", "3D design", "web development", "creative works"],
    openGraph: {
        type: "website",
        title: "Projects | Sathariels",
        description: "Explore my portfolio of creative works, digital art, 3D designs, and web development projects.",
        siteName: "Sathariels",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects | Sathariels",
        description: "Explore my portfolio of creative works, digital art, 3D designs, and web development projects.",
    },
};

export default function ProjectsRoute() {
    return <ProjectsPage />;
}
