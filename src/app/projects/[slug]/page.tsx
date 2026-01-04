import { projectDetails } from "@/data/projectDetails";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(projectDetails).map((slug) => ({
        slug: slug,
    }));
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const project = projectDetails[slug];

    if (!project) {
        notFound();
    }

    return <ProjectDetailPage project={project} />;
}
